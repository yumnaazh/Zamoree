import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TestiStyle } from "./StyledComp";

const TestiComp = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputText, setInputText] = useState("");

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const addTestimonial = () => {
    if (inputAuthor.trim() !== "" && inputText.trim() !== "") {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor("");
      setInputText("");
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  return (
    <div className="testi" id="testi">
      <h1 className="text-center fw-bold">Testimonial</h1>
      <p className="text-center">
        Leave your feedback and testimonials here for our store for continuous
        improvement.
      </p>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input your name (can be anonymous)"
                  value={inputAuthor}
                  onChange={handleAuthorChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Messange or Testimonial</Form.Label>
                <Form.Control
                  placeholder="Enter Testimonial or Any Messange"
                  value={inputText}
                  onChange={handleTextChange}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={addTestimonial}>
                Submit
              </Button>

              <TestiStyle className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                  <div className="box" key={index}>
                    <h2 className="card-title">{testimonial.author}</h2>
                    <p className="card-text">{testimonial.text}</p>
                    <button onClick={() => deleteTestimonial(index)}>
                      Delete
                    </button>
                  </div>
                ))}
              </TestiStyle>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestiComp;
