import React from 'react'

function Crudresident() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Residents</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="viewresident.html"> Display Residents</a></li>
                    <li><a href="addresident.html"> Add Resident</a></li>
                    <li><a href="modifyresident.html"> Modify Resident Information</a></li>
                    <li><a href="deleteresident.html"> Delete Resident</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudresident
