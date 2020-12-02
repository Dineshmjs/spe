import React, { useState, useEffect } from 'react'
import ProductEntry from './ProductEntry'
import ViewProduct from './ViewProduct'
import SelectAddress from './SelectAddress'
import ChoosePayment from './ChoosePayment'
import { http } from '../../../axios'
import SalesBill from './bill'
import Sales from '../../sales'


function NewBill() {

    const [reload, setReload] = useState("")
    const [payment, setPayment] = useState("")
    const [billingAddress, setBillingAddress] = useState("")
    const [shippingAddress, setShippingAddress] = useState("")
    const [reset, setReset] = useState()
    const [bill, setBill] = useState("")
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



    const Reload = (data) => {
        setReload(data)
    }

    const Payment = (data) => {
        setPayment(data)
    }

    const BillingAddress = (data) => {
        setBillingAddress(data)
    }

    const ShippingAddress = (data) => {
        setShippingAddress(data)
    }


    const ResetData = () => {
        setPayment("")
        setBillingAddress("")
        setShippingAddress("")
    }

    const SendData = async () => {

        if (payment !== "" && shippingAddress !== "" && billingAddress !== "" && items.length !== 0) {
            const postdata = {
                payment: payment,
                billingAddress: billingAddress,
                shippingAddress: shippingAddress,
                items: items
            }

            http.post("/sales", postdata)
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

    const PrintBill = () => {

    }

    const CancelBill = () => {
        console.log("cancelbill", bill._id)
        http.delete("/sales", { params: { id: bill._id } })
            .then(res => {
                Reload(res.data)

            })
            .catch(err => {
                console.log("Error", err)
            })

    }



    return (
        <div>
            <Sales />


            <div className="mt-3">
                <div className="w3-card">
                    <ProductEntry Reload={Reload} reload={reload} />
                    <ViewProduct reload={reload} Reload={Reload} items={items} />
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
                            {/* <button data-dismiss="modal" className="w3-right btn ">* cose</button> */}
                            {
                                bill && <SalesBill SalesData={bill} />
                            }

                            <br />
                            <div className="w3-center">
                                <button data-dismiss="modal" className="w3-button w3-green m-3 " onClick={PrintBill}>PrintBill</button>
                                <button data-dismiss="modal" className="w3-button w3-red m-3 " onClick={CancelBill}>CancelBill</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NewBill
