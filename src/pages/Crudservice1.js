import React from 'react'

function Crudservice1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-services">Manage services</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/manager/crudresident1/viewservices1"> Display services</a></li>
                    <li><a href="/manager/crudresident1/addservices1"> Add services</a></li>
                    <li><a href="/manager/crudresident1/modifyservices1"> Modify services information</a></li>
                    <li><a href="/manager/crudresident1/deleteservices1"> Delete services</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudservice1
