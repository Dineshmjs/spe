// import React from 'react'
import Address from './Address'

import Taxinvoice from './Taxinvoice'
import './index.css'
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
                <Address address={this.state.address} />    
                <Products items={this.state.items} />                             
                <br></br>                 
            </div>
        )
    }
}
