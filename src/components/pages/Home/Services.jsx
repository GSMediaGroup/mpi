import React, {Component} from 'react';
import {Container} from 'reactstrap';

import ServiceBlockTitle from './Services/ServiceBlockTitle';
import ServiceIconList from './Services/ServiceIconList';
import Dots from './Services/Dots';
import ServiceContentList from './Services/ServiceContentList';


export default class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: props.activeType,
        };
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if (oldState.serviceType != newProps.activeType) {
            return {
                serviceType: newProps.activeType,
            };
        }

        return null;
    }

    render() {
        const {serviceType} = this.state;

        return (
            <section id="services" className="sectionPaddingTop">
                <Container className="position-relative">
                    <ServiceBlockTitle />
                    <ServiceIconList type={serviceType} onServiceTypeChange={this.props.updateServiceType} />
                    <ServiceContentList type={serviceType} />
                    <Dots onServiceTypeChange={this.props.updateServiceType} type={serviceType} />
                </Container>
            </section>
        );
    }
}