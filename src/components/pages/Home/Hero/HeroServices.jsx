import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class HeroServices extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {src, alt, header, text, link} = this.props;
        return (
            <div className="serviceItem text-center d-flex flex-wrap align-content-center justify-content-center">
                <div className="topPart">
                    <img className="pb-3" src={src} alt={alt}/>
                    <h5>{this.props.t(header)}</h5>
                </div>
                <div className="d-none bottomPart">
                    <p className="pb-2">{this.props.t(text)}</p>
                    <Link to={link}>{this.props.t('HERO_SERVICES_DETAILS_BUTTON')}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(HeroServices);