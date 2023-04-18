import React from "react";
import CommonSection from "../components/ui/Common-section/CommonSection.jsx";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data.js";
import LiveAuction from "../components/ui/Live-auction/LiveAuction.jsx";
import "../styles/book-details.css";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const singleBOOK = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <CommonSection title={singleBOOK.title} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleBOOK.imgUrl}
                alt=""
                className="w-100 single__book-img"
              />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single__book__content">
                <h2>{singleBOOK.title}</h2>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className="d-flex align-items-center gap-4 single__book-seen">
                    <span>
                      <i class="ri-eye-line"></i> 243
                    </span>
                    <span>
                      <i class="ri-heart-line"></i> 143
                    </span>
                  </div>

                  <div className="d-flex align-items-center gap-2 single__book-more">
                    <span>
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="book__author d-flex gap-3 align-items-center">
                  <div className="author__img">
                    <img src={singleBOOK.authorImg} alt="" className="w-100" />
                  </div>
                  <div className="author__detail">
                    <p>written By</p>
                    <h6>{singleBOOK.author}</h6>
                  </div>
                </div>
                <p className="my-4">{singleBOOK.desc}</p>
                <button className="singleBook-btn d-flex align-items-center gap-2 w-100">
                  <i class="ri-wallet-line"></i>
                  <Link to="/wallet">Borrow Now</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction />
    </>
  );
};

export default BookDetails;
