import React, {Component} from "react";
import Slider from "../../../react-slick";
import Popup from "./Popup";
import PopupView from "./PopupView";
import {NextArrow, PrevArrow} from './CustomArrow';

import "../../../slider/slick/slick.scss";
import "../../../slider/slick/slick-theme.scss";

export default class MultipleItems extends Component {
    state = {
        slidesToShow: null,
        isOpen: false
    };

    constructor(props) {
        super(props);

        this.windowSizeChange = this.windowSizeChange.bind(this);
        this.closeImage = this.closeImage.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.windowSizeChange);

        this.windowSizeChange();
    }

    /**
     * Check and return responsive images view
     */
    windowSizeChange() {
        const width = window.innerWidth;
        let showCount = null;

        if (width <= 992) showCount = 1;
        
        // else if (width <= 800) showCount = 1;

        else showCount = 3;


        this.setState({
            slidesToShow: showCount
        })
    }

    /**
     * This function open the current image in popup
     * And set state isOpen: true
     */
    openImage(index, images) {
        document.body.style.overflow = "hidden";
        this.setState({
            isOpen: true,
            index, 
            images
        });
    }

    /**
     * This function close the popup
     * And set state empty
     */
    closeImage() {
        document.body.style.overflowY = "scroll";

        this.setState({
            isOpen: false,
            index: null,
            images: null
        });

    }

    render() {
        const count = this.state.slidesToShow;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: count,
            slidesToScroll: 1,
            autoplay: true,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>
        };

        let {gallery} = this.props;

        return (
            <>
                <div className="slider-content pt-5">
                    <Slider slideCount={Date.now()} currentSlide={null} {...settings}>
                        {
                            gallery.map((i, index) => {
                                return (
                                    <img src={i.icon} key={index} onClick={() => this.openImage(index, gallery.map(i => i.image))}
                                         alt="Team Images"/>
                                )
                            })
                        }
                    </Slider>
                </div>
                <Popup show={this.state.isOpen}
                       onClose={this.closeImage}>
                    <PopupView images={this.state.images}
                               index={this.state.index}
                               isOpen={this.state.isOpen}
                               onClose={this.closeImage}
                    />
                </Popup>
            </>

        );
    }
}