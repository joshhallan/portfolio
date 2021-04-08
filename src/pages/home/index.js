import React, { Component } from "react";
import M from "materialize-css";
import image from "../../assets/images/me.jpg";
import "./style.scss";

class Home extends Component {
  componentDidMount() {
    let tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* Who am I? */}
          <div className="col s6">
            <div className="card">
              <div className="card-content">
              <span className="card-title">Who am I?</span>
                <div className="row">
                  <div className="col s12 m7">
                    <div className="card-image">
                      <img className="circle" src={image} alt="me" />
                    </div>
                  </div>
                  <div className="col s12">
                    <p>
                      Welcome, I'm Josh and I'm a 27 year old web developer from
                      Sunderland.
                    </p>
                    <p>
                      I am very passionate about computers and computing as I have grown up using computers from a young age. I have learnt to program in multiple languages such as Java, JavaScript, HTML and CSS/SCSS. I am eager to learn and expand my knowledge; I am always looking for new JavaScript frameworks to learn. I am an extremely organized and decisive person. I can enjoy working within a group as I can call upon others for knowledge and help, however, I am highly self-motived, so I am more than happy to tackle a problem alone.
                    </p>
                    <p>
                      One major thing for me throughout my career is that I want to learn; I want to continuously learn new frameworks and new ways of doing things. I feel as though, if I’m not learning something new, such as a framework or language, then I don’t feel as though I’m achieving anything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Info tabs */}
          <div className="col s6">
            <div className="card">
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
                  <div id="skills" className="col s12">
                    <div className="tab-content">
                      <p>
                        I am proficient in HTML, CSS, SCSS as well as JavaScript
                        and JQuery. I have also worked a lot with bootstrap,
                        foundation and material design. Previously I have worked
                        with React, AngularJs as well as Angular 8. I am always
                        looking to upskill and learn new frameworks; in the
                        future I am looking to work a lot more with React,
                        Angular and Vue.
                      </p>
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
                        <li className="collection-item"><p>Node, axios, MongoDB</p></li>
                      </ul>
                    </div>
                  </div>
                  <div id="education" className="col s12">
                    <div className="tab-content">
                      <p>
                        I completed my degree from Teesside University in 2014 where I received a Second Honors Degree(2:1). Throughout my time at Teesside I studied a wide array of modules which have helped build my knowledge base of the computing world. In my final year I particularly enjoyed my software development module in which I learnt different methods of developing software and opened the doors to new programming languages to learn.
                      </p>
                      <span className="card-title">University</span>
                      <p>
                        Teesside University (2011 - 2014) - 2:1 BSc Computing
                      </p>
                      <span className="card-title">College</span>
                      <p>Bede College (2009 - 2011)</p>
                      <p>Computing - D</p>
                      <p>IT - D</p>
                      <p>Business - E</p>
                    </div>
                  </div>
                  <div id="employment" className="col s12">
                    <ul className="collection">
                      <li className="collection-item">
                        <ul className="employment">
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Employer:
                            </span>{" "}
                            Leighton
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Dates worked:
                            </span>{" "}
                            January 2017 - present
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Role:
                            </span>{" "}
                            Senior software engineer / software engineer
                          </li>
                        </ul>
                      </li>
                      <li className="collection-item">
                        <ul className="employment">
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Employer:
                            </span>{" "}
                            FNVi
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Dates worked:
                            </span>{" "}
                            January 2015 - December 2016
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Role:
                            </span>{" "}
                            Front end web developer
                          </li>
                        </ul>
                      </li>
                      <li className="collection-item">
                        <ul className="employment">
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Employer:
                            </span>{" "}
                            GigSource
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Dates worked:
                            </span>{" "}
                            September 2014 - January 2015
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Role:
                            </span>{" "}
                            Developer
                          </li>
                        </ul>
                      </li>
                      <li className="collection-item">
                        <ul className="employment">
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Employer:
                            </span>{" "}
                            Clickso
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Dates worked:
                            </span>{" "}
                            June 2014 - September 2014
                          </li>
                          <li className="employment__item">
                            <span className="employment__item__title">
                              Role:
                            </span>{" "}
                            Intern
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>
                      In my current position at Leighton, I have worked with
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
                      as a lot of SCSS.
                    </p>
                    <p>
                      For two years worked as a front end web developer for
                      FNVi. At my time there I learnt a lot about best practices
                      and improved my web development skills tenfold. I learnt a
                      lot about design and how to make it best for the end user
                      to be able to use. While I was there I created 16 websites
                      and every client was pleased with what they received.
                    </p>
                    <p>
                      After the summer of 2014 I continued working on my own
                      business under the digital city fellowship and started
                      learning about front end web development and how things
                      would look from an end user perspective. By doing this I
                      was able to make sure that the end user would have the
                      best possible experience when using the website.
                    </p>
                    <p>
                      Over summer of 2014 I worked for Clicksco/ 23 Mile fund as
                      an intern. We were split into teams and had to come up
                      with a marketable product. I developed the product which
                      was a website that incorporated a PHP database as well as
                      jQuery HTML and CSS.
                    </p>
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
