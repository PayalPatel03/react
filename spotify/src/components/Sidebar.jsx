import React from "react";



function Sidebar() {
  return (
    <div className="sidebar bg-black text-white p-3 d-flex flex-column mt-5 ">
      <h5 className="fw-bold mt-3">Your Library  </h5>
    

      <div className="create-playlist bg-dark p-3 rounded mb-3">
        <h6>Create your first playlist</h6>
        <p className=" text-white fs-6">It's easy, we'll help you</p>
        <button className="btn btn-light rounded-pill fw-semibold">Create playlist</button>
      </div>
      <div className="create-playlist bg-dark p-3 rounded mb-3">
        <h6>Let's find some podcast to follow</h6>
        <p className=" text-white fs-6">We'll keep you update on new episodes </p>
        <button className="btn btn-light rounded-pill fw-semibold">Browse podcast</button>
      </div>

      <div className="footer-links mt-auto  small">
        <div className="d-flex flex-wrap gap-2">
          <a href="#">Legal</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
        <button className="btn btn-outline-light btn-sm mt-3 rounded-pill">🌐 English</button>
      </div>
    </div>
  );
}

export default Sidebar;
