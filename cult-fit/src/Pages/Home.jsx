import React from 'react'
import { Button } from '@chakra-ui/react'
import {BsChevronDown} from "react-icons/bs"
import "./Home.css"
const Home = () => {
  return (
    <div className="homePage">
    
      {/* HOMEPAGE FIRST VEDIO POSTER STARTS */}
      
        <div className="homePage__video-poster-one">
          <video
            autoPlay
            loop
            playsInline
            poster="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/promo-video-poster.jpg"
          >
            <source
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1278,ar_1.77,q_auto:eco,dpr_1.0700000524520874,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="homePage__text-poster-one">
          <div className="homePage__text-poster-one_img-one">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              alt="we-are-cult-img"
              loading="lazy"
            />
            </div>
            <div className="homePage__text-poster-one_text">
            <h4>A fitness movemet that is worth <br/>breaking a sweat for </h4>
            
              <Button pos="relative" bottom="-5" color="red">EXPLORE CULTPASS</Button>
              <div pos="absolute" top="-30" left="0" zIndex="5">
            <BsChevronDown />
            </div>
            </div>
          </div>
          </div>
  )
}

export default Home