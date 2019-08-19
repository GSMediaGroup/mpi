import React,  {Component} from 'react';
import {Row, Col} from 'reactstrap';

import AboutImg from '../../../images/about.jpg';




export default class About extends Component {

    constructor (props) {
        super(props);
    }

    render ()  {
        return (
            <section id="about" className="sectionPaddingTop">
                <div className="container">
                    <h2 className="text-left pb-4">WHO WE ARE</h2>

                    <Row className="">
                        <Col className="col-12 col-md pb-4 pb-md-0">
                            <p>MPI – a company delivering services for development and testing of software products. We have a full stack of skilled professionals, who are able to provide solution for any IT task and love technical challenges. Our goal is to create modern and high-tech systems for the successful development of our clients’ business.  </p>
                            <ul className="workProcess">
                                <li><span>1</span>Detailed planners</li>
                                <li><span>2</span>Quality coders</li>
                                <li><span>3</span>Careful Testers</li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-md offset-md-1 imgBlock" >
                            <img src={AboutImg} alt="About Image" className="img-fluid"/>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}