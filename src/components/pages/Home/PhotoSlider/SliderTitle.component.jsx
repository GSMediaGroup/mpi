import React, {Component} from 'react';

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
            <div className="slider-container h-100">
                <h1 className="slider-title">{HEADER}</h1>
                <p className="slider-description">{DESC}</p>
            </div>
        );
    }
}