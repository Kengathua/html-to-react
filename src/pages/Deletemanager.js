import React from 'react'

function Deletemanager() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin/crudmanager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Delete Manager</h1></div>
            </div>
            <div className="crud-delete-details">
                <form action="delsuccess.html">
                    <fieldset className="crud-fielset">
                        <legend>Manager</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter ID of the Manager you wish to Delete" required/><br/><br/>
                        
                        <input type="submit" value="Delete"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Deletemanager
