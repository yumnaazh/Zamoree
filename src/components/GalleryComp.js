import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Gallery1 from "../assets/img/gallery/produk (1).jpeg";
import Gallery2 from "../assets/img/gallery/produk (2).jpeg";
import Gallery3 from "../assets/img/gallery/produk (3).jpeg";
import Gallery4 from "../assets/img/gallery/produk (4).jpeg";
import Gallery5 from "../assets/img/gallery/produk (5).jpeg";
import Gallery6 from "../assets/img/gallery/produk (6).jpeg";
import Gallery7 from "../assets/img/gallery/produk (7).jpeg";
import Gallery8 from "../assets/img/gallery/produk (8).jpeg";
import Gallery9 from "../assets/img/gallery/produk (9).jpeg";
import Gallery10 from "../assets/img/gallery/produk (10).jpeg";
import Gallery11 from "../assets/img/gallery/produk (11).jpeg";
import Gallery12 from "../assets/img/gallery/produk (12).jpeg";

const GalleryComp = () => {
  return (
    <div className="gallery min-vh-200 d-flex align-items-center" id="gallery">
      <Container>
        <h1 className="fw-bold text-center">Gallery</h1>
        <p className="text-center">
          Several recent tailoring creations and clothing options available for
          purchase in our store.
        </p>
        <Row className="row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
          <Col>
            <img src={Gallery1} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery2} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery3} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery4} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery5} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery6} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery7} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery8} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery9} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery10} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery11} alt="Outfit" className="w-100" />
          </Col>
          <Col>
            <img src={Gallery12} alt="Outfit" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
