import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import VideoModal from '../../Modal/VideoModal';

import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import fb from "../../../images/footer/fb.png";
import youtube from "../../../images/footer/youtub.png";
import google from "../../../images/footer/googleee.png";
import instagram from "../../../images/footer/insta.png";
import twitter from "../../../images/footer/twitter.png";
import marker from "../../../images/footer/marker.png";
import message from "../../../images/footer/message.png";
import phone from "../../../images/footer/phone.png";


class FooterContent extends Component {

    state = {
        openModal : false,
    };

    constructor(props) {
        super(props);

        this.openMap = this.openMap.bind(this);
        this.openContactUs = this.openContactUs.bind(this);
    }

    openMap () {
        this.setState({
            openMapModal : true,
        });
    }

    openContactUs () {

    }

    closeModal () {
        this.setState({
            openModal : false,
        });
    }


    render() {

        let footerItems = [
            { text: this.props.t('FOOTER_ADDRESS'), icon: marker, textClassName: "icon-description", iconClassName: "location", cb : this.openMap },
            { text: "haruta@myperfectidea.net", icon: message, textClassName: "icon-description", iconClassName: "email", cb : this.openContactUs },
            { text: "+374 98 91 67 78", icon: phone, textClassName: "icon-description", iconClassName: "phone"},
        ];

        let footerSocialItems = [
            { icon: fb, offset: 1 },
            { icon: twitter, offset: 0 },
            { icon: instagram, offset: 0 },
            { icon: google, offset: 0 },
            { icon: youtube, offset: 0 },
        ];

        return (
            <>
                <Col className="mx-auto">
                    <Row>
                        {
                            footerItems.map((item, index) =>
                                <Col className="main-content hover-main-content" lg={{ size: 3 }} md={{ size: 3 }} key={index} onClick={item.cb} >
                                    <Row>
                                        <Col className="pb-1" lg={{ size: 12 }} md={{ size: 12 }}>
                                            <Link to='/' className={item.iconClassName}>
                                                <img src={item.icon} alt="Brand Logo" />
                                            </Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={item.textClassName} lg={{ size: 12 }} md={{ size: 12 }}>{item.text}</Col>
                                    </Row>
                                </Col>
                            )
                        }
                        <Col className="main-content social-content" lg={{ size: 3 }} md={{ size: 3 }}>
                            <Row>
                                {
                                    footerSocialItems.map((item, index) =>
                                        <Col className="pl-0 pr-0 pb-2 for-hover-icon" sm={{size: 12}} lg={{ size: 2, offset: item.offset }} md={{ size: 2 , offset: item.offset}} key={index}>
                                            <Link to='/' >
                                                <img src={item.icon} alt="Brand Logo" />
                                            </Link>
                                        </Col>
                                    )
                                }
                            </Row>
                            <Row>
                                <Col lg={{ size: 12 }} md={{ size: 12 }} className="for-hover-description">{this.props.t('FOOTER_SOCIAL_DESCRIPTION')}</Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>
                {/*MAP MODAL*/}
                <VideoModal isOpenModal={this.state.openMapModal}>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600"
                                    height="500"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=IT%20Park%20Business%20Center%20Abelyan%206%2F1%2C%20Yerevan%20Armenia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                            />
                        </div>
                    </div>
                </VideoModal>
            </>
        );
    }
}
export default withTranslation()(FooterContent);