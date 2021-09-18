const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const cors = require('cors');
const GetDashboards = require('./middleware/get-dashboards');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test123',
    database: 'definitions',
    port: 3305
});

//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected');
});

const PORT = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//gets object of word count from passed through url
app.get('/api/get-dashboards/', GetDashboards, (req, res, next) => {
    res.send(res.locals.result);
});


app.listen(PORT, () => console.log('Server running on port ', PORT));