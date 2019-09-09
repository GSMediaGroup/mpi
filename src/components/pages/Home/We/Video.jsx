import React, {Component, Fragment} from "react";

import {Col, Container} from "reactstrap";

import MPIVideoBg from '../../../../media/images/mpiVideoBg.jpg';

import Modal from "../../../Modal/Modal";

import AdaptiveSize from "../../../../Services/AdaptiveSize";

import {BigPlayButton, Player} from "video-react";

import MPIVideoMp4 from "../../../../media/videos/as/mpi-video.mp4";
import MPIVideoWebM from "../../../../media/videos/as/mpi-video.webm";
import MPIVideoOgg from "../../../../media/videos/as/mpi-video.ogg";

class Video extends Component {
    state = {
        isOpen: false,
        width: null
    };

    constructor(props) {
        super(props);

        this.playVideo = this.playVideo.bind(this);
        this.updateSize = this.updateSize.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    updateSize(size) {
        this.setState(
            size
        );
    }

    playVideo() {
        this.setState({
            isOpen: true
        });
    }

    onClose() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const {isOpen, width} = this.state;

        return (
            <Fragment>
                <Col className="col-12 col-xl-6 videoPlay" onClick={this.playVideo}>
                    <img src={MPIVideoBg} className="img-fluid" alt="We"/>
                </Col>

                {
                    isOpen && (
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
                    )
                }
            </Fragment>
        );
    }
}

export default Video;