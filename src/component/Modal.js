import React, { Component } from "react";
import M from "materialize-css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    let url = "";
    return (
      <div>
        <a
          href={url}
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          download
        </a>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4 style={{ textAlign: "center" }}>Select Movie Quality</h4>
            <hr style={{ marginBottom: "2rem" }} />
            {this.props.children}
          </div>
          <div className="modal-footer">
            {/* <a className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a> */}
            <a
              href={url}
              className="modal-close waves-effect waves-green btn-flat"
              onClick={(e) => e.preventDefault()}
            >
              close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
