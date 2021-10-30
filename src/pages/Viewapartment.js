import React from 'react'

function Viewapartment() {
    return (
        <div>
            <div class="crud-heading">
                <div class="crud-h1"><a href="crudapartment.html"><input type="button" value="Back"/></a></div>
                <div class="crud-h2"><h1 class="manage-mgr">Apartment Information</h1></div>
            </div>
            <div class="crud-table">
                <table border={3}>
                    <tr>
                        <th>Apartment Number</th>
                        <th>No of Beds</th>
                        <th>No of Baths</th>
                        <th>Total sqfeet</th>
                        <th>Gas usage</th>
                        <th>Electricity usage</th>
                        <th>Water usage</th>
                        <th>Home Association</th>
                        <th>Parking Id</th>
                        <th>Building No</th>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>3</td>
                        <td>2</td>
                        <td>900</td>
                        <td>low</td>
                        <td>high</td>
                        <td>low</td>
                        <td>200</td>
                        <td>201</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>102</td>
                        <td>3</td>
                        <td>3</td>
                        <td>920</td>
                        <td>low</td>
                        <td>high</td>
                        <td>low</td>
                        <td>200</td>
                        <td>202</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td>3</td>
                        <td>2</td>
                        <td>900</td>
                        <td>low</td>
                        <td>high</td>
                        <td>low</td>
                        <td>200</td>
                        <td>101</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>104</td>
                        <td>3</td>
                        <td>3</td>
                        <td>920</td>
                        <td>low</td>
                        <td>high</td>
                        <td>high</td>
                        <td>200</td>
                        <td>102</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Viewapartment
