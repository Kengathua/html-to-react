import React from 'react'

function Crudvisitor1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/manager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-visitor">Manage Visitors</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/manager/crudvisitor1/viewvisitor1"> Display Visitors</a></li>
                    <li><a href="/manager/crudvisitor1/addvisitor1"> Add Visitors</a></li>
                    <li><a href="/manager/crudvisitor1/modifyvisitor1"> Modify Visitor Information</a></li>
                    <li><a href="/manager/crudvisitor1/deletevisitor1"> Delete Visitors</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudvisitor1
