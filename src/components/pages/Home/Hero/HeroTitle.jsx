import React, {Component} from 'react';
import {Link} from  'react-router-dom';

export default class HeroTitle extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="heroTitle h-100">
                <h1>WE JUST DO THAT</h1>
                <p className="pb-1 pb-md-4">Your partner for stunning web and mobile ideas</p>
                <Link to="#">KNOW MORE</Link>
            </div>
        );
    }
}