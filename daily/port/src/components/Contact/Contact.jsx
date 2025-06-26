import React from "react";
import "./Contact.css";
import {
  FaBriefcase,
  FaComments,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMapMarked,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";

function Contact() {
  return (
    <>
      <section className="contact-section text-white bg-black py-5 position-relative">
        <h1 className="contact-bg-text mt-5">CONTACT</h1>

        <div className="container mt-5 position-relative z-1">
          <div className="row align-items-start">
            {/* Left Side */}
            <div className="col-lg-5 mb-4">
              <div className="d-flex align-items-start mb-3">
                <div className="icon-box me-3">
                  <FaMapMarked />
                </div>
                <div>
                  <div className="text-warning fw-bold">ADDRESS POINT</div>
                  <div className="fw-bold">Pathri , Gandevi Gujarat</div>
                </div>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="icon-box me-3">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-warning fw-bold">MAIL ME</div>
                  <div className="fw-bold">p6579113@mail.com</div>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <div className="icon-box me-3">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-warning fw-bold">CALL ME</div>
                  <div className="fw-bold">+91 9316681481</div>
                </div>
              </div>
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/PayalPatel03"
                  className="social-icon fs-3"
                >
                  <FaGithub />
                </a>
                <a href="#" className="social-icon fs-3">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon fs-3">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/payal-patel-8931222b7/"
                  className="social-icon fs-3"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* Right Side - Form */}
            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control input-dark"
                    placeholder="YOUR NAME"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control input-dark"
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control input-dark"
                    placeholder="YOUR SUBJECT"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control input-dark"
                    rows={5}
                    placeholder="YOUR MESSAGE"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12 text-start">
                  <button className="btn btn-outline-warning rounded-pill px-4 py-2 fw-bold position-relative send-btn">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Icons */}
        <div className="sidebar-icons d-flex flex-column align-items-center gap-3">
          <div className="icon-wrapper">
            <button className="slide-btn">Home</button>
            <div className="icon-btn ">
              <Link to="/" className="icon-btn ">
                {" "}
                <FaHome />
              </Link>
            </div>
          </div>
          <div className="icon-wrapper">
            <button className="slide-btn">About</button>
            <div className="icon-btn">
              <Link to="/about" className="icon-btn">
                {" "}
                <FaUser />
              </Link>
            </div>
          </div>
          <div className="icon-wrapper">
            <button className="slide-btn">Portfolio</button>
            <div className="icon-btn">
              <FaBriefcase />
            </div>
          </div>
          <div className="icon-wrapper">
            <button className="slide-btn">Contact</button>
            <div className="icon-btn">
              <Link to="/contact" className="icon-btn active">
                {" "}
                <FaEnvelope />
              </Link>
            </div>
          </div>
          <div className="icon-wrapper">
            <button className="slide-btn">Chat</button>
            <div className="icon-btn">
              <FaComments />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
