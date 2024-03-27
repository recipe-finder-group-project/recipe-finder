import React from "react"
import { Card, Carousel } from "react-bootstrap"
import "./css/FooterComponent.css"
import review from "../images/review.png"
import inst from "../images/insta.png"
import lnkdn from "../images/linkedin.png"
import twttr from "../images/twitter.png"
import fcbk from "../images/facebook.png"

const Footer = () => {
  return (
    <div className="main-footer-container">
      {/* Top Section */}
      <Card.Body className="top-section">
        <Card className="top-content-card">
          <Card.Body>
            <div className="left-right-align">
              <div>
                <h1 className="footer-title-text">Our</h1>
                <h1 className="footer-title-text">mission</h1>
              </div>
              <div>
                <h2 className="footer-description-text">
                  At Recipe Finder, we believe that everyone deserves to enjoy
                  cooking and eating, regardless of their dietary preferences or
                  restrictions.
                </h2>
                <br></br>
                <h2 className="footer-description-text">
                  Our mission is to revolutionize the way people discover
                  recipes and plan meals. We strive to provide a platform that
                  caters to a diverse range of dietary needs, making meal
                  planning a simple, personalized, and enjoyable experience for
                  all.
                </h2>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>

      {/* Middle Section with 2 Cards */}
      <Card.Body className="middle-section">
        <div className="d-flex justify-content-between">
          <Card className="left-middle-card">
            <Card.Body>
              <div>
                <h1 className="footer-title-text">What</h1>
                <h1 className="footer-title-text">People</h1>
                <h1 className="footer-title-text">Say</h1>
              </div>
            </Card.Body>
          </Card>
          <Card className="right-middle-card">
            <Card.Body>
              <center>
                <Carousel indicators={false} controls={false} interval={3000}>
                  <Carousel.Item>
                    <div className="testimonial">
                      <img
                        className="testimonial-image"
                        src={review}
                        alt="Kian Graham"
                      />
                      <div className="testimonial-text">
                        <h5>Kian Graham</h5>
                        <p>
                          Absolutely love this app! The “Craft Your Culinary
                          Story” feature has transformed my meal planning. It’s
                          so easy to find inspiring recipes for any meal type,
                          and the allergen-friendly filter options are my
                          favorite. A game-changer for busy foodies!
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  {/* Add more Carousel.Item components here for additional testimonials */}
                </Carousel>
              </center>
            </Card.Body>
          </Card>
        </div>
      </Card.Body>

      {/* Bottom Section */}
      <Card.Body className="bottom-section">
        <Card className="bottom-content-card">
          <Card.Body>
            <div className="left-right-align-bottom">
              <div className="footer-bottom-left">
                <h1 className="footer-bottom-title-text">Enhancing Your</h1>
                <h1 className="footer-bottom-title-text">Learning, One</h1>
                <h1 className="footer-bottom-title-text">Byte at a Time.</h1>
                <br></br>
                <br></br>
                <p className="thankyou-text">Thank you for choosing us</p>
                <p className="thankyou-text">as your partner in learning.</p>
              </div>
              <div className="footer-bottom-right">
                <p className="email-text">recipefinder@onlyfood.com</p>
                <div className="social-icons">
                  <img className="image" src={fcbk} alt="facebook" />
                  <img className="image" src={inst} alt="instagram" />
                  <img className="image" src={twttr} alt="twitter" />
                  <img className="image" src={lnkdn} alt="linkedin" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </div>
  )
}

export default Footer
