import React, {Component, Fragment} from "react";

import {Col, Container} from "reactstrap";

import MPIVideoBg from '../../../../media/images/mpiVideoBg.jpg';

import Modal from "../../../Modal/Modal";

import AdaptiveSize from "../../../../Services/AdaptiveSize";

import ReactPlayer from "react-player";


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
        const {isOpen, width, height} = this.state;
        const url = `https://youtu.be/fjWdfewDMnM`;

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
                                <ReactPlayer
                                    url={url}
                                    config={{
                                        youtube : {
                                            playerVars: {
                                                showinfo: 1,
                                                autoplay : 1,
                                                controls : 1
                                            }
                                        },
                                    }}
                                    width={width}
                                    height={height}
                                />
                            </Container>
                        </Modal>
                    )
                }
            </Fragment>
        );
    }
}

export default Video;