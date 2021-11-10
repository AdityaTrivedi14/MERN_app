import React from "react";

const Contact = () => {
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
                <form id="contactForm">
                  <div className="contactForm-content">
                    <input
                      type="text"
                      id="contactForm-name"
                      className="contactForm-name contactInput"
                      placeholder="Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contactForm-email"
                      className="contactForm-email contactInput"
                      placeholder="Email"
                      required="true"
                    />
                  </div>
                  <div className="contactMessage mt-1">
                    <textarea
                      name="text-field form-message"
                      id="contactMessage"
                      cols="30"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="contactButton">
                    <button type="submit" className="button contactSubmit">
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
