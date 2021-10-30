import React from 'react'

function Deleteapartment23() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="crudeapartment23.html"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-visitors">Delete visit</h1></div>
            </div>
            <div className="crud-delete-details">
                <form action="deletesuccessapt23.html">
                    <fieldset className="crud-fieldset">
                        <form action="delsuccessvisitor.html">
                            <fieldset className="crud-fieldset">
                                <legend>Visitor</legend>
                                <label>ID:</label>
                                <input type="text" placeholder="Enter Visitor ID you wish to delete" required/><br/><br/>
                                <input type="submit" value="Delete"/>
                            </fieldset>
                        </form>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Deleteapartment23
