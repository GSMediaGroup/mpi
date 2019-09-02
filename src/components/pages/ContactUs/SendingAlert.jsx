import React, { Component } from 'react';
import { Container } from 'reactstrap';

import SendingAlertImg from '../../../images/sendingMsg.png';
import {withTranslation} from "react-i18next";

class SendingAlert extends Component {

    render () {
        const title = `SENDING_ALERT_TITLE`,
              text = `SENDING_ALERT_TEXT`;

        return (
            <Container className="sendingAlert text-center">
                <div className="imageBlock pb-4">
                    <img src={ SendingAlertImg } alt="Sending Alert"/>
                </div>
                <div>
                    <h3 className="pb-3">{ this.props.t(title)}</h3>
                    <p>{ this.props.t(text)}</p>
                </div>
            </Container>
        );
    }
}

export default withTranslation()(SendingAlert);