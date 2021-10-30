import React from 'react'

function Crudmanager() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/admin"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Managers</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewmanager"> Display Managers</a></li>
                    <li><a href="/addmanager"> Add Managers</a></li>
                    <li><a href="/modifymanager"> Modify Manager Information</a></li>
                    <li><a href="/deletemanager"> Delete Managers</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudmanager
