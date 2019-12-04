const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


const dotenv = require("dotenv").config();

mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true}
    ).then(() => console.log('DB Connection'));
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});
// mongoose.connect(process.env.MONGO_URI,
//     {useNewUrlParser: true}
//     ).then(() => console.log('DB Connection'));
// mongoose.connection.on('error', err => {
//     console.log(`DB connection error: ${err.message}`);
// });

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);

const port = process.env.PORT || 1000;
app.listen(port, () => {console.log(`API listening on port: ${port}`);
});
