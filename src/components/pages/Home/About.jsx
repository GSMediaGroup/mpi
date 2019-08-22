import React, { Component } from 'react';

import ReactPLayer from 'react-player';

import MPIVideo from '../../../videos/mpi-video.mp4';

import { Row, Col } from 'reactstrap';

import AboutImg from '../../../images/about.jpg';
import { withTranslation } from 'react-i18next';




class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const title = "ABOUT_TITLE";
        const description = "ABOUT_DESCRIPTION";
        const rows = {
            '1': 'ABOUT_LIST_OPTION_1',
            '2': 'ABOUT_LIST_OPTION_2',
            '3': 'ABOUT_LIST_OPTION_3'
        };
        const imageAlt = 'ABOUT_IMAGE_ALT';

        return (
            <section id="about" className="sectionPaddingTop">
                <div className="container">
                    <h2 className="text-left pb-5">{this.props.t(title)}</h2>

                    <Row className="">
                        <Col className="col-12 col-md pb-4 pb-md-0">
                            <p>{this.props.t(description)}</p>
                            <ul className="workProcess pt-2">
                                <li><span>1</span>{this.props.t(rows['1'])}</li>
                                <li><span>2</span>{this.props.t(rows['2'])}</li>
                                <li><span>3</span>{this.props.t(rows['3'])}</li>
                            </ul>
                        </Col>
                        <Col className="col-12 col-md offset-md-1" >
                            <ReactPLayer url={ MPIVideo } />
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default withTranslation()(About);