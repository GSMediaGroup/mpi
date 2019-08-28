import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from 'i18next';

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";

class App extends Component {
    state = {
        headerBg: "",
        headerText: "",
    };

    constructor(props) {
        super(props);

        this.setHeaderInfo = this.setHeaderInfo.bind(this);
        this.renderComponent = this.renderComponent.bind(this);

        let lang = localStorage.getItem("lang");

        if (!lang) {
            lang = "en";
            localStorage.getItem(lang)
        }


        i18next.changeLanguage(lang);
        document.body.classList.add(`lang-${lang}`);
    }

    setHeaderInfo(image, text) {
        this.setState({
            headerBg: image,
            headerText: text,
        });
    }

    renderComponent(Component, hasLayout) {
        return (props) => {
            const { headerBg, headerText } = this.state;

            if (!hasLayout) {
                return <Component {...props} />;
            } else {
                return (
                    <>
                        <Header image={headerBg} text={headerText} />
                        <Component {...props} />
                        <Footer />
                    </>
                );
            }
        };
    }

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" render={this.renderComponent(Home, true)} />
                    <Route exact={true} path="/services" render={this.renderComponent(Services, true)} />
                    <Route path="*" render={this.renderComponent(Error404, false)} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withTranslation()(App);
