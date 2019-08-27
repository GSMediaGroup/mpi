import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Popup extends React.Component {

    componentDidMount() {
        if(this.props.show) {
            window.addEventListener('click', this.props.onClose);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.onClose);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
                <div className="popup-backdrop" onClick={this.props.onClose}>
                    <div className="popup">
                        <span className="popup-close">
                            <FontAwesomeIcon icon={ faTimes } />
                        </span>
                        {this.props.children}
                    </div>
                </div>
        );
    }
}
export default Popup;