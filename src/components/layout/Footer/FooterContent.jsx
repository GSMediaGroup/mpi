import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import VideoModal from '../../Modal/Modal';
import GoogleMap from '../../layout/Footer/GoogleMap';
import ContactUs from '../../pages/ContactUs';
import ChangeLanguage from '../../layout/Footer/ChangeLanguage';

import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import marker from "../../../images/footer/marker.png";
import message from "../../../images/footer/message.png";
import phone from "../../../images/footer/phone.png";


class FooterContent extends Component {

    state = {
        openModal : false,
        modalContent : ``,
    };

    constructor(props) {
        super(props);

        this.openMap = this.openMap.bind(this);
        this.openContact = this.openContact.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    openMap () {
        this.setState({
            openModal : true,
            modalContent : <GoogleMap />
        });
    }

    openContact () {
        this.setState({
            openModal : true,
            modalContent : <ContactUs onClose={this.onClose} />
        });
    }

    onClose () {
        document.body.style.overflowY = `scroll`;

        this.setState({
            openModal : false,
            modalContent : ``,
        })
    }

    render() {
        const { openModal, modalContent } = this.state;

        const footerItems = [
            { text: this.props.t('FOOTER_ADDRESS'), icon: marker, textClassName: "icon-description", iconClassName: "location", cb : this.openMap },
            { text: "haruta@myperfectidea.net", icon: message, textClassName: "icon-description", iconClassName: "email", cb : this.openContact},
            { text: "+1 (678) 534 8794", icon: phone, textClassName: "icon-description", iconClassName: "phone"},
        ];


        return (
            <>
                <Col className="mx-auto">
                    <Row>
                        {
                            footerItems.map((item, index) => {
                                let text = ( item.iconClassName === 'phone' ) ? <a href={`tel:${item.text}`}>{ item.text }</a> : item.text;

                                return (
                                    <Col className="main-content hover-main-content col" lg={{size: 3}} md={{size: 3}}
                                         key={index} onClick={item.cb}>
                                        <Row>
                                            <Col className="pb-1" lg={{size: 12}} md={{size: 12}}>
                                                <Link to='/' className={item.iconClassName}>
                                                    <img src={item.icon} alt="Brand Logo"/>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row className="footerIconText ">
                                            <Col className={item.textClassName} lg={{size: 12}}
                                                 md={{size: 12}}>{ text }
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })
                        }
                       <ChangeLanguage />
                    </Row>
                </Col>
                {/*MAP MODAL*/}
                {
                    openModal && (
                        <VideoModal isOpen={true} onClose={this.onClose}>
                            { modalContent }
                        </VideoModal>
                    )
                }
            </>
        );
    }
}
export default withTranslation()(FooterContent);