import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render () {
        return (
            <nav>
                <Link to="/">Home</Link>
                <ul>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}