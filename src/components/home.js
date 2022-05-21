import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class home extends Component {

    render() {
        return (
            <div>
                <h1>Home Page</h1>

                <br></br>
                <br></br>
                <br></br>

                <div>
                    <Link to="/list" >
                        <button type="button" class="btn btn-success" variant="primary" > Payment's Details </button>
                    </Link >
                </div>
            </div>
        );
    }
}

