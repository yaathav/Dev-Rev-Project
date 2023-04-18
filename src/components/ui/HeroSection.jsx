import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";
import heroImg from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover Rare Books and Borrow books in<span>CORRECT</span>{" "}
                price
              </h2>
              <p>
                A book is a medium for recording information in the form of
                writing or images, typically composed of many pages (made of
                papyrus, parchment, vellum, or paper) bound together and
                protected by a cover.
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-item-center gap-2">
                  <i class="ri-book-3-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-item-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Add</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
