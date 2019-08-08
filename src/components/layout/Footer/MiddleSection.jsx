import React, {Component} from "react";
import {Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading} from "reactstrap";
import Logo from '../../../images/mpi.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default class MiddleSection extends Component {
    render () {
        return (
            <Col className="justify-content-around text-left ">
                <Row className="top-border bottom-border pt-5">
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <h3 >Header</h3>
                        <ul>
                            <li>Option 1  Option 1 Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </Col>
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <h3>Header</h3>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3 Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </Col>
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <h3>Header</h3>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2 Option 3</li>
                            <li>Option 3</li>
                            <li>Option 4</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        );
    }
}