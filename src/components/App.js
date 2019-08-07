import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";


export default class App extends Component {
    state = {
        headerBg: "",
        headerText: "",
    };

    constructor(props) {
        super(props);

        this.setHeaderInfo = this.setHeaderInfo.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
    }

    setHeaderInfo(image, text) {
        this.setState({
            headerBg: image,
            headerText: text,
        });
    }

    renderComponent(Component) {
        return (props) => <Component {...props} />;
    }

    render() {
        const { headerBg, headerText } = this.state;

        return (
            <BrowserRouter>
                <Header image={headerBg} text={headerText} />

                <Switch>
                    <Route exact={true} path="/" render={this.renderComponent(Home)} />
                    <Route exact={true} path="/services" render={this.renderComponent(Services)} />
                    <Route path="*" render={this.renderComponent(Error404)} />
                </Switch>

                <Footer />
            </BrowserRouter>
        )
    }
}
