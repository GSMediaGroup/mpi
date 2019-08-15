import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'reactstrap';

export default class HeroServices extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="d-flex flex-column heroServices d-none">
                <Col>
                    <div className="serviceIcon"></div>
                    <h3>WEB DEVELOPMENT</h3>
                    <div className="d-none">
                        <p>Best solutions for you!</p>
                        <Link to="webDev" >DETAILS</Link>
                    </div>
                </Col>
            </div>
        );
    }
}