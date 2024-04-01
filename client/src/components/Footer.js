import React from "react"
import { Card } from "react-bootstrap"
import "./css/FooterComponent.css"
import inst from "../images/insta.png"
import lnkdn from "../images/linkedin.png"
import twttr from "../images/twitter.png"
import fcbk from "../images/facebook.png"

const Footer = () => {
  return (
    <div className="main-footer-container">
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
