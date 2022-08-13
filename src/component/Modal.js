// import React, { Component } from "react";
// import M from "materialize-css";
// // import "materialize-css/dist/css/materialize.min.css";
// export default class Modal extends Component {
//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.5,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%",
//     };
//     M.Modal.init(this.Modal, options);
//   }
//   render() {
//     return (
//       <>
//         <a
//           className="waves-effect waves-light btn  modal-trigger"
//           data-target="modal1"
//         >
//           download
//         </a>

//         <div
//           ref={(Modal) => {
//             this.Modal = Modal;
//           }}
//           id="modal1"
//           className="modal"
//           style={{ display: "block", margin: "0 2rem" }}
//         >
//           <div className="modal-content">
//             <h4>Select Movie Quality</h4>
//             <hr />
//             {this.props.children}
//           </div>
//           <div className="modal-footer">
//             <a
//               href="#!"
//               className="modal-close waves-effect waves-green btn-flat"
//             >
//               close
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

import React, { Component } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

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
    return (
      <div>
        <a
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
            <a className="modal-close waves-effect waves-green btn-flat">
              close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
