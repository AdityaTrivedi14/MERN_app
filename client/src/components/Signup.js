import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    console.log(e);
    name = e.target.name;
    value = e.traget.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <section className="signup">
        <div className="signup-form text-center">
          <h2 className="form-title">Sign Up</h2>
          <form className="registeration-form">
            <div className="form-group mb-3">
              <label htmlFor="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input
                className="myInput"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
                placeholder="Your Name"
              />
            </div>

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
                value={user.email}
                onChange={handleInputs}
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
                value={user.password}
                onChange={handleInputs}
                placeholder="Your Password"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="cpassword">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input
                className="myInput"
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="form-submit"
                value="Create Account"
              />
            </div>

            <NavLink to="/login" className="signup-link">
              <span>Already have an account?</span> Sign in
            </NavLink>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
