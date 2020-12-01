import React from 'react'
import Address from './Address'
import CompanyDetails from './CompanyDetails'
import Taxinvoice from './Taxinvoice'
import './index.css'
import Sign from './Sign'
import AmountWord from './AmountWord'
import Products from './Products'

function SalesBill() {  
    // const {items,total,...address}  = salesBill
    
    return (
        <div className="mt-3 w3-container">           
            {/* <Taxinvoice />
            <CompanyDetails />
            <Address address={address} />    
            <Products items={items} />
            <AmountWord total={total} />
            <Sign />    */}

            <Taxinvoice />
            <CompanyDetails />
            <Address />    
            <Products  />
            <AmountWord  />
            <Sign />        
        </div>
    )
}

export default SalesBill