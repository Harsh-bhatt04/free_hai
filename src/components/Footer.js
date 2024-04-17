import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { account } from '../appwriteConfig';


function Footer() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        // Initialize Appwrite
        // console.log(isLoggedIn,isAuthChecked)
        // Check if user is logged in
        account.get().then(() => {
            setIsLoggedIn(true);
        }).catch(() => {
            setIsLoggedIn(false);
        })
        .finally(() => {
            setIsAuthChecked(true); // Mark authentication check as complete
        });
    }, [isLoggedIn]);

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }
  return (
    <div>
        <div className="info-section">
        <div className="container flex info-section-container">
            <h2>Start Learning Today</h2>
            <p>Learn what you want NOWWW...</p>
            <Link to={isLoggedIn?"/courses":"/Login"} className="primary-button">Get Started</Link>
        </div>
    </div>
    <footer>
        <div className="footer-container" id="Home-jump">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/harsh-bhatt-617913240" target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Harsh-bhatt04" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a>
        </div>
        </div>
        <div className="footernav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">contact us</Link></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>CopyRight &copy;2023 Designed By: <span>HARSH BHATT</span> </p>
        </div>
    </footer>


    </div>
  )
}

export default Footer