import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from '../component/'
import  Sales from '../component/sales'
import  Purches from '../component/purches'
import FinalBill from '../component/sales/newbill/bill'

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Main} />
                <Route exact path="/sales" component = {Sales} />
                <Route exact path="/purches" component = {Purches} />
                <Route exact path="/final" component={FinalBill} />
            </Switch>
        </BrowserRouter>
    )
}

export default index
