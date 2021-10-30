import React from 'react'

function Crudapartment() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/admin"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Apartments</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewapartment"> Display Apartments</a></li>
                    <li><a href="/addapartment"> Add Apartment</a></li>
                    <li><a href="/modifyapartment"> Modify Apartment Information</a></li>
                    <li><a href="/deleteapartment"> Delete Apartment</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudapartment
