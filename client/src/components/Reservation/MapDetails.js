import React from "react";
import Map from "./Map";


const Mapdetails = () => {
  return (
    <div className="map_container">
      <Map />
      
      <div className="dhaba_details">
        <div className="dhaba_address">
          <h5>Address</h5>
          <p>
            Gazebo Dhaba,
            <br />
            Highway Kharghar
          </p>
        </div>
        <div className="atmosphere">
          <h5>Atmosphere</h5>
          <p>Casual Dining</p>
          <p>Family Friendly</p>
          <p>After Work Drinks</p>
          <p>Business Meetings</p>
        </div>
      </div>

      <div className="dhaba_detail">
        <div className="dhaba_Facility">
          <h5>Facilities/Services</h5>
          <p>Accept Credit Card</p>
          <p>Wifi</p>
          <p>Air Conditioning</p>
        </div>
        <div className="language">
          <h5>Spoken Languages</h5>
          <p>English</p>
          <p>Hindi</p>
        </div>
      </div>

      <div className="dhabaDetails">
        <div className="dhaba_address">
          <h5>Payment Option</h5>
          <p>Master Card</p>
          <p>Visa</p>
        </div>
      </div>
    </div>
  );
};

export default Mapdetails;