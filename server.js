const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;
const app = express();

// Serve static files like index.html
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Trips', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('MongoDB connection successful');
});

// Define Schema and Model
const Schema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    message: String
});

const TripData = mongoose.model('TripData', Schema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post', async (req, res) => {
    const { name, email, mobile, message } = req.body;
    const newTripData = new TripData({
        name,
        email,
        mobile,
        message
    });

    try {
        await newTripData.save();
        console.log('Form submission successful:', newTripData);
        res.send('Form submission successful , Wait for the response from TrippeBirds');
        
    } catch (err) {
        console.error('Error saving form data:', err);
        res.status(500).send('Error submitting form');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
