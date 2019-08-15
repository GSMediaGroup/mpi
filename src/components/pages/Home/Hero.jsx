import React, {Component} from 'react';
import Particles from 'react-particles-js';

import HeroTitle from './Hero/HeroTitle';
import HeroServices from './Hero/HeroServices';

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
                <HeroTitle />
                <HeroServices />
                <Particles className="particles" params={particlesOption} />
            </section>
        );
    }
}