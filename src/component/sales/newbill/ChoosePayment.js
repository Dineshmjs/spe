import React from 'react'

function ChoosePayment() {
    return (
        <div className="w3-card mt-3">
            <h5 className="w3-center w3-text-blue pt-3">Choose Payment</h5>
            <br />
            <form className="m-3">
                <select className="form-control w3-light-gray">
                    <option>Select Payment</option>
                    <option value="CASH">Cash</option>
                    <option value="CREDIT">Credit</option>
                    <option value="PHONE PAy">PhonePay</option>
                    <option value="GOOGLE PAY">GooglePay</option>
                    <option value="BHIM">BHIM</option>
                </select>
            </form>
            
            <br />
        </div>
    )
}

export default ChoosePayment
