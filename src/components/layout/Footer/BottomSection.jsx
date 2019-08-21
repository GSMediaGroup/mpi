import React, {Component} from "react";
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

import {withTranslation} from "react-i18next";

class BottomSection extends Component {

    render () {
        const copyright = `FOOTER_BOTTOM_SECTION_COPYRIGHT`;

        return (
            <>
            <div className="pt-5 socialBlock d-flex justify-content-center">
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
            </div>

            <div className="text-left top-border">
                <p>{ this.props.t(copyright) }</p>
            </div>
            </>
        );
    }
}

export default withTranslation()(BottomSection);