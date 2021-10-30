import React from 'react'

function Modifymanager() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin/crudmanager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Modify Manager Details</h1></div>
            </div>
            <div className="crud-modify-details">
                <form action="modsuccess.html">
                    <fieldset className="crud-fielset">
                        <legend>Manager</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter ID of the Manager you wish to Modify" required/><br/><br/>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Manager Name"/><br/><br/>
                        <label>Contact</label>
                        <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/><br/><br/>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter Manager email"/><br/><br/>
                        <input type="submit" value="Modify"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Modifymanager
