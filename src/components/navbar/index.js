import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

import "./style.scss";

class Navbar extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { edge: "right" });
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <div className="row">
                <div className="col s12">
                  <a href="/" className="brand-logo left">
                    findJosh.dev
                  </a>
                  <ul id="nav-mobile" className="right">
                    <li>
                      <a
                        href="#openMenu"
                        data-target="slide-out"
                        className="sidenav-trigger show-on-large right"
                      >
                        <i className="fas fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Slide out nav */}
        <ul className="sidenav" id="slide-out">
          <li>
            <Link to="/" className="sidenav-close">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/work" className="sidenav-close">
              <i className="fas fa-laptop"></i>My Work
            </Link>
          </li>
          <li>
            <a
              className=""
              href="https://github.com/joshhallan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>GitHub
            </a>
          </li>
          <li>
            <a
              className=""
              href="https://www.linkedin.com/in/joshuaallan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:joshuaallan@live.co.uk?subject=Hi Josh&body=Talk to me">
              <i className="fas fa-envelope"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
