import React, { useState, useEffect } from 'react'
import { http } from '../../../axios'

function ViewProduct({ reload, Reload }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        http.get("sales/tempitem")
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [reload])

    const DeleteItem = (id)=>{
        http.delete("sales/tempitem",{params:{id:id}})
        .then(res=>{
            Reload(res.data)
        })
        .catch(err=>{
            console.log("error",err)
        })
    }

    var total = 0, gst = 0, disc = 0, grandTotal = 0

    return (
        <div className="w3-container">
            <table className="w3-table-all">
                <thead>
                    <tr className="w3-green">
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
                        <th>TotalWithDiscount</th>
                        <th></th>
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
                                    <td>{index+1}</td>
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
                                    <td><button className="w3-red w3-button" onClick={()=>DeleteItem(data._id)}>Delete</button></td>
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
                        <td></td>                       
                    </tr>
                </tbody>

            </table>
            <br />
            <br />
        </div>
    )
}

export default ViewProduct
