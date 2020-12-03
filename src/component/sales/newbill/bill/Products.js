import React from 'react'
import './index.css'

function Products({items}) { 
   

    var total = 0, gst = 0, disc = 0, grandTotal = 0
    return (
        <div className="fproduct">
            <table className="w3-table tbl">
                <thead className="">
                    <tr>
                        <th>S.No</th>
                        <th>Goods</th>
                        <th>Hsn No</th>
                        <th>Expiry</th>
                        <th>Mrp</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Taxable Amount</th>
                        <th>GST</th>
                        <th>CGST</th>
                        <th>SGST</th>
                        <th>Total</th>
                        <th>Disc</th>
                        <th>TotalAmount</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map((data, index) => {
                            total += data.total
                            gst += data.gstAmount
                            disc += data.discAmount
                            grandTotal += data.withdisc


                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data.product}</td>
                                    <td>{data.hsnno}</td>
                                    <td>{data.expiry}</td>
                                    <td>{data.mrp}</td>
                                    <td>{data.qt}</td>
                                    <td>{data.rate}</td>
                                    <td>{data.total}</td>
                                    <td>{data.gst}%</td>
                                    <td>{data.gstAmount / 2}</td>
                                    <td>{data.gstAmount / 2}</td>
                                    <td>{data.withgst}</td>
                                    <td>{data.disc}%</td>
                                    <td>{data.withdisc}</td>                                    
                                </tr>
                            )
                        })
                    }

                    <tr><td>.</td></tr>
                    <tr><td>.</td></tr>
                    <tr>

                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Total</b></td>
                        <td>{total}</td>
                        <td>{gst}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{disc}</td>
                        <td>{grandTotal}</td>                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products
