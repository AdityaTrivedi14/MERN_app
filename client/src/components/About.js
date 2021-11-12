import React from "react";
import profilePic from "../images/profile.png";

const About = () => {
  return (
    <>
      <div className="container profileCard">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={profilePic} className="profilePic" alt="Profile Pic" />
            </div>
            <div className="col-md-6">
              <div className="profileHead">
                <h5>Aditya Trivedi</h5>
                <h6>Web Developer</h6>

                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="homeTab"
                      data-toggle="tab"
                      role="tab"
                      href="#home"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#profile"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                name="editProfile"
                className="profileEdit"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="workProfile">
                <p>YOUR DESIGNATION</p>
                <a
                  href="https://github.com/AdityaTrivedi14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>{" "}
                <br />
                <a
                  href="https://github.com/AdityaTrivedi14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://github.com/AdityaTrivedi14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Developer
                </a>
                <br />
                <a
                  href="https://github.com/AdityaTrivedi14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freelancer
                </a>
                <br />
                <a
                  href="https://github.com/AdityaTrivedi14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Engineer
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 profileInfo">
              <div className="tabContent profileTab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>594380398675409780</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aditya</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>adityakuldeeptrivedi@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>25$</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Aditya</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>adityakuldeeptrivedi@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
