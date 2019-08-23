import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../../images/mpi.png';

import { withTranslation } from 'react-i18next';


class HeroTitle extends Component {
    state = {
        display : "block"
    };

    constructor(props) {
        super(props);
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
            styleObject['display'] = 'block';
        } else {
            styleObject['display'] = 'none';
        }
        this.setState(styleObject)
    };

    scrollToAbout () {
        const elem = document.getElementById(`about`);

        elem.scrollIntoView({ behavior : "smooth" });
    }



    render() {

        return (
            <>
                <div className="hero-main  d-flex flex-wrap">
                    <Link style={{ display: this.state.display }} to='/' className="navbar-brand siteLogo">
                        <img src={Logo} alt="Brand Logo" />
                    </Link>
                    <div className="heroTitle d-flex flex-wrap align-content-center">

                        <h1>{this.props.t('HERO_TITLE_HEADER')}</h1>
                        <p className="pb-1 pb-md-4">{this.props.t('HERO_TITLE_DESCRIPTION')}</p>
                        <Link className="more" to="#" onClick={this.scrollToAbout}>{this.props.t('HERO_TITLE_MORE_BUTTON')}</Link>
                    </div>
                </div>

            </>
        );
    }
}

export default withTranslation()(HeroTitle);