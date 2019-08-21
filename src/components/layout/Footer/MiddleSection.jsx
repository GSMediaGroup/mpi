import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Row, Col} from "reactstrap";
import {withTranslation} from "react-i18next";

class MiddleSection extends Component {

    constructor (props) {
        super(props);

        this.changeHref = this.changeHref.bind(this);
    }

    changeHref (href) {
        return (e) => {
            const elem = document.getElementById(href);

            e.preventDefault();

            elem.scrollIntoView()
        }
    }

    render () {
        const text = 'FOOTER_MIDDLE_SECTION_TEXT';

        const navItems = [
            {translateKey : `NAVBAR_SECTION_1`, to : `about` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_2`, to : `services` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_3`, to : `technologies` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_4`, to : `our-team` , customClass : ``},
            {translateKey : `NAVBAR_SECTION_5`, to : `contacts` , customClass : ``}
        ];

        return (
            <Col className="mx-auto">
                <Row className="top-border bottom-border pt-5 justify-content-center">
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0">
                        <ul>
                            {
                                navItems.map( (item, i) => (
                                    <li key={i}>
                                        <Link
                                            to={`#${item.to}`}
                                            onClick={this.changeHref(item.to)}
                                        >
                                            { (this.props.t((item.translateKey))).toUpperCase() }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col className="option col-12 col-md-4 pt-3 pt-md-0 align-self-center">
                        <p>{text}</p>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default withTranslation()(MiddleSection);