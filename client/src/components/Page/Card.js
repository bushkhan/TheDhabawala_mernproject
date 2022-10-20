import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card.css';
import { dataDigitalBestSeller } from './data';
import dhaba_img from '../../Images/dhaba_img.png';
import { Rating } from '@mui/material';

function Card() {
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
          <div className="card">
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
              <div className='card_title'>
              <h1>{item.title}</h1>
              <Rating className='rating'/>
              </div>
             
            </div>
            <div className="card-bottom">
              <h3>{item.location}</h3>
              <span className="reservation">{item.reservation}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;