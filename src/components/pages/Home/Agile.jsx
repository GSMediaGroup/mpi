import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import AgileImg from '../../../images/agileDevelopment.png';


export default class Agile extends Component {

    render () {
        const text = `Every smart solution begins with a perfectly - thought-out strategy. Our team of skilled professionals with its well-thought-out working technologies will provide solution for your any IT task and will ensure the success of your web project. It always takes lots of effort and expertise to deliver flawless web applications, and that’s in fact what you can and should expect from our web development team.`;

        return (
            <section id="agile">
                <Container>
                    <h2 className="text-center pt-5 pt-md-0">AGILE DEVELOPMENT</h2>

                    <Row className="justify-content-between pt-5 align-items-top">
                        <Col md={12} lg={5} className="">
                            <p>{text}</p>
                        </Col>
                        <Col md={12} lg={6}>
                            <img src={AgileImg} alt="Agile Development" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}