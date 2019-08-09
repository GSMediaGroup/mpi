import React, {Component} from "react";
import {Row, Col, Container} from "reactstrap";
import Logo from '../../../images/mpi.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default class TopSection extends Component {
    render () {
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
                                IT Park Bussines Center, Abelyan 6/1, Erevan, Armenia
                            </span>
                       <span className="pt-3 pt-md-0">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                +374 99 22 22 22
                            </span>
                       <span className="pt-3 pt-md-0">
                                <FontAwesomeIcon icon={faEnvelope} />
                                haruta@myperfectidea.net
                            </span>

                   </Col>
               </Row>
           </Col>
       );
    }
}