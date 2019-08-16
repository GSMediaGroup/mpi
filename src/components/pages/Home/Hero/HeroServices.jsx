import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class HeroServices extends Component {

    constructor (props) {
        super(props);

        this.moreInfo = this.moreInfo.bind(this);
    }

    moreInfo (event) {
        console.log(event);
    }

    render () {
        const {src, alt, header, text} = this.props;
        return (
            <div className="serviceItem text-center p-3 d-flex flex-column">
                <div className="my-auto">
                    <img className="pb-4" src={src} alt={alt}/>
                    <h5>{header}</h5>
                </div>
                <div className="d-none moreInfo">
                    <p className="pb-3">Best solutions for you!</p>
                    <Link to="#webDev">DETAILS</Link>
                </div>
            </div>
        );
    }
}