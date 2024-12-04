// experience model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    person: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;