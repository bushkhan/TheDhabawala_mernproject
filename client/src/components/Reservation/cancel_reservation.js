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
const CancleReservaion = () => {
    const [gender,setGender] = useState();

    console.log(gender);
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
                        <h5>Cancel reservation!</h5>
                  
                    </div>
                </div>

                <div className="reservation_code">

                    <h5 className="table">Cancellation details:</h5>
                    <form>
                        <div className="main-div">
                        <div className="reason">
                        <input type="radio" 
                        value="My plans have changed"
                        name="reason"
                        onChange={e=>setGender(e.target.value)} 
                        />
                        <label>My plans have changed</label>
                        </div><br></br>
                        </div>

                        <div className="main-div">
                        <div className="reason">
                        <input type="radio" 
                        value="I made another booking"
                        name="reason"
                        onChange={e=>setGender(e.target.value)}
                         />
                        <label>I made another booking</label>
                        </div><br></br>
                        </div>

                        <div className="main-div">
                        <div className="reason">
                        <input type="radio" 
                        value="I found a better external deal"
                        name="reason"
                        onChange={e=>setGender(e.target.value)}
                         />
                        <label>I found a better external deal</label>
                        </div><br></br>
                        </div>

                        <div className="main-div">
                        <div className="reason">
                        <input type="radio" 
                        value="I accidentally made a booking"
                        name="reason"
                        onChange={e=>setGender(e.target.value)}
                         />
                        <label>I accidentally made a booking</label>
                        </div><br></br>
                        </div>
                    </form>

                    <div className="reserve-button">
                        <button className="not-reserve-me">Cancel Reservation</button>
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
export default CancleReservaion;