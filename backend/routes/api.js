const express = require('express');
const router = express.Router();

const experience = require('../models/experience');

router.get('/experiences', (req, res) => {
    experience.find()
        .then(experiences => res.json(experiences))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/experiences/add', (req, res) => {
    const newExperience = new experience(req.body);
    newExperience.save()
        .then(() => res.json('Experience added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

