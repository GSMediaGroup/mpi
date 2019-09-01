import React, {Component} from 'react';
import Slider from "../../../react-slick";

export default class Technologies extends Component {
    state = {
        slidesToShow: null
    };

    constructor(props) {
        super(props);
    }



    render() {
        const {gallery, currentClass} = this.props;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
        };

        return (
            <div className="slider-technologies">
                <Slider {...settings}>
                    {
                        gallery.map((i, index) => {
                            return (
                                <img src={i} key={index} className={`${currentClass} pt-5`}/>
                            )
                        })
                    }
                </Slider>
            </div>
        );
    }
}
