import React, {Component} from "react";
import {Container, Row} from 'reactstrap';
import Video from './We/Video';
import Quotes from './We/Quotes';

class We extends Component {
    render() {
        return (
            <section id="we">
                <Container>
                    <Row>
                        <Video />
                        <Quotes />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default We;


