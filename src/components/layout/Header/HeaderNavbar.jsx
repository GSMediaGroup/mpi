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
        mobileMenuOpened: false,
    };

    constructor(props) {
        super(props);

        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
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
                navbarClass:'navbarBg navbar-dark',
                navPos: "end",
            });
        }
    }

    toggleMobileMenu() {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened,
        });
    }

    render () {
        const {navbarClass, navPos, mobileMenuOpened} = this.state;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        return (
            <Navbar expand="md" className={`${navbarClass} fixed-top`}>
                <Link to='/' className="navbar-brand">MPI</Link>

                <div className={`toggleButton d-md-none ${mobileMenuClass}`} onClick={this.toggleMobileMenu}>
                    <span />
                    <span />
                    <span />
                </div>

                <div className={`navbar-collapse justify-content-${navPos} ${mobileMenuClass}`} id="navbarSupportedContent">
                    <Nav navbar className="mr-0">
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/about">ABOUT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/our-team">OUR TEAM</NavLink>
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