import React from 'react'
import { MyDate } from '../../../../Custom/MyDate'

function Address({ address }) {
    const { bill, ship, invoicedate, invoicenumber, payment } = address
    return (
        <div className="faddress">
            <div className="fbilling">
                <h6 className="w3-center">Billing Address</h6>

                {
                    bill && (
                        <table className="w3-table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{bill.name}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{bill.address}</td>
                                </tr>
                                <tr>
                                    <td>GSTIN</td>
                                    <td>{bill.gstin}</td>
                                </tr>
                                <tr>
                                    <td>DLNO</td>
                                    <td>{bill.dlno}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }

            </div>
            <div className="fshipping">

                <h6 className="w3-center">Shipping Address</h6>
                {
                    ship && (
                        <table className="w3-table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{ship.name}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{ship.address}</td>
                                </tr>
                                <tr>
                                    <td>GSTIN</td>
                                    <td>{ship.gstin}</td>
                                </tr>
                                <tr>
                                    <td>DLNO</td>
                                    <td>{ship.dlno}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }

            </div>


            <div className="invoice">
                <h6 className="w3-center">Invoice</h6>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td>Invoce No </td>
                            <td>: {invoicenumber}</td>
                        </tr>
                        <tr>
                            <td>Invoice Date </td>
                            <td>: {MyDate(invoicedate)}</td>
                        </tr>
                        <tr>
                            <td>Payment</td>
                            <td>: {payment}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Address
