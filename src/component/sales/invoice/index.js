import React, { useState, useEffect } from 'react'
import Sales from '..'
import { http } from '../../../axios'
import { MyDate } from '../../../Custom/MyDate'
import './index.css'
import PrintButton from './PrintButton'
import { SpeInvoiceNumber } from '../../../Custom/SpeInvoiceNumber'
import Filter from '../../../Custom/Filter'

function Invoice() {
    const [sales, setSales] = useState([])
    const [reload, setReload] = useState()

    const [filterData, setfilterData] = useState()

    const FilterData = (filter) => {
        setfilterData(filter)
    }

    // const ComponentRef = useRef()

    useEffect(() => {
        http.get("sales")
            .then(res => {
                setSales(res.data)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [reload])

    let total = 0, gst = 0, nop = 0, count = 0, x

    for (x of sales) {
        if (x.success) {
            total += x.total
            gst += x.gst
            nop += x.numofproduct
            count += 1
        }
    }

    const CancelBill = (id) => {
        if (window.confirm("Confirm to Delete")) {
            http.delete("/sales", { params: { id: id } })
                .then(res => {
                    alert(res.data)
                    setReload(id)
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }

    }

    const ReturnBill = (id) => {
        console.log(id)
        if (window.confirm("Confirm to Return")) {
            http.put("/sales", { id: id })
                .then(res => {
                    alert(res.data)
                    setReload(id)
                })
                .catch(err => {
                    console.log("Error", err)
                })
        }
    }


    return (
        <div>
            <Sales />

            <div className="w3-container istats mt-3">
                <div className="w3-card w3-purple w3-center">
                    <h3 className="p-3 w3-text-large">{total.toFixed(2)}</h3>
                    <p className="w3-left pl-3">Total Amount</p>
                </div>
                <div className="w3-card w3-blue w3-center">
                    <h3 className="p-3">{gst.toFixed(2)}</h3>
                    <p className="w3-left pl-3">Total Gst Amount</p>
                </div>
                <div className="w3-card w3-indigo w3-center">
                    <h3 className="p-3">{nop}</h3>
                    <p className="w3-left pl-3">Total Products Sale</p>
                </div>
                <div className="w3-card w3-yellow w3-center">
                    <h3 className="p-3">{count}</h3>
                    <p className="w3-left pl-3">Total Bill</p>
                </div>

            </div>


            <div className="sFilter w3-container mt-3">
                {
                    <Filter FilterData={FilterData} data={sales} />
                }
            </div>

            <div className="w3-container">

                {
                    filterData ? (
                        filterData.map((data, index) =>
                            <div key={index}>
                                <div className="w3-card-2 m-3 scard">

                                    <div className="scardtop">

                                        <div className="saddress">
                                            <div className="sbilladd">
                                                <p><b>Bill To </b></p>
                                                <p>{data.bill.name}</p>
                                            </div>
                                            <div className="sbilladd">
                                                <p><b>Ship To </b></p>
                                                <p>{data.ship.name}</p>
                                            </div>
                                        </div>

                                        <div className="billaction">
                                            <div className="w3-center sbuttons">
                                                <div className="sview">
                                                    <button className="w3-button w3-blue mt-3" data-toggle="modal" data-target={`#id${data._id}`}>View</button>
                                                </div>
                                                {
                                                    data.success && (
                                                        <>
                                                            <div className="sdelete">
                                                                <button className="w3-button w3-yellow mt-3" onClick={() => ReturnBill(data._id)} >Return</button>
                                                            </div>
                                                            <div className="sdelete">
                                                                <button className="w3-button w3-red mt-3" onClick={() => CancelBill(data._id)} >Delete</button>
                                                            </div>
                                                        </>
                                                    )
                                                }

                                            </div>
                                        </div>

                                    </div>

                                    <div className="scarddown">
                                        <div>
                                            <p className="pl-2">Invoice No : {SpeInvoiceNumber(data.invoicenumber)}</p>
                                        </div>
                                        <div>
                                            <p>Date : {MyDate(data.invoicedate)}</p>
                                        </div>
                                        <div>
                                            <p>Payment : {data.payment}</p>
                                        </div>
                                        <div>
                                            <p>Gst : {data.gst.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p>Total : {data.total.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="pr-2">NOP : {data.numofproduct}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal" id={`id${data._id}`} >
                                    <div className="modal-dialog modal-xl">
                                        <div className="modal-content">
                                            <PrintButton SalesData={data} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )

                    )
                        :
                        (
                            sales.map((data, index) => (
                                <div key={index}>
                                    <div className="w3-card-2 m-3 scard">

                                        <div className="scardtop">

                                            <div className="saddress">
                                                <div className="sbilladd">
                                                    <p><b>Bill To </b></p>
                                                    <p>{data.bill.name}</p>
                                                </div>
                                                <div className="sbilladd">
                                                    <p><b>Ship To </b></p>
                                                    <p>{data.ship.name}</p>
                                                </div>
                                            </div>

                                            <div className="billaction">
                                                <div className="w3-center sbuttons">
                                                    <div className="sview">
                                                        <button className="w3-button w3-blue mt-3" data-toggle="modal" data-target={`#id${data._id}`}>View</button>
                                                    </div>
                                                    {
                                                        data.success && (
                                                            <>
                                                                <div className="sdelete">
                                                                    <button className="w3-button w3-yellow mt-3" onClick={() => ReturnBill(data._id)} >Return</button>
                                                                </div>
                                                                <div className="sdelete">
                                                                    <button className="w3-button w3-red mt-3" onClick={() => CancelBill(data._id)} >Delete</button>
                                                                </div>
                                                            </>
                                                        )
                                                    }

                                                </div>
                                            </div>

                                        </div>

                                        <div className="scarddown">
                                            <div>
                                                <p className="pl-2">Invoice No : {SpeInvoiceNumber(data.invoicenumber)}</p>
                                            </div>
                                            <div>
                                                <p>Date : {MyDate(data.invoicedate)}</p>
                                            </div>
                                            <div>
                                                <p>Payment : {data.payment}</p>
                                            </div>
                                            <div>
                                                <p>Gst : {data.gst.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p>Total : {data.total.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p className="pr-2">NOP : {data.numofproduct}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal" id={`id${data._id}`} >
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <PrintButton SalesData={data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                            )
                        )
                }
            </div>
        </div>
    )
}

export default Invoice
