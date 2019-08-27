import React, {Component} from 'react';

class GoogleMap extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="900"
                            height="500"
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