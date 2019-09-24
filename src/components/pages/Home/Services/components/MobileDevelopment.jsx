import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import MobileDesc from '../../../../../media/images/mobileDesc.png';

import Android from '../../../../../media/images/Android3.png';
import Hybrid from '../../../../../media/images/Hybrid3.png';
import IOS from '../../../../../media/images/IOS3.png';
import { withTranslation } from 'react-i18next';

class WebDevelopment extends Component {
    
    render() {
        const programingTech = [
            { src: Android, alt: `OUR_SERVICES_BLOCK_2_LOGO_1_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_1_DESCRIPTION`, className:"pt-2 androidTitle" },
            { src: Hybrid, alt: `OUR_SERVICES_BLOCK_2_LOGO_2_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_2_DESCRIPTION`, className: "pt-2 hybridTitle" },
            { src: IOS, alt: `OUR_SERVICES_BLOCK_2_LOGO_3_ALT`, text: `OUR_SERVICES_BLOCK_2_LOGO_3_DESCRIPTION`, className:"pt-2 iosTitle" }
        ];

        const title = `OUR_SERVICES_BLOCK_2_TITLE`;
        const description = `OUR_SERVICES_BLOCK_2_DESCRIPTION`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col lg={5} className="align-self-center col-12">
                        <div className="imgContent mx-auto mt-4 mt-md-0">
                            <img src={MobileDesc} alt="Service Content" />
                        </div>
                    </Col>
                    <Col lg={7} className="deskContent col-12">
                        <h3 className="text-center pb-1 pt-3 pt-md-0">{this.props.t(title)}</h3>
                        <p className="pb-4 pt-4 service-content-description">{this.props.t(description)}</p>

                        <Row className="justify-content-between icons-mobile-development">
                            {
                                programingTech.map((val, index) => (
                                    <Col key={index} className="progTech">
                                        <img src={val.src} alt={this.props.t(val.alt)} className="" />
                                        <p className={val.className}>{this.props.t(val.text)}</p>
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