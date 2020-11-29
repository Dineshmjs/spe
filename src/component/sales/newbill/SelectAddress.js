import React from 'react'

function SelectAddress() {
    return (
        <div className="w3-card">
            <h5 className='w3-center w3-text-blue p-3'>Sales Address</h5> <br />

            <div className="saform">
                <div className="sabilling">
                    <form className="m-3">
                        <select className="form-control w3-light-gray">
                            <option>Select Billing Address</option>
                            <option>PALANI BALAJI FERTILITY CENTER & HOSPITAL PVT LTD</option>
                        </select>
                    </form>
                </div>

                <div className="sashipping">
                    <form className="m-3">
                        <select className="form-control w3-light-gray">
                            <option>Select Shipping Address</option>
                            <option>PALANI BALAJI FERTILITY CENTER & HOSPITAL PVT LTD</option>
                        </select>
                    </form>
                </div>

            </div>
            <br />
            <br />


        </div>
    )
}

export default SelectAddress