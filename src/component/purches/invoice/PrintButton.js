import React,{useRef} from 'react'
import {useReactToPrint } from 'react-to-print'
import SalesBill from '../newbill/bill'

function PrintButton({SalesData}) {

    
    console.log("printbutton",SalesData)
    const ComponentRef = useRef()

    const PrintBill = useReactToPrint({
        content:()=>ComponentRef.current,
        documentTitle:SalesData.invoicenumber,
        copyStyles:true,
    })

    return (
        <div className="w3-center">
            <SalesBill ref={ComponentRef} SalesData={SalesData} />
            <br></br>
            <button className="w3-button w3-center w3-green" onClick={()=>PrintBill(ComponentRef)}>PrintBill</button>
            <br></br>
        </div>
    )
}

export default PrintButton
