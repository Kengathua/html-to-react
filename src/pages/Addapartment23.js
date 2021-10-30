import React from 'react'

function Addapartment23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudeapartment23"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-visitors">Add visits</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessapartment23.html">
                    <fieldset className="crud-fieldset">
                        <legend>Visitor</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter Visitor ID you wish to Modify" required/><br/><br/>
                        <label> Name:</label>
                        <input type="text" placeholder="Enter Visitor Name" required/><br/><br/>
                        <label> Mobile:</label>
                        <input type="tel" placeholder="Enter Mobile number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/><br/><br/>
                        <label> Apartment Number:</label>
                        <input type="number" placeholder="Enter apartment number" required/><br/><br/>
                        <label> Vehicle Number:</label>
                        <input type="number" placeholder="Enter Vehicle number" required/><br/><br/>
                            
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addapartment23
