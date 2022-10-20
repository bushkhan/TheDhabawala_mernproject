import React from "react";

const Map = () => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          width="630"
          height="200"
          src="https://maps.google.com/maps?width=1000&amp;height=1000&amp;hl=en&amp;q=Gazebo dhaba kharghar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
      <style>
        .mapouter position:relative; 
        text-align:right; 
        width:600px;
        height:400px;.gmap_canvas 
        overflow:hidden; 
        background:none!important;
        width:600px;
        height:400px;.gmap_iframe 
        width:600px!important;
        height:400px!important;
      </style>
    </div>
  );
};

export default Map;