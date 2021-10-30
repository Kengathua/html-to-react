import React from 'react'

import manager from '../static/Images/manager.png';
import buildings from '../static/Images/buildings.jpeg';
import gardens from '../static/Images/gardens.jpeg';

import residents from '../static/Images/residents.jpeg';
import apartments from '../static/Images/apartments.jpeg';
import pool from '../static/Images/pool.jpeg';

import visitor from '../static/Images/visitor.jpeg';
import services from '../static/Images/services.jpeg';

import Nav from '../components/Header';

function Manager() {
    return (
        <div>
            <center><h1 className="manager">Welcome Manager</h1></center>
            <Nav />
            <div className="row-manager">
                <div className="column-manager">
                <a href="manager/crudbuilding1"><img src={buildings} alt=""/></a>
                <a href="manager/crudgarden1"><img src={gardens} alt=""/></a>
                </div>
                <div className="column-manager">
                    <a href="manager/crudresident1"><img src={residents} alt=""/></a>
                    <a href="manager/crudapartment1"><img src={apartments} alt=""/></a>
                    <a href="manager/crudpool1"><img src={pool} alt=""/></a>
                </div>
                <div className="column-manager">
                    <a href="manager/crudvisitor1"><img src={visitor} alt=""/></a>
                    <a href="manager/crudservice1"><img src={services} alt=""/></a>
                </div>
                </div>
        </div>
    )
}

export default Manager
