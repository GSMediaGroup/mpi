import React, {Component} from 'react';

import WebDevelopment from './components/WebDevelopment';
import MobileDevelopment from './components/MobileDevelopment';
import Design from './components/Design';

export const WEB_DEVELOPMENT = 'web-development';
export const MOBILE_DEVELOPMENT = 'mobile-development';
export const DESIGN = 'design';

export default class ServiceContentList extends Component {
    render () {
        switch (this.props.type) {
            case WEB_DEVELOPMENT:
                return <WebDevelopment />;
            case MOBILE_DEVELOPMENT:
                return <MobileDevelopment />;
            case DESIGN:
                return <Design />;
            default :
                return null;
        }
    }
}
