import React, {Component} from 'react';

class Popup extends Component {
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
                        {this.props.children}
                    </div>
                </div>
        );
    }
}
export default Popup;