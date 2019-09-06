import React, {Component} from 'react';

import Modal from '../../Modal/Modal';
import AdaptiveSize from '../../../Services/AdaptiveSize';

import {Player, BigPlayButton} from 'video-react';

import MPIVideoMp4 from '../../../media/videos/as/mpi-video.mp4';
import MPIVideoWebM from '../../../media/videos/as/mpi-video.webm';
import MPIVideoOgg from '../../../media/videos/as/mpi-video.ogg';


import MPIVideoBg from '../../../media/images/mpiVideoBg.jpg';

import {Row, Col, Container} from 'reactstrap';

import {withTranslation} from 'react-i18next';


class About extends Component {
    state = {
        isOpen: false,
        width: null
    };

    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.onClose = this.onClose.bind(this);
        this.updateSize = this.updateSize.bind(this)
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

    render() {
        const {width} = this.state;

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
                                <li><span className="number">1</span><span
                                    className="about-option">{this.props.t(rows['1'])}</span></li>
                                <li><span className="number">2</span><span
                                    className="about-option">{this.props.t(rows['2'])}</span></li>
                                <li><span className="number">3</span><span
                                    className="about-option">{this.props.t(rows['3'])}</span></li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-xl-7 offset-xl-1 videoPlay" onClick={this.playVideo}>
                            <img src={MPIVideoBg} alt={imageAlt}/>
                        </Col>
                    </Row>
                </div>
                {this.state.isOpen && (
                    <Modal isOpen={true} onClose={this.onClose}>
                        <Container className="p-0">
                            <AdaptiveSize onChangeSize={this.updateSize}/>
                            <Player autoPlay
                                    playsInline
                                    onPlay={this.playVideo}
                                    width={width}
                                    fluid={false}>
                                <source src={MPIVideoMp4} type="video/mp4"/>
                                <source src={MPIVideoWebM} type="video/webm"/>
                                <source src={MPIVideoOgg} type="video/ogg"/>
                                <BigPlayButton position="center"/>
                            </Player>
                        </Container>
                    </Modal>
                )}
            </section>
        );
    }
}

export default withTranslation()(About);