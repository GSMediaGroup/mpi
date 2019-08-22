import React from 'react';
import ReactModal from 'react-modal';
import { withTranslation } from "react-i18next";
import { Button, Form, FormGroup, Label, Input, Col, Container, Row } from 'reactstrap';
import { NavLink } from "react-router-dom";

import ContactForm from './ContactUs/ContactForm';
import ContactInfo from './ContactUs/ContactInfo';

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

  openModal(event) {
      event.preventDefault();
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
        <NavLink className="nav-link" onClick={this.openModal} to="#">CONTACT US</NavLink>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <Row className="m-0">
            <ContactForm />
            <ContactInfo />
          </Row>

        </ReactModal>
      </>
    );
  }
}

export default withTranslation()(Modal);