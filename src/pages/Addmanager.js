import React from 'react'

function Addmanager() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudmanager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Add Manager</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessManager.html">
                    <fieldset className="crud-fielset">
                        <legend>Manager</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter Manager ID" required/><br/>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Manager Name" required/><br/>
                        <label>Contact</label>
                        <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter Manager email"/><br/>
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addmanager
