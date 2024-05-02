import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { account } from '../appwriteConfig';


function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [userData, setuserData] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault();
        // Add login logic here
        // console.log(userData)
        try{
            
            account.createEmailPasswordSession(userData.email, userData.password)
            navigate('/')
            alert('Logged in Successfully...')

        }
        catch{
            alert("something is wrong...")
        }
    };

    return (
        <div className="container_l"> {/* Use the container class here */}
        <div className="form"> {/* Add the form class here */}
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Username"  onChange={(e) => setuserData({...userData,email: e.target.value})} required />
                <input type="password" placeholder="Password" onChange={(e) => setuserData({...userData,password: e.target.value})} required />
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
            <p>Don't have an account <Link to={'/Sign-up'}>-Signup</Link></p>
        </div>
    </div>
    );
}

export default Login;
