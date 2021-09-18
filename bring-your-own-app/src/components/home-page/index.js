import React from 'react';
import HomePageContext from './home-page-context';

const HomePage = () => {

    return (
        <HomePageContext>
            <div className="home-page">    
                <h1>Welcome to Shawn's Boiler Plate React APP!</h1>        
            </div>
        </HomePageContext>
    )
}

export default HomePage;