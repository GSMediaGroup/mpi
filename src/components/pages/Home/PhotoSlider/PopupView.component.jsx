import React, {Component} from 'react';

import AdaptiveSize from '../../../../Services/AdaptiveSize'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft, faTimes} from '@fortawesome/free-solid-svg-icons';


/**
 * This Component allow only title and his description near
 * ----- TITLE -----
 * ---Description---
 */
export default class PopupView extends Component {

    state = {
        index: null,
        images: null,
        width: null,
        height: null
    };

    constructor(props) {
        super(props);

        this.updateSize = this.updateSize.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }

    updateSize(size) {
        this.setState(
            size
        )
    }


    changeImage(isNext, index, images) {
        if (isNext) {
            if (images[index + 1]) {
                this.setState({
                    index: index + 1
                })
            } else {
                this.setState({
                    index: 0
                })
            }
        } else {
            if (images[index - 1]) {
                this.setState({
                    index: index - 1
                })
            } else {
                this.setState({
                    index: images.length - 1
                })
            }
        }

    }

    render() {
        const {width} = this.state;

        let {
            index, images
        } = this.props;

        if (this.state.index !== null) {
            index = this.state.index;
        }

        return (
            <div className="popupView" onClick={(e) => e.stopPropagation()}>
                <AdaptiveSize onChangeSize={this.updateSize}/>
                <div className="prev " onClick={() => this.changeImage(false, index, images)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <div className="popupImage">
                    <span className="popup-close" onClick={this.props.onClose}>
                            <FontAwesomeIcon icon={faTimes}/>
                    </span>
                    <img src={images[index]} alt="Team Images" style={{maxWidth: `${width}px`}}/>
                </div>
                <div className="next " onClick={() => this.changeImage(true, index, images)}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>
        );
    }
}
