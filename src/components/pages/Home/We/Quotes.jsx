import React, {Component, Fragment} from "react";
import {Col} from "reactstrap";

import {withTranslation} from 'react-i18next';

import Comma from "../../../../media/images/comma.png";

class Quotes extends Component {

    quotes = [
        {quotesText: `WE_QUOTES_1_TEXT`, quotesAuthor: `WE_QUOTES_1_AUTHOR`},
        {quotesText: `WE_QUOTES_2_TEXT`, quotesAuthor: `WE_QUOTES_2_AUTHOR`},
        {quotesText: `WE_QUOTES_3_TEXT`, quotesAuthor: `WE_QUOTES_3_AUTHOR`},
        {quotesText: `WE_QUOTES_4_TEXT`, quotesAuthor: `WE_QUOTES_4_AUTHOR`},
        {quotesText: `WE_QUOTES_5_TEXT`, quotesAuthor: `WE_QUOTES_5_AUTHOR`},
    ];

    state = {
        quotesId: 0,
        activeQuotes: this.quotes[0]
    };

    timerId;

    constructor(props) {
        super(props);
        this.updateQuotes = this.updateQuotes.bind(this)
    }

    componentDidMount() {
        this.timerId = setInterval(this.updateQuotes, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateQuotes() {
        let {quotesId} = this.state,
            quotes = this.quotes,
            quotesLength = quotes.length - 1;

        if (quotesId === quotesLength ) quotesId = 0;
        else quotesId++;

        this.setState({
            quotesId : quotesId,
            activeQuotes : quotes[quotesId]
        });


    }

    render() {
        const {activeQuotes} = this.state;

        return (
            <Col className="col-12 col-xl-4 offset-xl-2 pt-4 pt-xl-0">
                <div className="comma">
                    <img src={Comma} alt="Comma"/>
                </div>

                <div className="quotesText">
                    <p dangerouslySetInnerHTML={{__html: this.props.t(activeQuotes.quotesText)}}/>
                </div>

                <p className="quotesAuthor">{this.props.t(activeQuotes.quotesAuthor)}</p>
            </Col>
        );
    }
}

export default withTranslation()(Quotes);