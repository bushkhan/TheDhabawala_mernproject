import React from "react";
import dhaba from "../../Images/dhaba.jpg";
import Rating from '../Page/Rating'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {
  faMessage,
  faUser,
  faPhone,
  faCheck,
  faCalendarAlt,
  faTimes,
  faTimesCircle,
  faClock,
  faUserPlus,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./confirm.css";
const Reserve = () => {
const { id } = useParams();
  const [myData, setMyData] = useState({
    _id: "",
    name: "",
    email: "",
    mobile: "",
    noOfPeople: "",
    date: "",
    newCode:""
  });
  useEffect(() => {
    axios.get(`http://localhost:3500/api/reservations/${id}`)
      .then((res) => {
        setMyData(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <section className="main-container">
      <div className="reserve">
        <div id="header">
          <div className="type">
            <button className="my-reservation">
              <FontAwesomeIcon
                className="icons"
                size="1x"
                icon={faCheck}
              ></FontAwesomeIcon>
              {/* <i className="zmdi zmdi-check "></i> */}
            </button>
          </div>
          <div className="thank-reservation">
            <h5>Thankyou for your reservation!</h5>
            <a className="my_reservation" href="#">
              My Reservations
            </a>
          </div>
        </div>
        <div>
          <div className="reservation_code">
            <div id="code">
              <h5>reservation code</h5>
              <button className="code">{myData.newCode}</button>
            </div>
            <h5 className="table">reservation details:</h5>
            <form className="reservation-form">
              <div className="form-group">

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faCalendarAlt}
                    ></FontAwesomeIcon>
                    {/* <i className="zmdi zmdi-calendar"></i> */}
                  </label>
                  <input
                    type="date"
                    className="input-form"
                    placeholder="date"
                    name="date"
                    value={myData.date}
                    disabled={true}
                  ></input>
                </div>

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faUserPlus}
                    ></FontAwesomeIcon>

                  </label>
                  <input
                    type="text"
                    className="input-form"
                    placeholder="Person"
                    value={myData.noOfPeople}
                  ></input>
                </div>

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faClock}
                    ></FontAwesomeIcon>
                    {/* <i className="zmdi zmdi-time"></i> */}
                  </label>
                  <input
                    type="time"
                    className="input-form"
                    placeholder="time"
                    fullwidth="true"

                  ></input>
                </div>

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faUser}
                    ></FontAwesomeIcon>
                    {/* <i className="zmdi zmdi-account"></i> */}
                  </label>
                  <input
                    type="text"
                    className="input-form"
                    placeholder="Name"
                    value={myData.name}
                    disabled={true}

                  />
                </div>

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    {/* <i className="zmdi zmdi-email"></i> */}
                  </label>
                  <input
                    type="email"
                    className="input-form"
                    placeholder="Email"
                    required
                    value={myData.email}
                    disabled={true}

                  />
                </div>

                <div className="text-field">
                  <label className="icon">
                    <FontAwesomeIcon
                      className="icon"
                      size="1x"
                      icon={faPhone}
                    ></FontAwesomeIcon>
                    {/* <i className="zmdi zmdi-phone"></i> */}
                  </label>
                  <input
                    type="number"
                    className="input-form"
                    placeholder="Phone"
                    value={myData.mobile}
                    disabled={true}

                  />
                </div>
              </div>
            </form>
            <Link to="/cancelReservation">
            <div className="reserve-button">
            
              <button className="reserve-me">Cancel Reservation</button>
             
            </div>
            </Link>
          </div>
        </div>
        <div className="footer">
        <div className="copyrights">
          <h5>Copyright @,all rights reserved.</h5>
        </div>
      </div>
        {/* <div className="footer">
          <footer className="footer-down">.</footer>
        </div> */}
        <div className="container-3">
          <div className="images">
            <figure>
              <img className="reserve-image" src={dhaba} alt="register" />
            </figure>
          </div>
          <div className="hh">
            <p className="dhaba_name_loc">Angreji Dhaba @kharghar</p>
            <div className="loc_details">
              <div className="ratings">
              
           
              </div>

              <p className="no_of_res">150 reservations</p>
              <p className="dhaba_location_name">Kharghar</p>
            </div>
            <hr className="hr-line"></hr>
            <div className="dhaba-phone">
              <h5>call Dhaba : +91 1234567891</h5>
 
            </div>
            <div className="view">
              <button className="view-button">View Dhaba Details</button>
            </div>
          </div>
        </div>
        <div className="container-graph">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="371"
                height="115"
                src="https://maps.google.com/maps?width=1000&amp;height=1000&amp;hl=en&amp;q=Angrezi dhaba kharghar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div>
              <h6 className="address">Address</h6>
              <p className="detail">
                2nd Floor,Nakshtra Mall,Ranade Rd,Kharghar West,Kharghar,Navi
                Mumbai,Maharashtra
              </p>
              <div className="button">
                <button className="get-direction">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reserve;