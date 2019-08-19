import React, {Component} from 'react';

export const WEB_DEVELOPMENT = 'web-development';
export const MOBILE_DEVELOPMENT = 'mobile-development';
export const DESIGN = 'design';



function WebDevelopment() {
    return (<div>Web</div>)
}

function MobileDevelopment() {
    return (<div>Mobile</div>)
}
function Design() {
    return (<div>Design</div>)
}

export default class ServiceContentList extends Component {
    render () {
        switch (this.props.type) {
            case WEB_DEVELOPMENT: return <WebDevelopment />;
            case MOBILE_DEVELOPMENT: return <MobileDevelopment />;
            case DESIGN: return <Design />;
        }

        return null;
    }
}
