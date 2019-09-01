import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export const NextArrow = (props) =>  {
    const {onClick} = props;

    return (
        <div onClick={onClick} className="slick-arrow slick-next"><FontAwesomeIcon icon={faChevronRight}/></div>
    );
};

export const PrevArrow = (props) =>  {
    const {onClick} = props;

    return (
        <div onClick={onClick} className="slick-arrow slick-prev"><FontAwesomeIcon icon={faChevronLeft}/></div>
    );
};
