import React, {Component} from "react";
import {Row, Col, Container} from "reactstrap";
import Logo from '../../images/mpi.png';

import {FontAwesomeIcon} from "react-fontawesome";

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <Row className="align-items-center ">
                        <Col>
                            <span className="siteLogo">
                                <img className="img-fluid" src={Logo} alt="Logo"/>
                            </span>
                        </Col>
                        <Col>
                            <span>IT Park Bussines Center floor 4, Abelyan 6/1, Erevan, Armenia</span>
                            <span>+374 99 22 22 22</span>
                            <span>haruta@myperfectidea.net</span>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
}