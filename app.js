const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// db config
require('./config/db');

const app = express();

const vote = require('./routes/vote');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//enable CORS
app.use(cors());


app.use('/vote', vote);
const port = 3000;

//start server
app.listen(port, () => console.log(`Server started on port ${port}`));
