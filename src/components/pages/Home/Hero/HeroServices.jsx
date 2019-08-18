import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class HeroServices extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const {src, alt, header} = this.props;
        return (
            <div className="serviceItem text-center d-flex flex-wrap align-content-center justify-content-center">
                <div className="iconService">
                    <img className="pb-3" src={src} alt={alt}/>
                    <h5>{header}</h5>
                </div>
                <div className="d-none moreInfo">
                    <p className="pb-2">Best solutions for you!</p>
                    <Link to="#webDev">DETAILS</Link>
                </div>
            </div>
        );
    }
}