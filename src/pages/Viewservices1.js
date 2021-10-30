import React from 'react'

function Viewservices1() {
    return (
        <div>
            <h1> Display Services</h1>
            <table>
            <tr>
                <th>service request id</th>
                <th>priority</th>
                <th>description</th>
                <th>apartment number</th>
                <th>building number</th>
                <th>maintenance person id</th>
            </tr>
            <tr>
                <td>15230</td>
                <td>High</td>
                <td>Repair in the kitchen</td>
                <td>100</td>
                <td>2000</td>
                <td>100120</td>
                
            </tr>
            <tr>
                <td>15231</td>
                <td>Medium</td>
                <td>Bathroom service</td>
                <td>101</td>
                <td>2001</td>
                <td>100112</td>
            </tr>
            <tr>
                <td>15232</td>
                <td>High</td>
                <td>Electricity related service</td>
                <td>102</td>
                <td>2002</td>
                <td>100114</td>
            </tr>
            <tr>
                <td>15233</td>
                <td>High</td>
                <td>Furniture service</td>
                <td>103</td>
                <td>2003</td>
                <td>100101</td>
            </tr>
            <tr>
                <td>15234</td>
                <td>Low</td>
                <td>Maintenance</td>
                <td>104</td>
                <td>2004</td>
                <td>100113</td>
            </tr>
            </table>
        </div>
    )
}

export default Viewservices1
