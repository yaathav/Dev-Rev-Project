import React, { useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection.jsx";
import BookCard from "../components/ui/book-card/BookCard.jsx";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data.js";
import "../styles/market.css";
import Pagination from "./Pagination.jsx";
const Market = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const [data, setData] = useState(NFT__DATA);

  const handleCategory = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "classics") {
      const filterData = NFT__DATA.filter(
        (item) => item.Categories === "classics"
      );
      setData(filterData);
    }
    if (filterValue === "fantasy") {
      const filterData = NFT__DATA.filter(
        (item) => item.Categories === "fantasy"
      );
      setData(filterData);
    }
    if (filterValue === "horror") {
      const filterData = NFT__DATA.filter(
        (item) => item.Categories === "horror"
      );
      setData(filterData);
    }
    if (filterValue === "kids") {
      const filterData = NFT__DATA.filter((item) => item.Categories === "kids");
      setData(filterData);
    }
    if (filterValue === "romance") {
      const filterData = NFT__DATA.filter(
        (item) => item.Categories === "romance"
      );
      setData(filterData);
    }
  };

  // === SORTING DATA BY HIGH< MID, LOW RATE ===
  const handleSort = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "2023") {
      const filterData = NFT__DATA.filter((item) => item.currentBid >= 2023);
      setData(filterData);
    }

    if (filterValue === "2021") {
      const filterData = NFT__DATA.filter(
        (item) => item.currentBid >= 2021 && item.currentBid < 2022
      );
      setData(filterData);
    }

    if (filterValue === "2020") {
      const filterData = NFT__DATA.filter((item) => item.currentBid < 2020);
      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"Browse"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="classics">Classics</option>
                      <option value="fantasy">Fantasy</option>
                      <option value="horror">Horror</option>
                      <option value="kids">Kids</option>
                      <option value="romance">Romance</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="2023">Recent</option>
                    <option value="2021">Mid time</option>
                    <option value="2020">Old</option>
                  </select>
                </div>
              </div>
            </Col>
            {data?.map((currentPosts) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={currentPosts.id}>
                <BookCard item={currentPosts} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
