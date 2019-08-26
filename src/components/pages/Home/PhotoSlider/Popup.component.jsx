import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Popup extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
                <div className="popup-backdrop">
                    <div className="popup">
                        <span className="popup-close" onClick={this.props.onClose}>
                            <FontAwesomeIcon icon={ faTimes } />
                        </span>
                        {this.props.children}
                    </div>
                </div>
        );
    }
}

export default Popup;