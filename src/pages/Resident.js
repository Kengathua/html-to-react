import React from 'react'

import visitor from '../static/Images/visitor.jpeg';
import services from '../static/Images/services.jpeg';
import Nav from '../components/Header';

function Resident() {
    return (
        <div>
            <center><h1 className="RESIDENT">Welcome RESIDENT</h1></center>
            <Nav />
            <div className="row-RESIDENT">
                <div className="column-RESIDENT">
                    <a href="/resident/crudvisitor23"><img src={visitor} alt=""/></a>
                    <a href="/resident/crudservice23"><img src={services} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Resident
