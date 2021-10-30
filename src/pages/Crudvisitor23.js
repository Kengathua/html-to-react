import React from 'react'

function Crudvisitor23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/resident"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage Visitors">Manage Visitors</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewvisitor23"> Display Visitors</a></li>
                    <li><a href="/addvisitor23"> Add Visitors</a></li>
                    <li><a href="/modifyvisitor23">  modify  Visitors Information</a></li>
                    <li><a href="/deletevisitor23"> Delete Visitors</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudvisitor23
