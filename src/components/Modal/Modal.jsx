import React from 'react';
import ReactModal from 'react-modal';
import { withTranslation } from "react-i18next";
import { Button, Form, FormGroup, Label, Input, Col, Container, Row } from 'reactstrap';
import { NavLink } from "react-router-dom";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '70%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
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
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, '3000')

  }

  render() {
    return (
      <>
        <NavLink className="nav-link" onClick={this.openModal}>CONTACT US</NavLink>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Row>
            <Col md={8} lg={8}>
              <Container id="ContactUs" className="App">
                <h6 className="pb-5">Send us a message</h6>
                <Form className="form">
                  <Row>
                    {/* <Col lg={1} md={1} className="pb-5" /> */}
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

            <Col md={4} lg={4} className="pt-5 contact-information">
              <h6 className="pb-5">Contact Information</h6>
              <Row>
                <Col md={2} lg={2}>Icon</Col>
                <Col md={10} lg={10}>Icon</Col>
              </Row>
              <Row>
              <Col md={2} lg={2}>Icon</Col>
                <Col md={10} lg={10}>Icon</Col>
              </Row>
              <Row>
              <Col md={2} lg={2}>Icon</Col>
                <Col md={10} lg={10}>Icon</Col>
              </Row>
              <Row>
                <Col md={2} lg={2}>ICONSSSSS</Col>
              </Row>
            </Col>
          </Row>

        </ReactModal>
      </>
    );
  }
}

export default withTranslation()(Modal);