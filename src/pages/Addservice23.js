import React from 'react'

function Addservice23() {
    return (
        <div>
            <div class="crud-heading">
                <div class="crud-h1"><a href="/crudeservice23"><input type="button" value="Back"/></a></div>
                <div class="crud-h2"><h1 class="manage-services">Add Services</h1></div>
            </div>
            <div class="visitor-modify-details">
                <form action="/addsuccessservices23">
                    <fieldset class="crud-fieldset">
                        <legend>Service</legend>
                        <label> ID : </label>
                        <input type="text" placeholder="Enter Service Request ID" required/><br/><br/>
                        <label> Priority:</label>
                        <input type="text" placeholder="Enter Priority" required/><br/><br/>
                        <label> Description:</label>
                        <input type="text" placeholder="Enter Description" required/><br/><br/>
                        <label> Apartment Number</label>
                        <input type="text" placeholder="Enter Apartment Number" required/><br/><br/>
                        <label> Building Number:</label>
                        <input type="text" placeholder="Enter Building Number" required/><br/><br/>
                        <label> MaintenancePersonId:</label>
                        <input type="text" placeholder="Enter Maintenance Person ID" /><br/><br/>

                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addservice23
