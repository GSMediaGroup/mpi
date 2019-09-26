import React, {Component} from 'react';

import VerticalScroll from '../../../media/images/vertical-scroll.png';


export default class GoHome  extends Component{

    state = {
        display: `none`,
    };

    constructor (props) {
        super(props);

        this.goHome = this.goHome.bind(this);
        this.show = this.show.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.show);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.show)
    }

    show () {
        let scroll = window.scrollY,
            display = `none`;

        if(scroll > 0) {
            display = `block`;
        }

        this.setState({
            display : display
        })
    }

    goHome () {
        const header = document.getElementById(`hero`);
        header.scrollIntoView({behavior : `smooth`});
    }

    render () {
        return null;
        // const { display } = this.state;
        //
        // return (
        //     <div
        //         className="go-home"
        //         style={{display : display}}
        //         onClick={this.goHome}
        //     >
        //         <img src={ VerticalScroll } alt="Scroll Up"/>
        //     </div>
        // );
    }
}