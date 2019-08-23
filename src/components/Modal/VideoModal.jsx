import React from 'react';
import ReactModal from 'react-modal';
import {withTranslation} from "react-i18next";
import CloseBtn from "../../images/close.svg";

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


ReactModal.setAppElement(document.getElementById('hero'));

class VideoModal extends React.Component {
    state = {
        modalIsOpen: false,
    };

    constructor(props) {
        super(props);
        this.state.modalIsOpen = props.isOpen;

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});

        const { onClose } = this.props;
        if (typeof onClose == "function") {
            onClose();
        }
    }

    render() {
        return (
            <ReactModal
                autoPlay
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                {/*<div className="closeButton d-flex justify-content-end" onClick={() => this.closeModal()}>X</div>*/}
                <div className="closeBtn" onClick={() =>  this.closeModal() }>
                    <img src={CloseBtn} alt="Close Button"/>
                </div>
                {this.props.children}
            </ReactModal>

        );
    }
}

export default withTranslation()(VideoModal);