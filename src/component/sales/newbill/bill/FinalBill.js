import React,{useState,useEffect} from 'react'
import SalesBill from './'
import {http} from '../../../../axios'


function FinalBill() {
    const [SalesData,setSalesData] = useState()

    useEffect(() => {
       http.get("sales")
       .then(res=>{
           setSalesData(res.data[0])
           console.log(res.data[0])
       })
       .catch(err=>{
           console.log(err)
       })
    }, [])


    return (
        <div>
            {
                SalesData &&    <SalesBill SalesData={SalesData} />
            }
            
        </div>
    )
}

export default FinalBill


// Billing Address
// Shipping Address
// InvoiceDetails
// Name PUBLIC HEALTH CENTRE Name PUBLIC HEALTH CENTRE InvoiceNo SPE/2020-2021/0024
// Address NO: 174, LAKE VIEW ROAD, WEST MAMBALAM, CHENNAI 33. Address Date 10-11-2020
// GSTIN 33AAATT0857CIZU NO: 174, LAKE VIEW ROAD, WEST MAMBALAM,
// CHENNAI 33. Payment CREDIT
// GSTIN 33AAATT0857CIZU DLNO 1000/M111/20 , 1004/M111/21
// DLNO
// 1000/M111/20 , 1004/M111/21

// SRI PADMAVATHI ENTERPRICES
// DEALERS IN QUALITY SURGICAL ITEMS
// 23 A, GROUND FLOOR, BALAJI STREET
// VENKATESA PERUMAL KOIL NAGAR, VALASARAVAKKAM,CHENNAI 600087
// TAMILNADU,CODE:33
// Mobile No:94443 41930, 89398 99440
// Email : sripadhmavathienterprises17@gmail.com
// GSTIN/UIN : 33EJFPK2755A1ZM
// DLNO TN 05 20B 00274 & TN 05 21B 00274
