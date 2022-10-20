import React from "react";
import { ReactDOM } from "react";
import "./button2.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

class Button2 extends React.Component {
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
      <div className="button2">
        <button className={this.state.button ? "buttonT2": "buttonF2"} onClick={this.handleClick}> <i className="icons"> <LocationOnIcon /></i> Nerul</button>  
        
      </div>
      )
    }
    
  }

  export default Button2
  
  // ReactDOM.render(<Button1 />, document.querySelector("#app"));