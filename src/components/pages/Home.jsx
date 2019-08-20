import React, { Component } from "react";

import Hero from '../pages/Home/Hero';
import Slider from '../pages/Home/Slider';
import HashTag from '../pages/Home/HashTag';
import OurTechnologies from '../pages/Home/OurTechnologies';


export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <OurTechnologies/>
                <Slider />
                <HashTag/>
            </>
        );
    }
}