import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem} from 'reactstrap';

export default class HeaderNavbar extends Component {
    state = {
        mobileMenuOpened: false,
    };

    constructor(props) {
        super(props);

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }


    toggleMobileMenu() {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened,
        });
    }

    render () {
        const mobileMenuOpened = this.state.mobileMenuOpened;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        return (
            <Navbar expand="md" className="navbar-dark container">
                <Link to='/' className="navbar-brand">MPI</Link>

                <div className={`toggleButton d-md-none ${mobileMenuClass}`} onClick={this.toggleMobileMenu}>
                    <span />
                    <span />
                    <span />
                </div>

                <div className={`navbar-collapse justify-content-${this.props.position} ${mobileMenuClass}`} id="navbarSupportedContent">
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