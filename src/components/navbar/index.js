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
        <nav>
          <div className="container">
            <div class="nav-wrapper">
              <a href="/" class="brand-logo">
                findJosh
              </a>
              <a
                href="#"
                data-target="mobile-nav"
                class="sidenav-trigger right"
              >
                <i className="fas fa-bars"></i>
              </a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work">My Work</Link>
                </li>
                <li>
                  <a
                    className=""
                    href="https://github.com/joshhallan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.linkedin.com/in/joshuaallan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:hello@findjosh.dev?subject=Hi Josh&body=Thank you for getting in touch, please leave a contact number and an email address :)"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-nav">
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
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:hello@findjosh.dev?subject=Hi Josh&body=Thank you for getting in touch, please leave a contact number and an email address :)"
            >
              <i className="fas fa-envelope"></i>Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
