import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [userData, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/about", { withCredentials: true })
      .then((res) => {
        console.log("Token Passed successfully");
        const myData = res.data;
        setData({
          ...userData,
          name: myData.name,
          email: myData.email,
          phone: myData.phone,
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...userData, [name]: value });
  };

  const contactData = (event) => {
    event.preventDefault();

    const updateData = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      message: userData.message,
    };

    // axios
    //   .post("http://localhost:5000/contact", updateData)
    //   .then((res) => {
    //     window.alert("Message Submitted");
    //     console.log("Message Submitted");
    //     setData({ ...userData, message: "" });
    //   })
    //   .catch((err) => console.log(err));

    axios.post("http://localhost:5000/contact", updateData).then((res) => {
      if (res.status === 401) {
        window.alert("Invalid Registeration");
        console.log("Invalid Registeration");
      } else {
        window.alert("Message Submitted");
        console.log("Message Submitted");
      }
    });
  };

  return (
    <>
      <div className="contactInfo">
        <div className="container-fluid">
          <div className="row contact-padding">
            <div className="col-sm-6 col-lg-6 pb-4">
              <div className="contact-card d-flex justify-content-start align-items-center">
                <i class="zmdi zmdi-email-open material-icons-name"></i>
                <div className="contact-content">
                  <div className="contact-title">Email</div>
                  <div className="contact-text">
                    adityatrivedi1403@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6 pb-4">
              <div className="contact-card d-flex justify-content-start align-items-center">
                <i class="zmdi zmdi-instagram material-icons-name"></i>
                <div className="contact-content">
                  <div className="contact-title">Instagram</div>
                  <div className="contact-text">@developers_community_._</div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6 pb-4">
              <div className="contact-card d-flex justify-content-start align-items-center">
                <i class="zmdi zmdi-linkedin material-icons-name"></i>
                <div className="contact-content">
                  <div className="contact-title">Linkedin</div>
                  <div className="contact-text">Aditya Trivedi</div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-6 pb-4">
              <div className="contact-card d-flex justify-content-start align-items-center">
                <i class="zmdi zmdi-github-alt material-icons-name"></i>
                <div className="contact-content">
                  <div className="contact-title">Github</div>
                  <div className="contact-text">AdityaTrivedi14</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-8 offset-2">
              <div className="contactForm-container">
                <div className="contactForm-title">Get in touch</div>
                <form method="POST" id="contactForm">
                  <div className="contactForm-content">
                    <input
                      type="text"
                      id="contactForm-name"
                      className="contactForm-name contactInput"
                      name="name"
                      onChange={handleInputs}
                      value={userData.name}
                      placeholder="Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contactForm-email"
                      className="contactForm-email contactInput"
                      name="email"
                      onChange={handleInputs}
                      value={userData.email}
                      placeholder="Email"
                      required="true"
                    />
                    <input
                      type="phone"
                      id="contactForm-phone"
                      className="contactForm-phone contactInput"
                      name="phone"
                      onChange={handleInputs}
                      value={userData.phone}
                      placeholder="Phone"
                      required="true"
                    />
                  </div>
                  <div className="contactMessage mt-1">
                    <textarea
                      id="contactMessage"
                      cols="30"
                      rows="5"
                      name="message"
                      onChange={handleInputs}
                      value={userData.message}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="contactButton">
                    <button
                      type="submit"
                      className="button contactSubmit"
                      onClick={contactData}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
