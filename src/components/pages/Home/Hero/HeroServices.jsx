import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class HeroServices extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {src, alt, header, text, link} = this.props;
        return (
            <div className="serviceItem text-center d-flex flex-wrap align-content-center justify-content-center">
                <div className="topPart">
                    <img className="pb-3" src={src} alt={alt}/>
                    <h5>{header}</h5>
                </div>
                <div className="d-none bottomPart">
                    <p className="pb-2">{text}</p>
                    <Link to={link}>DETAILS</Link>
                </div>
            </div>
        );
    }
}