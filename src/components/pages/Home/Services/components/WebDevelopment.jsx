import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import WebDesc from '../../../../../images/webDesc.png';

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

        ];

        const title = `WEB DEVELOPMENT`;
        const description = `The team of skilled  profesionalls of MPI  offer comprehensive and customized web development services for your projects. We develop solutions that streamline your business operations and deliver value to your customers and therefore will ensure the success of your web project.  We consider website maintenance as one of our core web development services, that is why our team engages in clear communication with the clients to keep the websites current and functional and to make all the changes that you need as often as you like.`;

        return (
            <div className="serviceContent">
                <Row>
                    <Col md={5} className="align-self-center col-12">
                       <div className="imgContent mx-auto mt-4 mt-md-0">
                           <img src={WebDesc} alt="Service Content Image"/>
                       </div>
                    </Col>
                    <Col md={7} className="deskContent col-12">
                        <h3 className="text-center pb-5 pt-3 pt-md-0">{title}</h3>
                        <p className="p3-4">{description}</p>

                        <Row className="flex-wrap">
                            {
                                programingTech.map((val, index) => (
                                    <Col key={index} className="progTech">
                                        <img src={val.src} alt={val.alt} />
                                        <p>{val.text}</p>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}