import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem} from 'reactstrap';

import {faCompass} from '@fortawesome/react-fontawesome';

export default class HeaderNavbar extends Component {
    state = {
        navbarClass:'bg-none navbar-light',
        navPos: "center",
    };

    constructor(props) {
        super(props);

        this.handlePositionChange = this.handlePositionChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handlePositionChange);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handlePositionChange);
    }

    handlePositionChange(event) {
        if (window.scrollY === 0) {
            this.setState({
                navbarClass:'bg-none navbar-light',
                navPos: "center",
            });
        } else {
            this.setState({
                navbarClass:'navbarBg navbar-dark position-fixed w-100',
                navPos: "end",
            });
        }
    }

    render () {
        const {navbarClass, navPos} = this.state;

        return (
            <Navbar expand="md" className={navbarClass}>
                <NavbarBrand href="/">MPI</NavbarBrand>

                <div className="toggleButton d-sm-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`collapse navbar-collapse justify-content-${navPos}`} id="navbarSupportedContent">
                    <Nav navbar className="mr-0">
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/about">ABOUT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/ourTeam">OUR TEAM</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/services">SERVICES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/contact">CONTACT US</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}