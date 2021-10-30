import React from 'react'

function Crudbuilding() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Buildings</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="viewbuilding.html"> Display Buildings</a></li>
                    <li><a href="addbuilding.html"> Add Building</a></li>
                    <li><a href="modifybuilding.html"> Modify Building Details</a></li>
                    <li><a href="deletebuilding.html"> Delete Building</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudbuilding
