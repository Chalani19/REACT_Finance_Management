import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Payment = props => (
    <tr>
        <td > {props.Payment.PaymentID} </td>
        <td > {props.Payment.CustomerID} </td>
        <td > {props.Payment.FirstName} </td>
        <td > {props.Payment.LastName} </td>
        <td > {props.Payment.Email} </td>
        <td > {props.Payment.PaymentMethod} </td>
        <td > {props.Payment.PackageName} </td>
        <td > {props.Payment.TotalAmount} </td>
        <td>  {props.Payment.PaymentStatus}</td>
        <td >
            <Link to={"/edit/" + props.Payment._id} > Edit </Link> | <a href=" " onClick={() => { props.deletePayment(props.Payment._id) }}>Delete</a >
        </td >
    </tr>
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

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ color: "#990033" }}> All  Payments </h1>
                <br />
            
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-9 mt-2 mb-2" style={{ float: 'none' }} >
                            <Link to="/Report" >
                                <button class="btn btn-outline-success my-4 my-sm-0" type="submit">Report</button>
                            </Link>
                        </div>

                        <div className="col-lg-3 mt-2 mb-2" style={{ float: 'right' }}>
                            <input className="form-control" type="search" placeholder="Search by First Name" name="searchQuery"
                                onChange={this.handleSearchArea} >
                            </input>
                        </div >
                    </div>

                    <table class="table table-bordered table-light" >
                        <thead className="thead-dark" >
                            <tr>
                                <th > Payment ID </th>
                                <th > Customer ID </th>
                                <th > First Name </th>
                                <th > Last Name </th>
                                <th > E-mail </th>
                                <th > Payment Method</th>
                                <th > Package Name:</th>
                                <th > Total Amount</th>
                                <th > Payment Status</th>
                                <th > Actions </th>
                            </tr >
                        </thead>
                        <tbody>

                            {
                                this.state.Payment.map(props =>
                                    <tr key={props.PaymentID} >

                                        <td > {props.PaymentID} </td>
                                        <td > {props.CustomerID} </td>
                                        <td > {props.FirstName} </td>
                                        <td > {props.LastName} </td>
                                        <td > {props.Email} </td>
                                        <td > {props.PaymentMethod} </td>
                                        <td > {props.PackageName} </td>
                                        <td > {props.TotalAmount}</td>
                                        <td>  {props.PaymentStatus}</td>
                                        <td >
                                            <Link to={"/edit/" + props._id} >  <Button variant="warning btn-sm"> Edit </Button> </Link>
                                            <a href="" onClick={() => { this.deletePayment(props._id) }}> <Button variant="danger btn-sm"> Delete </Button> </a >
                                        </td >
                                    </tr>
                                )
                            }

                        </tbody>
                    </table >

                    <div style={{ float: 'right' }} >

                        <Link to="/create" >
                            <button type="button" class="btn btn-success" variant="primary" > New Payment </button>
                        </Link >
                    </div>
                </div>
            </div>
        )
    }
}






