import React, { Component } from 'react';

import SliderTitleComponent from './PhotoSlider/SliderTitle.component';
import SliderComponent from './PhotoSlider/Slider.component';

import Gallery from './OurTeam/Gallery';


export default class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Title = "meet out team";
        const Description = `
                    the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of 
                `;


        return (
            <section id="our-team" className="sectionPaddingTop sectionPaddingBottom">
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