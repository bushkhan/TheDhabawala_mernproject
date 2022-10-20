import React from "react";
import { ReactDOM } from "react";
import "./button1.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

class Button1 extends React.Component {
    constructor(props){
      super(props)
      this.state ={
        button: true
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState({
        button:!this.state.button
      })
    }
    render(){
      return ( 
      <div className="button1">
        <button className={this.state.button ? "buttonT1": "buttonF1"} onClick={this.handleClick}> <i className="icons"> <LocationOnIcon /></i> Kharghar</button>  
        
      </div>
      )
    }
    
  }

  export default Button1
  
  // ReactDOM.render(<Button1 />, document.querySelector("#app"));