import React, {Component} from 'react';

import {Link, NavLink} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

import {withTranslation} from "react-i18next";

import Modal from '../../Modal/Modal';
import ContactUs from '../../pages/ContactUs';

import Logo from '../../../images/mpi.png';

class HeaderNavbar extends Component {
    state = {
        mobileMenuOpened: false,
        isOpen: false,
    };

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened
        })
    }

    toggleMobileMenu(e) {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened
        }, () => {
            let isOpened = this.state.mobileMenuOpened;

            if (isOpened) window.addEventListener('click', this.closeNav);

            else window.removeEventListener(`click`, this.closeNav);

        });
    }

    scrollToSection(id) {
        return (e) => {
            const elem = (id !== 'services') ? document.getElementById(id) : document.getElementsByClassName(`serviceIcon`)[0];
            e.preventDefault();

            elem.scrollIntoView({behavior: 'smooth'});
        };


    }

    openModal(e) {
        e.preventDefault();

        this.setState({
            isOpen: true,
        });
    }

    closeModal() {
        document.body.style.overflowY = `scroll`;

        this.setState({
            isOpen: false,
        });
    }

    render() {
        const {mobileMenuOpened, isOpen, navPos} = this.state;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        const navbarItems = [
            {translateKey: `NAVBAR_SECTION_1`, to: `about`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_2`, to: `services`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_3`, to: `technologies`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_4`, to: `our-team`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_5`, to: `contacts`, customClass: ``, cb: this.openModal},
        ];

        return (
            <>
                <Navbar expand="md" className="navbar-dark container">
                    <Link to='/' className="navbar-brand siteLogo">
                        <img src={Logo} alt="Brand Logo"/>
                        <span className="phone-number">+1 (678) 534 8794</span>
                    </Link>

                    <div className={`toggleButton ${mobileMenuClass}`}
                         onClick={ (e) => {
                             e.stopPropagation();
                             this.toggleMobileMenu()
                         }}>
                        <span/>
                        <span/>
                        <span/>
                    </div>

                    <div className={`navbar-collapse justify-content-end  ${mobileMenuClass}`}
                         id="navbarSupportedContent"
                         onClick={(e) => e.stopPropagation()}
                    >
                        <Nav navbar>
                            {
                                navbarItems.map((row, index) => {

                                    const method = (row.to === 'contacts') ? row.cb : row.cb(row.to);

                                    return (
                                        <NavItem key={index}>
                                            {
                                                <NavLink activeClassName="active"
                                                         className={`nav-link ${row.customClass}`}
                                                         onClick={method}
                                                         to={`#${row.to}`}>
                                                    {(this.props.t(row.translateKey))}
                                                </NavLink>
                                            }

                                        </NavItem>
                                    )

                                })
                            }
                        </Nav>

                    </div>
                </Navbar>
                {
                    isOpen && (
                        <Modal isOpen={true} onClose={this.closeModal}>
                            <ContactUs onClose={this.closeModal}/>
                        </Modal>
                    )
                }
            </>
        );
    }
}

export default withTranslation()(HeaderNavbar);