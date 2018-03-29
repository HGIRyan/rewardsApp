// // --IMPORTS--
// require('dotenv').config();
// const express = require('express')
//     , bodyParser = require('body-parser')
//     // , massive = require('massive')
//     // , user_controller = require('./controllers/user_controller');


// // --SETUP APP--
// const app = express();
// // app.use( express.static( `${__dirname}/../build` ) );

// // app.use(bodyParser.json());

// // --MASSIVE--
// // massive(process.env.CONNECTION_STRING).then(db => {
// //     app.set('db', db);
// // })


// // --ENDPOINTS--

// // --SETUP APP TO LISTEN TO PORT--
// const PORT = 3050; // Development Port
// app.listen(PORT, () => console.log(`Listening on ${PORT}`))

import express from 'express';

// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello World!')
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});