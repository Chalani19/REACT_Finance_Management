import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-lig">

            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: "#800040" }}>RUSTY  DECO</a>
                <button className="navbar-toggler" type="button" data-toggle="collaps" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" style={{ color: "blue" }} className="nav-link">Home</Link>
                        </li>
                    </ul>
                </div>
                <h3 style={{ color: "#000099" }}>FINANCE MANAGEMENT</h3>
            </div>
        </nav>
        );
    }
}