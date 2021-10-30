import React from 'react'

function Addgarden1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudgarden1"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-garden">Add Garden</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessgarden1.html">
                    <fieldset className="crud-fieldset">
                    <legend>Garden</legend>
                    <label> MaintenancePersonId : </label>
                    <input type="text" placeholder="Enter Maintenance person ID" required/><br/><br/>
                    <label> Next Service:</label>
                    <input type="date" placeholder="Enter next service date" pattern="mm-dd-yyyy" required/><br/><br/>
                    <label> Last maintain:</label>
                    <input type="date" placeholder="Enter last maintenance date" pattern="mm-dd-yyyy" required/><br/><br/>
                    <label>Plant Name:</label>
                    <input type="text" placeholder="Enter Plant Name" required/><br/><br/>
                    <label>Plant Type:</label>
                    <input type="text" placeholder="Enter Plant Type" required/><br/><br/>
                    <label>Plant ID:</label>
                    <input type="text" placeholder="Enter Plant ID" required/><br/><br/>
                    <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addgarden1
