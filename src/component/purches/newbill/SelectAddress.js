import React, { useState, useEffect } from 'react'
import { http } from '../../../axios'

function SelectAddress({BillingAddress,reset}) {

    const [address, setAddress] = useState([])
    const [billing, setBilling] = useState({})

    useEffect(() => {
        http.get("/buyeraddress")
            .then(res => {
                setAddress(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        document.getElementById("billingform").reset()
        setBilling({})
    }, [reset])

    const SelectBilling = (index) => {
        
        if(index === "100"){
            console.log("no address")
            
            setBilling("")
            BillingAddress("")
        }
        else{
            let add = address[index]
            setBilling(add)
            BillingAddress(add)
        }
        
    }

    return (
        <div className="">
            <h5 className='w3-center w3-text-blue p-2'>Sales Address</h5> <br />

            <div className="sabilling">
                <form className="m-3" id="billingform">
                    <select className="form-control w3-light-gray" onChange={(e) => SelectBilling(e.target.value)}>
                        <option value="100" >Select Billing Address</option>
                        {
                            address.map((data, index) => {
                                return (
                                    <option key={data._id} value={index}>{data.name}</option>
                                )
                            })
                        }
                    </select>
                </form>

                <div className="w3-container">

                    {
                        billing && (
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
                        )
                    }


                </div>
            </div>


            <br />
            <br />


        </div>
    )
}

export default SelectAddress