import React, { useState } from "react";
import axios from "axios";
// eslint-disable-next-line
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (event) => {
    event.preventDefault();

    const newUser = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      cpassword: user.cpassword,
    };

    axios.post("http://localhost:5000/register", newUser);
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

  // const postData = async (e) => {
  //   e.preventDefault();
  // axios.post("http://localhost:5000/register", user).then((res) => {
  // data: JSON.stringify({ name, email, password, cpassword});
  // console.log(res.data);
  // return res.data;
  // return await axios({
  //   url: "http://localhost:5000/register",
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   data: JSON.stringify(user),
  // })
  //   .then((response) => {
  //     return response.data;
  //   })
  //   .catch((err) => console.log(err));
  // });
  // };

  // const postData = async (e) => {
  //   e.preventDefault();
  //   return await axios({
  //     url: '/register',
  //     method: 'POST'.
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json',
  //     }
  //   })
  // }

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
              <label htmlFor="phone">
                <i class="zmdi zmdi-phone material-icons-name"></i>
              </label>
              <input
                className="myInput"
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Your Phone"
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
