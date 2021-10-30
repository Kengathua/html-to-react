import React from 'react'

function Addresident1() {
    return (
        <div>
            <div class="crud-heading">
                <div class="crud-h1"><a href="/crudresident1"><input type="button" value="Back"/></a></div>
                <div class="crud-h2"><h1 class="manage-resident">Add Residents</h1></div>
            </div>
            <div class="crud-add-details">
                <form action="addsuccessresident1.html">
                    <fieldset class="crud-fieldset">
                        <legend>Resident</legend>
                        <label> ID: </label>
                        <input type="text" placeholder="Enter Owner ID" required/><br/><br/>
                        <label> Name:</label>
                        <input type="text" placeholder="Enter Owner Name" required/><br/><br/>
                        <label> Email:</label>
                        <input type="email" placeholder="Enter Owner Email" required/><br/><br/>
                        <label> Contact:</label>
                        <input type="tel" placeholder="Enter Mobile number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/><br/><br/>
                        <label> Apartment number :</label>
                        <input type="text" placeholder="Enter Apartment number" required/><br/><br/>
                        <label> Vehicle Number :</label>
                        <input type="text" placeholder="Enter Vehicle Number" required/><br/><br/>
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addresident1
