import React, {Component} from 'react';
import { Col } from 'reactstrap';

/**
 * This Component allow only title and his description near
 * ----- TITLE -----
 * ---Description---
 */
export default class SliderTitle extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const [HEADER, DESC] = [this.props.title.toUpperCase() || "", this.props.description || ""];
        return (
            <Col md={6} className="slider-container h-100 text-center mx-auto">
                <h2 className="pb-5">{HEADER}</h2>
                <p>{DESC}</p>
            </Col>
        );
    }
}