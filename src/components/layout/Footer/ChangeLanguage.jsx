import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import i18next from 'i18next';
import {Col, Row} from "reactstrap";

class ChangeLanguage extends Component {

    state = {
        lang: `en`,
    };

    constructor(props) {
        super(props);

        this.changeLng = this.changeLng.bind(this);
    }

    componentDidMount() {
        let lang = localStorage.getItem(`lang`);

        if (lang) {
            this.setState({
                lang: lang
            });
        }
    }

    changeLng() {
        let changeTo = `ru`;

        if (i18next.language === `ru`) {
            changeTo = `en`;
        }

        this.setState({
            lang: changeTo,
        });

        i18next.changeLanguage(changeTo, () => {
            localStorage.setItem('lang', changeTo);
        });


        document.body.classList.remove("lang-ru");
        document.body.classList.remove("lang-en");

        document.body.classList.add(`lang-${changeTo}`);
    }

    langIcon() {
        let lang = (this.state.lang === `en` ? `ru` : `en`);

        return lang.toUpperCase();
    }

    render() {

        return (
            <Col className="main-content col changeLangBlock" lg={{size: 3}} md={{size: 3}}>
                <Row className="pb-1 col-md-12 col-lg-12 m-0">
                    <span className="change-lng"  onClick={this.changeLng}>{this.langIcon()}</span>
                </Row>
                <Row>
                    <Col lg={12} md={12} className="changeLngText footerIconText">
                        <span onClick={this.changeLng}>{this.props.t('FOOTER_CHANGE_LANGUAGE')}</span>
                    </Col>
                </Row>

            </Col>
        );
    }
}

export default withTranslation()(ChangeLanguage);
