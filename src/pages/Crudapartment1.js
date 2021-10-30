
import React from 'react'

function Crudapartment1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-apartment">Manage Apartments</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="viewapartment1"> Display Apartments</a></li>
                    <li><a href="addapartment1"> Add Apartments</a></li>
                    <li><a href="modifyapartment1"> Modify Apartments Information</a></li>
                    <li><a href="deleteapartment1"> Delete Apartments</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudapartment1
