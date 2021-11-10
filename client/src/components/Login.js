import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="signin">
      <div className="signin-form text-center">
        <h2 className="form-title">Login</h2>
        <form className="login-form">
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
            />
          </div>

          <NavLink to="/signup" className="signin-link">
            Create new account
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default Login;
