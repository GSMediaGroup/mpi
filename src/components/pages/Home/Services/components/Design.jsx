import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import DesignDesc from '../../../../../images/designDesc.png';

import Android from '../../../../../images/Android.png';
import Hybrid from '../../../../../images/Hybrid.png';
import IOS from '../../../../../images/IOS.png';
import { withTranslation } from 'react-i18next';

class WebDevelopment extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const programingTech = [
            {src: Android, alt: `Android Logo`, text: `Android Apps`},
            {src: Hybrid, alt: `Hybrid Logo`, text: `Hybrid Apps`},
            {src: IOS, alt: `IOS Logo`, text: `IOS Apps`},
        ];

        const title = `OUR_SERVICES_BLOCK_3_TITLE`; 
        const description = `OUR_SERVICES_BLOCK_3_DESCRIPTION`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col md={5} className="align-self-center col-12">
                        <div className="imgContent mx-auto mt-4 mt-md-0">
                            <img src={DesignDesc} alt="Service Content Image"/>
                        </div>
                    </Col>
                    <Col md={7} className="deskContent col-12">
                        <h3 className="text-center pb-5 pt-3 pt-pd-0">{this.props.t(title)}</h3>
                        <p >{this.props.t(description)}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(WebDevelopment);