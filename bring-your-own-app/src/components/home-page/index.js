import React from 'react';
import HomePageContext from './home-page-context';
import DashboardsList from './dashboards-list';

const HomePage = () => {

    return (
        <HomePageContext>
            <div className="home-page">    
                <DashboardsList />       
            </div>
        </HomePageContext>
    )
}

export default HomePage;