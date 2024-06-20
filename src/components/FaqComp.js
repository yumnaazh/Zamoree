import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Frequently Asked Questions</h2>
            <p className="text-center">
              Explore our FAQ section for quick answers to common queries.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What are your store hours?</Accordion.Header>
                <Accordion.Body>
                  Our store is open daily from 09:00 AM to 6:00 PM.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How do I place an order?</Accordion.Header>
                <Accordion.Body>
                  You can shop through our online shopping platform available at
                  the end of the page, offering various payment methods
                  including credit cards, debit cards, and electronic payments.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What types of tailoring services do you offer?
                </Accordion.Header>
                <Accordion.Body>
                  We offer a variety of tailoring services including custom
                  clothing, size adjustments, garment repairs, and uniform
                  tailoring.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How do I determine the right size for me?
                </Accordion.Header>
                <Accordion.Body>
                  We provide a size guide on each product page to help you
                  choose the correct size. If you are still unsure, you can
                  contact our customer service for further assistance.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How do I order tailoring services?
                </Accordion.Header>
                <Accordion.Body>
                  You can order tailoring services through our website by
                  filling out the order form or by visiting our store for
                  consultation and measurements.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Do I need to make an appointment for tailoring consultation?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we recommend making an appointment in advance so we can
                  better serve you. You can schedule an appointment through our
                  website or by contacting us directly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Do you offer express tailoring services?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer express tailoring services for an additional
                  fee. Please contact us for more details about the time frame
                  and costs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Do you offer repair services for clothing that I have
                  purchased?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer repair services for clothing purchased from our
                  store. Please contact us for more information about the costs
                  and turnaround time.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  What is your return and exchange policy?
                </Accordion.Header>
                <Accordion.Body>
                  We accept returns and exchanges within 14 days of purchase,
                  provided the clothing is in its original condition and has not
                  been worn. Please refer to our return policy page for more
                  information.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Do you offer any discounts or special promotions?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we regularly offer discounts and special promotions.
                  Please subscribe to our newsletter or follow us on social
                  media to get the latest updates.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
