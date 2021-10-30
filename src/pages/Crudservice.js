import React from 'react'

function Crudservice() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Service Request</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/admin/crudservice/viewservice"> Display Service Requests</a></li>
                    <li><a href="/admin/crudservice/addservice"> Add Service Request</a></li>
                    <li><a href="/admin/crudservice/modifyservice"> Modify  Service Request</a></li>
                    <li><a href="/admin/crudservice/deleteservice"> Delete Service Request</a></li>
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

export default Crudservice
