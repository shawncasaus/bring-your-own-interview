const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const cors = require('cors');
const {GetDashboards, AddNewDashboard, GetDashboard, AddNewDashboards} = require('./middleware/get-sql');

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

//gets dashboards from mysql db
app.get('/api/get-dashboards', GetDashboards, (req, res, next) => {
    let query = db.query(res.locals.sql, (err, results) => {
        if(err) {
            res.status(500);
            res.send(err);
        }
        res.status(200);
        res.send(results);
    }); 
});

//gets all dashboards by title from db
app.get('/api/get-dashboard/:title', GetDashboard, (req, res, next) => {
    let query = db.query(res.locals.sql, (err, results) => {
        if(err) {
            res.status(500);
            res.send(err);
        }
        res.status(200);
        res.send(results);
    }); 
});

//adds multiple dashboards to fill db
app.post('/api/add-new-dashboards/:num/:title', AddNewDashboards, (req, res, next) => {
    for (var i = 0; i < req.params.num; i++) {
        let query = db.query(res.locals.sql, res.locals.dashboard, (err, results) => {
            if(err) {
                res.status(500);
                res.send('error, failed to add ref to db.');
                throw error;
            }
        }); 
    }
    res.status(200);
    res.send('success');
});

//adds a single dashboard to db
app.post('/api/add-new-dashboard/:title', AddNewDashboard, (req, res, next) => {
    let query = db.query(res.locals.sql, res.locals.dashboard, (err, results) => {
        if(err) {
            res.status(500);
            res.send(err);
        }
        res.status(200);
        res.send('success');
    }); 
});




app.listen(PORT, () => console.log('Server running on port ', PORT));