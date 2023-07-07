import React, { Component } from "react";
import Modal from "../../components/modal";
import M from "materialize-css";
import image from "../../assets/images/me.jpg";
import file from "../../assets/files/joshua-allan-cv.pdf";
import "./style.scss";

class Home extends Component {
  componentDidMount() {
    let tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);
  }

  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col s12 l4 ">
                <div className="intro__image-container">
                  <img className="circle" src={image} alt="myself at work" />
                </div>
              </div>
              <div className="col s12 l8">
                <h2>Hello!</h2>
                <p>
                  Welcome, I'm Josh and I'm a 30 year old web developer from
                  Sunderland.
                </p>
                <p>
                  I am very passionate about computers and computing as I have
                  grown up using computers from a young age. I have learnt to
                  program in multiple languages such as Java, JavaScript, HTML
                  and CSS/SCSS. I am eager to learn and expand my knowledge; I
                  am always looking for new JavaScript frameworks to learn. I am
                  an extremely organized and decisive person. I can enjoy
                  working within a group as I can call upon others for knowledge
                  and help, however, I am highly self-motived, so I am more than
                  happy to tackle a problem alone.
                </p>
                <p>
                  One major thing for me throughout my career is that I want to
                  learn; I want to continuously learn new frameworks and new
                  ways of doing things. I feel as though, if I'm not learning
                  something new, such as a framework or language, then I don’t
                  feel as though I’m achieving anything.
                </p>
                <p>
                  As well as browsing the site you can also download a copy of
                  my CV below.
                </p>
                <a
                  className="waves-effect waves-light btn cyan lighten-1"
                  href={file}
                  download
                >
                  Download cv <i class="fas fa-file-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <div className="col s12 tab-list">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab">
                      <a href="#skills">Skills</a>
                    </li>
                    <li className="tab">
                      <a href="#education">Education</a>
                    </li>
                    <li className="tab">
                      <a href="#employment">Employment</a>
                    </li>
                  </ul>
                </div>
                <div className="card-content">
                  <div className="row">
                    {/* skills */}
                    <div id="skills" className="col s12">
                      <div className="col s12 l6">
                        <p>
                          I am proficient in HTML, CSS, SCSS as well as
                          JavaScript and JQuery. I have also worked a lot with
                          bootstrap, foundation and material design. Previously
                          I have worked with React, AngularJs as well as Angular
                          8. I am always looking to upskill and learn new
                          frameworks; in the future I am looking to work a lot
                          more with React, Angular and Vue.
                        </p>
                      </div>
                      <div className="col s12 l6">
                        <ul className="collection">
                          <li className="collection-item">
                            <p>HTML, CSS / SCSS, JavaScript (es6), jQuery</p>
                          </li>
                          <li className="collection-item">
                            <p>React, AngularJS, Angular </p>
                          </li>
                          <li className="collection-item">
                            <p>Bootstrap, Foundation, Materialize</p>
                          </li>
                          <li className="collection-item">
                            <p>Git, SVN</p>
                          </li>
                          <li className="collection-item">
                            <p>Unit, automated and manual testing</p>
                          </li>
                          <li className="collection-item">
                            <p>Accessibility principles</p>
                          </li>
                          <li className="collection-item">
                            <p>Qualified SCRUM master</p>
                          </li>
                          <li className="collection-item">
                            <p>Node, axios, MongoDB</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* education */}
                    <div id="education" className="col s12">
                      <div className="tab-content">
                        <p>
                          I completed my degree from Teesside University in 2014
                          where I received a Second Honors Degree(2:1).
                          Throughout my time at Teesside I studied a wide array
                          of modules which have helped build my knowledge base
                          of the computing world. In my final year I
                          particularly enjoyed my software development module in
                          which I learnt different methods of developing
                          software and opened the doors to new programming
                          languages to learn.
                        </p>
                        <span className="bold">
                          University - Teesside University (2011 - 2014)
                        </span>
                        <p>BSc Computing - 2:1</p>
                        <span className="bold">
                          College - Bede College (2009 - 2011)
                        </span>
                        <p>Computing - D</p>
                        <p>IT - D</p>
                        <p>Business - E</p>
                      </div>
                    </div>
                    {/* employment */}
                    <div id="employment" className="col s12">
                      <ul className="collection">
                        <li className="collection-item">
                          <div>
                            <p>
                              <span className="bold">Employer:</span> Leighton
                            </p>
                            <p>
                              <span className="bold">Dates worked:</span>{" "}
                              January 2017 - present
                            </p>
                            <p>
                              <span className="bold">Role:</span> Senior
                              software engineer / software engineer
                            </p>
                            <a
                              class="waves-effect waves-light btn modal-trigger cyan lighten-1"
                              href="#leightonModal"
                            >
                              More info
                            </a>
                            <Modal
                              id="leightonModal"
                              title="Leighton"
                              content="In my current position at Leighton, I have worked with
                          different and new technologies. I have had many fantastic
                          opportunities to work with and learn new technologies such
                          as AngularJs, Angular 2/8 and React. I have enjoyed
                          learning new technologies in this position as well as
                          working with some big clients such as Home Group and
                          British Airways. Working with these clients has given me
                          the opportunity to expand my knowledge as well as my
                          leadership skills as I have been in charge of a small
                          team. My most recent project has introduced me to using
                          javascript ES6, creating node build tasks and NPM as well
                          as a lot of SCSS."
                            />
                          </div>
                        </li>
                        <li className="collection-item">
                          <div>
                            <p>
                              <span className="bold">Employer:</span> FNVi
                            </p>
                            <p>
                              <span className="bold">Dates worked:</span>{" "}
                              January 2015 - December 2016
                            </p>
                            <p>
                              <span className="bold">Role:</span> Front end web
                              developer
                            </p>
                            <a
                              class="waves-effect waves-light btn modal-trigger cyan lighten-1"
                              href="#fnviModal"
                            >
                              More info
                            </a>
                            <Modal
                              id="fnviModal"
                              title="FNVi"
                              content="For two years worked as a front end web developer for
                          FNVi. At my time there I learnt a lot about best practices
                          and improved my web development skills tenfold. I learnt a
                          lot about design and how to make it best for the end user
                          to be able to use. While I was there I created 16 websites
                          and every client was pleased with what they received."
                            />
                          </div>
                        </li>
                        <li className="collection-item">
                          <p>
                            <span className="bold">Employer:</span> GigSource
                          </p>
                          <p>
                            <span className="bold">Dates worked:</span>{" "}
                            September 2014 - January 2015
                          </p>
                          <p>
                            <span className="bold">Role:</span> Developer
                          </p>
                          <a
                            class="waves-effect waves-light btn modal-trigger cyan lighten-1"
                            href="#gigsourceModal"
                          >
                            More info
                          </a>
                          <Modal
                            id="gigsourceModal"
                            title="Gigsource"
                            content="After the summer of 2014 I continued working on my own
                          business under the digital city fellowship and started
                          learning about front end web development and how things
                          would look from an end user perspective. By doing this I
                          was able to make sure that the end user would have the
                          best possible experience when using the website."
                          />
                        </li>
                        <li className="collection-item">
                          <p>
                            <span className="bold">Employer:</span> Clickso
                          </p>
                          <p>
                            <span className="bold">Dates worked:</span> June
                            2014 - September 2014
                          </p>
                          <p>
                            <span className="bold">Role:</span> Intern
                          </p>
                          <a
                            class="waves-effect waves-light btn modal-trigger cyan lighten-1"
                            href="#clickscoModal"
                          >
                            More info
                          </a>
                          <Modal
                            id="clickscoModal"
                            title="Clicksco"
                            content="Over summer of 2014 I worked for Clicksco/ 23 Mile fund as
                          an intern. We were split into teams and had to come up
                          with a marketable product. I developed the product which
                          was a website that incorporated a PHP database as well as
                          jQuery HTML and CSS."
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
