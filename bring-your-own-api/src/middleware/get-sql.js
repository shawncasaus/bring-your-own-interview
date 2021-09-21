//return sql query  helpers for dashboards

//SQL Query for get dashboards API
const GetDashboards = async (req, res, next) => {
    let sql = 'SELECT * FROM dashboards';
    res.locals.sql = sql;
    next();
}

//SQL Query for get a single dashboard api
const GetDashboard = async (req, res, next) => {
    const enhancedTitle = req.params.title.replace(/\-/g, ' ');
    let sql = `SELECT * FROM dashboards WHERE title LIKE "${enhancedTitle}"`;
    res.locals.sql = sql;
    next();
}

//SQL Query for adding new dashboards
const AddNewDashboards = async (req, res, next) => {
    let sql = 'INSERT INTO dashboards SET ?'
    const enhancedTitle = req.params.title.replace(/\-/g, ' ');

    let dashboard = {
        id: null,
        title: enhancedTitle,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    res.locals.sql = sql;
    res.locals.dashboard = dashboard;
    next();
}

//SQL Query for adding a single new dashboard
const AddNewDashboard = async (req, res, next) => {
    let sql = 'INSERT INTO dashboards SET ?'
    const enhancedTitle = req.params.title.replace(/\-/g, ' ');
    let dashboard = {
        id: null,
        title: enhancedTitle,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
    res.locals.sql = sql;
    res.locals.dashboard = dashboard;
    next();
}



module.exports = {GetDashboards, AddNewDashboards, AddNewDashboard, GetDashboard};