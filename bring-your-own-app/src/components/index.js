import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home-page/index';
import NavBar from './nav-bar/index';

const Components = () => {
    return (
        <div className="page-content" >
            <Router>
                <NavBar />
                <Redirect push from="/" to="/home" />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                    </Switch>
            </Router>
        </div>
    );
}

export default Components;