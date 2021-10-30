import React from 'react'

function Register() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="home.html"><input type="button" value="Home"/></a></div>
                </div>
            <div className="login-container">
                <h1>Sign Up</h1>
                <form className="login-page" action="registerSuccess.html">
                    <label>Name:</label>
                    <input type="text" name="name"  placeholder=" Enter Username" required/>
                    <label>Id:</label>
                    <input type="text" name="id" placeholder="Enter Identification number" required/>
                    <label>Contact:</label>
                    <input type="tel" name="contact" placeholder="Enter Mobile number" required/>
                    <label>Email Id:</label>
                    <input type="email" name="email" placeholder="Enter Email Id"/>
                    <h5>Select User Role</h5>
                    
                    <input type="radio" checked={true} name="user_role" value="admin"/>
                    <label>Admin</label>
                    
                    <input type="radio"  name="user_role" value="manager"/> 
                    <label>Manager</label>
                
                    <input type="radio"  name="user_role" value="resident"/> 
                <label>Resident</label>
                
                    <input type="radio"  name="user_role" value="visitor"/>
                    <label>Visitor</label>

                    <input type="submit" value= "Register"/>
                </form>
            </div>
        </div>
    )
}

export default Register
