//return basic middleware
const GetDashboards = async (req, res, next) => {
    res.locals.result = 'Get Dashboards Api Running';
    next();
}

module.exports = GetDashboards;