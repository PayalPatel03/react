import React from "react";
import { MdHome } from "react-icons/md";
import { FaGripLinesVertical, FaSearch } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0AScSsM0sCBm9htVa07RiriDqZY219pTpw&s"
              height={30}
              alt=""
            />
          </a>
          <a className="navbar-brand " href="#">
            <MdHome size={32} color="grey" />
          </a>
          <form className="spotify-search-form " role="search">
            <FaSearch className="search-icon " />
            <input
              type="search"
              placeholder="What do you want to listen to?"
              className="spotify-search-input w-100"
              aria-label="Search"
            />
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className=" nav-link text-secondary ms-5 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  Premium
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link text-secondary fw-semibold" href="#">
                  Support
                </a>
              </li>

              <li className="nav-item">
                <a
                  className=" nav-link text-secondary  fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  Download
                </a>
              </li>
              <li className="nav-item p-2">
                <FaGripLinesVertical size={25} color="grey" />
              </li>
              <li className="nav-item ms-3 m-2 text-secondary">
                <GrInstallOption size={25} color="grey" className="me-1" />
                Install App
              </li>
              <li className="nav-link text-secondary ms-5">Sign-up</li>
              <li className="nav-link">
                <button className="btn btn-light ms-5 rounded-pill fw-bold ">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
