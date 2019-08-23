import React, { Component } from "react";

import Hero from '../pages/Home/Hero';
import About from '../pages/Home/About'
import Services from '../pages/Home/Services'
import Agile from '../pages/Home/Agile'

import Slider from './Home/OurTeam';
import HashTag from '../pages/Home/HashTag';
import OurTechnologies from '../pages/Home/OurTechnologies';

export default class Home extends Component {

    constructor (props) {
        super(props);
    }

    onServiceTypeChange (type) {

    }

    render() {
        return (
            <>
                <Hero />
                <About />
                <Services />
                <Agile />
                <OurTechnologies/>
                <HashTag/>
                <Slider />
            </>
        );
    }
}