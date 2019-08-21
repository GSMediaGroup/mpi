import React, { Component } from "react";
import {withTranslation} from "react-i18next";

import ReactModal   from 'react-modal';

class ContactUs extends Component {

    serverUrl = "http://127.0.0.1:9876/sendMail.php";

    constructor(props) {
        super(props);

        this.sendMail = this.sendMail.bind(this);
    }

    sendMail () {
        const formData = {
            name : `Name`,
            email : `example@example.com`,
        };

        fetch(this.serverUrl)
            .then(response => formData)
            .then(data => (
               console.log(data)
            ));
    }

    render() {
        return (
            <button className="btn btn-success start" onClick={this.sendMail}>Open Modal</button>
        )

    }
}

export default ContactUs;
