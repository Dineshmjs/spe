// import React from 'react'
import Address from './Address'
import CompanyDetails from './CompanyDetails'
import Taxinvoice from './Taxinvoice'
import './index.css'
import Sign from './Sign'
import AmountWord from './AmountWord'
import Products from './Products'



import React, { Component } from 'react'

export default class SaesBill extends Component {
    constructor(props) {
        super(props)

        const {items,total,...address}  = this.props.SalesData
    
        this.state = {
            items:items,
            total:total,
            address:address                 
        }
        
    }

    
    
    render() {
        return (
            <div className="mt-3 w3-container">           
                <Taxinvoice />
                <CompanyDetails />
                <Address address={this.state.address} />    
                <Products items={this.state.items} />
                <AmountWord total={this.state.total} />
                <Sign />  
                <br></br>                 
            </div>
        )
    }
}

// function SalesBill({SalesData}) {  
//     const {items,total,...address}  = SalesData
    
//     return (
        // <div className="mt-3 w3-container">           
        //     <Taxinvoice />
        //     <CompanyDetails />
        //     <Address address={address} />    
        //     <Products items={items} />
        //     <AmountWord total={total} />
        //     <Sign />   

//             {/* <Taxinvoice />
//             <CompanyDetails />
//             <Address />    
//             <Products  />
//             <AmountWord  />
//             <Sign />         */}
//         </div>
//     )
// }

// export default SalesBill


