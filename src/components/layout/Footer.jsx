import React, {Component} from "react";
import {Container} from "reactstrap";
import TopSection from '../layout/Footer/TopSection';
import MiddleSection from '../layout/Footer/MiddleSection';
import BottomSection from '../layout/Footer/BottomSection';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <Container>
                    <TopSection />
                    <MiddleSection />
                    <BottomSection />
                </Container>
            </footer>
        );
    }
}