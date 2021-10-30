import React from 'react'

function Addvisitor1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="crudvisitor1.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-visitor">Add Visitor</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessvisitor1.html">
                    <fieldset className="crud-fieldset">
                    <legend>Visitor</legend>
                    <label> Id : </label>
                    <input type="text" placeholder="Enter Visitor ID" required/><br/><br/>
                    <label> Name:</label>
                    <input type="text" placeholder="Enter Visitor Name" required/><br/><br/>
                    <label> Number:</label>
                    <input type="text" placeholder="Enter Visitor Number" required/><br/><br/>
                    <label> Mobile:</label>
                    <input type="text" placeholder="Enter Mobile number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/><br/><br/>
                    <label> Apartment Number:</label>
                    <input type="text" placeholder="Enter apartment number" required/><br/><br/>
                    <label> Vehicle Number:</label>
                    <input type="text" placeholder="Enter Vehicle number" required/><br/><br/>
                    <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addvisitor1
