import React, {Component} from 'react';
import Particles from 'react-particles-js';

import HeroTitle from './Hero/HeroTitle';
import HeroServices from './Hero/HeroServices';

import WebDev from '../../../images/service_1.png';
import MobileDev from '../../../images/service_2.png';
import ProductDesign from '../../../images/service_3.png';

const particlesOption = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};


export default class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <section id="hero" className="vh-100">
                <div className="h-100 d-flex heroContent">
                    <div className="container">
                        <HeroTitle />
                        <Particles params={particlesOption} className="particles"/>
                    </div>
                    <div className="heroService pr-0">
                        <HeroServices src={WebDev} alt="Web Development" header="WEB DEVELOPMENT" text="Best solutions for you!" link="#"/>
                        <HeroServices src={MobileDev} alt="Mobile Development" header="MOBILE DEVELOPMENT" text="Best solutions for you!" link="#"/>
                        <HeroServices src={ProductDesign} alt="Product Design" header="PRODUCT DESIGN" text="Best solutions for you!" link="#"/>
                    </div>
                </div>
            </section>
        );
    }
}