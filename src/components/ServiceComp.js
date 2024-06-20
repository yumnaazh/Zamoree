import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServiceComp = () => {
  return (
    <div
      className="services min-vh-100 d-flex align-items-center"
      id="services"
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold">Service</h1>
            <p className="text-center">
              Discover our affordable tailoring services for the perfect fit,
              provided by our experienced team.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3">
            <i class="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Affordable Price</h5>
            <p>
              A fashion store providing stylish clothing and affordable
              tailoring services.
            </p>
          </Col>
          <Col className="text-center py-5 px-3">
            <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Best Facilities</h5>
            <p>
              We offer top-notch facilities for both our ready-to-wear
              collections and custom tailoring needs.
            </p>
          </Col>
          <Col className="text-center py-5 px-3">
            <i class="fa-solid fa-crown fs-2 mb-4"></i>
            <h5 className="fw-bold">Expert Team</h5>
            <p>
              Our experienced team ensures high-quality garments and precise
              tailoring for every customer
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceComp;
