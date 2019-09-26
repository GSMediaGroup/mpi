import React, { Component } from 'react';

import SliderTitleComponent from './PhotoSlider/SliderTitle';
import SliderComponent from './PhotoSlider/Slider';

import Gallery from './OurTeam/Gallery';


export default class Slider extends Component {
    render() {
        const Title = "PHOTO_SLIDER_TITLE";
        const Description = `PHOTO_SLIDER_DESCRIPTION`;


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