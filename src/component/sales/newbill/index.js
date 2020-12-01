import React,{useState} from 'react'
import ProductEntry from './ProductEntry'
import ViewProduct from './ViewProduct'
import SelectAddress from './SelectAddress'
import ChoosePayment from './ChoosePayment'
import { http } from '../../../axios'

function NewBill() {

    const [reload,setReload] = useState("")
    const [payment,setPayment] = useState("")
    const [billingAddress,setBillingAddress] = useState({})
    const [shippingAddress,setShippingAddress] = useState({})
    const [reset,setReset] = useState()

    const Reload = (data)=>{
        setReload(data)
    }

    const Payment = (data)=>{
        setPayment(data)
    }

    const BillingAddress = (data)=>{
        setBillingAddress(data)
        console.log("billing",data)
    }

    const ShippingAddress = (data)=>{
        setShippingAddress(data)
    }    

    const SendData=()=>{
        const postdata = {
            payment:payment,
            billingAddress:billingAddress,
            shippingAddress:shippingAddress
        }
        console.log("finish",postdata)
       http.post("/sales",postdata)
       .then(res=>{
           Reload(res.data)
           setReset(res.data)
       })
       .catch(err=>{
           console.log(err)           
       })
    }



    return (
        <div className="mt-3">
            <div className="w3-card">
                <ProductEntry Reload={Reload} reload={reload}  />
                <ViewProduct reload={reload} Reload={Reload} />
            </div>

            <SelectAddress BillingAddress={BillingAddress} ShippingAddress={ShippingAddress} reset={reset} />
            <ChoosePayment Payment={Payment} reset={reset} />

            <div className="w3-center mb-3">
                <button className="btn btn-primary mt-3" onClick={SendData}>
                    Finish
                </button>
                <br/>
            </div>


        </div>
    )
}

export default NewBill
