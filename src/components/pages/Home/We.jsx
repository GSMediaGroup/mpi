import React, {Component} from "react";
import {Container, Row} from 'reactstrap';
import Video from './We/Video';
import Citad from './We/Quotes';

class We extends Component {
    constructor(props) {
        super(props);

        //this.event = this.event.bind(this)
    }

    render() {
        return (
            <section id="we" className="">
                <Container>
                    <Row>
                        <Video />
                        <Citad />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default We;


