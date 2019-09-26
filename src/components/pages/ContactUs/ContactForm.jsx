import React, {Component} from 'react';
import {Col, Row, Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {withTranslation} from "react-i18next";


// const SEND_MAIL_URL = "http://mpi.dev.com/sendmail/sendmail.php";          // local
const SEND_MAIL_URL = "http://myperfectidea.net/sendmail/sendmail.php";    // local to live
// const SEND_MAIL_URL = "/sendmail/sendmail.php";                            // live

class ContactForm extends Component {
    state = {
        name: "",
        nameErr: ``,
        email: "",
        emailErr: ``,
        message: "",
        messageErr: ``,
        disabled: false
    };

    constructor(props) {
        super(props);

        this.sendMail = this.sendMail.bind(this);
        this.changeInputVal = this.changeInputVal.bind(this);
    }

    async sendMail(e) {
        this.setState({
            disabled: true,
        });

        e.preventDefault();

        const {name, email, message} = this.state;
        const response = await fetch(SEND_MAIL_URL, {
            method: "POST",
            body: `name=${name}&email=${email}&message=${message}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const data = await response.json();
        if (data.status === "success") {
            this.props.msgSending();
        } else {
            this.setState({
                disabled:false
            });
            const { errors } = data;

            const stateItems = {};
            Object.keys(errors).forEach(error => {
                stateItems[error + "Err"] = errors[error];
            });

            this.setState(stateItems);
        }
    }

    changeInputVal(e) {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name + "Err"]: "",
        });
    }

    render() {
        const contactFormTitle = `CONTACT_FORM_TITLE`,
            contactFormFieldName = `CONTACT_FORM_FIELD_NAME`,
            contactFormFieldEmail = `CONTACT_FORM_FIELD_EMAIL`,
            contactFormFieldMessage = `CONTACT_FORM_FIELD_MESSAGE`,
            contactFormButton = `CONTACT_FORM_BUTTON`;

        return (
            <Col md={12} lg={8} className="bg_white">
                <Container id="ContactUs" className="App">
                    <h6 className="pb-4">{this.props.t(contactFormTitle)}</h6>
                    <Form className="form" id="form">
                        <Row className="pb-4">
                            <Col lg={6} md={6}>
                                <FormGroup>
                                    <Label className="labelName">{this.props.t(contactFormFieldName)}</Label>
                                    <Input
                                        className="nameInput"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder=""
                                        value={this.state.name}
                                        onChange={this.changeInputVal}
                                    />
                                    <span>{this.state.nameErr}</span>
                                </FormGroup>
                            </Col>
                            <Col lg={6} md={6}>
                                <FormGroup>
                                    <Label className="labelEmail">{this.props.t(contactFormFieldEmail)}</Label>
                                    <Input
                                        className="emailInput"
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder=""
                                        value={this.state.email}
                                        onChange={this.changeInputVal}
                                    />
                                    <span>{this.state.emailErr}</span>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} className="pb-5">
                                <FormGroup>
                                    <Label className="labelTextarea"
                                           for="text">{this.props.t(contactFormFieldMessage)}</Label>
                                    <Input
                                        className="messageInput"
                                        type="textarea"
                                        name="message"
                                        id="message"
                                        placeholder=""
                                        value={this.state.message}
                                        onChange={this.changeInputVal}
                                    />
                                    <span>{this.state.messageErr}</span>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="pl-0 pr-0" lg={{size: 4, offset: 4}} md={{size: 4, offset: 4}}>
                                <Button className="submit-btn"
                                        onClick={this.sendMail}
                                        disabled={this.state.disabled}
                                >
                                    {this.props.t(contactFormButton)}
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Container>
            </Col>
        );
    }
}

export default withTranslation()(ContactForm);