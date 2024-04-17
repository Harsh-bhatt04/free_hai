// import React, { Component } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import logo from './img/logo.png'
import { account } from '../appwriteConfig';
// import { Link, Navigate } from 'react-router-dom'
// import free from './img/free.jpg'
import { useState, useEffect } from 'react'
// import { useAppwrite } from 'use-appwrite';
// import { Redirect } from 'react-router-dom';

function Navbar(props) {
    // const onclickhandler = () =>{
    //     {props.toggleTheme};

    // // 
    const navigate = useNavigate()
    // const logoutClick = ()=>{
    //     navigate('/login')
    // }
    // const {isAuthenticated } = useAppwrite();
    // if (!isAuthenticated) {
    //     // Redirect to the login page if the user is not logged in
    //     return <Redirect to="/login" />;
    //   }

    //   const auth = () => {
    //     // Check if the user is authenticated when the component mounts
    //     if (isAuthenticated) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   };
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        // Initialize Appwrite
        
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

    const handleLogout = () => {
        // Initialize Appwrite
    
        // Logout user
        account.deleteSession('current').then(() => {
            setIsLoggedIn(false);
            navigate('/')
        }).catch((error) => {
            console.error('Error logging out:', error);
        });
    };

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <nav>
                <div className="container main-nav flex ">
                    <a href="/" className="company-logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={`nav-links ${(props.menu === ' ' ? ' ' : 'active')}`}>
                        <ul className="flex">
                            <li><Link to="/" className="hover-link">Home</Link></li>
                            <li><Link to="/courses" className="hover-link">Courses</Link></li>
                            <li><Link to="/About" className="hover-link">About</Link></li>


                            {isLoggedIn ? (
                                <li><Link to="/Logout" className="hover-link secondry-button" onClick={handleLogout}>Logout</Link></li>
                            ) : (
                                <>
                                    {/* <li><Link to="/Sign-up" className="hover-link secondry-button">Signup</Link></li> */}
                                    <li><Link to="/Login" className="hover-link primary-button">Login</Link></li>
                                </>
                            )}


                            {/* {isAuthenticated && ( */}


                            {/* {!isAuthenticated && ( */}


                            <li><Link className="hover-link primary-button" id="dark" onClick={props.toggleTheme}>Mode</Link></li>
                        </ul>
                    </div>
                    <Link className="nav-toggle hover-link" id="menu-toggle" onClick={props.menuToggle}><i className="fa-solid fa-bars" ></i></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar