import React from 'react'

function Addresident() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudresident"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Add Resident</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessResident.html">
                    <fieldset className="crud-fielset">
                        <legend>Resident</legend>
                        <label>ID:</label>
                        <input type="text" placeholder="Enter Resident ID" required/><br/><br/>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Resident Name" required/><br/><br/>
                        <label>Contact</label>
                        <input type="tel" placeholder="Enter Resident Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/><br/><br/>
                        <label>Email:</label>
                        <input type="email" placeholder="Enter Resident email"/><br/><br/>
                        <label>Apartment No:</label>
                        <input type="text" placeholder="Enter Apartment Number" required/><br/><br/>
                        <label>Vehicle No:</label>
                        <input type="text" placeholder="Enter Vehicle Number" /><br/><br/>
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addresident
