import React, { useState } from 'react'
import ProductEntry from './ProductEntry'
import ViewProduct from './ViewProduct'
import SelectAddress from './SelectAddress'
import ChoosePayment from './ChoosePayment'
import { http } from '../../../axios'
import SalesBill from './bill'


function NewBill() {

    const [reload, setReload] = useState("")
    const [payment, setPayment] = useState("")
    const [billingAddress, setBillingAddress] = useState({})
    const [shippingAddress, setShippingAddress] = useState({})    
    const [reset, setReset] = useState()
   
    

    const Reload = (data) => {
        setReload(data)
    }

    const Payment = (data) => {
        setPayment(data)
    }

    const BillingAddress = (data) => {
        setBillingAddress(data)
        console.log("billing", data)
    }

    const ShippingAddress = (data) => {
        setShippingAddress(data)
    }    
    
    const SendData = async() => {

        const postdata = {
            payment: payment,
            billingAddress: billingAddress,
            shippingAddress: shippingAddress
        }
       
        console.log("finish", postdata)
        http.post("/sales", postdata)
            .then(async(res) => {
                Reload(res.data)
                setReset(res.data)                  

            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div className="mt-3">
            <div className="w3-card">
                <ProductEntry Reload={Reload} reload={reload} />
                <ViewProduct reload={reload} Reload={Reload} />
            </div>

            <SelectAddress BillingAddress={BillingAddress} ShippingAddress={ShippingAddress} reset={reset} />
            <ChoosePayment Payment={Payment} reset={reset} />

            <div className="w3-center mb-3">
                <button className="btn btn-primary mt-3" data-toggle="modal" data-target="#bill" onClick={SendData}>
                    Finish
                </button>
                <br />
            </div>

            <div className="modal" id="bill">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <span data-dismiss="modal" className="close">Close</span>
                        <SalesBill  />
                        <br />
                        <div className="w3-center">
                            <button className="w3-button w3-green m-3">PrintBill</button>
                            <button className="w3-button w3-red m-3">CancelBill</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NewBill
