import React, { Component } from "react";

import Hero from '../pages/Home/Hero';
import About from '../pages/Home/About'
import Services from '../pages/Home/Services'
import Agile from '../pages/Home/Agile'
import { MOBILE_DEVELOPMENT } from '../pages/Home/Services/ServiceContentList';

import Slider from './Home/OurTeam';
import HashTag from '../pages/Home/HashTag';
import OurTechnologies from '../pages/Home/OurTechnologies';

export default class Home extends Component {
    state = {
        type: MOBILE_DEVELOPMENT,
    };


    constructor (props) {
        super(props);

        this.onServiceTypeChange = this.onServiceTypeChange.bind(this);
        this.updateServiceType = this.updateServiceType.bind(this);
    }

    onServiceTypeChange (type) {
        this.updateServiceType(type);

        const serviceBlock = document.getElementsByClassName(`serviceIcon`)[0];
        serviceBlock.scrollIntoView({ behavior : `smooth` });
    }

    updateServiceType(type) {
        this.setState({
            type,
        });
    }

    render() {
        return (
            <>
                <Hero onServiceTypeChange={this.onServiceTypeChange} />
                <About />
                <Services activeType={this.state.type} updateServiceType={this.updateServiceType} />
                <Agile />
                <OurTechnologies/>
                <HashTag/>
                <Slider />
            </>
        );
    }
}