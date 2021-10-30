import React from 'react'

function Crudpool1() {
    return (
        <div>
        <div className="crud-heading">
                <div className="crud-h1"><a href="manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-pool">Manage pool</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/manager/crudpool1/viewpool1"> Display pool</a></li>
                    <li><a href="/manager/crudpool1/addpool1"> Add pool</a></li>
                    <li><a href="/manager/crudpool1/modifypool1"> Modify pool information</a></li>
                    <li><a href="/manager/crudpool1/deletepool1"> Delete pool</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudpool1
