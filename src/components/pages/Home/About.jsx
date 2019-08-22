import React, {Component} from 'react';

import VideoModal from '../../Modal/VideoModal';

import {Player, BigPlayButton, PlayToggle, ControlBar } from 'video-react';

import MPIVideoMp4 from '../../../videos/mpi-video.mp4';
import MPIVideoWebM from '../../../videos/mpi-video.mp4';
import MPIVideoOgg from '../../../videos/mpi-video.mp4';


import MPIVideoBg from '../../../images/mpiVideoBg.jpg';

import {Row, Col, Container} from 'reactstrap';

import {withTranslation} from 'react-i18next';


class About extends Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    playVideo() {
        this.setState({
            isOpen: true,
        });
    }

    onClose() {
        this.setState({
            isOpen: false,
        });
    }

    render() {
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
                        <Col className="col-12 col-md pb-4 pb-md-0">
                            <p>{this.props.t(description)}</p>
                            <ul className="workProcess pt-2">
                                <li><span>1</span>{this.props.t(rows['1'])}</li>
                                <li><span>2</span>{this.props.t(rows['2'])}</li>
                                <li><span>3</span>{this.props.t(rows['3'])}</li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-md-7 offset-md-1 videoPlay p-0" onClick={this.playVideo}>
                            <img src={MPIVideoBg} alt="MPI Video"/>
                        </Col>
                    </Row>
                </div>
                {this.state.isOpen && (
                    <VideoModal isOpen={true} onClose={this.onClose}>
                        <Container>
                            <Player autoPlay
                                    playsInline
                                    onPlay={this.playVideo}
                                    width={975}
                                    height={550}
                                    fluid={false}>
                                <source src={MPIVideoMp4} type="video/mp4"/>
                                <source src={MPIVideoWebM} type="video/webm"/>
                                <source src={MPIVideoOgg} type="video/ogg"/>
                                <BigPlayButton position="center"/>

                            </Player>
                        </Container>
                    </VideoModal>
                )}
            </section>
        );
    }
}

export default withTranslation()(About);