import React, { Component } from "react";
import {withTranslation} from "react-i18next";

import { Row } from 'reactstrap';

import ContactForm from './ContactUs/ContactForm';
import ContactInfo from './ContactUs/ContactInfo';


class ContactUs extends Component {

    render() {
        return (
            <Row className="m-0">
                <ContactForm onClose={this.props.onClose}/>
                <ContactInfo/>
             </Row>
        )
    }
}

export default withTranslation()(ContactUs);
