import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#main">
          Shoeb Akter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color: 'tomato'}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link " aria-current="page" href="#main">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutme">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="https://drive.google.com/file/d/1ykjuUdNxVTp0jcvlmZgdkj9z6s_1_Oul/view?usp=sharing" target="_blank">
                resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                porjects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#email">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
