import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from '../component/'

import FinalBill from '../component/sales/newbill/bill/FinalBill'

import SalesInvoice from '../component/sales/invoice'
import SalesNewBill from '../component/sales/newbill'
import SalesBuyers from '../component/sales/buyers'

import PurchesInvoice from '../component/purches/invoice'
import PurchesNewBill from '../component/purches/newbill'
import PurchesBuyers from '../component/purches/buyers'
import PurchesProducts from '../component/purches/products'

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Main} />               
                
                <Route exact path="/final" component={FinalBill} />

                <Route exact path="/sales/newbill" component={SalesNewBill} />
                <Route exact path="/sales" component={SalesInvoice} />
                <Route exact path="/sales/buyers" component={SalesBuyers} />

                <Route exact path="/purches" component = {PurchesInvoice} />
                <Route exact path="/purches/newbill" component={PurchesNewBill} />
                <Route exact path="/purches/buyers" component={PurchesBuyers} />
                <Route exact path="/purches/products" component={PurchesProducts} />


            </Switch>
        </BrowserRouter>
    )
}

export default index
