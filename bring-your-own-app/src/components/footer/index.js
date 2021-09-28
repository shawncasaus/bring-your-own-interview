import React from 'react';
import {Navbar} from 'react-bootstrap';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/github.png';

const Footer = () => {

    return (
        <div className="footer">
            <Navbar sticky="bottom">
                <div style={{display: 'flex', textAlign: 'center', margin: 'auto', flexDirection: 'column'}}>
                    <h3 style={{marginTop: '15px'}}>Created by Shawn Renee Casaus: 2021</h3>
                    <div style={{marginTop: '15px'}}>
                        <a href='https://www.linkedin.com/in/shawn-renee-c-20b263b8/' target="_blank" rel="noreferrer" style={{padding: '1rem'}}><img src={LinkedIn} alt="LinkedIn Logo" width={35} height={35} /></a>
                        <a href='https://github.com/shawncasaus' target="_blank" rel="noreferrer" style={{padding: '1rem'}}><img src={GitHub} alt="GitHub Logo" width={35} height={35} /></a>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Footer;