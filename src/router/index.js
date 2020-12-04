import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from '../component/'
import  Purches from '../component/purches'
import FinalBill from '../component/sales/newbill/bill/FinalBill'
import SalesInvoice from '../component/sales/invoice'
import NewBill from '../component/sales/newbill'

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Main} />               
                <Route exact path="/purches" component = {Purches} />
                <Route exact path="/final" component={FinalBill} />
                <Route exact path="/sales/newbill" component={NewBill} />
                <Route exact path="/sales" component={SalesInvoice} />
            </Switch>
        </BrowserRouter>
    )
}

export default index
