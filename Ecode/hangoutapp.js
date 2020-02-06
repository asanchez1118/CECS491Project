const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


const dotenv = require("dotenv").config();

mongoose
   .connect(process.env.MONGO_URI,{
      useNewUrlParser: true
   })
   .then(() => console.log('DB Connection'));

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
//const userRoutes = require('./routes/user');

app.get("/api", (req, res) => {
   fs.readFile("docs/apiDocs.json", (err, data) => {
      if (err) {
         res.status(400).json({
            error: err
         });
      }
      const docs = JSON.parse(data);
      res.json(docs);
   });
});

app.use(bodyParser.json());
app.use(expressValidator());
app.use("/api", postRoutes);
app.use("/api", authRoutes);
//app.use("/api", userRoutes);
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});

const port = process.env.PORT || 80;
app.listen(port, () => {console.log(`Node.js API listening on port: ${port}`);
});
