import React,{useState} from 'react';

import '../static/css/styles.css'
import '../static/css/Contactpage.css'
import '../static/css/res.css'
import '../static/css/stylesheet.css'
import '../static/css/visitor.css'

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    const handleClick=()=>{
        setShowLogin(false)

        const role=document.getElementsByName('user_role');
        if(role[0].checked){
            window.location = "/admin"
        }
        else if(role[1].checked){
            window.location = "/manager"
        }
        else if(role[2].checked){
            window.location = "/resident"
        }
        else{
            window.location = "/visitor"
        }
    }

    const getUserRole=()=>{
        setShowLogin(false)
        const role=document.getElementsByName('user_role');
        if((document.getElementById("login-username").value.length===0) || (document.getElementById("login-password").value.length===0)){
            alert("Username and Password not entered")
            window.location = "/login"
        }
        else{
            if(role[0].checked){
                window.location = "/admin"
            }
            else if(role[1].checked){
                window.location = "/manager"
            }
            else if(role[2].checked){
                window.location = "/resident"
            }
            else{
                window.location = "/visitor"
            }
        }
    }

    return (
        <div style={{ display: showLogin ? "inline-block" : "none"}} classNameName='login-page'>
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Login Page</title>
                <link rel="icon" href="Images/favicon.ico"/>
                <link rel="stylesheet" href="CSS/styles.css"/>
                <script src="JavaScript/login.js"></script>
            </head>
            <div className="crud-heading">
                <div className="crud-h1"><a onClick={handleClick}><input type="button" value="Home"/></a></div>
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-page">
                    <label>Username:</label>
                    <input type="text" name="username" id="login-username"  placeholder=" Enter Username" required/><br/>
                    <label>Password:</label>
                    <input type="password" name="password" id="login-password"  placeholder="Enter Password" required/>
                    <h5>Select User Role</h5>
                    
                    <input type="radio" checked='True' name="user_role" value="admin"/>
                    <label>Admin</label>
                    
                    <input type="radio" name="user_role" value="manager"/>
                    <label>Manager</label>
                
                    <input type="radio" name="user_role" value="resident"/>
                    <label>Resident</label>
                
                    <input type="radio" name="user_role" value="visitor"/>
                    <label>Visitor</label>
                    <button type="button" onClick={getUserRole}>LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login
