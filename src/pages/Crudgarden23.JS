import React from 'react'

function Crudgarden23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/visitor"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-garden visits">Manage garden visits</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewgarden23"> Display Garden</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Crudgarden23
