import React, {Component} from "react";

import Hero from '../pages/Home/Hero';
import About from '../pages/Home/About'
import Services from '../pages/Home/Services'



export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
                <Services />
            </>
        );
    }
}