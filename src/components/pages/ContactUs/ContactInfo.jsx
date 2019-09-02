import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {Col, Container} from 'reactstrap';
import {withTranslation} from "react-i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faGoogle, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

class ContactInfo extends Component {

    constructor (props) {
        super(props);

    }

    render () {
        const address = "FOOTER_ADDRESS",
               contactInfoTitle = `CONTACT_INFO_TITLE`;

        const socialIcons = [
            {page : `facebook`, icon : faFacebookF},
            {page : `google`, icon : faGoogle},
            {page : `instagram`, icon : faInstagram},
            {page : `youtube`, icon : faYoutube},
            {page : `twitter`, icon : faTwitter},
        ];


        const contactAddress = [
            {icon : faMapMarkerAlt, text: this.props.t(address)},
            {icon : faEnvelope, text: ` haruta@mtperfectidea.net`},
            {icon : faPhoneAlt, text: `+1 (678) 534 8794` },
        ];


        return (
            <Col md={4} lg={4} className="pt-5 contact-information">

                <Container>
                    <h6 className="pb-4 text-center">{this.props.t(contactInfoTitle)}</h6>

                    <div className="d-flex flex-column contactAddress">
                        {
                            contactAddress.map((row, index) => (
                                <div key={index} className="d-flex flex-row align-items-center">
                                    <FontAwesomeIcon icon={ row.icon } />
                                    <span>{ row.text }</span>
                                </div>
                            ))
                        }
                    </div>

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
                </Container>

            </Col>
        );
    }
}
export default withTranslation()(ContactInfo);