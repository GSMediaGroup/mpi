import React, {Component} from "react";
import Navbar from "./Header/HeaderNavbar";
import {Container} from 'reactstrap';

export default class Header extends Component {

    state = {
      headerBg: '',
      navPos: 'center'
    };

    constructor (props) {
        super(props);

        this.headerPositionChange = this.headerPositionChange.bind(this);
    }

    componentDidMount () {
        window.addEventListener('scroll', this.headerPositionChange);
    }

    componentWillMount () {
        window.removeEventListener('scroll', this.headerPositionChange);
    }

    headerPositionChange () {
        if(window.scrollY === 0) {
            this.setState({
                headerBg: '',
                navPos: 'center'
            });
        }else {
            this.setState({
                headerBg: 'headerBg',
                navPos: 'end'
            });
        }
    }

    render() {
        const {navPos, headerBg } = this.state;

        return (
            <header className={`${headerBg} fixed-top`} >
                <Navbar position={navPos} />
            </header>
        );
    }
}