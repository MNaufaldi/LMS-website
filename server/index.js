const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
const students = require('./routes/students')

const initializePassport = require('./services/passport');
const Student = require('./models/Student');
initializePassport(
	passport,
	username => Student.findOne({Username: "User1"}, function(err,obj) { return obj; })
)

app.use(express.urlencoded({ extended: false }));
mongoose.connect(keys.mongoURI,{
	useNewUrlParser: true,
	useUnifiedTopology: true}).then(() => console.log('Database Connected'));


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', checkAuth, (req, res) => {
	res.send("/")
})
  
app.get('/login', checkNotAuth, (req, res) => {
	res.send("/login get")
})

app.post('/login', checkNotAuth, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login'
}))

app.get('/logout', checkAuth, (req, res) => {
    req.logout();
    res.redirect('/');
  });

function checkAuth(req, res, next){
	if(req.isAuthenticated()) {
		return next()
	}
	console.log('y')
}

function checkNotAuth(req, res, next){
	if(req.isAuthenticated()) {
		console.log('n')
	}
	next()
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));