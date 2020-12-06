import React, { useState, useEffect } from 'react'
import { http } from '../../../axios'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function ViewStock({ reload, Reload,Update }) {

    const [stock, setStock] = useState([])

    useEffect(() => {
        http.get("goods")
            .then(res => {
                setStock(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload])

    const Delete = (id, qt) => {

        if (qt === 0) {
            http.delete("goods", { params: { id: id } })
                .then(res => {
                    // console.log(res.data)
                    if(res.data.ok === 1){
                        alert("Item Deleted Successfully")
                    }
                    Reload(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else{
            alert("Permission Denied")
        }


    }


    return (
        <div className="container mt-3">
            <table className="w3-table-all">
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>HSNNO</td>
                        <td>MRP</td>                        
                        <td>GST</td>
                        <td>AVAILABLE</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        stock.map(data => (
                            <tr key={data._id}>
                                <td>{data.product}</td>
                                <td>{data.hsnno}</td>
                                <td>{data.mrp}</td>                                
                                <td>{data.gst} %</td>
                                <td>{data.available}</td>
                                <td className="w3-text-green" onClick={() => Update(data, true)} >
                                    <EditIcon />
                                </td>
                                <td className="w3-text-red" onClick={() => Delete(data._id, data.available)}>
                                    <DeleteIcon />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ViewStock
