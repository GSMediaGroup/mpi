import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem} from 'reactstrap';

export default class _Navbar extends Component {
    render () {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">MPI</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}