import React, { Component } from "react";
import wellbeing from "../../assets/images/baby-wellbeing.jpg";
import M from "materialize-css";

class Work extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2>My work</h2>
            <p>
              Here are examples of some of the things that I have worked
              on. I will be adding to this as much as possible. You can also
              visit my <a
                href="https://github.com/joshhallan"
                target="_blank"
                rel="noreferrer"
              >github</a> for other examples of my work.
                </p>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img
                  src={wellbeing}
                  alt="screen shot of app"
                  className="materialboxed"
                />
              </div>
              <div className="card-content">
                <span className="card-title">Baby wellbeing</span>
                <p>
                  I created this web app a means of tracking my sons wellbeing.
                  My partner and I found that we were having trouble tracking
                  his feeds (probably due to lack of sleep) so I decided to
                  create us a web app that can be used to track not only feeds,
                  but nappies, sleeping and medication.
                </p>
                <p>This is built using a MERN & materializecss stack and hosted on heroku</p>
              </div>
              <div className="card-action">
                <a
                  href="https://baby-wellbeing.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="light-blue-text darken-1"
                >
                  visit
                </a>
                <a
                  href="https://github.com/joshhallan/BabyWellbeingPublic"
                  target="_blank"
                  rel="noreferrer"
                  className="light-blue-text darken-1"
                >
                  Git repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
