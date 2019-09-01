import React, {Component} from 'react';

class AdaptiveWidth extends Component {

    state = {
        width: null,
    };

    constructor(props) {
        super(props);
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
        let width = window.innerWidth;

        if (width <= 720) width = (width * 90) / 100;

        else width = (width * 60) / 100;

        this.state ({
           width : width,
        });
    }
}

export default AdaptiveWidth;