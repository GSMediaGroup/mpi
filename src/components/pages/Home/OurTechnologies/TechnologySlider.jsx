import React, {Component} from 'react';
import Slider from "../../../react-slick";

export default class Technologies extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gallery } = this.props;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: false,
        };

        return (
            <div className="slider-technologies">
                <Slider {...settings}>
                    {
                        gallery.map((i, index) => {
                            return (
                                <div className="images-content pt-5" key={index}>
                                    <img src={i} key={index} />
                                 </div>)
                        })
                    }
                </Slider>
            </div>
        );
    }
}
