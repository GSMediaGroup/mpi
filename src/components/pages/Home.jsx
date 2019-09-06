import React, {Component} from "react";

import Hero from '../pages/Home/Hero';
import About from '../pages/Home/About'
import Services from '../pages/Home/Services'
import Agile from '../pages/Home/Agile'
import {MOBILE_DEVELOPMENT} from '../pages/Home/Services/ServiceContentList';

import Slider from './Home/OurTeam';
import HashTag from '../pages/Home/HashTag';
import OurTechnologies from '../pages/Home/OurTechnologies';
import GoHome from '../pages/Home/GoHome';

export default class Home extends Component {
    state = {
        type: MOBILE_DEVELOPMENT,
        loadingBlock : null,
        load : true
    };


    constructor(props) {
        super(props);

        this.onServiceTypeChange = this.onServiceTypeChange.bind(this);
        this.updateServiceType = this.updateServiceType.bind(this);

        this.loading = this.loading.bind(this);
    }

    componentDidMount() {
        // this.loading();
    }

    loading () {
        document.body.style.overflowY = `hidden`;

        let {load} = this.state;

        if(load) {
            this.setState({
                loadingBlock : <div className="loading">
                                    <span />
                               </div>
            });

            setTimeout(() => {
                document.body.style.overflowY = `scroll`;

                this.setState({
                    loadingBlock : null,
                    load : false
                });
            }, 2000);
        }
    }

    onServiceTypeChange(type) {
        this.updateServiceType(type);

        const serviceBlock = document.getElementsByClassName(`serviceIcon`)[0];
        serviceBlock.scrollIntoView({behavior: `smooth`});
    }

    updateServiceType(type) {
        this.setState({
            type,
        });
    }

    render() {
        return (
            <>
                {/*{ loadingBlock }*/}
                <Hero onServiceTypeChange={this.onServiceTypeChange}/>
                <About/>
                <Services activeType={this.state.type} updateServiceType={this.updateServiceType}/>
                <Agile/>
                <OurTechnologies/>
                <HashTag/>
                <Slider/>
                <GoHome/>
            </>
        );
    }
}