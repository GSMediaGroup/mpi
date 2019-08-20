import React, {Component} from 'react';
import {Container} from 'reactstrap';


import ServiceBlockTitle from './Services/ServiceBlockTitle';
import ServiceIconList from './Services/ServiceIconList';
import ServiceContentList, { MOBILE_DEVELOPMENT } from './Services/ServiceContentList';


export default class Services extends Component {
    state = {
        serviceType: MOBILE_DEVELOPMENT,
    };

    constructor(props) {
        super(props);
        this.updateServiceType = this.updateServiceType.bind(this);
    }

    updateServiceType(type) {
        this.setState({
            serviceType: type,
        });
    }

    render() {
        const {serviceType} = this.state;
        return (
            <section id="services" className="sectionPaddingTop">
                <Container className="position-relative">
                    <ServiceBlockTitle />
                    <ServiceIconList type={serviceType} onServiceTypeChange={this.updateServiceType} />
                    <ServiceContentList type={serviceType} />
                </Container>
            </section>
        );
    }
}