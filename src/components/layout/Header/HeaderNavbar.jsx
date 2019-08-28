import React, {Component} from 'react';

import {Link, NavLink} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

import i18next from 'i18next';
import {withTranslation} from "react-i18next";

import Modal from '../../Modal/Modal';
import ContactUs from '../../pages/ContactUs';

import Logo from '../../../images/mpi.png';
import logoEn from '../../../images/en_.jpg';
import logoRu from '../../../images/ru.png';

class HeaderNavbar extends Component {
    state = {
        mobileMenuOpened: false,
        display: 'none',
        activeLng: 'en',
        isOpen: false,
    };

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    componentDidMount() {
        const lang = localStorage.getItem(`lang`);

        if(lang) {
           this.setState({
               activeLng : lang,
           }) ;
        }

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
        this.setState({
            isOpen: false,
        });
    }

    /**
     * Change font family in
     */
    setCustomStyles(lng) {
        document.body.classList.remove("lang-ru");
        document.body.classList.remove("lang-en");

        document.body.classList.add(`lang-${lng}`);
    }

    changeLanguage(name) {
        this.setCustomStyles(name);

        this.setState({
            activeLng: name
        });


        i18next.changeLanguage(name, (err, t) => {
            localStorage.setItem(`lang`, name);

            if (err) return console.log('something went wrong loading', err);

            // t('key'); // -> same as i18next.t
        });
    }

    render() {

        const isOpen = this.state.isOpen;

        const mobileMenuOpened = this.state.mobileMenuOpened;
        const mobileMenuClass = mobileMenuOpened ? "opened" : "closed";

        const navbarItems = [
            {translateKey: `NAVBAR_SECTION_1`, to: `about`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_2`, to: `services`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_3`, to: `technologies`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_4`, to: `our-team`, customClass: ``, cb: this.scrollToSection},
            {translateKey: `NAVBAR_SECTION_5`, to: `contacts`, customClass: ``, cb: this.openModal},
        ];

        const languages = [
            {imageSrc: logoEn, name: "en", cb: this.changeLanguage},
            {imageSrc: logoRu, name: "ru", cb: this.changeLanguage},
        ];

        return (
            <>
                <Navbar expand="md" className="navbar-dark container">
                    <Link style={{display: this.state.display}} to='/' className="navbar-brand siteLogo">
                        <img src={Logo} alt="Brand Logo"/>
                        <small className="pl-2">+1 (678) 534 8794</small>
                    </Link>

                    <div className={`toggleButton d-md-none ${mobileMenuClass}`} onClick={this.toggleMobileMenu}>
                        <span/>
                        <span/>
                        <span/>
                    </div>

                    <div className={`navbar-collapse justify-content-end ${mobileMenuClass}`}
                         id="navbarSupportedContent">
                        <Nav navbar className="mr-0">
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
                            {
                                <div className="language-content">
                                    {languages.map((lng, index) => {
                                        return (
                                            this.state.activeLng !== lng.name ? (
                                                <div key={index} className="language"
                                                     onClick={() => lng.cb(lng.name)}>{lng.name.toUpperCase()}</div>) : null

                                        )
                                    })}
                                </div>
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