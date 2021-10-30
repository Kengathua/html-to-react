import React from 'react'

function Viewmanager() {
    return (
        <div>
            <div className="crud-heading">
                <div className="crud-h1"><a href="admin/crudmanager"><input type="button" value="Back"/></a></div>
                <div className="crud-h2"><h1 className="manage-mgr">Manager Information</h1></div>
            </div>
            <div className="crud-table">
                <table border={3}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td>742098</td>
                        <td>James</td>
                        <td>2321111897</td>
                        <td>james@gmail.com</td>
                        <td>50000</td>
                    </tr>
                    <tr>
                        <td>742097</td>
                        <td>Rachel</td>
                        <td>8765487897</td>
                        <td>rachel@gmail.com</td>
                        <td>50000</td>
                    </tr>
                    <tr>
                        <td>742096</td>
                        <td>Alice</td>
                        <td>2998787897</td>
                        <td>alice@gmail.com</td>
                        <td>50000</td>
                    </tr>
                    <tr>
                        <td>742095</td>
                        <td>John</td>
                        <td>3346557897</td>
                        <td>john@gmail.com</td>
                        <td>50000</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Viewmanager
