import React, { Component } from "react";

import Plyr from 'plyr';
import "plyr/src/sass/plyr.scss";

class Video extends Component {
    _player = null;

    componentDidMount() {
        const { id } = this.props;
        this._player = new Plyr(`#${id}`, {
            autoplay: true,
        });
    }

    render() {
        const { mp4, webm, className, id } = this.props;

        return (
            <video id={id} controls={false} playsInline>
                <source src={mp4} type="video/mp4" />
                <source src={webm} type="video/webm" />
            </video>
        );
    }
}

export default Video;
