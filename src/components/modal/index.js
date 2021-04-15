import React, { Component } from "react";
import M from "materialize-css";

import "./style.scss";


class Modal extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }

  render() {
    return (
      <div id={this.props.id} class="modal">
        <div class="modal-content">
          <h2>{this.props.title}</h2>
          {this.props.content}
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    );
  }
}

export default Modal;
