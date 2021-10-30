import React from 'react'
import '../static/css/styles.css'

function Nav() {
    return (
        <div>
            <header className="App-header">
                <ul class="menu">
                    <li><a href="/home"> Home </a></li>
                    <li><a href="/about"> About Us </a></li>
                    <li><a href="/services"> Services </a></li>
                    <li><a href="/contact"> Contact Us </a></li>
                    <li><a href="/register"> Sign Up </a></li>
                    <li><a href="/login"> Log In </a></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav