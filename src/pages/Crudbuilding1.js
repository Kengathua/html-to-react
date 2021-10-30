import React from 'react'

function Crudbuilding1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-building">Manage Building</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/manager/crudbuilding1/viewbuilding1"> Display Buildings</a></li>
                    <li><a href="/manager/crudbuilding1/addbuilding1"> Add Buildings</a></li>
                    <li><a href="/manager/crudbuilding1/modifybuilding1"> Modify Building Information</a></li>
                    <li><a href="/manager/crudbuilding1/deletebuilding1"> Delete Buildings</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudbuilding1
