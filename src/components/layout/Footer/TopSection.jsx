import React, {Component} from "react";
import {Row, Col} from "reactstrap";
import Logo from '../../../images/mpi.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {withTranslation} from "react-i18next";


class TopSection extends Component {
    render () {
        const address = `FOOTER_TOP_SECTION_ADDRESS`;

       return (
           <Col>
               <Row className="align-items-center">
                   <Col md={2}>
                            <span className="siteLogo">
                                <img className="img-fluid" src={Logo} alt="Logo"/>
                            </span>
                   </Col>
                   <Col className="contact d-flex flex-column flex-md-row">
                            <span className="pt-3 pt-md-0">
                                <FontAwesomeIcon icon={faMapMarkedAlt}/>
                                {this.props.t(address)}
                            </span>
                       <span className="pt-3 pt-md-0 justify-content-end">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                +374 99 22 22 22
                            </span>
                       <span className="pt-3 pt-md-0 justify-content-end">
                                <FontAwesomeIcon icon={faEnvelope} />
                                haruta@myperfectidea.net
                            </span>

                   </Col>
               </Row>
           </Col>
       );
    }
}

export default withTranslation()(TopSection);

