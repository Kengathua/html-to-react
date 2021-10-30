import React from 'react'

function Crudpool() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/admin"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manage Pools</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewpool"> Display Pool Information</a></li>
                    <li><a href="/addpool"> Add Pool Information</a></li>
                    <li><a href="/modifypool"> Modify Pool Information</a></li>
                    <li><a href="/deletepool"> Delete Pool Information</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudpool
