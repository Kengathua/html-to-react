import React from 'react'

function Crudgarden1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-garden">Manage garden</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/manager/crudgarden/viewgarden1"> Display Garden</a></li>
                    <li><a href="/manager/crudgarden/addgarden1"> Add Garden</a></li>
                    <li><a href="/manager/crudgarden/modifygarden1"> Modify Garden Information</a></li>
                    <li><a href="/manager/crudgarden/deletegarden1"> Delete Garden</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudgarden1
