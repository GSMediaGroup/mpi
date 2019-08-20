import React, { Component } from 'react';

/**
 * This Component allow only title and his description near
 * ----- TITLE -----
 * ---Description---
 */
export default class PopupView extends Component {

    state  = {
        index : null, images: null
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
        console.log(this.state)
        if(this.state.index !== null) {
            index = this.state.index;
        }

        return (
            <div className="popupView">
                <div className="prev" onClick={() => this.changeImage(false, index, images)}>&#8249;</div>
                <img src={images[index]}/>
                <div className="next" onClick={() => this.changeImage(true, index, images)}>&#8250;</div>
            </div>
        );
    }
}