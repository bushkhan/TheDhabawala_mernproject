import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// import { GoogleLogin } from 'react-google-login'
// const Register = () => {
export default function Register() {
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
  }
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "1025971172538-n7o62let6d06kb8aoinfonapf6jl2rsv.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "dark", size: "medium", width: 100, height: 50 }
    )
  }, []);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');

  // const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    // setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // setSubmitted(false);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    // setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || Confirmpassword === '') {
      setError(true);
    } if (email && password) {
      console.log("\nname: ", name, "Email: ", email, "\npassword: ", password)
    }
  };



  return (
    <div className='form-login'>

      <Link to={'/login'}>
        <section id='relative'>
          <button type='button' id='middle' onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}>Login</button>
        </section>
      </Link>

      <div className='register-form'>

        <form onSubmit={handleSubmit}>

          <h4>Register Now:</h4>


          <div className='ui divider'></div>

          <div className='ui form'>

            <div className='field'>
              <input 
              onChange={handleName} 
              className="input"
              value={name} 
              type="text" 
              placeholder='Name' />
              {error && name.length <= 0 ?
                <label>name required</label> : ""}
            </div>

            <div className="input-block">
              <label htmlFor="email" className="input-label">

              </label>
              <input onChange={handleEmail} className="input"
                value={email} type="email" placeholder='Email' />
              {error && email.length <= 0 ?
                <label>Email required</label> : ""}

            </div>
            <div className='input-block'>

              <input onChange={handlePassword} className="input"
                value={password} type="password" placeholder="Password" />
              {error && password.length <= 0 ?
                <label>please fill the password</label> : ""}
            </div>

            <div>

              <input onChange={handleConfirmPassword} className="input"
                value={Confirmpassword} type="password" placeholder="Confirm-password" />
              {/* <p className="link">
            <Link to={'/Forgot'}>Forgot password
             {/* <a href="#">Forgot password </a>  */}
              {/* </Link>
             </p> */}
              <div>
              <p className='forget password'>
                  <Link to={"/forgot"} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/forgot';
                  }}>Forgot password</Link>
               
              </p>
              </div>
              {error && Confirmpassword.length <= 0 ?
                <label>password ?</label> : ""}

            </div>  

            <div id="button">
              {/* <Link to={'/reserve'}> */}
              <button onClick={handleSubmit} className="submit-button" type="submit"
              // onClick={(e) => {
              //   e.preventDefault();
              //   window.location.href='/reserve';
              //   }}
              >Register</button>
              {/* </Link> */}


              <div id='signInDiv'></div>

            </div>

          </div>
        </form>
      </div>
    </div>


  )
}