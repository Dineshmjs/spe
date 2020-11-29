import React from 'react'

function ChoosePayment() {
    return (
        <div className="w3-card mt-3">
            <h5 className="w3-center w3-text-blue pt-3">Choose Payment</h5>
            <br />
            <form className="m-3">
                <select className="form-control w3-light-gray">
                    <option>Select Payment</option>
                    <option>Cash</option>
                    <option>Credit</option>
                    <option>PhonePay</option>
                    <option>GooglePay</option>
                    <option>BHIM</option>
                </select>
            </form>
            
            <br />
        </div>
    )
}

export default ChoosePayment
