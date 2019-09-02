import React, {Component} from 'react';
import AdaptiveSize from '../../../Services/AdaptiveSize';

class GoogleMap extends Component {

    state = {
        width: null,
        height: null
    };

    constructor(props) {
        super(props);

        this.updateSize= this.updateSize.bind(this);
    }

    updateSize (size) {
        this.setState(
            size
        )
    }

    render() {
        const {width, height} = this.state;

        return (
            <div className="mapouter">
                <div className="gmap_canvas">
                    <AdaptiveSize onChangeSize={this.updateSize} />
                    <iframe width={width}
                            height={height}
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