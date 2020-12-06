import React from 'react'
import { MyDate } from '../../../../Custom/MyDate'
import {own} from '../../../../Custom/Address'

function Address({ address }) {
    const { buyer, invoicedate, invoicenumber, payment } = address
    return (
        <div className="faddress">
            <div className="fbilling">
                <h6 className="w3-center">From Address</h6>

                {
                    buyer && (
                        <table className="w3-table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{buyer.name}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{buyer.address}</td>
                                </tr>
                                <tr>
                                    <td>GSTIN</td>
                                    <td>{buyer.gstin}</td>
                                </tr>
                                <tr>
                                    <td>DLNO</td>
                                    <td>{buyer.dlno}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                }

            </div>
            <div className="fshipping">

                <h6 className="w3-center">To Address</h6>
                {
                    own && (
                        <table className="w3-table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{own.name}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{own.address}</td>
                                </tr>
                                <tr>
                                    <td>GSTIN</td>
                                    <td>{own.gstin}</td>
                                </tr>
                                <tr>
                                    <td>DLNO</td>
                                    <td>{own.dlno}</td>
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
