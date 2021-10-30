import React from 'react'

function Addapartment1() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudapartment1"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-apartment">Add Apartments</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessapartment1.html">
                    <fieldset className="crud-fieldset">
                        <legend>Apartment</legend>
                        <label> Number: </label>
                        <input type="text" placeholder="Enter Apartment Number" required/><br/><br/>
                        <label> Building Number:</label>
                        <input type="text" placeholder="Enter Building Number" required/><br/><br/>
                        <label> Electricity:</label>
                        <input type="text" placeholder="Enter electricity usage" required/><br/><br/>
                        <label> Water:</label>
                        <input type="text" placeholder="Enter water usage" required/><br/><br/>
                        <label> Gas:</label>
                        <input type="text" placeholder="Enter gas usage" required/><br/><br/>
                        <label> Parking ID :</label>
                        <input type="text" placeholder="Enter Parking ID" required/><br/><br/>
                        <label> Beds:</label>
                        <input type="text" placeholder="Number of Beds" required/><br/><br/>
                        <label> Baths:</label>
                        <input type="text" placeholder="Number of Baths" required/><br/><br/>
                        <label> Square Feet:</label>
                        <input type="text" placeholder="Enter Square Feet" required/><br/><br/>
                        <label> Home Association:</label>
                        <input type="text" placeholder="Enter Home Association" required/><br/><br/>
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addapartment1
