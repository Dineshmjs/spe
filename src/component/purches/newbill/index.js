import React, { useState, useEffect,useRef } from 'react'
import ProductEntry from './ProductEntry'
import ViewProduct from './ViewProduct'
import SelectAddress from './SelectAddress'
import { http } from '../../../axios'
import PurchesBill from './bill'
import Purches from '../../purches'
import {useReactToPrint } from 'react-to-print'
import InvoiceEntry from './InvoiceEntry'
import './index.css'



function NewBill() {

    const [reload, setReload] = useState("")
    const [payment, setPayment] = useState("")
    const [billingAddress, setBillingAddress] = useState("")    
    const [invoicenumber,setInvoicenumber] = useState("")
    const [invoicedate,setInvoicedate] = useState("")
    const [reset, setReset] = useState()
    const [bill, setBill] = useState("")
    const [items, setItems] = useState([])

    const ComponentRef = useRef()
    
    useEffect(() => {
        http.get("tempitem")
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [reload])



    const Reload = (data) => {
        setReload(data)
    }

    const Payment = (data) => {
        setPayment(data)
        console.log(data)
    }

    const InvoiceNumber = (data)=>{
        setInvoicenumber(data)
        console.log(data)
    }

    const InvoiceDate = (data)=>{
        setInvoicedate(data)
        console.log(data)
    }

    const BillingAddress = (data) => {
        setBillingAddress(data)
        console.log(data)
    }    


    const ResetData = () => {
        setPayment("")
        setBillingAddress("")       
    }

    const SendData = async () => {

        if (payment !== "" && billingAddress !== "" && items.length !== 0 && invoicedate !== "" && invoicenumber !=="") {
            const postdata = {
                payment: payment,
                buyerAddress: billingAddress,                
                items: items,
                invoicenumber:invoicenumber,
                invoicedate:invoicedate
            }


            http.post("/purches", postdata)
                .then(async (res) => {
                    Reload(res.data)
                    setReset(res.data)
                    await setBill(res.data)                    
                    ResetData()

                })
                .catch(err => {
                    console.log(err)
                })

        }
        else {
            await setBill("")
            alert("Please Enter All Details")
        }
    }

    const PrintBill = useReactToPrint({
        content:()=>ComponentRef.current,
        documentTitle:bill.invoicenumber
    })

    

    const CancelBill = () => {
        console.log("cancelbill", bill._id)
        http.delete("/purches", { params: { id: bill._id } })
            .then(res => {
                Reload(res.data)

            })
            .catch(err => {
                console.log("Error", err)
            })

    }

    return (
        <div>           
            <Purches />

            <div className="mt-3">
                <div className="w3-card pinvoice">
                    <div className="selectaddress">
                        <SelectAddress BillingAddress={BillingAddress} reset={reset} />    
                    </div>
                    <div className="invoiceentry">
                        <InvoiceEntry InvoiceDate={InvoiceDate} InvoiceNumber={InvoiceNumber} Payment={Payment} />                        
                    </div>   
                </div>
                <div className="w3-card">
                    <ProductEntry Reload={Reload} reload={reload} />
                    <ViewProduct reload={reload} Reload={Reload} items={items} />
                </div>
                

                <div className="w3-center mb-3">
                    <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#bill" onClick={SendData}>
                        Finish
                     </button>                     
                    <br />
                </div>

                <div className="modal" id="bill">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            {/* <button data-dismiss="modal" className="w3-right btn ">* cose</button> */}
                            {
                                bill && <PurchesBill SalesData={bill} ref={ComponentRef} />
                            }

                            <br />
                            <div className="w3-center">
                                <button  className="w3-button w3-green m-3 " onClick={PrintBill}>PrintBill</button>
                                <button  className="w3-button w3-red m-3 " onClick={CancelBill}>CancelBill</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NewBill
