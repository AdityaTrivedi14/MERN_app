import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
// axios.defaults.withCredentials = true;

const Login = () => {
  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();

    const user = { email, password };

    axios
      .post("http://localhost:5000/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 400) {
          window.alert("Invalid Registeration");
          console.log("Invalid Registeration");
        } else {
          dispatch({ type: "USER", payload: true });
          window.alert("Login Successfull");
          console.log("Login Successfull");
          navigate("/");
        }
      });
  };

  return (
    <>
      <section className="signin">
        <div className="signin-form text-center">
          <h2 className="form-title">Login</h2>
          <form method="POST" className="login-form">
            <div className="form-group mb-3">
              <label htmlFor="email">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input
                className="myInput"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                className="myInput"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="form-submit"
                value="Log In"
                onClick={loginUser}
              />
            </div>

            <NavLink to="/signup" className="signin-link">
              Create new account
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
