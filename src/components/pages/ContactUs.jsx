import React, { Component } from "react";
import {withTranslation} from "react-i18next";

import { Row } from 'reactstrap';

import ContactForm from './ContactUs/ContactForm';
import ContactInfo from './ContactUs/ContactInfo';

import SendingAlert from './ContactUs/SendingAlert';


class ContactUs extends Component {

    state = {
      content : ``
    };

    constructor (props) {
        super(props);

        this.msgSending = this.msgSending.bind(this);
    }

    msgSending () {
        this.setState({
            content : <SendingAlert />
        });

        setTimeout(() => {
            this.props.onClose()
        }, 2000);
    }

    componentDidMount() {
        this.setState({
            content : <Row className="m-0">
                            <ContactForm msgSending={this.msgSending} />
                            <ContactInfo/>
                       </Row>
        })
    }

    render() {
        return this.state.content;
    }
}

export default withTranslation()(ContactUs);
