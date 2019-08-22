import React, {Component} from 'react';
import {Col, Row, Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {withTranslation} from "react-i18next";


class ContactForm extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Col md={8} lg={8}>
                <Container id="contactUs" className="App">
                    <h6 className="pb-5">Send us a message</h6>
                    <Form className="form">
                        <Row>
                            <Col lg={6} md={6} className="pb-5">
                                <FormGroup>
                                    <Label className="labelName">Name</Label>
                                    <Input
                                        className="nameInput"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={6} md={6} className="pb-5">
                                <FormGroup>
                                    <Label className="labelEmail">Email</Label>
                                    <Input
                                        className="emailInput"
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                            {/* <Col lg={1} md={1} className="pb-5" /> */}
                        </Row>
                        <Row>
                            <Col lg={12} md={12} className="pb-5">
                                <FormGroup>
                                    <Label className="labelTextarea" for="text">Message</Label>
                                    <Input
                                        className="messageInput"
                                        type="textarea"
                                        name="text"
                                        id="text"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pl-0 pr-0" lg={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }}>
                                <Button className="submit-btn" onClick={() => this.closeModal()}>Send Message</Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            </Col>
        );
    }
}

export default withTranslation()(ContactForm);