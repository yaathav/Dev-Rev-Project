import React from "react";
import CommonSection from "../components/ui/Common-section/CommonSection.jsx";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Books",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at, ab molestias nulla vero. ulpa architecto",
    icon: "ri-book-read-line",
  },
  {
    title: "Efficient",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at, ab molestias nulla vero. sit amet",
    icon: "ri-flashlight-line",
  },
  {
    title: "Connect",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at, ab molestias nulla vero. architecto",
    icon: "ri-link-m",
  },
  {
    title: "Safe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum at, ab molestias nulla vero. sit amet",
    icon: "ri-lock-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Check Latest Book News</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto incidunt possimus culpa architecto dicta, fugiat odio
                  voluptates. Eligendi vel ulpa architecto
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
