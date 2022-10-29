import React from "react";
import { useState } from "react"
import "./joindhaba.css"
// import Nav from "./NavbarElement"
 const joinDhaba=()=> {
    
    return (
        
        <>
        
        <footer>
        <div class="login-wrapper">
    <form action="" class="form">
      
 
      <div class="input-group">
        <input type="Email" name="loginUser" id="loginUser" required/>
        <label for="loginUser">Email</label>
        {/* <label className="icon"><i class="zmdi zmdi-email"></i></label> */}
      </div>
      <div class="input-group">
        <input type="password" name="loginPassword" id="loginPassword" required/>
        <label for="loginPassword">Password</label>
      </div>
      <button class="submit-btn">Login</button>
      
    </form>
    </div>
    </footer>
    </>
    );
}

export default joinDhaba

