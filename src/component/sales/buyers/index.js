import React, { useState } from 'react'
import InputEntry from './InputEntry'
import ViewAddress from './ViewAddress'
import { http } from '../../../axios'
import Sales from '../../sales'

function Address() {
    const initialValues = {
        name: "",            
        address: "",
        gstin: "",   
        dlno:""        
    }

    const [reload, setReload] = useState(1)

    const Reload = (id) => {
        console.log(id)
        setReload(id)
    }

    const [update, setUpdate] = useState(false)
    const [updateValues, setupdateValues] = useState(initialValues)
    const [insert, setInsert] = useState(true)

    const Update = (data, status, values) => {
        console.log(data, status)
        if (status) {
            setUpdate(status)
            setupdateValues(data)
            setInsert(false)
        }
        else {
            if (values) {
                editItem(data, status, values)
            }
            else {
                setupdateValues(data)
                setInsert(true)
                setUpdate(false)
            }
        }
    }

    const editItem = (data, status, values) => {
        http.put("address", values)
            .then(res => {
                console.log(res.data)
                setReload(res.data)
                setUpdate(status)
                setupdateValues(data)
                setInsert(true)
            })
            .catch(err => {
                console.log(err)
                alert("Error", err)
            })
    }

    return (
        <div >
            <Sales />
            <InputEntry
                Reload={Reload}
                updateValues={updateValues}
                Update={Update}
                insert={insert}
                update={update}
                initialValues={initialValues}
            />
            <ViewAddress reload={reload} Update={Update} />
        </div>
    )
}

export default Address
