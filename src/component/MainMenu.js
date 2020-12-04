import React from 'react'
import { Link } from 'react-router-dom'
import billingImg from './../img/billing.jpg'
import updateImg from './../img/update1.jpg'
import showImg from './../img/show.jpg'
import './index.css'

function MainMenu() {
    return (
        <div>

            <div className="w3-row-padding">
                <div className="w3-third">
                    <div className="w3-card">
                        <h4 className="w3-center w3-text-green" >Sales</h4>
                        <Link to="sales"><img src={billingImg} alt="billing" id="img" /></Link>
                    </div>
                </div>
                <div className="w3-third">
                    <div className="w3-card">
                        <h4 className="w3-center w3-text-green" >Purches</h4>
                        <Link to="purches"><img src={updateImg} alt="update" id="img" /></Link>
                    </div>
                </div>
                <div className="w3-third">
                    <div className="w3-card">
                        <h4 className="w3-center w3-text-green" >Tax</h4>
                        <Link to="bills"><img src={showImg} alt="show" id="img" /></Link>
                    </div>
                </div>


            </div>
        </div>                

    )
}

export default MainMenu
