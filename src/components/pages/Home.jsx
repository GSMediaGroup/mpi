import React, {Component} from "react";

import Hero from '../pages/Home/Hero';
import About from '../pages/Home/About'
import Services from '../pages/Home/Services'
import Agile from '../pages/Home/Agile'



export default class Home extends Component {
    render() {
        return (
            <>
                <Hero />
                <About />
                <Services />
                <Agile />
            </>
        );
    }
}