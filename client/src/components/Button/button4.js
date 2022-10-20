import React from "react";
import { ReactDOM } from "react";
import "./button4.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

class Button4 extends React.Component {
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
      <div className="button4">
        <button className={this.state.button ? "buttonT4": "buttonF4"} onClick={this.handleClick}> <i className="icons"> <LocationOnIcon /></i>Taloja</button>  
        
      </div>
      )
    }
    
  }

  export default Button4
  
  // ReactDOM.render(<Button1 />, document.querySelector("#app"));