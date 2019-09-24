import React, {Component, Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {withTranslation} from "react-i18next";

import ScrollArea from 'react-scrollbar';

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

        this.renderComponent = this.renderComponent.bind(this);

        let lang = localStorage.getItem("lang");

        if (!lang) {
            lang = "en";
            localStorage.getItem(lang)
        }


        i18next.changeLanguage(lang);
        document.body.classList.add(`lang-${lang}`);
    }

    changeLanguage() {

    }

    renderComponent(Component, hasLayout) {
        return (props) => {
            const page = (
                <Fragment>
                    <Header/>
                    <Component {...props} />
                    <Footer/>
                </Fragment>
            );

            if (!hasLayout) {
                page = <Component {...props} />
            }
            
            return (
                <ScrollArea
                    speed={0.8}
                    className="scrollArea"
                    contentClassName="scrollContent"
                    horizontal={false}
                    smoothScrolling={true}
                >
                    { page }
                </ScrollArea>  
            )

        };
    }

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" render={this.renderComponent(Home, true)}/>
                    <Route exact={true} path="/services" render={this.renderComponent(Services, true)}/>
                    <Route exact={true} path="/:lang" render={this.changeLanguage}/>
                    <Route exact={true} path="/:lang" render={this.changeLanguage}/>
                    <Route path="*" render={this.renderComponent(Error404, false)}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withTranslation()(App);
