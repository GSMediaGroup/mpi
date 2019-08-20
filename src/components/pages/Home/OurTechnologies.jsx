import React, { Component } from 'react';
import {Container} from 'reactstrap';

import SliderTitleComponent from './PhotoSlider/SliderTitle.component';
import TechnologySlider from './OurTechnologies/TechnologySlider';

import Gallery from '../Home/OurTechnologies/SlideImages';

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

        return (
            <section id="Slider" className="sectionPaddingTop">
                <div className="m-0 h-100">
                    <Container >
                        <SliderTitleComponent title={Title} description={Description} />
                        <TechnologySlider gallery={Gallery} />
                    </Container>
                </div>
            </section>
        );
    }
}