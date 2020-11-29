import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Main from '../component/'
import  Sales from '../component/sales'
import  Purches from '../component/purches'

function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Main} />
                <Route exact path="/sales" component = {Sales} />
                <Route exact path="/purches" component = {Purches} />
            </Switch>
        </BrowserRouter>
    )
}

export default index
