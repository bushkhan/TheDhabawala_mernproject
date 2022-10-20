import React from "react";
import "./reservation.css";
import "../Page/Card.css";
import logo from "../../Images/logo.png";
import Food from "../../Images/Food.jpg";
import { Rating } from "@mui/material";
import "./Tab.css";
import Tab from "./Tab";
import axios from 'axios';

import { useState, useEffect } from 'react';

import {
  faMessage,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReservationCard from "./ReservationCard";
import Dollar from "../CancleReservaion/dollar";
import { useParams } from "react-router-dom";
const Reservation = () => {


  const { id } = useParams();
 
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3500/api/dhabas/${id}`)
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []); 
  const {name, dhabaImage, menuImage} = myData;

  return (
    
    <div>
      <div className="reservation">
        <img
          className="reservationlogo"
          src={logo}
          alt="logo"
          width="130"
          height="130"
        />
        <h2>{name}</h2>
      </div>
      <div className="res_rating">
        <Rating className="rating1" />
        <h4 className="res_no">3.9</h4>
        <div className="line1" />
        <Dollar className="rating2" />
        <div className="line2" />
        <h4 className="cuisine_name1">Non-Vegetrain</h4>
      </div>
      <div className="res_loc">
        <h6 className="no_of_reservation">75 Reservation</h6>
        <h6 className="reservation_loc">Kharghar</h6>
        <h6 className="add_fav">Add to Favourite</h6>
      </div>
      <div className="food_photo">
        <img
          className="dhaba_food_photo"
          src={dhabaImage}
          alt="logo"
          width="630"
          height="350" 
        ></img>
      </div>
      <Tab className="tab_class" />
      <div className="trending_reservation">
        <div className="trending_dhaba_reservation">
          <h1 className="trending_dhaba1_reservation">You May Also Like</h1>
        </div>
        <ReservationCard />
      </div>
      <div className="footer">
        <div className="copyright">
          <h5>Copyright @,all rights reserved.</h5>
        </div>
      </div>

      {/* <Mapdetails/> */}

    <form >
    <div className="form">
        <h5 className="reservationdetail">Reservation Details</h5>
        <div className="text_field">
          <div className="inputWithIcon">
            <input type="date" className="date" name="date" />
            {/* <input type="date" className="date" value="Today"></input> */}
          </div>

          <div className="DropDown">
            <select className="Dropdown" defaultValue={"2 person"}>
              <option className="drop_value" value="2">
                2 Person
              </option>
              <option className="drop_value" value="3">
                3 Person
              </option>
              <option className="drop_value" value="4">
                4 Person
              </option>
              <option className="drop_value" value="5">
                5 Person
              </option>
              <option className="drop_value" value="6">
                6 Person
              </option>
              <option className="drop_value" value="7">
                7 Person
              </option>
              <option className="drop_value" value="8">
                8 Person
              </option>
            </select>
          </div>

          <div className="inputWithIcon">
            <input type="text" className="text_field" placeholder="Your name" />
            <FontAwesomeIcon
              className="icon"
              size="1x"
              icon={faMessage}
            ></FontAwesomeIcon>
          </div>

          <div class="inputWithIcon">
            <input type="text" className="text_field" placeholder="Email" />
            <FontAwesomeIcon
              className="icon"
              size="1x"
              icon={faUser}
            ></FontAwesomeIcon>
          </div>

          <div className="inputWithIcon">
            <input
              type="text"
              className="text_field"
              placeholder="+91 Mobile Phone"
            />
            <FontAwesomeIcon
              className="icon"
              size="1x"
              icon={faPhone}
            ></FontAwesomeIcon>
          </div>
          <button className="Button1">Review Reservation</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default Reservation;