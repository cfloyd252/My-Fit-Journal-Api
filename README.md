# My Fit Journal Client
### Client side repository for the My Fit Journal Application

Client Repository: https://github.com/cfloyd252/my-fit-journal-client

Live App: https://my-fit-journal.now.sh/

#### Demo Login   
Username: fit.joe     
Password: pass

## Summary
My Fit Journal is a web application that allows the the user to track their fitness progress by logging entries of different types of 
fitness data. Currently there are logs for water consumtion, user's weight, and their exercises. In future updates, the user will also 
be able to log meals and create a list of custom exercise names.

## Endpoints

#### PATH /api/users

* **Method:**

  `GET` | `POST`
  
* **Success Response:**
  `GET`

  * **Code:** 200 <br />
    **Content:** `{ id : 1, name:Joe, username:fit.joe }`  
    
* **Success Response:**
  `POST`

  * **Code:** 201 <br />
    **Content:** `{ id : 2, name:Jane, username:fit.jane }`     

#### PATH /api/users

* **Method:**

  `GET` | `POST`

Users Endpoint ('/users'): Contains methods for getting and posting users.  
Entries Endpoint ('/entries'): Contains methods for getting, posting, and deleting log entries.   

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Tech Stack

React.js  
Context     
Node.js  
Express  
PostgreSQL  
Mocha/Chai  
Jest  
Heroku  
Vercel 
