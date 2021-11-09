import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign Up</h2>
            <form className="registeration-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Create Account"
                />
              </div>

              <NavLink to="/login" className="signup-link">
                <span>Already have an account?</span>Sign in
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
