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
    **Content:** `{ id : 1, name:Joe, user_name:fit.joe }`  
    
* **Success Response:**
  `POST`

  * **Code:** 201 <br />
    **Content:** `{ id : 2, name:Jane, username:fit.jane }`     
    
* **Error Response:**
  `POST`

  * **Code:** 400 <br />
    **Content:** <br />
    `{ error: 'Username already taken' }`, <br />
    `{ error: 'Name cannot exceed 15 characters' }`, <br />
    `{ error: 'Username cannot exceed 15 characters' }`, <br />
    `{ error: 'Password must be longer than 8 characters' }`, <br />
    `{ error: 'Password must be less than 72 characters' }`, <br />
    `{ error: 'Password must not start or end with empty spaces' }`, <br />
    `{ error: 'Password must contain one upper case, lower case, number and special character' }`, <br />

#### PATH /api/entries

* **Method:**

  `GET` | `POST`
  
* **Success Response:**
  `GET`

  * **Code:** 200 <br />
    **Content:** <br />
    `{ weight: [], water: [], exercise:[] }`    
    
* **Success Response:**
  `POST`

  * **Code:** 200 <br />
    **Content:** <br />
    `{ log_id: 13, user_id: 1, log_type: "water", quantity: 5, unit_of_measurement: ml, start_time: "2020-06-05T09:18:00.000Z" }`, <br />
    `{log_id: 18, log_type:"weight", quanity:"188", start_time: "2020-05-29T09:37:00.000Z", unit_of_measurement: "lbs", user_id: 1}`, <br />
    `{log_id: 20, log_type:"exercise", exercise_name:"Walk", start_time: "2020-05-31T17:04:00.000Z", end_time: "2020-05-31T17:04:00.000Z", calories: -100, user_id: 1}`, <br />

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
