import { useState } from "react";
import Mapdetails from "./MapDetails";
import "./Tab.css";
import "./Map.css";
import menu2 from "../../Images/menu2.png";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  const [show , setShow] = useState(false);
  const handleOnClick = () => {
  setShow(true);
  }
  



  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Menu
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          About
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Review
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="drop">
            <h4 className="recommended">recommended menu</h4>

            <div>
              <select className="dropdown" defaultValue={"10%"}>
                <option className="drop_value" value="10%">
                10%
                </option>
                <option className="drop_value" value="20%">
                20%
                </option>
                <option className="drop_value" value="30%">
                30%
                </option>
                <option className="drop_value" value="40%">
                  40%
                </option>
              </select>
            </div>
          </div>

    <div>  
      <button onClick={handleOnClick}></button>
    {
       <img className="menu2" src={menu2} alt="abc" />
    }
    </div>
  

          

          <div className="Menu">

          </div>
          <hr />
        </div>
        <div className="about">
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <p>
              Gazebo Dhaba is one of those places that have a very interesting
              and
              <br /> maybe even bizarre name cuisine under the sun,laid out for you like a king! <br/>With a wide
              variety of dishes like North Indian,Chinese,Mughlai,Asian
              food,seafood there’s nothing that you won’t find here.
            </p>

            <div className="famous_dishes">
              <h5>Famous Dishes</h5>
              <div className="dish_name">
                <h6>Butter Chicken</h6>
                <h6>Dum Aloo</h6>
                <h6>Mutton Biryani</h6>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <p>
              Gazebo Dhaba is one of those places that have a very interesting
              and
              <br /> maybe even bizarre name cuisine under the sun,laid out for you like a king! <br/>With a wide
              variety of dishes like North Indian,Chinese,Mughlai,Asian
              food,seafood there’s nothing that you won’t find here.
            </p>
        </div>
      </div>
      <Mapdetails />
    </div>
  );
}

export default Tab;