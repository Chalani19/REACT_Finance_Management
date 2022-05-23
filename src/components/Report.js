import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { Button } from 'react-bootstrap';

const Payment = props => (
    <tr >
        <td > {props.Payment.PaymentID} </td>
        <td > {props.Payment.CustomerID} </td>
        <td> {props.Payment.FirstName} </td>
        <td> {props.Payment.LastName} </td>
        <td> {props.Payment.Email} </td>
        <td> {props.Payment.PaymentMethod} </td>
        <td > {props.Payment.PackageName} </td>
        <td > {props.Payment.TotalAmount} </td>
        <td>  {props.Payment.PaymentStatus}</td>
        <td>
            <
                Link to={"/edit/" + props.Payment._id} > Edit </Link> | <a href=" " onClick={() => { props.deletePayment(props.Payment._id) }}>Delete</a > </
        td > </tr>
)

export default class PaymentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Payment: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Payment/')
            .then(response => {
                this.setState({ Payment: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Payment/')
            .then(response => {
                this.setState({ Payment: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePayment(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Payment/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Payment: this.state.Payment.filter(el => el._id !== id)
            })
        }
    }

    PaymentList() {
        return this.state.Payment.map(currentPayment => {
            return <Payment Payment={currentPayment}
                deletePayment={this.deletePayment}
                key={currentPayment._id}
            />;
        })
    }

    filterData(Payment, searchKey) {

        this.setState({
            Payment: this.state.Payment.filter(el => el.FirstName = searchKey)
        })

    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Payment/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.FirstName.includes(searchKey)
            )

            this.setState({ Payment: result })

        });

    }
    Report() { window.print(); }

    render() {
        return (
            <div className="container" >

                <div style={{ float: 'none' }} >

                </div>  <br />

                <div className="row" >
                    <div className="col-lg-9 mt-2 mb-2" >
                        <h4> Payment Report </h4>
                    </div>
                </div>

                <table class="table table-bordered table-white" >
                    <thead className="thead-light" >
                        <tr >
                            <th> Payment ID </th>
                            <th> Customer ID</th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> Payment Method</th>
                            <th > Package Name:</th>
                            <th > Total Amount</th>
                            <th > Payment Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            this.state.Payment.map(props =>
                                <tr key={props.PaymentID} >
                                    <td> {props.PaymentID} </td>
                                    <td> {props.CustomerID}</td>
                                    <td> {props.FirstName} </td>
                                    <td> {props.LastName} </td>
                                    <td> {props.Email} </td>
                                    <td> {props.PaymentMethod} </td>
                                    <td > {props.PackageName} </td>
                                    <td > {props.TotalAmount}</td>
                                    <td>  {props.PaymentStatus}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table >

                <div className="container" >

                    <input type="Button" onClick={this.Report} value="Print This Report" className="btn btn-danger" />

                    <br></br>
                    <br></br>

                    <div>
                        <Link to="/list" >
                            <button type="button" class="btn btn-success" variant="primary" > Payment's Details </button>
                        </Link >
                    </div>

                </div>

            </div>
        )
    }
}






