const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));


// Set up session middleware
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: true
}));

// Set up Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Define the quiz questions and answers
const questions = [
  { sequence: '3, 1, 4, 1, 5', answer: '9' },
  { sequence: '1, 1, 2, 3, 5', answer: '8' },
  { sequence: '2, 3, 5, 7, 11', answer: '13' },
  { sequence: '1, 2, 4, 8, 16', answer: '32' }
];

// Middleware to initialize session data if not present
app.use((req, res, next) => {
  if (!req.session.score) {
    req.session.score = 0;
    req.session.currentQuestion = 0;
  }
  next();
});

// Display the quiz question
app.get('/', (req, res) => {
  const currentQuestion = req.session.currentQuestion;
  const question = questions[currentQuestion];
  const score = req.session.score;

  res.render('quiz', { question, score, questions });
});

// Process the user's answer
app.post('/check', (req, res) => {
  const currentQuestion = req.session.currentQuestion;
  const question = questions[currentQuestion];
  const userAnswer = req.body.quizNum;

  if (userAnswer === question.answer) {
    req.session.score++;
  }

  req.session.currentQuestion++;
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
