import React,{useState} from 'react'
import ProductEntry from './ProductEntry'
import ViewProduct from './ViewProduct'
import SelectAddress from './SelectAddress'
import ChoosePayment from './ChoosePayment'

function NewBill() {

    const [reload,setReload] = useState("")

    const Reload = (data)=>{
        setReload(data)
    }

    return (
        <div className="mt-3">
            <div className="w3-card">
                <ProductEntry Reload={Reload} reload={reload}  />
                <ViewProduct reload={reload} Reload={Reload} />
            </div>

            <SelectAddress />
            <ChoosePayment />

            <div className="w3-center mb-3">
                <button className="btn btn-primary mt-3">
                    Finish
                </button>
                <br/>
            </div>


        </div>
    )
}

export default NewBill
