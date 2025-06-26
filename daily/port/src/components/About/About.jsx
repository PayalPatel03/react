import React from "react";
import "./About.css";
import {
  FaBriefcase,
  FaComments,
  FaEnvelope,
  FaHome,
  FaMoon,
  FaUser,
  
} from "react-icons/fa";
import { Link } from "react-router";
import img1 from '../../assets/img1.jpg';

// import profile from '../assets/profile.jpeg'
function About() {
 
  return (
    <>
   

      <section className="container-fluid py-5 text-white bg-black">
        <h1 className="text-center display-4 fw-bold">
          <span className="text-white">ABOUT</span>
          <span className="text-warning"> ME</span>
        </h1>
        <div className="row mt-5">
          {/* Personal Info */}
          <div className="col-md-6">
            <h4 className="fw-bold">PERSONAL INFOS</h4>
            <div className="row">
              <div className="col-6">
                <p>
                  <strong>First Name:</strong> Payal
                </p>
                <p>
                  <strong>Age:</strong> 19 Years
                </p>

                <p>
                  <strong>Phone:</strong> +91 9316681481
                </p>
                <p>
                  <strong>Address:</strong> Gandevi,Gujrat
                </p>
              </div>
              <div className="col-6">
                <p>
                  <strong>Last Name:</strong> Patel
                </p>
                <p>
                  <strong>Nationality:</strong> Indian
                </p>

                <p>
                  <strong>Email:</strong> p6579113@mail.com
                </p>
                <p>
                  <strong>Languages:</strong> English,Hindi,Gujrati
                </p>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-warning text-dark fw-bold mt-3 px-4 py-2"
            >
              DOWNLOAD CV
            </a>
          </div>
          {/* Stats */}
          <div className="col-md-6 img">
            <img
              src={img1}
              c
              alt=""
            />
          </div>
        </div>
      </section>
        {/*Slill */}
      <section className="skills-section py-5 bg-black">
        <div className="container position-relative text-center">
          <h2 className="text-center text-white fw-bold mb-5">SKILL</h2>
          <div className="row position-relative z-1">
            {/* Skill Card */}
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                  alt="HTML"
                  className="skill-icon"
                />
                <h5 className="text-white">HTML</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt="CSS"
                  className="skill-icon"
                />
                <h5 className="text-white">CSS</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="JavaScript"
                  className="skill-icon"
                />
                <h5 className="text-white">JavaScript</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                  alt="React"
                  className="skill-icon"
                />
                <h5 className="text-white">React</h5>
              </div>
            </div>
            {/* Row 2 */}
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="GitHub"
                  className="skill-icon"
                />
                <h5 className="text-white">GitHub</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                  alt="C"
                  className="skill-icon"
                />
                <h5 className="text-white">C Language</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
                  alt="Java"
                  className="skill-icon"
                />
                <h5 className="text-white">Java</h5>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="skill-card">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="Bootstrap"
                  className="skill-icon"
                />
                <h5 className="text-white">Bootstrap</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-icons d-flex flex-column align-items-center gap-3">
          <div className="icon-wrapper">
              <button className="slide-btn">Home</button>
            <div className="icon-btn ">
              <Link to="/" className="icon-btn "> <FaHome /></Link>
             
            </div>
          </div>
          <div className="icon-wrapper">
            <button className="slide-btn">About</button>
            <div className="icon-btn">
              <Link to="/about" className="icon-btn active">
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
      </section>

      {/* eduvcation */}
      <section className="container-fluid py-5 text-white bg-black">
        <h2 className="text-center fw-bold mb-5">EDUCATION</h2>
        <div className="row gy-5">
          {/* Experience Left */}
          <div className="col-md-6 ps-5">
            <div className="timeline-item d-flex">
              <div className="timeline-icon bg-warning">
                <FaBriefcase className="ms-2 " />
              </div>
              <div className="timeline-content">
                <span className="badge bg-secondary mb-1">2023 - Present</span>
                <h5 className="text-white fw-bold">
                  BACHELOR OF ENGINEER
                  <span className="text-secondary">— Computer engineering</span>
                </h5>
                <p>GIDC Degree Engieering College</p>
              </div>
            </div>
            <div className="timeline-item d-flex">
              <div className="timeline-icon bg-warning">
                <FaBriefcase className="ms-2 " />
              </div>

              <div className="timeline-content">
                <span className="badge bg-secondary mb-1">2022 - 2023</span>
                <h5 className="fw-bold">
                  12th Board{" "}
                  <span className="text-secondary">— AB School,Partapore</span>
                </h5>
                <p>
                  Lorem incididunt dolor sit amet, consectetur eiusmod dunt
                  doldunt dol elit, tempor incididunt
                </p>
              </div>
            </div>
          </div>
          {/* Education Right */}
          <div className="col-md-6 ps-5">
            <div className="timeline-item d-flex">
              <div className="timeline-icon bg-warning">
                <FaBriefcase className="ms-2 " />
              </div>
              <div className="timeline-content">
                <span className="badge bg-secondary mb-1">2024-present</span>
                <h5 className="fw-bold">
                  Full Stack Devlopment{" "}
                  <span className="text-secondary">
                    —Red & White Skill Education
                  </span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
            <div className="timeline-item d-flex">
              <div className="timeline-icon bg-warning">
                <FaBriefcase className="ms-2 " />
              </div>
              <div className="timeline-content">
                <span className="badge bg-secondary mb-1">2020 - 2021</span>
                <h5 className="fw-bold">
                  10th Board{" "}
                  <span className="text-secondary">— AB School,Partapore</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, tempor incididunt ut
                  laboreconsectetur elit, sed do eiusmod tempor duntt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}

export default About;
