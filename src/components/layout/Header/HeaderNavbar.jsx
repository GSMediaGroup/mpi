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
        this.scrollToSection = this.scrollToSection.bind(this);
    }


    toggleMobileMenu() {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened,
        });
    }

    scrollToSection(id) {
        return(e) => {
            const elem = document.getElementById(id);
            e.preventDefault();

            elem.scrollIntoView();
        };


    }

    render () {
        const mobileMenuOpened = this.state.mobileMenuOpened;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        const navbarItems = [
            {translateKey : `NAVBAR_SECTION_1`, to : `about` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_2`, to : `services` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_3`, to : `technologies` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_4`, to : `our-team` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_5`, to : `contacts` , customClass : ``}
        ];

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
                        {
                            navbarItems.map((row, index) => (
                                <NavItem key={index}>
                                    <NavLink activeClassName="active"
                                             className={`nav-link ${row.customClass}`}
                                             onClick={this.scrollToSection(row.to)}
                                             to={`#${row.to}`}>
                                                { row.translateKey }
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                </div>
            </Navbar>
        );
    }
}