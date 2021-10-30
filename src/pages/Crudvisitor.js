import React from 'react'

function Crudvisitor() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/admin"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Visitors</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewvisitor"> Display Visitors</a></li>
                    <li><a href="/addvisitor"> Add Visitor</a></li>
                    <li><a href="/modifyvisitor"> Modify Visitor Information</a></li>
                    <li><a href="/deletevisitor"> Delete Visitor</a></li>
                </ul>
            </div>

            <footer>
                <a href="/about">About Us</a>|
                <a href="/contact">Contact Us</a>|
                <a href="/services">Our Services</a>
                <p>@Lunamar's Management, Some rights reserved</p>
            </footer>
        </div>
    )
}

export default Crudvisitor
