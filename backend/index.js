const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}
).catch(err => console.log(err));



const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());


app.use(express.json());

// routes
app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    });


