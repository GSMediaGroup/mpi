import React from 'react';
import ReactModal from 'react-modal';
import { withTranslation } from "react-i18next";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
        
    }
};


ReactModal.setAppElement(document.getElementById('hero'));

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        console.log("pakvav")
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <>
                <NavLink className="nav-link" onClick={this.openModal}>CONTACT US</NavLink>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
        <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="john"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Text</Label>
              <Input
                type="textarea"
                name="text"
                id="text"
                placeholder="your text here"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
                </ReactModal>
            </>
        );
    }
}

export default withTranslation()(Modal);