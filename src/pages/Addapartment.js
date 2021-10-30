import React from 'react'

function Addapartment() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudapartment"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Add Apartment</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessApartment.html">
                    <fieldset className="crud-fielset">
                        <legend>Apartment</legend>
                        <label>Apartment No:</label>
                        <input type="number" placeholder="Enter Apartment Number" required/><br/><br/>
                        <label>No of beds:</label>
                        <input type="number" placeholder="Enter No of bed rooms" required/><br/><br/>
                        <label>No of Baths:</label>
                        <input type="number" placeholder="Enter No of Bathrooms" required/><br/><br/>
                        <label>Total sqfeet:</label>
                        <input type="number" placeholder="Enter Total square feet" required/><br/><br/>
                        <label>Gas Usage:</label>
                        <input type="text" placeholder="Enter Gas Usage category" /><br/><br/>
                        <label>Electricity Usage:</label>
                        <input type="text" placeholder="Enter Electricity Usage category" /><br/><br/>
                        <label>Water Usage:</label>
                        <input type="text" placeholder="Enter water usage category" /><br/><br/>
                        <label>Home Association:</label>
                        <input type="number" placeholder="Enter Home Association amount" /><br/><br/>
                        <label>Parking Id:</label>
                        <input type="number" placeholder="Enter Parking lot Id" required/><br/><br/>
                        <label>Building No:</label>
                        <input type="number" placeholder="Enter Building Number" required/><br/><br/>
                        
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default Addapartment
