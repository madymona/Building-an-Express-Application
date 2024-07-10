const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Custom middleware to log request data
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});