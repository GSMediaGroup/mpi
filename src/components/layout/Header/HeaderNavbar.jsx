import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { withTranslation } from "react-i18next";
import i18next from 'i18next';

import Modal from '../../Modal/Modal';

import Logo from '../../../images/mpi.png';
import logoEn from '../../../images/en_.jpg';
import logoRu from '../../../images/ru.png';

class HeaderNavbar extends Component {
    state = {
        mobileMenuOpened: false,
        display: 'none',
        activeLng: 'en'
    };

    constructor(props) {
        super(props);

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let styleObject = {};
        if (window.scrollY <= 10) {
            styleObject['display'] = 'none';
        } else {
            styleObject['display'] = 'block';
        }
        this.setState(styleObject)
    };


    toggleMobileMenu() {
        this.setState({
            mobileMenuOpened: !this.state.mobileMenuOpened,
        });
    }

    scrollToSection(id) {
        return (e) => {
            const elem = document.getElementById(id);
            e.preventDefault();

            elem.scrollIntoView({ behavior: 'smooth' });
        };


    }

    openModal(e) {

    }

    /**
     * Change font family in
     */
    setCustomStyles(lng) {
        let hElements = [...document.getElementsByTagName('h1'), ...document.getElementsByTagName('h2'), ...document.getElementsByTagName('h3'),
        ...document.getElementsByTagName('h4', ...document.getElementsByTagName('h5'), ...document.getElementsByTagName('h6'))
        ];

        if (lng == 'en') {
            //change ios button inner text style - break the word
            document.getElementsByClassName('OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION')[0].style.width = '100%';
            document.getElementsByClassName('OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION')[0].style.margin = 'none';
            // change 3 options style in About component
            [...document.getElementsByClassName('about-option')].map((i) => i.style.fontSize = '24px');
            // change the text in h1 in heroTitle
            document.getElementsByClassName('heroTitle')[0].firstChild.style.fontSize = '50px';
            // change the we care big text size
            (document.getElementsByClassName('circle')[0].firstChild).style.fontSize = '50px';
            // change the we care big text and his description lineHeight size
            document.getElementsByClassName('circle')[0].style.lineHeight = '';
            // change the all h1, h2, ... h6 elements font family in page
            hElements.map((i) => {
                i.style.fontFamily = '"Candal", sans-serif';
                i.style.fontWeight = '100';
            });
        } else {
            // change the all h1, h2, ... h6 elements font family in page
            hElements.map((i) => {
                i.style.fontFamily = '"Roboto Condensed", sans-serif';
                i.style.fontWeight = 'bold';
            });
            //change ios button inner text style - break the word
            document.getElementsByClassName('OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION')[0].style.width = '72%';
            document.getElementsByClassName('OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION')[0].style.margin = '0 auto';
            // change the text in h1 in heroTitle
            document.getElementsByClassName('heroTitle')[0].firstChild.style.fontSize = '40px';
            // change the we care big text and his description lineHeight size
            document.getElementsByClassName('circle')[0].style.lineHeight = '45px';
            // change the we care big text size
            document.getElementsByClassName('circle')[0].firstChild.style.fontSize = '42px';
            // change 3 options style in About component
            [...document.getElementsByClassName('about-option')].map((i) => i.style.fontSize = '20px')
        }
    }

    changeLanguage(name) {
        this.setCustomStyles(name);

        this.setState({
            activeLng: name
        });


        i18next.changeLanguage(name, (err, t) => {

            if (err) return console.log('something went wrong loading', err);

            // t('key'); // -> same as i18next.t
        });
    }

    render() {
        const mobileMenuOpened = this.state.mobileMenuOpened;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        const navbarItems = [
            { translateKey: `NAVBAR_SECTION_1`, to: `about`, customClass: ``, cb: this.scrollToSection },
            { translateKey: `NAVBAR_SECTION_2`, to: `services`, customClass: ``, cb: this.scrollToSection },
            { translateKey: `NAVBAR_SECTION_3`, to: `technologies`, customClass: ``, cb: this.scrollToSection },
            { translateKey: `NAVBAR_SECTION_4`, to: `our-team`, customClass: ``, cb: this.scrollToSection },
            { translateKey: `NAVBAR_SECTION_5`, to: `contacts`, customClass: ``, cb: this.openModal }
        ];

        const languages = [
            { imageSrc: logoEn, name: "en", cb: this.changeLanguage },
            { imageSrc: logoRu, name: "ru", cb: this.changeLanguage },
        ];

        return (
            <Navbar expand="md" className="navbar-dark container">
                <Link style={{ display: this.state.display }} to='/' className="navbar-brand siteLogo">
                    <img src={Logo} alt="Brand Logo" />
                </Link>

                <div className={`toggleButton d-md-none ${mobileMenuClass}`} onClick={this.toggleMobileMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                {/* ${this.props.position} */}
                <div className={`navbar-collapse justify-content-end ${mobileMenuClass}`} id="navbarSupportedContent">
                    <Nav navbar className="mr-0">
                        {
                            navbarItems.map((row, index) => (
                                <NavItem key={index}>
                                    {
                                        row.to == "contacts" ? <Modal />
                                            :
                                            <NavLink activeClassName="active"
                                                className={`nav-link ${row.customClass}`}
                                                onClick={row.cb(row.to)}
                                                to={`#${row.to}`}>
                                                {(this.props.t(row.translateKey))}
                                            </NavLink>
                                    }

                                </NavItem>

                            ))
                        }
                        {
                            <div className="language-content">
                                {languages.map((lng, index) => {
                                    return (
                                        this.state.activeLng !== lng.name ? (
                                            <div key={index} className="language" onClick={() => lng.cb(lng.name)}>{lng.name.toUpperCase()}</div>) : null

                                    )
                                })}
                            </div>
                        }
                    </Nav>

                </div>
            </Navbar>
        );
    }
}

export default withTranslation()(HeaderNavbar);