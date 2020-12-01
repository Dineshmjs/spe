import React from 'react'

function Address() {
    return (
        <div className="faddress">
            <div className="fbilling">
                <h6 className="w3-center">Billing Address</h6>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>PUBLIC HEALTH CENTRE</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>NO: 174, LAKE VIEW ROAD, WEST MAMBALAM, CHENNAI 33</td>
                        </tr>
                        <tr>
                            <td>GSTIN</td>
                            <td>33AAATT0857CIZU</td>
                        </tr>
                        <tr>
                            <td>DLNO</td>
                            <td>1000/M111/20 , 1004/M111/21</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="fshipping">

                <h6 className="w3-center">Shipping Address</h6>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>PUBLIC HEALTH CENTRE</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>NO: 174, LAKE VIEW ROAD, WEST MAMBALAM, CHENNAI 33</td>
                        </tr>
                        <tr>
                            <td>GSTIN</td>
                            <td>33AAATT0857CIZU</td>
                        </tr>
                        <tr>
                            <td>DLNO</td>
                            <td>1000/M111/20 , 1004/M111/21</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="invoice">
                <h6 className="w3-center">Invoice</h6>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td>Invoce No</td>
                            <td>SPE/2020-2021/0024</td>
                        </tr>
                        <tr>
                            <td>Invoice Date</td>
                            <td>10-11-2020</td>
                        </tr>
                        <tr>
                            <td>Payment</td>
                            <td>CREDIT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Address
