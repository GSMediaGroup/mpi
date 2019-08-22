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
                    <h6>{this.props.t(header)}</h6>
                </div>
                <div className=" pt-4 d-none bottomPart">
                    {/* <p className="pb-3 pt-3 inner-texts">{this.props.t(text)}</p> */}
                    <Link to={link}>{this.props.t('HERO_SERVICES_DETAILS_BUTTON')}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(HeroServices);