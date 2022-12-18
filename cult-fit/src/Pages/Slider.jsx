import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./FitnessSlider.css";

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="mainslide1">
        <Slider {...settings}>
          <div className="imgslide">
         <img style={{width:"100%"}} src={image}/>
         
          </div>
          
        </Slider>
      </div>
    );
  }
}