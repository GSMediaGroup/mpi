import React, {Component} from 'react';
import ReactPlayer from "react-player/lib/players/YouTube";
import {Row, Col, Container} from 'reactstrap';
import {withTranslation} from 'react-i18next';

import Modal from '../../Modal/Modal';
import AdaptiveSize from '../../../services/AdaptiveSize';
import We from "../../../media/images/we.jpg";

import VideoPlayer from "../../video/Video";
import MpiVideoMp4 from "../../../media/videos/mpi-about-full/mpi.mp4";
import MpiVideoWebm from "../../../media/videos/mpi-about-full/mpi.webm";

class About extends Component {
    state = {
        isOpen: false,
        width: null,
        height: null
    };

    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.onClose = this.onClose.bind(this);
        this.updateSize = this.updateSize.bind(this);
        this._onReady = this._onReady.bind(this);
    }


    updateSize(state) {
        this.setState(
            state
        );
    }


    playVideo() {
        this.setState({
            isOpen: true,
        });
    }

    onClose() {
        this.setState({
            isOpen: false

        });
    }

    _onReady (e) {
       e.target.pauseVideo()
    }

    render() {
        const {width, height} = this.state;
        const url = `https://youtu.be/vB7GKEaycbI`;

        const title = "ABOUT_TITLE";
        const description = "ABOUT_DESCRIPTION";
        const rows = {
            '1': 'ABOUT_LIST_OPTION_1',
            '2': 'ABOUT_LIST_OPTION_2',
            '3': 'ABOUT_LIST_OPTION_3'
        };
        const imageAlt = 'ABOUT_IMAGE_ALT';

        return (
            <section id="about" className="sectionPaddingTop">
                <div className="container">
                    <h2 className="text-left pb-5">{this.props.t(title)}</h2>

                    <Row className="align-items-center">
                        <Col className="col-12 col-xl pb-4 pb-md-0">
                            <p>{this.props.t(description)}</p>
                            <ul className="workProcess pt-2">
                                <li><span className="number">1</span><span
                                    className="about-option">{this.props.t(rows['1'])}</span></li>
                                <li><span className="number">2</span><span
                                    className="about-option">{this.props.t(rows['2'])}</span></li>
                                <li><span className="number">3</span><span
                                    className="about-option">{this.props.t(rows['3'])}</span></li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-xl-6 offset-xl-1 videoPlay" onClick={this.playVideo}>
                            <img src={We} alt={imageAlt}/>
                        </Col>
                    </Row>
                </div>
                {this.state.isOpen && (
                    <Modal isOpen={true} onClose={this.onClose}>
                        <Container className="p-0">
                            <AdaptiveSize onChangeSize={this.updateSize}/>
                            {/*<ReactPlayer*/}
                            {/*    url={url}*/}
                            {/*    config={{*/}
                            {/*        youtube : {*/}
                            {/*        playerVars : {*/}
                            {/*            showInfo : 1,*/}
                            {/*            controls: 1,*/}
                            {/*            autoplay : 1*/}
                            {/*        }*/}
                            {/*    }}*/}
                            {/*    }*/}
                            {/*    width={width}*/}
                            {/*    height={height}*/}
                            {/*/>*/}

                            <VideoPlayer id="mpi-full" mp4={MpiVideoMp4} webm={MpiVideoWebm} />
                        </Container>
                    </Modal>
                )}
            </section>
        );
    }
}

export default withTranslation()(About);