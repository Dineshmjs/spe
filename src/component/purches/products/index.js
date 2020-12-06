import React, { useState } from 'react'
import StockInput from './StockInput'
import ViewStock from './ViewStock'
import { http } from '../../../axios'
import Purches from '../../purches'


function Products() {

    const initialValues = {
        product: "",
        hsnno: "",
        mrp: "",
        gst: "",
        available: 0
       
    }

    const [reload, setReload] = useState(1)
    const [insert, setInsert] = useState(true)
    const [update, setUpdate] = useState(false)
    const [formValues, setformValues] = useState(initialValues)

    const Reload = (id) => {
        console.log(id)
        setReload(id)
    }

    const Update = (data, status, values) => {
        if (status) {            
            setUpdate(true)
            setInsert(false)
            setformValues(data)
        }
        else {
            if (values) {               
                editProduct(data, status, values)
            }
            else {                
                setformValues(data)
                setInsert(true)
                setUpdate(false)
            }
        }

    }

    const editProduct = (data, status, values) => {       
        http.put("goods", values)
            .then(res => {
                // console.log(res.data)
                setReload(res.data)
                setformValues(data)
                console.log(data)
                setUpdate(false)                
                setInsert(true)
            })
            .catch(err => {
                console.log(err)
                alert("Error", err)
            })
    }

    return (
        <div>
            <Purches />
            <StockInput Reload={Reload} insert={insert} Update={Update} update={update} formValues={formValues} initialValues={initialValues} />
            <ViewStock reload={reload} Reload={Reload} Update={Update} />
        </div>
    )
}

export default Products
