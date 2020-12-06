
import React from 'react'

function InvoiceEntry({ InvoiceDate, InvoiceNumber, Payment }) {

    return (
        <div className="mt-2">
            <h5 className="w3-center p-2 w3-text-blue" >Invoice Entry</h5><br />
            <div className="m-3">
                <div className="mr-3">
                    <input 
                        type="text" 
                        className="form-control m-3" 
                        name="invoicenumber" 
                        placeholder="Enter InvoiceNumber" 
                        onChange={(e)=>InvoiceNumber(e.target.value)}
                    />
                </div>
                <div className="mr-3">
                    <input 
                        name="invoicedate" 
                        className="form-control m-3" 
                        type="date" 
                        onChange={(e)=>InvoiceDate(e.target.value)}
                    />
                </div>
                <div className="mr-3">
                    <select name="payment" className="form-control w3-light-gray m-3" onChange={(e)=>Payment(e.target.value)}>
                        <option value="">Select Payment</option>
                        <option value="CASH">Cash</option>
                        <option value="CREDIT">Credit</option>
                        <option value="PHONE PAY">PhonePay</option>
                        <option value="GOOGLE PAY">GooglePay</option>
                        <option value="BHIM">BHIM</option>
                    </select>
                </div>
            </div>            
        </div>
    )
}

export default InvoiceEntry
