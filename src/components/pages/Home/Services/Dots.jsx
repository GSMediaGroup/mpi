import React, {Component} from 'react';

import { WEB_DEVELOPMENT, MOBILE_DEVELOPMENT, DESIGN } from '../Services/ServiceContentList';

export default class Dots extends Component {

    constructor (props) {
        super(props);

        this.changeService = this.changeService.bind(this);
    }

    changeService (type) {
        return (event) => {
            this.props.onServiceTypeChange(type);
        }
    }

    render () {
        const types = [
            WEB_DEVELOPMENT,
            MOBILE_DEVELOPMENT,
            DESIGN
        ];

        return (

            <div className="text-center dots">
                {
                    types.map( (type, i) => {
                        let dotBg = ``;

                        if (this.props.type === type) dotBg = `active`;

                        return (
                            <span onClick={this.changeService(type)} key={i} className={dotBg} />
                        );
                    })
                }
            </div>
        );
    }
}