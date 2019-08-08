import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Service extends Component {
    static propTypes = {
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
    };

    static defaultProps = {
        title: "dsfnsduifbsdf",
    };

    render() {
        const { logo, title, options } = this.props;

        return (
            <div>
                <img src={logo} alt="Site Logo" />

                <h4>{title}</h4>
                <ul>
                    {options.map((option, i) => (
                        <li key={i}>{option}</li>
                    ))}
                </ul>
            </div>
        );
    }
}