import React from 'react'

function Addpool() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="/crudpool"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Add Pool</h1></div>
            </div>
            <div className="crud-add-details">
                <form action="addsuccessPool.html">
                    <fieldset className="crud-fielset">
                        <legend>Pool</legend>
                        <label>Pool Id:</label>
                        <input type="text" placeholder="Enter pool id" required/><br/><br/>
                        <label>Open time:</label>
                        <input type="time" placeholder="Cloose Pool open time" required/><br/><br/>
                        <label>Close time:</label>
                        <input type="time" placeholder="Choose pool close time" required/><br/><br/>
                        <label>Last Cleaned:</label>
                        <input type="date" placeholder="Enter last cleaned date" required/><br/><br/>
                        <label>Next Clean:</label>
                        <input type="date" placeholder="Enter next clean date" required /><br/><br/>
                        <label>Maintenance Person Id:</label>
                        <input type="text" placeholder="Enter Maintenance Person Id" required/><br/><br/>
                        
                        <input type="submit" value="Insert"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Addpool
