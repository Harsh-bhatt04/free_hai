import React from 'react'
import { useEffect,useState } from 'react';
import writing from './img/writing-and-typing-clipart-9-removebg-preview.png'
import { Link} from 'react-router-dom'
import { account } from '../appwriteConfig';

function Motivefield() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        // Initialize Appwrite
        console.log(isLoggedIn,isAuthChecked)
        // Check if user is logged in
        account.get().then(() => {
            setIsLoggedIn(true);
        }).catch(() => {
            setIsLoggedIn(false);
        })
        .finally(() => {
            setIsAuthChecked(true); // Mark authentication check as complete
        });
    },);

    if (!isAuthChecked) {
        return <div>Loading...</div>;
    }
  return (
    <div>
        <header>
        <div className="container header-section flex">
            <div className="header-left">
                <h1>FREE-HAI</h1>
                <p>Every student get in trouble while finding the understandable content on the Internet or YouTube
                    which is beginner Friendly. To remove this problem for you <span
                        style={{fontWeight : "bold" , textAlign:"justify"}}> we </span>launched this website where
                    you will find beginner friendly as well as premium content... </p>
                <Link to={isLoggedIn?"/courses":"/Login"} className="primary-button started-button" id="course-jump">get start</Link>
            </div>
            <div className="header-right">
                <img src={writing} alt="img" /> 
            </div>

        </div>
    </header>
    {/* <!-- companies section--> */}
    {/* <div class="companies-section flex">
        <div class="container">
            <div class="small-bold-text">Nothing but creativity</div>
        </div> */}
    {/* </div> */}
    </div>
  )
}

export default Motivefield