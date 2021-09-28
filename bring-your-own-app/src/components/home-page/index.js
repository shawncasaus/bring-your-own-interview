import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HomePageContextProvider from './context';
import DashboardsList from './dashboards-list';

const HomePage = () => {
    const [definitions, setDefinitions] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

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

    return (
        <HomePageContextProvider 
            definitions={definitions}
            setDefinitions={setDefinitions} 
            error={error}
            setError={setError}
            loading={loading}
            setLoading={setLoading}
        >
            <div className="home-page">    
                <DashboardsList />   
            </div>
        </HomePageContextProvider>
    )
}

export default HomePage;