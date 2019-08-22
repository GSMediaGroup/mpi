import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {Col, Row, Container} from 'reactstrap';
import {withTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faGoogle, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

class ContactInfo extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const address = "FOOTER_TOP_SECTION_ADDRESS";

        const socialIcons = [
            {page : `facebook`, icon : faFacebookF},
            {page : `google`, icon : faGoogle},
            {page : `instagram`, icon : faInstagram},
            {page : `youtube`, icon : faYoutube},
            {page : `twitter`, icon : faTwitter},
        ];

        return (
            <Col md={4} lg={4} className="pt-5 contact-information">
                <h6 className="pb-5">Contact Information</h6>
                <Row>
                    <Col md={2} lg={2}>
                        <FontAwesomeIcon icon={ faMapMarkedAlt } />
                    </Col>
                    <Col md={10} lg={10}>
                        { this.props.t(address) }
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2}>
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </Col>
                    <Col md={10} lg={10}>
                        haruta@mtperfectidea.net
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2}>
                        <FontAwesomeIcon icon={ faPhoneAlt } />
                    </Col>
                    <Col md={10} lg={10}>+374 98 916 778</Col>
                </Row>

                <ul>
                    {
                        socialIcons.map( (icon, index) => (
                          <li key={index}>
                              <Link to={icon.page}>
                                  <FontAwesomeIcon icon={icon.icon} />
                              </Link>
                          </li>
                        ))
                    }
                </ul>
            </Col>
        );
    }
}
export default withTranslation()(ContactInfo);