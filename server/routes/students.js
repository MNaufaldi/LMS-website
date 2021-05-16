const express = require('express');
const router = express.Router();

// Model
const Student = require('../models/Student');

// Route
router.get('/', (req, res) => {
    Student.find()
    .then(students => res.json(students))
});

router.get('/:id', (req, res) => {
    Student.findOne({ID: req.params.id})
    .then(students => res.json(students))
    .catch(err => res.status(404).json({sucess: false}))
});

module.exports = router;