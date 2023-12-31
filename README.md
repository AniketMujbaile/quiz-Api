﻿# quiz-Api
> RESTful API for a quiz application that allows users to create and participate in timed quizzes. 

## Features

- User Authentication with JWT 
  - Login  
  - Register
  - Forgot Password
- Quiz Routes
  -  POST /quizzes - Create a new quiz
  -  GET /quizzes/active - Get the active quiz
  -  GET /quizzes/:id/result - Get quiz result by ID
  -  GET /quizzes/all - Get all quizzes

### 🔗 Hosted link

 Hosted Link: [Quiz-API](https://quiz-api-2ee5.onrender.com)

Testing documentation with postman: [Quiz API](https://documenter.getpostman.com/view/24632237/2s9YkrbLCB)

 

## Requirement

- NodeJS
- Express.js 
- MongoDB

## Configuration File

 config/.env then modify to your environment variables, mongodb uri, set your JWT_SECRET Key

```ENV

PORT=3001

MONGO_URI=YOUR_URL

JWT_SECRET=YOUR_SECRET
 
```

## Installation

 Install all npm dependecies

```console
npm install
```

## Start web server

```console
npm start
```
