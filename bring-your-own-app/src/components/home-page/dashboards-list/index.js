import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import DashboardsTable from './dashboards-table';

const DashboardsList = () => {
    const [definitions, setDefinitions] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    //calls backend to get past used urls
    useEffect(() => {    
        const fetchUrl = 'http://localhost:5000/api/dashboards'; //used for backend call

        //preset axios options
        const options = {
            method: 'GET',
            mode: 'no-cors'
        };

        axios(fetchUrl, options).then(response => {
                setDefinitions(response.data);
            }).catch (err => {
                console.error('Error: ', err);
                setError(true);
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    //handle loading and errors
    if (loading) return 'loading...';
    else if (error) return 'oops... something went wrong';

    return (
        <div className="dashboards-list">
            <h1>Dashboards</h1>
            <DashboardsTable definitions={definitions} />
        </div>
    )
}

export default DashboardsList;