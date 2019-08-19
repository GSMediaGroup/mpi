import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

import WebDev from '../../../../../images/webDevDesk.png';

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
        return (
            <Row className="serviceContent">
                <Col md={5} className="align-self-center col-12">
                   <div className="imgContent mx-auto">
                       <img src={WebDev} alt="Service Content Image"/>
                   </div>
                </Col>
                <Col md={7} className="deskContent col-12">
                    <h3 className="text-center ">WEB DEVELOPMENT</h3>
                    <p>Smart phones are our guides, friends and even wallets. We make apps that easily integrate with what people need and expect from a trusted digital product. Depending on your needs, our tools are: Swift, Objective-C, Java, Flutter, React Native, and Ionic</p>

                    <Row className="justify-content-between">
                        {
                            programingTech.map((val, index) => (
                                <Col key={index} className="progTech">
                                    <img src={val.src} alt={val.alt} className="" />
                                    <p>{val.text}</p>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        );
    }
}