const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to log request data
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully');
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  res.download(`public/images/${filename}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
