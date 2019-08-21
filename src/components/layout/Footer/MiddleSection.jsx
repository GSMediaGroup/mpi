import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Row, Col} from "reactstrap";
import {withTranslation} from "react-i18next";

class MiddleSection extends Component {

    constructor () { 
        super()
    }

    render () {
        return (
            <Col className="mx-auto">
                <Row className="top-border bottom-border pt-3 justify-content-center">
                   
                </Row>
            </Col>
        );
    }
}

export default withTranslation()(MiddleSection);