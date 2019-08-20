import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

export default class ServiceBlockTitle extends Component {

    constructor (props) {
        super (props);
    }

    render () {
        const title = 'OUR SERVICES',
            text = 'MWe are always happy to cooperate with companies that are in need of creating software products able to improve their customers’ experience and automate internal processes.';
        return (
            <Row>
                <Col md={5} className="mx-auto text-center col-12">
                    <h2 className="pb-5">{title}</h2>
                    <p>{text}</p>
                </Col>
            </Row>
        );
    }
}