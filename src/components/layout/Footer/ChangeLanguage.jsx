import React, {Component} from "react";
import {withTranslate} from "react-i18next";
import {Col, Row} from "reactstrap";
import logoEn from "../../../images/en_.jpg";
import logoRu from "../../../images/ru.png";

class ChangeLanguage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const languages = [
            {imageSrc: logoEn, name: "en", cb: this.changeLanguage},
            {imageSrc: logoRu, name: "ru", cb: this.changeLanguage},
        ];


        return (
            <Col className="changeLng" lg={{ size: 3 }} md={{ size: 3 }}>
                <Row className="lng" onClick={this}>
                    <p>{ activeLng }</p>
                </Row>
                <Row>
                    <Col lg={{ size: 12 }} md={{ size: 12 }} className="for-hover-description">{this.props.t('FOOTER_CHANGE_LANGUAGE')}</Col>
                </Row>

            </Col>
        );
    }
}

export default withTranslate()(ChangeLanguage);
