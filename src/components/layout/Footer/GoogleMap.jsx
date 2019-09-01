import React, {Component} from 'react';

class GoogleMap extends Component {

    state = {
        width : null
    };

    constructor (props) {
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
        let width = window.innerWidth;

        if (width <= 720) width = (width * 90) / 100;

        else width = (width * 60) / 100;

        this.setState({
            width : width,
        });
    }

    render () {
        const  { width } = this.state;
        return (
            <div className="mapouter">
                <div className="gmap_canvas" >
                    <iframe width={ width }
                            height={200}
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=IT%20Park%20Business%20Center%20Abelyan%206%2F1%2C%20Yerevan%20Armenia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                    />
                </div>
             </div>
        );
    }
}

export default GoogleMap;