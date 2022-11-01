import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Authentication/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SweetAlert from 'sweetalert-react';
export default function Register() {
  let navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
  }
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "1025971172538-n7o62let6d06kb8aoinfonapf6jl2rsv.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "dark",
      size: "medium",
      width: 100,
      height: 50,
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      Confirmpassword === ""
    ) {
      setError(true);
    }
    if (email && password) {
      console.log("\nname: ", name, "Email: ", email, "\npassword: ", password);
    }

    
    const registerDetails = {
      name:name,
      email:email,
      password:password,
      repeat_password:Confirmpassword
    }
    console.log(registerDetails);

    axios({
      method: 'POST',
      url: 'http://localhost:3500/api/register',
      data: registerDetails
  })
  .then((res) => {
    setIsOpen(true);
    alert("register successful!")
    navigate("/login"); 

  });
  };

  return (
    <div className="form-login">
      <Link to={"/login"}>
        <section id="relative">
          <button
            type="button"
            id="middle"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            Login
          </button>
        </section>
      </Link>
      <div className="register-form">
        <form>
          <h4>Register Now</h4>
          <div className="ui divider"></div>
          <div className="ui-form">
            <div className="field">
              <div>
                <input
                  onChange={handleName}
                  className="input_text"
                  value={name}
                  type="text"
                  placeholder="Name"
                />
                {error && name.length <= 0 ? <label>Name required</label> : ""}
              </div>

              <div className="input-block">
                <label htmlFor="email" className="input-label"></label>
                <input
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  type="email"
                  placeholder="Email"
                />
                {error && email.length <= 0 ? (
                  <label>Email required</label>
                ) : (
                  ""
                )}
              </div>

              <div className="input-block">
                <input
                  onChange={handlePassword}
                  className="input"
                  value={password}
                  type="password"
                  placeholder="Password"
                />
                {error && password.length <= 0 ? (
                  <label>Please fill the password</label>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  onChange={handleConfirmPassword}
                  className="input"
                  value={Confirmpassword}
                  type="password"
                  placeholder="Confirm-password"
                />
              </div>

              <p className="forget password">
                <Link to={"/forgot"}>
                  <a
                    href="/forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/forgot";
                    }}
                  >
                    Forgot password
                  </a>
                </Link>
              </p>
              {error && password.length <= 0 ? (
                <label>please fill the password</label>
              ) : (
                ""
              )}

              <div id="button">
                <button
                  onClick={handleSubmit}
                  className="submit-button"
                  type="submit"
                >
                  Register
                </button>

                <div id="signInDiv"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}