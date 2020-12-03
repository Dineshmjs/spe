import React,{useEffect} from 'react'

function ChoosePayment({Payment,reset}) {
    useEffect(() => {
        document.getElementById("resetform").reset()
    }, [reset])
    return (
        <div className="w3-card mt-3">
            <h5 className="w3-center w3-text-blue pt-3">Choose Payment</h5>
            <br />
            <form className="m-3" id="resetform">
                <select className="form-control w3-light-gray" onClick={(e)=>Payment(e.target.value)}>
                    <option>Select Payment</option>
                    <option value="CASH">Cash</option>
                    <option value="CREDIT">Credit</option>
                    <option value="PHONE PAY">PhonePay</option>
                    <option value="GOOGLE PAY">GooglePay</option>
                    <option value="BHIM">BHIM</option>
                </select>
            </form>
            
            <br />
        </div>
    )
}

export default ChoosePayment
