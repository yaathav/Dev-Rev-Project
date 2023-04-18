import React from "react";
import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Add BookID</h6>
        <p className="text-center text-light">
          Enter <span className="money">1</span> Book
        </p>
        <div className="input__item mb-4">
          <input type="text" placeholder="ID" />
        </div>
        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>You must place at least 1 book</p>
          <span className="money">Rs 5.98</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">Rs 0.98</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Total Amount</p>
          <span className="money">Rs 5.98</span>
        </div>
        <button className="place__bid-btn">Place Book</button>
      </div>
    </div>
  );
};

export default Modal;
