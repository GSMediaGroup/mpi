import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import DesignDesc from '../../../../../images/designDesc.png';

import UX from '../../../../../images/services/ux.png';
import UI from '../../../../../images/services/ui.png';
import Adaptive from '../../../../../images/services/adaptive.png';
import { withTranslation } from 'react-i18next';

class WebDevelopment extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const programingTech = [
            {src: UI, alt: `OUR_SERVICES_BLOCK_3_LOGO_1_ALT`, text: `OUR_SERVICES_BLOCK_3_LOGO_1_DESCRIPTION`},
            {src: UX, alt: `OUR_SERVICES_BLOCK_3_LOGO_2_ALT`, text: `OUR_SERVICES_BLOCK_3_LOGO_2_DESCRIPTION`},
            {src: Adaptive, alt: `OUR_SERVICES_BLOCK_3_LOGO_3_ALT`, text: `OUR_SERVICES_BLOCK_3_LOGO_3_DESCRIPTION`},
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
                        <h3 className="text-center pb-3 pt-3 pt-pd-0">{this.props.t(title)}</h3>
                        <p className="service-content-description">{this.props.t(description)}</p>

                        <Row className="justify-content-between icons-design">
                            {
                                programingTech.map((val, index) => (
                                    <Col key={index} className="progTech">
                                        <img src={val.src} alt={this.props.t(val.alt)} className="" />
                                        <p className="pt-2">{this.props.t(val.text)}</p>
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

export default withTranslation()(WebDevelopment);