import React, { Component } from "react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css";

export default class Carousal extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mainslide1">
        <Slider {...settings}>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/a60ccae0-d654-4e53-8069-1f7eb7df2062.png"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/89af0281-a833-4383-b04f-cfcaeec7a0f0.png" />
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ba218024-d957-4b3f-9b77-3ee55d913beb.png"/>
          </div>
          <div className="imgslide">
         <img style={{width:"100%"}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png"/>
          </div>
         
        </Slider>
      </div>
    );
  }
}