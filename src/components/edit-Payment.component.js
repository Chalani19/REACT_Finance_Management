import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditPayment extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/Payment/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    PaymentID: response.data.PaymentID,
                    CustomerID: response.data.CustomerID,
                    FirstName: response.data.FirstName,
                    LastName: response.data.LastName,
                    Email: response.data.Email,
                    PaymentMethod: response.data.PaymentMethod,
                    PackageName: response.data.PackageName,
                    TotalAmount: response.data.TotalAmount,
                    PaymentStatus: response.data.PaymentStatus,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Payment/list')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Payment: response.data.map(Payment => Payment.FirstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

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

        axios.post('http://localhost:5000/Payment/update/' + this.props.match.params.id, Payment)
            .then(res => console.log(res.data));
        alert("Edit Successfully")
        window.location = '/list';
    }

    render() {
        return (<div >
            <div class="row" >
                <div class="col-6" >
                    <br /> < br /> < br /> < br /> < br /> < br />
                    <img src="https://c.tenor.com/L5g2mZgoLykAAAAS/office-of-course.gif"
                        width="90%"
                        height="60% " />
                </div>
                <div class="col-6" >
                    <div class="myformstyle2" >
                        <div className="card-body" >
                            <div className="col-md-8 mt-4 mx-auto" >
                            </div>
                            <h3 className="text-center" style={{ color: "#990033" }}> <font face="Comic sans MS" size="6" > Edit Payment</font> </h3 >
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group" >
                                    <label > Payment ID: </label>
                                    <input type="text" required className="form-control" placeholder="Enter Payment ID" value={this.state.PaymentID}
                                        onChange={this.onChangePaymentID} />
                                </div >

                                <div className="form-group" >
                                    <label > Customer ID: </label>
                                    <input type="text" required className="form-control" placeholder="Enter Customer ID" value={this.state.CustomerID}
                                        onChange={this.onChangeCustomerID} />
                                </div >

                                <div className="form-group" >
                                    <label > First Name: </label>
                                    <input type="text" required className="form-control" placeholder="Enter First Name" value={this.state.FirstName}
                                        onChange={this.onChangeFirstName} />
                                </div >

                                <div className="form-group" >
                                    <label > Last Name: </label>
                                    <input type="text" required className="form-control" placeholder="Enter Last Name" value={this.state.LastName}
                                        onChange={this.onChangeLastName} />
                                </div >

                                <div className="form-group" >

                                    <div className="form-group" >
                                        <label > Email: </label>
                                        <input type="email" required className="form-control" placeholder="Enter an Email" value={this.state.Email}
                                            onChange={this.onChangeEmail} />
                                    </div>

                                    <div className="form-group" >
                                        <label >Payment Method: </label>
                                        <input type="text" required className="form-control" placeholder="Enter Payment Method" value={this.state.PaymentMethod}
                                            onChange={this.onChangePaymentMethod} />
                                    </div>

                                    <div className="form-group" >
                                        <label > Package Name: </label>
                                        <input type="text" required className="form-control" placeholder="Enter Package Name" value={this.state.PackageName}
                                            onChange={this.onChangePackageName} />
                                    </div>

                                    <div className="form-group" >
                                        <label > Total Amount: </label>
                                        <input type="text" required className="form-control" placeholder="Enter Total Amount" value={this.state.TotalAmount}
                                            onChange={this.onChangeTotalAmount} />
                                    </div>

                                    <div className="form-group" >
                                        <label > Payment Status: </label>
                                        <input type="text" required className="form-control" placeholder="Enter Payment Status" value={this.state.PaymentStatus}
                                            onChange={this.onChangePaymentStatus} />
                                    </div >

                                </div >

                                <div className="form-group" >
                                    <input type="submit"
                                        value="Edit"
                                        className="btn btn-primary" />
                                </div>
                            </form >
                        </div>
                    </div >
                </div>
            </div >
            <br /> < br />
        </div>
        );
    }
}






