import React from 'react'

function Addvisitor23() {
    return (
        <div>
            <div class="crud-heading">
                <div class="crud-h1"><a href="crudevisitor23.html"><input type="button" value="Back"/></a></div>
                <div class="crud-h2"><h1 class="ADD-visitor">Add Visitors</h1></div>
            </div>
            <div class="visitor-modify-details">
                <form action="addsuccessvisitor23.html">
                    <fieldset class="crud-fieldset">
                        <legend>Visitor</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter Visitor ID you wish to Add" required/><br/><br/>
                        <label> Name:</label>
                        <input type="text" placeholder="Enter Visitor Name" required/><br/><br/>
                        <label> Number:</label>
                        <input type="tel" placeholder="Enter Mobile number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/><br/><br/>
                        <label> Apartment Number:</label>
                        <input type="number" placeholder="Enter apartment number" required/><br/><br/>
                        <label> Vehicle Number:</label>
                        <input type="number" placeholder="Enter Vehicle number" required/><br/><br/>
                        <input type="submit" value="ADD"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addvisitor23
