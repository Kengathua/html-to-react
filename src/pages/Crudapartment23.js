import React from 'react'

function Crudapartment23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/visitor"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="Manage Apartment visits">Manage Apartments visits</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewapartment23"> Display Visits</a></li>
                    <li><a href="/addapartment23"> Add Visit</a></li>
                    <li><a href="/modifyapartment23"> Modify Visit</a></li>
                    <li><a href="/deletapartment23"> Delete visit</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudapartment23
