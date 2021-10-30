import React from 'react'

function Crudgarden() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Gardens</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="viewgarden.html"> Display Garden Information</a></li>
                    <li><a href="addgarden.html"> Add Garden Information</a></li>
                    <li><a href="modifygarden.html"> Modify Garden Information</a></li>
                    <li><a href="deletegarden.html"> Delete Garden Information</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudgarden
