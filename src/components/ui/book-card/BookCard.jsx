import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./book-card.css";
import Modal from "../Modal/Modal";

const BookCard = (props) => {
  const { title, id, currentBid, authorImg, imgUrl, author } = props.item;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="single__book__card">
      <div className="book__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
      <div className="book__content">
        <h5 className="book__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>
        <div className="author__info-wrapper w-100 d-flex gap-3">
          <div className="author__img">
            <img src={authorImg} alt="" className="w-100" />
          </div>
          <div
            className="author__info d-flex align-items-center
                  justify-content-between w-100"
          >
            <div>
              <h6>Written By</h6>
              <p>{author}</p>
            </div>
            <div>
              <h6>Published On</h6>
              <p>{currentBid}</p>
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i class="ri-chat-check-line"></i>Check
          </button>

          {showModal && <Modal setShowModal={setShowModal} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
