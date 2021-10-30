import React from 'react'

function Crudservice23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/resident"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-services">Manage Services</h1></div>
            </div>
            <div className="crud-operation">
                <ul>
                    <li><a href="/viewServices23"> Display Services</a></li>
                    <li><a href="/addServices23"> Add Services</a></li>
                    <li><a href="/modifyServices23"> Modify Services Information</a></li>
                    <li><a href="/deleteServices23"> Delete Services</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Crudservice23
