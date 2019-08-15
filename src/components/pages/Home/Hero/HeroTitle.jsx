import React, {Component} from 'react';
import {Link} from  'react-router-dom';
import {Container} from 'reactstrap';

export default class HeroTitle extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Container className="h-100">
                <div className="heroTitle pt-md-5">
                    <h1>WE JUST DO THAT</h1>
                    <p className="pb-1 pb-md-4">Your partner for stunning web and mobile ideas</p>
                    <Link to="#">KNOW MORE</Link>
                </div>
            </Container>
        );
    }
}