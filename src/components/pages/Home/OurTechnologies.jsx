import React, { Component } from 'react';

import SliderTitleComponent from './PhotoSlider/SliderTitle.component';
import SliderComponent from './OurTechnologies/slider.component';

export default class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Title = "technologies we use";
        const Description = `
                    the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of 
                `;
        const Gallery = [
            "https://i.pinimg.com/originals/bc/c0/86/bcc0860537b4030e6e62fa0a38ef907b.jpg",
            "https://i.ytimg.com/vi/8Z1eMy2FoX4/maxresdefault.jpg",
            "https://www.sony.com/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=480",
        ];
        return (
            <section id="Slider">
                <div className="m-0 h-100">
                    <div className="container">
                    <SliderTitleComponent title={Title} description={Description} />
                    <SliderComponent gallery={Gallery} />
                    </div>
                </div>
            </section>
        );
    }
}