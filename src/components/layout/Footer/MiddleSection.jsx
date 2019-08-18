import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Row, Col} from "reactstrap";


export default class MiddleSection extends Component {
    render () {
        return (
            <Col className="mx-auto">
                <Row className="top-border bottom-border pt-5 justify-content-center">
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <h3 className="pb-4">Header</h3>
                        <ul>
                            <li>
                                <Link to="#">
                                    Option 1  Option 1 Option 1
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Option 2
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Option 3
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Option 4
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <h3 className="pb-4">Header</h3>
                        <Row className="align-items-center">
                            <Col className="colo-12 col-md">
                                <img className="img-fluid" src="https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920.jpg" alt="sdfsd"/>
                            </Col>
                            <Col className="col-12 col-md-8 pt-3 pt-md-0">
                                <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        );
    }
}