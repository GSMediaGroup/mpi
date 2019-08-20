import React, {Component} from 'react';
import {Row, Col} from "reactstrap";

import WebDevelopment from './components/WebDevelopment';
import MobileDevelopment from './components/MobileDevelopment';
import Design from './components/Design';

export const WEB_DEVELOPMENT = 'web-development';
export const MOBILE_DEVELOPMENT = 'mobile-development';
export const DESIGN = 'design';

export default class ServiceContentList extends Component {
    renderComponent(ComponentClass) {
        return (

            <ComponentClass />
        );
    }

    render () {
        switch (this.props.type) {
            case WEB_DEVELOPMENT:
                return this.renderComponent(WebDevelopment);
            case MOBILE_DEVELOPMENT:
                return this.renderComponent(MobileDevelopment);
            case DESIGN:
                return this.renderComponent(Design);
            default :
                return null;
        }
    }
}
