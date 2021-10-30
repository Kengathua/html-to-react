import React from 'react'

function Crudresident1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="manager.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-resident">Manage residents</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="manager/crudresident/viewresident1"> Display Residents</a></li>
                    <li><a href="manager/crudresident/addresident1.html"> Add Residents</a></li>
                    <li><a href="manager/crudresident/modifyresident1.html"> Modify Resident Information</a></li>
                    <li><a href="manager/crudresident/deleteresident1.html"> Delete Residents</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudresident1
