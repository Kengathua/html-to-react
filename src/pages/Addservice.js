import React from 'react'

function Addservice() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudservice"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Add Service Request</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessService.html">
                    <fieldset className="crud-fielset">
                    <legend>Service Request</legend>
                    <label>Id:</label>
                    <input type="text" placeholder="Enter Service Request ID" required/><br/><br/>
                    <label>Description:</label>
                    <input type="text" placeholder="Enter description" required/><br/><br/>
                    <label>Priority:</label>
                    <input type="text" placeholder="Enter priority" required/><br/><br/>
                    <label>Apartment number:</label>
                    <input type="number" placeholder="Enter Apartment Number" required/><br/><br/>
                    <label>Building number</label>
                    <input type="number" placeholder="Enter Building Number" required/><br/><br/>
                    <label>Maintenance Person Id:</label>
                    <input type="text" placeholder="Enter maintenance person Id" /><br/><br/>
                    <label>Status:</label>
                    <input type="text" placeholder="Enter status of request" /><br/><br/>
                    
                    <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addservice
