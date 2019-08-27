import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


/**
 * This Component allow only title and his description near
 * ----- TITLE -----
 * ---Description---
 */
export default class PopupView extends Component {

    state  = {
        index : null,
        images: null
    }

    constructor(props) {
        super(props);
    }


    changeImage = (isNext, index, images) => {
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
        }else{
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
        let {
            index, images
        } = this.props;

        if(this.state.index !== null) {
            index = this.state.index;
        }

        return (
            <div className="popupView" onClick={(e) => e.stopPropagation()}>
                <div className="prev " onClick={() => this.changeImage(false, index, images)}><FontAwesomeIcon icon={ faChevronLeft } /></div>
                <div ><img src={images[index]} alt="Team Images" /></div>
                <div className="next " onClick={() => this.changeImage(true, index, images)}><FontAwesomeIcon icon={ faChevronRight } /></div>
            </div>
        );
    }
}
