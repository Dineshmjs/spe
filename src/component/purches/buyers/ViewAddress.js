import React, { useState, useEffect } from 'react'
import { http } from '../../../axios'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'


function ViewAddress({ reload,Update }) {

    const [viewAddress, setviewAddress] = useState([])
    const [reRender,setreRender] = useState()

    useEffect(() => {
        http.get("buyeraddress")
            .then(res => {
                setviewAddress(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload,reRender])

    

    const deleteItem=(id)=>{
        http.delete("buyeraddress",{params:{id:id}})
        .then(res=>{
            console.log(res.data)
            setreRender(res.data)
            if(res.data.ok === 1){
                alert("Address Deleted SucccessFully")
            }
            else{
                alert("Address Not Deleted")
            }
        })
        .catch(err=>{
            alert("Error Deletion" ,err)
        })
    }

    if(viewAddress.length > 0){
        return (
            <div className="w3-container">
                <table className="w3-table-all">
                    <thead>
                        <tr className="w3-green">
                            <td>Name</td>                                                     
                            <td>Address</td>
                            <td>GSTIN</td>
                            <td>DLNO</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewAddress.map(data => (
                                <tr key={data._id} >
                                    <td>{data.name}</td>              
                                    <td>{data.address}</td> 
                                    <td>{data.gstin}</td>
                                    <td>{data.dlno}</td>
                                    <td className="w3-text-green" onClick={()=>Update(data,true)}><EditIcon /></td>
                                    <td className="w3-text-red" onClick={()=>deleteItem(data._id)}><DeleteIcon /></td>                               
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br />
    
            </div>
            
        )
    }    
    else{
        return null
    }
    
}

export default ViewAddress
