import React, { Component } from 'react';
import {Container} from 'reactstrap';

import SliderTitleComponent from './PhotoSlider/SliderTitle.component';
import TechnologySlider from './OurTechnologies/TechnologySlider';

import Gallery from '../Home/OurTechnologies/SlideImages';
import { withTranslation } from 'react-i18next';

 class Slider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Title = "TECHNOLOGIES_SLIDER_TITLE";
        const Description = `TECHNOLOGIES_SLIDER_DESCRIPTION`;

        return (
            <section id="our-tech" className="sectionPaddingTop">
                <div className="m-0 h-100">
                    <Container >
                        <SliderTitleComponent title={Title} description={Description} />
                        <TechnologySlider gallery={Gallery} currentClass="techSlideImage" />
                    </Container>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Slider)