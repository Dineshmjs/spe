import React,{useState,useEffect} from 'react'
import {http} from '../../../axios'

function SelectAddress({BillingAddress,ShippingAddress,reset}) {

    const [address,setAddress] = useState([])
    const [billing,setBilling] = useState({})
    const [shipping,setShipping] = useState({})

    useEffect(() => {
       http.get("/address")
       .then(res=>{
           setAddress(res.data)
       })
       .catch(err=>{
           console.log(err)
       })
    }, [])

    useEffect(() => {
        document.getElementById("billingform").reset()
        document.getElementById("shippingform").reset()
        setBilling({})
        setShipping({})
    }, [reset])

    const SelectBilling =(index)=>{
        let add = address[index]
        setBilling(add)
        BillingAddress(add)        
    }

    const SelectShipping =(index)=>{
        let add = address[index]
        setShipping(add)
        ShippingAddress(add)        
    }

    




    return (
        <div className="w3-card">
            <h5 className='w3-center w3-text-blue p-3'>Sales Address</h5> <br />

            <div className="saform">
                <div className="sabilling"> 
                    <form className="m-3" id="billingform">
                        <select className="form-control w3-light-gray" onChange={(e)=>SelectBilling(e.target.value)}>
                            <option>Select Billing Address</option>
                            {
                                address.map((data,index)=>{
                                    return(
                                    <option key={data._id} value={index}>{data.name}</option>
                                    )
                                })
                            }
                        </select>
                    </form>

                    <div className="w3-container">
                            <table className="w3-table-all">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{billing.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{billing.address}</td>
                                    </tr>
                                    <tr>
                                        <th>GSTIN</th>
                                        <td>{billing.gstin}</td>
                                    </tr>
                                    <tr>
                                        <th>DLNO</th>
                                        <td>{billing.dlno}</td>
                                    </tr>     
                                </tbody>
                            </table>
                    </div>
                </div>

                <div className="sashipping">
                    <form className="m-3" id="shippingform">
                        <select className="form-control w3-light-gray" onChange={(e)=>SelectShipping(e.target.value)}>
                            <option>Select Shipping Address</option>
                            {
                                address.map((data,index)=>{
                                    return(
                                    <option key={data._id} value={index}>{data.name}</option>
                                    )
                                })
                            }
                        </select>
                    </form>

                    <div className="w3-container">
                            <table className="w3-table-all">
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{shipping.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{shipping.address}</td>
                                    </tr>
                                    <tr>
                                        <th>GSTIN</th>
                                        <td>{shipping.gstin}</td>
                                    </tr>
                                    <tr>
                                        <th>DLNO</th>
                                        <td>{shipping.dlno}</td>
                                    </tr>     
                                </tbody>
                            </table>
                    </div>
                </div>

            </div>
            <br />
            <br />


        </div>
    )
}

export default SelectAddress