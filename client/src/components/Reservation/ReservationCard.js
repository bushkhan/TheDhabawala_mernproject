import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ResrevationCard.css';
import { dataDigitalBestSeller } from './ReservationData';
import dhaba_img from '../../Images/dhaba_img.png';


function ReservationCard() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: dhaba_img,
    }));
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card_2">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <div className='card_Title'>
              <h1>{item.title}</h1>
              </div>
             
            </div>
            <div className="card-Bottom">
              <h3>{item.location}</h3>
              <span className="reservation">{item.reservation}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ReservationCard;