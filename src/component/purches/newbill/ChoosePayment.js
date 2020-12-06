import React,{useEffect} from 'react'

function ChoosePayment({Payment,reset}) {
    useEffect(() => {
        document.getElementById("resetform").reset()
    }, [reset])
    return (
        <div className="mt-3">
            <h5 className="w3-center w3-text-blue pt-3">Choose Payment</h5>
            <br />
            <form className="m-3" id="resetform">
               
            </form>
            
            <br />
        </div>
    )
}

export default ChoosePayment
