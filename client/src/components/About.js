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
                      id="profileTab"
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
        </form>
      </div>
    </>
  );
};

export default About;
