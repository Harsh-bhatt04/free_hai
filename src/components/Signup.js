import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { account } from '../appwriteConfig';
function Signup() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate()
    const [userData, setuserData] = useState({name:" ",email:" ",password: " "})

    const handleSignup = (event) => {
        event.preventDefault();
        // Add signup logic here
        // console.log(userData)
    const signupPromise = account.create(
            userData.name,
            userData.email,
            userData.password
        )
        signupPromise.then(function(res){
            navigate("/Login")
        },function(err){
            console.log(err)
        })
    };

    return (
        <div className="container_l"> {/* Use the container class here */}
            <div className="form"> {/* Add the form class here */}
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder="Username"  onChange={(e) => setuserData({...userData, name:e.target.value})} required />
                    <input type="email" placeholder="enter email..."  onChange={(e) => setuserData({...userData, email:e.target.value})} required />
                    <input type="password" placeholder="Password..."  onChange={(e) => setuserData({...userData, password:e.target.value})} required />
                    {/* <input type="password" placeholder="Confirm Password" onChange={(e) => setuserData({...userData, confirPass:e.target.value})} required /> */}
                    <button type="submit" onClick={handleSignup}>Sign Up</button>
                </form>
                <p>Already have an account <Link to={'/Login'}>-Login</Link></p>
            </div>
            
        </div>
    );
}

export default Signup;
