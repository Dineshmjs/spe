import React, { useState, useEffect } from 'react'
import { http } from '../../../axios'



function ChooseProduct({Item,reload}) {
    const [Products, setProducts] = useState([])
    const [item,setItem] = useState({})

    useEffect(() => {
        http.get("goods")
            .then(res => {
                setProducts(res.data)                
            })
            .catch(err => {
                console.log("Error", err)
            })
    }, [reload])

    const SelectProduct = (index)=>{
        const product = Products[index]

        if(product.available < 1){
            alert("Stock not Available")
        }

        Item(product)
        setItem(product)
        console.log(product)
    }
    
    useEffect(() => {
       document.getElementById('SelectProduct').reset()
       setItem({})
    }, [reload])

    return (
        <div className="mt-3 mb-3">
            <form id="SelectProduct">
                <div className="cpdiv">
                    <div className="cpselect">
                        <select name="product"  className="form-control" onChange={(e)=>SelectProduct(e.target.value)}>
                            <option value="">Select Product</option>
                            {
                                Products.map((data,index) => {
                                    return (
                                        <option key={data._id} value={index}>{data.product}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="cpdata">
                        <label className="form-control">gst - {item.gst}</label>
                        <label className="form-control">mrp - {item.mrp}</label>
                        <label className="form-control">available - {item.available}</label>
                        <label className="form-control">hsnno - {item.hsnno}</label>
                    </div>
                   

                    {/* <div className="cpinput">
                        <input type="text" className="form-control" placeholder="Bar Code"></input>
                    </div> */}
                </div>

            </form>
        </div>
    )
}

export default ChooseProduct

