import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Col, Row} from 'reactstrap';

export default class Error404 extends Component {
    render() {
        const title = `Go Away, Cat Is Sleeping Here`,
            statusCode = 404,
            btnText = `GO TO HOME`;

        return (
            <section id="error404-page">
                <div className="error404">
                    <div className="content">
                        <div className="title">
                            <h2>{title}</h2>
                        </div>

                        <div className="statusCode">
                            <p>{statusCode}</p>
                        </div>

                        <Link to='/' className="button">{btnText}</Link>
                    </div>
                </div>
            </section>
        );
    }
}