import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { withTranslation } from "react-i18next";

class BottomSection extends Component {

    render() {
        const copyright = `FOOTER_BOTTOM_SECTION_COPYRIGHT`;

        return (
            <Row className="footer-row">
                <Col className="text-left">

                    <p>{this.props.t(copyright)}</p>

                </Col>
                <Col className="pt-3 socialBlock d-flex justify-content-center">

                    <ul className="d-flex flex-column flex-md-row">
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faFacebook} />
                                Facebook
                        </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faGoogle} />
                                Google
                        </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faInstagram} />
                                Instagram
                        </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faYoutube} />
                                YouTube
                        </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faTwitter} />
                                Twitter
                        </Link>
                        </li>
                    </ul>
                </Col>

            </Row>

        );
    }
}

export default withTranslation()(BottomSection);