import React, {Component} from 'react';
import {Col, Row, Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {withTranslation} from "react-i18next";


class ContactForm extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        const contactFormTitle = `CONTACT_FORM_TITLE`,
              contactFormFieldName = `CONTACT_FORM_FIELD_NAME`,
              contactFormFieldEmail = `CONTACT_FORM_FIELD_EMAIL`,
              contactFormFieldMessage = `CONTACT_FORM_FIELD_MESSAGE`,
              contactFormButton = `CONTACT_FORM_BUTTON`;

        return (
            <Col md={8} lg={8} className="bg_white">
                <Container id="ContactUs" className="App">
                    <h6 className="pb-5">{ this.props.t(contactFormTitle) }</h6>
                    <Form className="form">
                        <Row className="pb-4">
                            <Col lg={6} md={6}>
                                <FormGroup>
                                    <Label className="labelName">{ this.props.t(contactFormFieldName) }</Label>
                                    <Input
                                        className="nameInput"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={6} md={6}>
                                <FormGroup>
                                    <Label className="labelEmail">{ this.props.t(contactFormFieldEmail) }</Label>
                                    <Input
                                        className="emailInput"
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder=""
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} className="pb-4">
                                <FormGroup>
                                    <Label className="labelTextarea" for="text">{ this.props.t(contactFormFieldMessage) }</Label>
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
                                <Button className="submit-btn" onClick={() => this.closeModal()}>{ this.props.t(contactFormButton) }</Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            </Col>
        );
    }
}

export default withTranslation()(ContactForm);