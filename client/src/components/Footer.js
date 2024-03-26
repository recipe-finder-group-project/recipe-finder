import React from "react"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import "./css/FooterComponent.css"

const Footer = () => {
  return (
    <Container fluid className="main-footer-container">
      <Row className="mission-row">
        <Col>
          <div className="mission-text">
            <h1 className="mission-title-text">Our mission</h1>
            <p>
              At Recipe Finder, we believe that everyone deserves to enjoy
              cooking and eating, regardless of their dietary preferences or
              restrictions.
            </p>
            <p>
              Our mission is to revolutionize the way people discover recipes
              that cater to a diverse range of dietary needs, making meal
              planning a simple, personalized, and enjoyable experience for all.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="testimonials-row">
        <Col md={6}>
          <h2>What People Say</h2>
        </Col>
        <Col md={6} className="testimonials-section">
          <Carousel indicators={false} controls={false} interval={3000}>
            <Carousel.Item>
              <div className="testimonial">
                <img
                  className="testimonial-image"
                  src="path-to-kian-graham-image.jpg"
                  alt="Kian Graham"
                />
                <div className="testimonial-text">
                  <h5>Kian Graham</h5>
                  <p>
                    Absolutely love this app! The “Craft Your Culinary Story”
                    feature has transformed my meal planning. It’s so easy to
                    find inspiring recipes for any meal type, and the
                    allergen-friendly filter options are my favorite. A
                    game-changer for busy foodies!
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* Add more Carousel.Item components here for additional testimonials */}
          </Carousel>
        </Col>
      </Row>
      <Row className="learning-row">
        <Col>
          <h2>Enhancing Your Learning, One Byte at a Time.</h2>
          <p>Thank you for choosing us as your partner in learning.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
