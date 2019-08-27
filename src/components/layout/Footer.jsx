import React, {Component} from "react";
import {Container} from "reactstrap";

import FContent from '../layout/Footer/FooterContent';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Container>
                    <FContent />
                </Container>
            </footer>
        );
    }
}