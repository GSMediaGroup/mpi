import React, { Component } from 'react';
import Particles from 'react-particles-js';

import star from '../../../media/images/star-solid.svg';

import HeroTitle from './Hero/HeroTitle';
import HeroServices from './Hero/HeroServices';

import WebDev from '../../../media/images/service_1.png';
import MobileDev from '../../../media/images/service_2.png';
import ProductDesign from '../../../media/images/service_3.png';
import {withTranslation} from "react-i18next";
import {WEB_DEVELOPMENT, MOBILE_DEVELOPMENT, DESIGN} from "./Services/ServiceContentList";

const particlesOption = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "images"
            ],
            "images": [
                {
                    "src": star,
                    "height": 2,
                    "width": 2
                }
            ]
        },
        "color": {
            "value": "#F08080"
        },
        "size": {
            "value": 3,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": false,
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    },
    "retina_detect": false
};

class Hero extends Component {

    state = {
        changeOrientation : `orientationChange`,
    };

    constructor(props) {
        super(props);

    }


    typeChange (type) {
        return () => {
            this.props.onServiceTypeChange(type);
        };
    }

    render() {
        const heroService = [
            {src: WebDev, alt :`Web Development`, header: `HERO_SERVICES_HEADER_1`,  type: WEB_DEVELOPMENT },
            {src: MobileDev, alt :`Mobile Development`, header: `HERO_SERVICES_HEADER_2`,  type: MOBILE_DEVELOPMENT },
            {src: ProductDesign, alt :`Product Design`, header: `HERO_SERVICES_HEADER_3`,  type: DESIGN },
        ];

        return (
            <section id="hero" className={`vh-100`}>
                <div className="h-100 d-flex heroContent">
                    <div className="container">
                        <HeroTitle />
                        <Particles params={particlesOption} className="particles" />
                    </div>
                    <div className="heroService pr-0">
                        {
                            heroService.map((service, index) => (
                                <HeroServices
                                    key={index}
                                    src={service.src}
                                    alt={service.alt}
                                    header={service.header}
                                    onTypeChange={this.typeChange(service.type) }
                                />
                            ))
                        }

                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Hero);