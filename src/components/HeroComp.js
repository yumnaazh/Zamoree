import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fs-1">Welcome to ZA:More</h1>
            <p className="text-black-50 text-center">
              Your perfect destination for stylish clothing and expert tailoring
              services.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <img src="/icon/logoku.png" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
