import React, {Component} from 'react';

class AdaptiveSize extends Component {

    state = {
        width: null,
        height: null
    };

    constructor(props) {
        super(props);

        this.generateWidth = this.generateWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.generateWidth);
        window.addEventListener('orientationchange', this.generateWidth);

        this.generateWidth();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.generateWidth);
        window.removeEventListener('orientationchange', this.generateWidth);
    }

    generateWidth() {
        let width = window.innerWidth,
            height = window.innerHeight;


        if (width <= 720) {
            width = (width * 80) / 100;
            height = (height * 80) / 100;
        } else {
            width = (width * 54) / 100;
            height = (height * 59) / 100;
        }

        this.props.onChangeSize({
            width: width,
            height: height
        });
    }

    render () {
        return null;
    }
}

export default AdaptiveSize;
