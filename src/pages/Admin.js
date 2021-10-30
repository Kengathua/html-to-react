import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import manager from '../static/Images/manager.png';
import building from '../static/Images/building.png';
import garden from '../static/Images/garden.png';

import resident from '../static/Images/resident.png';
import apartment from '../static/Images/apartment.png';
import pool from '../static/Images/pool.png';

import visitor from '../static/Images/visitor.png';
import service from '../static/Images/service.png';

import Nav from '../components/Header';

function Admin() {
    return (
        <>
            <div>
                <center><h1 className="admin">Welcome Admin</h1></center>
                <Nav />
                <div className="row-admin">
                    <div className="column-admin">
                    <a href="/crudmanager"><img src={manager}/></a>
                    <a href="/crudbuilding"><img src={building}/></a>
                    <a href="/crudgarden"><img src={garden}/></a>
                    </div>
                    <div className="column-admin">
                        <a href="/crudresident"><img src={resident}/></a>
                        <a href="/crudapartment"><img src={apartment}/></a>
                        <a href="/crudpool"><img src={pool}/></a>
                    </div>
                    <div className="column-admin">
                        <a href="/crudvisitor"><img src={visitor}/></a>
                        <a href="/crudservice"><img src={service}/></a>
                    </div>
                </div>

                    <footer>
                        <a href="/about">About Us</a>|
                        <a href="/contact">Contact Us</a>|
                        <a href="/services">Our Services</a>
                        <p>@Lunamar's Management, Some rights reserved</p>
                    </footer>
            </div>
        </>
        
    )
}

export default Admin
