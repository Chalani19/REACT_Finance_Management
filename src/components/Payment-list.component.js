import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Payment = props => ( <
    tr >
    <
    td > { props.Payment.PaymentID } </td> <
    td > { props.Payment.CompanyName } </td> <
    td > { props.Payment.Address } </td> <
    td > { props.Payment.PostalCode } </td> <
    td > { props.Payment.Email } </td> <
    td > { props.Payment.Description } </td> <
    td > { props.Payment.Materials } </td> <
    td >
    <
    Link to = { "/edit/" + props.Payment._id } > Edit </Link> | <a href=" " onClick={() => { props.deletePayment(props.Payment._id) }}>Delete</a > </
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
            return <Payment Payment = { currentPayment }
            deletePayment = { this.deletePayment }
            key = { currentPayment._id }
            />;
        })
    }

    filterData(Payment, searchKey) {

        this.setState({
            Payment: this.state.Payment.filter(el => el.CompanyName = searchKey)
        })

    }




    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Payment/').then(response => {

            const resultt = response.data
            const result = resultt.filter((props) =>
                props.CompanyName.includes(searchKey)
            )

            this.setState({ Payment: result })

        });

    }

    render() {
        return ( <
            div className = "container" >
    
            <div style = {
                { float: 'none'}
            } > 

            <Link to = "/Report" >
            <button class="btn btn-outline-success my-4 my-sm-0" type="submit">Report</button>
            </Link>
            

            </div>  <br/>
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > All Payment </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by Company Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>

            <
            table class="table table-bordered table-white" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Payment ID </th> <
            th > Company Name </th> <
            th > Company Street Address </th> <
            th > Postal Code </th> <
            th > E mail </th> <
            th > Brief Description of company </th> <
            th > Supply Materials And goods </th> <
            th > Actions </th> </
            tr > </
            thead> <
            tbody >
            
             {
                this.state.Payment.map(props =>
                    <
                    tr key = { props.PaymentID } >
                    
                    <td > { props.PaymentID } </td>  <
                    td > { props.CompanyName } </td>  <
                    td > { props.Address } </td>  <
                    td > { props.PostalCode } </td>  < 
                    td > { props.Email } </td>  <  
                    td > { props.Description } </td>  < 
                    td > { props.Materials } </td>  <  

                    td >
                    <
                    Link to = { "/edit/" + props._id } >  <Button variant = "warning btn-sm"> Edit </Button> </Link>  
                    <a href="" onClick={() => { this.deletePayment(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </
                    td >

                    </tr>
                )

            }

            </tbody> </
            table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/create" >
            <button type="button" class="btn btn-success" variant = "primary" > New Payment </button>
            </
            Link >
            </div>

            </div>
        )
    }
}

