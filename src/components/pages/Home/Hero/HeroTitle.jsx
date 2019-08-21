import React, {Component} from 'react';
import {Link} from  'react-router-dom';

import { withTranslation } from 'react-i18next';

class HeroTitle extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="heroTitle h-100 ">
                <h1>{this.props.t('HERO_TITLE_HEADER')}</h1>
                <p className="pb-1 pb-md-4">{this.props.t('HERO_TITLE_DESCRIPTION')}</p>
                <Link to="#">{this.props.t('HERO_TITLE_MORE_BUTTON')}</Link> 
            </div>
        );
    }
}

export default  withTranslation()(HeroTitle);