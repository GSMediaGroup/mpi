import React, { Component } from "react";
import {withTranslation} from "react-i18next";

import ReactModal   from 'react-modal';

class ContactUs extends Component {

    serverUrl = "http://localhost:2525/sendMail.php";

    constructor(props) {
        super(props);

        this.sendMail = this.sendMail.bind(this);
    }

    sendMail () {
        const data = {
            name : `Name`,
            email : `example@example.com`,
        };

        let headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', 'http://localhost:2525/sendMail.php');
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST', 'OPTIONS');

        fetch(this.serverUrl, {
            method: `POST`,
            mode: 'no-cors',
            credentials: 'include',
            headers : headers,
            body : JSON.stringify(data),
        })
            .then(response => serviceTypeg(response));
    }

    render() {
        return (
            <button className="btn btn-success start" onClick={this.sendMail}>Open Modal</button>
        )

    }
}

export default ContactUs;
