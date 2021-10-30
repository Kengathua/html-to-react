import React from 'react'

function Addbuilding1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudbuilding1"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-building">Add Building</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccess1.html">
                    <fieldset className="crud-fieldset">
                    <legend>Building</legend>
                    <label>Building Number:</label>
                    <input type="text" placeholder="Enter Building Number" required/><br/><br/>
                    <label>Trash Date:</label>
                    <input type="date" placeholder="Enter Trash Date" pattern="mm-dd-yyyy" required/><br/><br/>
                    <label>Laundry Date:</label>
                    <input type="date" placeholder="Enter Laundry Date" pattern="mm-dd-yyyy" required/><br/><br/>
                    <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addbuilding1
