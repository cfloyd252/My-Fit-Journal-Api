'use strict';

const express = require('express')
const UsersService = require('./users-service')
const { requireAuth } = require('../../middleware/jwt-auth');
const path = require('path')
const xss = require('xss')

const usersRouter = express.Router()
const jsonBodyParser = express.json()

const serializeUser = user => ({
  id: user.id,
  name: xss(user.name),
  user_name: xss(user.user_name),
})

  usersRouter
  .get('/', requireAuth, async (req, res, next) => {
    try {
      const user = await UsersService.getById(
        req.app.get('db'),
        req.user.id
      )
      return res
          .status(200)
          .json(serializeUser(user))
    } catch(error){
      next(error)
    }
  })
  .post('/', jsonBodyParser, async (req, res, next) => {
    const { password, username, name } = req.body
    let usernames = await UsersService.getAllUsersUsernames(req.app.get('db'))
    usernames.forEach(user_name => {
      if (user_name === username) {
        return res.status(400).send({error: {message: 'Username already taken'}})
      }
    })
    if(name.length > 15) {
      return res.status(400).json({
        error: 'Name cannot exceed 15 characters'
      })
    }
    if(username.length > 15) {
      return res.status(400).json({
        error: 'User Name cannot exceed 15 characters'
      })
    }
    for (const field of ['name', 'username', 'password'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })

    try {
      const passwordError = UsersService.validatePassword(password)

      if (passwordError)
        return res.status(400).json({ error: passwordError })

      const hasUserWithUserName = await UsersService.hasUserWithUserName(
        req.app.get('db'),
        username
      )

      if (hasUserWithUserName)
        return res.status(400).json({ error: `Username already taken` })

      const hashedPassword = await  UsersService.hashPassword(password)

      const newUser = {
        user_name: username,
        password: hashedPassword,
        name,
      }

      const user = await UsersService.insertUser(
        req.app.get('db'),
        newUser
      )

      res
        .status(201)
        .location(path.posix.join(req.originalUrl, `/${user.id}`))
        .json(serializeUser(user))
    } catch(error) {
      next(error)
    }
  })

module.exports = usersRouter;