import React, {Component} from "react";
import Slider from "../../../react-slick";
import Popup from "./Popup.component";
import PopupView from "./PopupView.component";
import "../../../slider/slick/slick.scss";
import "../../../slider/slick/slick-theme.scss";


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default class MultipleItems extends Component {
    state = {
        slidesToShow: 3,
        isOpen: false
    };

    constructor(props) {
        super(props);

        this.windowSizeChange = this.windowSizeChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.windowSizeChange);
    }

    /**
     * Check and return responsive images view
     * @param {*} e
     */
    windowSizeChange(e) {
        if (window.innerWidth <= 992) {
            this.setState({
                slidesToShow: 1
            })
        } else {
            this.setState({
                slidesToShow: 3
            })
        }
    }

    /**
     * This function close the popup
     * And set state empty
     */
    closeImage = () => {
        window.document.body.style.overflowY = "scroll";
        this.setState({
            isOpen: false,
            index: null, images: null
        });

    }

    /**
     * This function open the current image in popup
     * And set state isOpen: true
     */
    openImage = (index, images) => {
        window.document.body.style.overflow = "hidden";
        this.setState({
            isOpen: true,
            index, images
        });
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 3,
            autoplay: false,
            nextArrow: <div><FontAwesomeIcon icon={faChevronRight}/></div>,
            prevArrow: <div><FontAwesomeIcon icon={faChevronLeft}/></div>,
        };
        const {gallery} = this.props;

        return (
            <>
                <div className="slider-content pt-5">
                    <Slider slideCount={Date.now()} currentSlide={null} {...settings}>
                        {
                            gallery.map((i, index) => {
                                return (
                                    <div className="ourTeamImage" key={index}>
                                        <img src={i} key={index} onClick={() => this.openImage(index, gallery)}/>
                                    </div>)
                            })
                        }
                    </Slider>
                </div>
                <Popup show={this.state.isOpen}
                       onClose={this.closeImage}>
                    <PopupView images={this.state.images} index={this.state.index}/>
                </Popup>
            </>

        );
    }
}