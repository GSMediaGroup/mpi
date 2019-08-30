import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withTranslation} from 'react-i18next';

class HeroServices extends Component {

    state = {
        isBlock: false,
        isBottom: true
    };

    constructor(props) {
        super(props);

        this.hasEvent = this.hasEvent.bind(this);
    }


    componentDidMount() {
        const width = window.innerWidth;

        if (width < 500) {
            this.setState({
                isBlock : true,
                isBottom : false
            });
        }
    }

    hasEvent(elem) {
        if (elem) return this.props.onTypeChange;

        return null;
    }

    render() {
        const {src, alt, header} = this.props;

        const {isBlock, isBottom} = this.state;

        const btnText = 'HERO_SERVICES_DETAILS_BUTTON';

        return (
            <div className="serviceItem text-center d-flex flex-wrap align-content-center justify-content-center"
                 onClick={this.hasEvent(isBlock)}>
                <div className="topPart">
                    <img className="pb-3" src={src} alt={alt}/>
                    <h6>{this.props.t(header)}</h6>
                </div>
                <div className="bottomPart">
                    <Link to="#" onClick={this.hasEvent(isBottom)}>{this.props.t(btnText)}</Link>
                </div>
            </div>
        );
    }
}

export default withTranslation()(HeroServices);
