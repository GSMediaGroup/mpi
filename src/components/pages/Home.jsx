import React, { Component } from "react";

import Hero from '../pages/Home/Hero';
import Slider from '../pages/Home/Slider'


export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <Slider />
            </>
        );
    }
}