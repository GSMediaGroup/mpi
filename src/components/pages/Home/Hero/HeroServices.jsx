import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class HeroServices extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {src, alt, header} = this.props;
        const btnText = 'HERO_SERVICES_DETAILS_BUTTON';

        return (
            <div className="serviceItem text-center d-flex flex-wrap align-content-center justify-content-center">
                <div className="topPart">
                    <img className="pb-3" src={src} alt={alt}/>
                    <h6>{this.props.t(header)}</h6>
                </div>
                <div className=" pt-4 d-none bottomPart">
                    <Link to="#" onClick={this.props.onTypeChange}>{this.props.t(btnText)}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(HeroServices);
