// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://sandeepkadam1798sk:7JR5jpiit3Z94wli@dashbord.stgy8.mongodb.net/dashbord', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// // Schema
// const DataSchema = new mongoose.Schema({
//     end_year: String,
//     intensity: Number,
//     sector: String,
//     topic: String,
//     insight: String,
//     url: String,
//     region: String,
//     start_year: String,
//     impact: String,
//     added: String,
//     published: String,
//     country: String,
//     relevance: Number,
//     pestle: String,
//     source: String,
//     title: String,
//     likelihood: Number
// });

// const Data = mongoose.model('Data', DataSchema);

// // Routes
// app.get('/api/data', async (req, res) => {
//     try {
//         const data = await Data.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });


// const jsonData = require('./jsondata.json');
// Data.insertMany(jsonData, (err, docs) => {
//     if (err) {
//         console.error('Error inserting data: ', err);
//     } else {
//         console.log('Data inserted successfully');
//     }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://sandeepkadam1798sk:7JR5jpiit3Z94wli@dashbord.stgy8.mongodb.net/dashbord')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Schema
const DataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

const Data = mongoose.model('Data', DataSchema);

// Routes
app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Import JSON data to MongoDB (use async/await)
const importData = async () => {
    try {
        const jsonData = require('./jsondata.json');
        await Data.insertMany(jsonData);
        console.log('Data inserted successfully');
    } catch (err) {
        console.error('Error inserting data:', err);
    }
};


// importData();



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

