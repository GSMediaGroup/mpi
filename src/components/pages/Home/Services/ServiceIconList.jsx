import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

import WebDev from '../../../../images/devServiceBg.png';
import MobileDev from '../../../../images/mobileServiceBg.png';
import Design from '../../../../images/designServiceBg.png';
import {DESIGN, MOBILE_DEVELOPMENT, WEB_DEVELOPMENT} from "./ServiceContentList";

export default class ServiceIconList extends Component {
    constructor(props) {
        super(props);
        this.bgChange = this.bgChange.bind(this);
    }

    bgChange(type) {
        return (event) => {
            this.props.onServiceTypeChange(type);
        };
    }

    render() {
        const images = {
            [WEB_DEVELOPMENT]: {src : WebDev, alt : `Web Development`, id : `webDev`},
            [MOBILE_DEVELOPMENT]: {src : MobileDev, alt : `Mobile Development`, id : `mobileDev`},
            [DESIGN]: {src : Design, alt : `Design`, id : `design`},
        };

        return (
            <div className="d-flex justify-content-around pt-5 pb-5">
                {
                    Object.keys(images).map((type, i) => (
                        <div key={i} id={images[type].id} onClick={this.bgChange(type)} className="serviceIcon">
                            <img src={images[type].src} alt={images[type].alt}/>
                        </div>
                    ))
                }
            </div>
        );
    }
}
