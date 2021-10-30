import React from 'react'

function Addpool1() {
    return (
        <div>
            <div class="crud-heading">
                <div class="crud-h1"><a href="/crudpool1"><input type="button" value="Back"/></a></div>
                <div class="crud-h2"><h1 class="manage-pool">Add Pool</h1></div>
            </div>
            <div class="crud-add-details">
                <form action="addsuccesspool1.html">
                    <fieldset class="crud-fieldset">
                        <legend>Pool</legend>
                        <label> Number</label>
                        <input type="number" placeholder="Enter pool number"required/><br/><br/>
                        <label> MaintenancePersonId: </label>
                        <input type="number" placeholder="Enter Maintenance person ID" required/><br/><br/>
                        <label> Last cleaned:</label>
                        <input type="date" placeholder="Enter last cleaned date" pattern="mm-dd-yyyy" required/><br/><br/>
                        <label> Next clean:</label>
                        <input type="date" placeholder="Enter next clean date" pattern="mm-dd-yyyy" required/><br/><br/>
                        <label> Open Time:</label>
                        <input type="time" placeholder="Enter open time" required/><br/><br/>
                        <label> Close Time:</label>
                        <input type="time" placeholder="Enter close time" required/><br/><br/>
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addpool1
