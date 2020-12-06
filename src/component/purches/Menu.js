import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className="smenu">
            <div className="w3-card smenu-card mt-2">
                <Link to="/purches/newbill">
                    <p className="p-2 mb-0">New Bill</p>
                </Link>                
            </div>
            <div className="w3-card smenu-card mt-2">
                <Link to="/purches">
                    <p className="p-2 mb-0">Invoice</p>    
                </Link>                
            </div>   
            <div className="w3-card smenu-card mt-2">
                <Link to="/purches/buyers">
                    <p className="p-2 mb-0">Buyers Details</p>    
                </Link>                
            </div>            
            <div className="w3-card smenu-card mt-2">
                <Link to="/purches/products">
                    <p className="p-2 mb-0">Products</p>    
                </Link>                
            </div>   
        </div>
    )
}
 
export default Menu
