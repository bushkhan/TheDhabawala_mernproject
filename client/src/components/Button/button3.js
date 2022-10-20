import React from "react";
import { ReactDOM } from "react";
import "./button3.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

class Button3 extends React.Component {
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
      <div className="button3">
        <button className={this.state.button ? "buttonT3": "buttonF3"} onClick={this.handleClick}> <i className="icons"> <LocationOnIcon /></i>Vashi</button>  
        
      </div>
      )
    }
    
  }

  export default Button3
  
  // ReactDOM.render(<Button1 />, document.querySelector("#app"));