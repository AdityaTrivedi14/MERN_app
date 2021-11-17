import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Using Fetch

  // const postData = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password, cpassword } = user;

  //   const res = await fetch("/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       cpassword,
  //     }),
  //   });

  //   const data = await res.json();

  //   if (res.status === 422 || !data) {
  //     window.alert("Invalid Registeration");
  //     console.log("Invalid Registeration");
  //   } else {
  //     window.alert("Registeration Successfull");
  //     console.log("Registeration Successfull");
  //     navigate("/login");
  //   }
  // };

  // Using Cors and Axios

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", user)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <section className="signup">
        <div className="signup-form text-center">
          <h2 className="form-title">Sign Up</h2>
          <form method="POST" className="registeration-form">
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
                onClick={postData}
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
