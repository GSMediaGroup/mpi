import React from 'react';
import ReactModal from 'react-modal';
import {withTranslation} from "react-i18next";

import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border : 'unset',
        backgroundColor: 'unset'

    }
};


ReactModal.setAppElement(document.getElementById('app'));

class Modal extends React.Component {
    state = {
        modalIsOpen: false,
    };

    constructor(props) {
        super(props);

        this.state.modalIsOpen = props.isOpen;

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);


        document.body.style.overflowY = `hidden`;
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        document.body.style.overflowY = 'scroll';

        this.setState({
            modalIsOpen: false
        });

        const { onClose } = this.props;

        if(typeof onClose == 'function') {
            onClose();
        }
    }

    render() {
        return (
            <ReactModal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Modal"
                ariaHideApp={false}
                openModal={this.openModal}
            >
                <div className="closeBtn" onClick={this.closeModal} >
                    <FontAwesomeIcon icon={ faTimes } size='2x' />
                </div>

                {this.props.children}
            </ReactModal>

        );
    }
}

export default withTranslation()(Modal);