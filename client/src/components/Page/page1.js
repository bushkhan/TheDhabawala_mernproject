import React from "react";
import "./Page1.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
import background2 from "../../Images/background2.jpg";
import dhaba from "../../Images/dhaba.jpg";
// import blur from "../../Images/blur.png";
import phone from "../../Images/phone.png";
import Card from "./Card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../Images/logo.png";
// import { Button, Rating } from "@mui/material";
// import Food from "../../Images/Food.jpg";
import Grid from "./Grid";
import Grid_Cuisine from "./grid_Cuisine";
import Button1 from "../Button/button1";
import Button2 from "../Button/button2";
import Button3 from "../Button/button3";
import Button4 from "../Button/button4";
import Hero from "../Hero/heroindex";
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";


const Page1 = () => {

  // let navigate = useNavigate();


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const role = localStorage.getItem('role');

  //   if(token != null && role != 'customer'){
  //     navigate("/login"); 

  //   }
  // }, []);

  return (
    <>
    <Hero></Hero>
      <div className="sliderName">
        <h3 className="select">Select Your Dhaba</h3>
        <h1>
          Famous <span>Dhaba's</span>
        </h1>

        <div className="sliderLocation">
         
          <div className="loc_name">
            <Button1 className='BUTTON1'/>
            <Button2 className='BUTTON1'/>
            <Button3 className='BUTTON1'/>
            <Button4 className='BUTTON1'/>
            {/* <button className="loc_button">Kharghar</button>
            <button className="loc_button">Kharghar</button>
            <button className="loc_button">Kharghar</button>
            <button className="loc_button">Kharghar</button> */}
            {/* <h3>Kharghar</h3>
            <h3>Kharghar</h3>
            <h3>Kharghar</h3> */}
          </div>
        </div>   
        <div className="Grid">
        <Grid />
        </div>
       
        {/* 
        <div className="Dhaba_Names">
          <h3 className="dhaba_names">Gazebo Dhaba</h3>
          <Rating className="dhaba_rating" />
        </div> */}
      </div>

      <div className="cuisine">
        <div className="bgImage">
          <img className="Image" src={background2} alt="bg2" />
        </div>

        <div className="popularCuisine">
          <h1 className="Cuisine_type">Vegetarian</h1>
          <h4 className="cuisine_no">1/4</h4>
          <h1 className="selectCuisine">
            Popular <span>Cuisine</span>
          </h1>
               
                  <Grid_Cuisine/>
        </div>
        <div className="cuisine_Name">
          <div className="cuisine_name">
          {/* <Btn1 className='BUTTON1'/>
            <Btn1 className='BUTTON1'/>
            <Btn1 className='BUTTON1'/>
            <Btn1 className='BUTTON1'/> */}
            <h3>Vegetarian</h3>
            <h3>Non-Vegetarian</h3>
            <h3>Italian</h3>
            <h3>Sea Food</h3>
          </div>

          <div className="cuisine_icon">
            <LocationOnIcon />
            <br />
            <LocationOnIcon />
            <br />
            <LocationOnIcon />
            <br />
            <LocationOnIcon />
          </div>
        
        </div>
      </div>

      <div className="trending">
        <div className="trending_dhaba">
          <h1 className="trending_dhaba1">
            Trending <span>Dhaba</span>
          </h1>
        </div>
        <Card />
      </div>

      <div className="joinDhaba">
        <div className="bg_image">
          <img className="image" src={dhaba} alt="dhaba" />
          {/* <img className="blur_image" src={blur} alt="dhaba" /> */}
        </div>
        <div>
          <h3 className="own_dhaba">Own a Dhaba? join us</h3>
          <p className="para">
            Looking to fill those empty seats, especially during those times
            when you're not as busy? DhabaWala is a dhaba reservation platform
            which customer to book their table.
          </p>
          <button className="btn">Join Us</button>
        </div>
      </div>

      <div className="app">
        <div className="app_soon">
          <h3 className="launching">Our App Launching Soon</h3>
          <p className="para1">
            With more features and truly native experience our app dhabawala
            mobile app will be launching soon.
          </p>
        </div>

        <div className="phn_img">
          <img className="phone" src={phone} alt="phone" />
        </div>
      </div>

      <div className="Footer">
        <div className="dhaba_Wala">
          <h3 className="dhabatext">Dhabawala</h3>
          <a href="#" className="DhabaText">About us</a><br/>
          <a href="#" className="DhabaText">Dhabas</a><br/>
          <a href="#" className="DhabaText">Emerchant</a><br/>
          <a href="#" className="DhabaText">Blogs</a><br/>
          {/* <a href="#" className="DhabaText">Careers</a> */}
        </div>
        <div className="Logo1">
          <img src={logo} alt="logo1" width="250" height="250" />
          <div className="footericons">
            {/* <i className="material-icons">Facebook</i>
            <i className="material-icons">Instagram</i> */}
            <FaFacebook className="facebook_icon" size='35' />
            <FaInstagram size='35'/>
          </div>
        </div>
        <div className="support">
          <h3 className="support_text">Support</h3>
          <a href="#">Contact Us</a><br/>
          <a href="#">Privacy Policy</a><br/>
          <a href="#">Faq</a><br/>
          {/* <a href="#">Terms of Use</a><br/> */}
          <a href="#">Fair Use Policy</a><br/>
        </div>
      </div>
      <div className="copy_right">
            <h5>Copyright @,all rights reserved.</h5>
        </div>
    </>
  );
};

export default Page1;