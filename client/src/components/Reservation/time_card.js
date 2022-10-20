import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./time_card.css";
import { dataDigitalBestSeller } from "./time_data";


function Time_card() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (

         <div className="card_1">
          <div className="card__1">
            
            <div className="time">
              <h1>{item.time}</h1>
            </div>

            <div className="coupon">
              <h1>{item.coupon}</h1>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Time_card;