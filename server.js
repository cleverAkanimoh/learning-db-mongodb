require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5056;

// db

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('you have successfully connected to mongodb database')).catch((err) => console.log('failed to connect to database because ' + err))

// end of db

app.listen(PORT, () => console.log(`\nserver is running on localhost:${PORT}`)
)