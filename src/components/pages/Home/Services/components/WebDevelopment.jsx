import React, {Component} from 'react';
import { Row, Col} from 'reactstrap';

import WebDesc from '../../../../../images/webDesc.png';

import Frontend from '../../../../../images/services/frontend.png';
import Backend from '../../../../../images/services/backend.png';
import Optimize from '../../../../../images/services/optimize.png';
import { withTranslation } from 'react-i18next';

class WebDevelopment extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const programingTech = [
            {src: Frontend, alt: `OUR_SERVICES_BLOCK_1_LOGO_1_ALT`, text: `OUR_SERVICES_BLOCK_1_LOGO_1_DESCRIPTION`},
            {src: Backend, alt: `OUR_SERVICES_BLOCK_1_LOGO_2_ALT`, text: `OUR_SERVICES_BLOCK_1_LOGO_2_DESCRIPTION`,},
            {src: Optimize, alt: `OUR_SERVICES_BLOCK_1_LOGO_3_ALT`, text: `OUR_SERVICES_BLOCK_1_LOGO_3_DESCRIPTION`},

        ];

        const title = `OUR_SERVICES_BLOCK_1_TITLE`;
        const description = `OUR_SERVICES_BLOCK_1_DESCRIPTION`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col md={5} className="align-self-center col-12">
                       <div className="imgContent mx-auto mt-4 mt-md-0">
                           <img src={WebDesc} alt="Service Content Image"/>
                       </div>
                    </Col>
                    <Col md={7} className="deskContent col-12">
                        <h3 className="text-center pb-4 pt-3 pt-md-0">{this.props.t(title)}</h3>
                        <p className="p3-4 service-content-description">{this.props.t(description)}</p>

                        <Row className="justify-content-between icons-web-development">
                            {
                                programingTech.map((val, index) => (
                                    <Col key={index} className="progTech">
                                        <img src={val.src} alt={this.props.t(val.alt)} />
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