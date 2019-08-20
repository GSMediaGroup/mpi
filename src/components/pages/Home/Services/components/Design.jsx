import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import DesignDesc from '../../../../../images/designDesc.png';

import Android from '../../../../../images/Android.png';
import Hybrid from '../../../../../images/Hybrid.png';
import IOS from '../../../../../images/IOS.png';

export default class WebDevelopment extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const programingTech = [
            {src: Android, alt: `Android Logo`, text: `Android Apps`},
            {src: Hybrid, alt: `Hybrid Logo`, text: `Hybrid Apps`},
            {src: IOS, alt: `IOS Logo`, text: `IOS Apps`},
        ];

        const title = `DESIGN`;
        const description = `Good design not only determines the structure of the interface and the functionality of the website, but also assists users in organizing interaction with a site or program. Our design team will make a deep research to know your users, including understanding their goals, skills, preferences, and tendencies and accordingly will create simple and usable interface with purposeful page layout, common UI elements and strategical usage of colors and texture. By trusting your UX design task to our professionals you will get smooth and intuitive experience, logical functionality and the sense that interface efficiently serves up the information that users actually need.`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col md={5} className="align-self-center col-12">
                        <div className="imgContent mx-auto mt-4 mt-md-0">
                            <img src={DesignDesc} alt="Service Content Image"/>
                        </div>
                    </Col>
                    <Col md={7} className="deskContent col-12">
                        <h3 className="text-center pb-5 pt-3 pt-pd-0">{title}</h3>
                        <p >{description}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}