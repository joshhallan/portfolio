import React, { Component } from "react";
import image from "../../assets/images/baby-wellbeing.jpg";
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
            <div className="card">
              <div className="card-content">
                <span className="card-title">My work</span>
                <p>
                  Here is an example of some of the things that I have worked
                  on. I will be adding to this as much as possible. You can also
                  visit my{" "}
                  <a
                    href="https://github.com/joshhallan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>{" "}
                  for other examples of work.
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img
                  className="materialboxed"
                  src={image}
                  alt="screen shot of app"
                />
              </div>
              <div class="card-content">
                <span class="card-title">Baby wellbeing</span>
                <p>
                  I created this web app a means of tracking my sons wellbeing.
                  My partner and I found that we were having trouble tracking
                  his feeds (probably due to lack of sleep) so I decided to
                  create us a web app that can be used to track not only feeds,
                  but nappies, sleeping and medication.
                </p>
                <p>This is built using a MERN stack and hosted on heroku</p>
              </div>
              <div class="card-action">
                <a
                  href="https://baby-wellbeing.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit
                </a>
                <a
                  href="https://github.com/joshhallan/BabyWellbeingPublic"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repo
                </a>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">This site</span>
                <p>
                  I've built this site to showcase my work as well as my skills
                  and experiences
                </p>
                <div class="card-action">
                  <a href="/">Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
