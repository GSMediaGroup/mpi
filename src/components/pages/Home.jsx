import React, {Component} from "react";

import Hero from '../pages/Home/Hero';

import {Container, Row, Col} from "reactstrap";
import Particles from "react-particles-js"
import PaginationLink from "reactstrap/es/PaginationLink";



export default class Home extends Component {
    render() {
        return (
            <Hero />
        );
    }
}