import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import { withTranslation } from 'react-i18next';

class ServiceBlockTitle extends Component {
    render () {
        const title = 'OUR_SERVICES_TITLE', text = 'OUR_SERVICES_DESCRIPTION';
        return (
            <Row className="serviceTitle">
                <Col md={6} className="mx-auto text-center col-12">
                    <h2 className="pb-5">{this.props.t(title)}</h2>
                    <p>{this.props.t(text)}</p>
                </Col>
            </Row>
        );
    }
}

export default withTranslation()(ServiceBlockTitle);