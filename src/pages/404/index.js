import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Oops</span>
              <p>Looks like you've taken a wrong turn!</p>
              <p>You can return to the home page using the link below or check out the other pages in the nav bar :)</p>
            </div>
            <div className="card-action">
            <Link to="/">
                   Return to homepage
             </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;