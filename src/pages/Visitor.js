import React from 'react'

import apartments from '../static/Images/apartments.jpeg';
import gardens from '../static/Images/gardens.jpeg';
import Nav from '../components/Header';

function Visitor() {
    return (
        <div>
            <center><h1 className="VISITOR">Welcome VISITOR</h1></center>
            <Nav />

            <div className="row-VISITOR">
                <div className="column-VISITOR">
                    <a href="/crudapartment23"><img src={apartments} alt=""/></a>
                    <a href="/crudgarden23"><img src={gardens} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Visitor
