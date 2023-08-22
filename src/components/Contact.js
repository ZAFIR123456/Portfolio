import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Image } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <Image
              className="animate__animated animate__zoomIn"
              src={contactImg}
              animation={"updown 3s linear infinite"}
              alt="Contact Us"
            />
          </Col>
          <Col size={12} md={6}>
            <div className="animate__animated animate__fadeIn">
              <h2>Get In Touch</h2>
              <form>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="First Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" placeholder="Last Name" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" placeholder="Email Address" />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" placeholder="Phone No." />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" placeholder="Message"></textarea>
                    <button type="submit">
                      <span>SUBMIT</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
