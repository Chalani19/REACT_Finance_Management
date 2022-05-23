import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class home extends Component {

    render() {
        return (
            <div>
                <h1 style={{ color: "#990033" }}>Home Page</h1>

                <br></br>
                <br></br>
                <br></br>

                <div className="container" >
                    <div>
                        <Link to="/list" >
                            <button type="button" class="btn btn-success" variant="primary" > Payment Details </button>
                        </Link >
                    </div>
                    <br></br>
                    <div >
                        <Link to="" >
                            <button type="button" class="btn btn-success" variant="primary" > Salary Details </button>
                        </Link >
                    </div>
                </div>

            </div>
        );
    }
}

