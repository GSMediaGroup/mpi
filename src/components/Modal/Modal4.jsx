import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {withTranslation} from "react-i18next";
import {Row} from 'reactstrap';
import {NavLink} from "react-router-dom";

import ContactForm from './ContactUs/ContactForm';
import ContactInfo from './ContactUs/ContactInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '60%',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'unset',
        background: 'unset'

    }
};

ReactModal.setAppElement(document.getElementById('hero'));

class Modal4 extends Component {
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
        window.document.body.style.overflowY = "hidden";
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        window.document.body.style.overflowY = "scroll";
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <>
                <NavLink className="nav-link" onClick={this.openModal} to="#">{this.props.t('NAVBAR_SECTION_5')}</NavLink>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal"
                >
                    <div className="closeBtn" onClick={() => this.closeModal()}>
                        <FontAwesomeIcon icon={ faTimes } size='2x' />
                    </div>

                    <Row className="m-0">
                        <ContactForm closeHandler={this.closeModal}/>
                        <ContactInfo/>
                    </Row>
                </ReactModal>
            </>
        );
    }
}

export default withTranslation()(Modal4);