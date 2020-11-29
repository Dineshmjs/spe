import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Head() {
    return (
        <Link to="/" id="hlink">
            <div className="w3-container w3-teal ">
                <h2 className="w3-center p-2 hlink" >Sri Padhmavathi Enterprices</h2>
            </div>
        </Link>

    )
}

export default Head
