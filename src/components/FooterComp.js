import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <footer className="footer row-cols-1 mt-3 p-4">
      <Container>
        <Row>
          <Col md={5} className="text-left mb-1 mt-4">
            <h5 className="fw-bold">About Us</h5>
            <p>
              ZA:More is your go-to for stylish clothing and bespoke tailoring
              services. Established in 2014, we offer a wide range of everyday
              and special occasion wear for women. Our experienced tailors
              provide custom-made dresses, alterations, and garment repairs,
              ensuring perfect fits and high-quality finishes.
            </p>

            <h5 className="fw-bold mt-5"></h5>
            <div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <i className="fab fa-instagram fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <i className="fab fa-x-twitter fs-4"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2"
              >
                <i className="fab fa-tiktok fs-4"></i>
              </a>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <h5 className="fw-bold mt-4">Official Store</h5>
            <div className="d-flex ">
              <a
                href="https://www.shopee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2 pb-2 px-2"
              >
                <i class="fa-solid fa-bag-shopping fs-3"></i>
              </a>
              <p>Shopee</p>
            </div>
            <div className="d-flex">
              <a
                href="https://www.tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2 pb-2 px-2"
              >
                <i className="fa-solid fa-bag-shopping fs-3"></i>
              </a>
              <p>Tokopedia</p>
            </div>
            <div className="d-flex">
              <a
                href="https://maps.app.goo.gl/r563hgDz9hEAXf8X6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link mx-2 pb-2 px-2"
              >
                <i className="fa-solid fa-store fs-4"></i>
              </a>
              <p>Offline Store</p>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <h5 className="fw-bold mt-4">Contact Us</h5>
            <div className="d-flex">
              <i class="fa-brands fa-whatsapp fs-3 px-2"></i>
              <p>+6219382003 (Admin 1)</p>
            </div>
            <div className="d-flex">
              <i class="fa-solid fa-message fs-4 pb-2 px-2"></i>
              <p>+6238192003 (Admin 2)</p>
            </div>
            <div className="d-flex">
              <i class="fa-solid fa-phone fs-4 px-2"></i>
              <p>+6238192003 (Admin 2)</p>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center text-black-50">
            <p>
              &copy; Copyright {new Date().getFullYear()} by Z Company. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;
