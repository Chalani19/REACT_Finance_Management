import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component"
import EditPayment from "./components/edit-Payment.component";
import CreatePayment from "./components/create-Payment.component";
import PaymentList from "./components/Payment-list.component";
import Report from "./components/Report";


function App() {

    return ( 
        <Router >
        <div >
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <Route path = "/" exact component = { PaymentList }/>
        <Route path = "/edit/:id" component = { EditPayment }/> 
        <Route path = "/create" component = { CreatePayment }/>
        <Route path = "/Report" component = { Report }/> 
        
        </div>
         </Router>
    );
}

export default App;

