const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  ID: {
    type: String,
    required: true},
  Name: {
    type: String,
    required: true},
  DateOfBirth: {
    type: Date,
    required: true},
  Year: {
    type: Number,
    required: false},
  ClassroomID: {
    type: String,
    required: false},
  Username: {
    type: String,
    required: true},
  Password: {
    type: String,
    required: true},
  Scores: [[Number]]
},
{collection:"Student"});

module.exports = Student = mongoose.model('Student', studentSchema);
