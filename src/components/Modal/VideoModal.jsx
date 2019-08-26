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


ReactModal.setAppElement(document.getElementById('hero'));

class VideoModal extends React.Component {
    state = {
        modalIsOpen: false,
    };

    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    static getDerivedStateFromProps (props, state) {
        if (state.modalIsOpen != props.isOpenModal) {
            return {
                modalIsOpen : true,
            }
        }

        return null;
    }

    openModal() {
        window.body.style.overflowY = 'hidden';

        this.setState({
            modalIsOpen : true,
        });
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
                <div className="closeBtn" onClick={this.closeModal} >
                    <FontAwesomeIcon icon={ faTimes } size='2x' />
                </div>
                {this.props.children}
            </ReactModal>

        );
    }
}

export default withTranslation()(VideoModal);