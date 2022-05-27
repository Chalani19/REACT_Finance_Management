import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

export default class CreatePayment extends Component {
    constructor(props) {
        super(props);

        this.onChangePaymentID = this.onChangePaymentID.bind(this);
        this.onChangeCustomerID = this.onChangeCustomerID.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePaymentMethod = this.onChangePaymentMethod.bind(this);
        this.onChangePackageName = this.onChangePackageName.bind(this);
        this.onChangeTotalAmount = this.onChangeTotalAmount.bind(this);
        this.onChangePaymentStatus = this.onChangePaymentStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            PaymentID: '',
            CustomerID: '',
            FirstName: '',
            LastName: '',
            Email: '',
            PaymentMethod: '',
            PackageName: '',
            TotalAmount: '',
            PaymentStatus: '',
            Payment: []
        }
    }

    //set the PaymentID 
    onChangePaymentID(e) {
        this.setState({
            PaymentID: e.target.value
        })
    }

    //set the CustomerID 
    onChangeCustomerID(e) {
        this.setState({
            CustomerID: e.target.value
        })
    }

    //set FirstName
    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        })
    }

    //set the LastName
    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        })
    }

    //Set Email
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }

    //set PaymentMethod
    onChangePaymentMethod(e) {
        this.setState({
            PaymentMethod: e.target.value
        })
    }

    //Set PackageName
    onChangePackageName(e) {
        this.setState({
            PackageName: e.target.value
        })
    }

    //set TotalAmount
    onChangeTotalAmount(e) {
        this.setState({
            TotalAmount: e.target.value
        })
    }

    //set PaymentStatus
    onChangePaymentStatus(e) {
        this.setState({
            PaymentStatus: e.target.value
        })
    }

    //submit Function
    onSubmit(e) {
        e.preventDefault();

        const Payment = {
            PaymentID: this.state.PaymentID,
            CustomerID: this.state.CustomerID,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            PaymentMethod: this.state.PaymentMethod,
            PackageName: this.state.PackageName,
            TotalAmount: this.state.TotalAmount,
            PaymentStatus: this.state.PaymentStatus

        }

        console.log(Payment);

        //validation

        axios.post('http://localhost:5000/Payment/add', Payment)
            .then(res => console.log(res.data));

        swal({
            title: "Done!",
            text: "Payment Successfully Added",
            icon: "success",
            button: "Okay!"
        })
            .then((value) => {
                window.location = '/';
            });

    }

    render() {
        return (

            <div className='container'>
                <h3 className="text-center" style={{ color: "#990033" }}> New Payment</h3 >

                <div className="col-md-8 mt-4 mx-auto">
                    <img src="payment.jpeg"
                        width="100%" />
                </div>

                <div className="container mx-auto">
                    <form onSubmit={this.onSubmit} className="mt-5">
                        <div className="row">

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Payment ID: </label>
                                <input type="text" required className="form-control" placeholder="Enter Payment ID" value={this.state.PaymentID}
                                    onChange={this.onChangePaymentID} />
                            </div >

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Customer ID: </label>
                                <input type="text" required className="form-control" placeholder="Enter Customer ID" value={this.state.CustomerID}
                                    onChange={this.onChangeCustomerID} />
                            </div >

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > First Name: </label>
                                <input type="text" required className="form-control" placeholder="Enter First Name" value={this.state.FirstName}
                                    onChange={this.onChangeFirstName} />
                            </div >

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Last Name: </label>
                                <input type="text" required className="form-control" placeholder="Enter Last Name" value={this.state.LastName}
                                    onChange={this.onChangeLastName} />
                            </div >

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Email: </label>
                                <input type="email" required className="form-control" placeholder="Enter an Email" value={this.state.Email}
                                    onChange={this.onChangeEmail} />  </div>

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label >Payment Method: </label>
                                <input type="text" required className="form-control" placeholder="Enter Payment Method" value={this.state.PaymentMethod}
                                    onChange={this.onChangePaymentMethod} />
                            </div>

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Package Name: </label>
                                <input type="text" required className="form-control" placeholder="Enter Package Name" value={this.state.PackageName}
                                    onChange={this.onChangePackageName} />
                            </div>

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Total Amount: </label>
                                <input type="text" required className="form-control" placeholder="Enter Total Amount" value={this.state.TotalAmount}
                                    onChange={this.onChangeTotalAmount} />
                            </div>

                            <div className="mb-3 col-lg-6 col-md-6 col-12" >
                                <label > Payment Status: </label>
                                <input type="text" required className="form-control" placeholder="Enter Payment Status" value={this.state.PaymentStatus}
                                    onChange={this.onChangePaymentStatus} />
                            </div >

                        </div >
                        <div className="text-center">
                                <input type="submit" value="Create" className="btn btn-primary" />
                        </div>

                    </form >
                </div>
            </div >
        );
    }
}






