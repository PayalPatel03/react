import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaComments,
  FaSun,
  FaMoon,
  FaArrowRight,
} from "react-icons/fa";
import "./Home.css";
// import test-1 from '.assest/test-1.png';
import test from "../assets/test.jpg";
import { Link } from "react-router";
function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <>
      <div className={`home-container d-flex ${darkMode ? "light" : "dark"}`}>
        {/* Theme Toggle Icon in Top Right */}
        <div className="theme-toggle-icon" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>

        {/* Left Yellow Corner */}
        <div className="yellow-corner" />

        {/* Profile Card */}
        <div className="profile-card shadow">
          <img src={test} alt="profile" className="profile-img" />
          <div className="dot-overlay" />
        </div>

        {/* Main Content */}
        <div className="content-area text-white">
          <h1 className="mt-5 mx-5">
            <span className="yellow-line">—</span>{" "}
            <span className="highlight">I'M PAYAL PATEL.</span>
          </h1>
          <h2 className="fw-bold mx-5 text-secondary">FULL Stack Developer</h2>
          <p className="mx-5 text-secondary">
            I'm a Tunisian-based web designer & front-end developer focused on
            crafting clean & user-friendly experiences. I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <button className="btn btn-outline-warning rounded-pill mx-5 py-3 px-2 mt-3 d-flex align-items-center gap-2">
            <strong>MORE ABOUT ME</strong> <FaArrowRight />
          </button>
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
              <Link to="/contact" className="icon-btn">
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
      </div>
    </>
  );
}

export default Home;
