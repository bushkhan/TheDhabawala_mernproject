import React from "react"
import { Link } from "react-router-dom"
import GoogleLogin from 'react-google-login';
import { useState } from "react"
import './styles.css';

export default function Login(){

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    // alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };



  const [Email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(Email.length==0||password.length==0){
          setError(true)
      }
      if(Email&&password)
      {
      console.log("\nEmail: ",Email,"\npassword: ",password)
      }
  }
  return (
    <div className="form-login">
    <section  id='relative'>
      <Link  to={'/Register' }>
      <button type='button'  id='middle'onClick={(e) => {
      e.preventDefault();
      window.location.href='/Register';
      }}>Register </button>
      </Link>
    </section>
    <>
    <div className='login-form'>
<form onSubmit={handleSubmit}>
<h4>Login Now</h4>
      <div className='ui divider'></div>
      <div className='ui-form'>
        <div className='field'>

           <div>
            <input type="email" placeholder="Email" className="name" onChange={e=>setEmail(e.target.value)}/>
           </div>
           {error&&Email.length<=0?
            <label>Email required</label>:""}

           <div className="second-input">
             <input type="password" placeholder="Password" className="name"onChange={e=>setpassword(e.target.value)}/>
           </div>
           <p className='forget password'>
              <Link to={'/forgot'}>
                <a href="/forgot" onClick={(e) => {
      e.preventDefault();
      window.location.href='/forgot';
      }}>Forgot password</a>
              </Link>
             </p>
           {error&&password.length<=0?
               <label>please fill the password</label>:""}
           
          <div className="login-button">
          <button className='login-submit' type='submit'>Login</button>
          {/* </div> */}
              <div className='inline-block'>
              <div id="logged-button">
        {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
          <GoogleLogin
          // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId='998154025732-i7amu8kd8m5p4au17o6ins6qjdglhtr6.apps.googleusercontent.com'
              buttonText="Login "
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}>
          </GoogleLogin>
          )}
        </div>
            </div>
          </div>

         </div>
       
      </div>
    </form>
    </div>
    </>
    </div>
  );
}