import { useState } from 'react';
import './styles.css';

export default function Forgot() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 

 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === '' || password === '') {
      setError(true);
    } console.log("Email: ",email,"\npassword: ",password)
    
  };
 

 
  return (
    <div className='form-login'>
    <div className="forget-form">
     <form onSubmit={handleSubmit}>
      <div>
        <h3>Reset password</h3>
      </div>
       
        <div className='ui form'>
            <div className='field'>
        <div className='input-block'>
        
        <input onChange={handleEmail} className="input"
          value={email} type="email" placeholder='Email'required />
          {/* {error&&email.length<=0?
            <label>Email required</label>:""} */}
          <label>Email</label>
          </div>

          <div className='input-block'>
        
        <input onChange={handlePassword} className="input"
          value={password} type="password" placeholder='reset password'/>
          {error&&password.length<=0?
               <label>please fill the password</label>:""}
          <label className="label">Password</label>
          </div>
          <div id='"btn'>
        <button onClick={handleSubmit} className="forget-submit" type="submit">
          Submit
        </button>
        </div>
        
        </div>
     </div>
     
      </form>
    </div>
    </div>
  );
}