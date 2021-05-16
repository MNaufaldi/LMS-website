const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const Student = mongoose.model('Student');


function initialize(passport, getUserById) {
  const authenticateUser = async (id, password, done) => {
    const user = getUserById(id)
    if (user == null){
      return done(null, false);
    }

    try{
      if (await user.password == password){
        return done(null, user)
      } else {
        return done(null, false)
      } 
    } catch(e){
      return done(e)
    }
  }


  passport.use(new LocalStrategy({ usernameField: 'username'}, authenticateUser))

  passport.serializeUser((student, done) => {
    done(null, student.id);
  });

  passport.deserializeUser((id, done) => {
    Student.findById(id).then(student => {
      done(null, student);
    })
  })
}
module.exports = initialize

