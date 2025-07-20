import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
export default function ModalTest() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleOnClose() {
    setShowModalPopUp(!showModalPopUp);
  }
  return (
    <>
      <div className="container">
        <button onClick={handleOnClose} className="buttony" type="button">
          Open Modal PopUp
        </button>
        {showModalPopUp && (
          <Modal
            id="CustomId"
            header={<h3>I am the Header </h3>}
            body={<div>I am the body of modal Popup</div>}
            footer={<h3>I am the footer</h3>}
            onCLose={handleOnClose}
          />
        )}
      </div>
    </>
  );
}
