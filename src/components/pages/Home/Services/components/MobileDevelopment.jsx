import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import MobileDesc from '../../../../../images/mobileDesc.png';

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
            {src: Android, alt: `OUR_SERVICES_BLOCK_2_LOGO_1_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_1_DESCRIPTION`},
            {src: Hybrid, alt: `OUR_SERVICES_BLOCK_2_LOGO_2_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_2_DESCRIPTION`},
            {src: IOS, alt: `OUR_SERVICES_BLOCK_2_LOGO_3_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION`},
        ];

        const title = `OUR_SERVICES_BLOCK_2_TITLE`; 
        const description = `OUR_SERVICES_BLOCK_2_DESCRIPTION`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col md={5} className="align-self-center col-12">
                        <div className="imgContent mx-auto mt-4 mt-md-0">
                            <img src={MobileDesc} alt="Service Content Image"/>
                        </div>
                    </Col>
                    <Col md={7} className="deskContent col-12">
                        <h3 className="text-center pb-5 pt-3 pt-md-0">{this.props.t(title)}</h3>
                        <p className="pb-4">{this.props.t(description)}</p>

                        <Row className="justify-content-between">
                            {
                                programingTech.map((val, index) => (
                                    <Col key={index} className="progTech">
                                        <img src={val.src} alt={this.props.t(val.alt)} className="" />
                                        <p>{this.props.t(val.text)}</p>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(WebDevelopment)