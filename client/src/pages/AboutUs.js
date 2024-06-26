import React from "react"
import { Row, Col, Carousel } from "react-bootstrap"
import review from "../images/review.png"
import review2 from "../images/user1.png"
import review3 from "../images/user2.png"
import team from "../images/about.png"
import "../components/css/FooterComponent.css"

const AboutUs = () => {
  return (
    <div className="main-footer-container coloured">
      <Row className="top-section">
        <Col md={6}>
          <img src={team} alt="team" className="pic-team" />
        </Col>
        <Col md={6}>
          <h1 className="footer-title-text">About Us</h1>
          <p className="footer-description-text">
            Welcome to Healthy, where finding your next meal is as nourishing
            for your body as it is effortless for your schedule. Our platform
            revolutionizes the all-too-common query, "What's for dinner?"
            transforming it into an exciting exploration of wholesome eating.
            Conceived from a fusion of culinary passion and technological
            prowess, Healthy is the innovation of a team united by the goal of
            making healthful eating straightforward and accessible.
          </p>

          <p className="footer-description-text">
            The seed for Healthy was planted by two friends faced with the
            challenge of navigating the maze of online recipes to find options
            that were both wholesome and simple to prepare. With one an epicure
            with a love for wholesome foods and the other a tech wizard with a
            knack for streamlining processes, they crafted an app designed to
            alleviate the struggle. Healthy was born to swiftly curate
            personalized recipes that align with your dietary preferences, using
            ingredients already in your pantry.
          </p>

          <p className="footer-description-text">
            Healthy's interface is intuitive, offering a bespoke selection of
            recipes that cater to your unique needs with the ease of a single
            click. It’s more than just an app; it's a lifestyle choice for those
            who value their health as much as their time. Step into the world of
            Healthy, where each recipe is a step towards a healthier you,
            without the hassle. Welcome to smart, health-conscious eating made
            simple.
          </p>
        </Col>
      </Row>
      <Row className="middle-section left-right-align">
        <Col md={4} className="left-middle-card">
            <h1 className="footer-title-text">What</h1>
            <h1 className="footer-title-text">People</h1>
            <h1 className="footer-title-text">Say</h1>
        </Col>
        <Col md={8} className="right-middle-card">
          <Carousel indicators={false} controls={false} interval={3000}>
            <Carousel.Item>
              <div className="testimonial">
                <center>
                  <img
                    className="testimonial-image"
                    src={review}
                    alt="Kian Graham"
                  />
                </center>
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
            <Carousel.Item>
              <div className="testimonial">
                <center>
                  <img
                    className="testimonial-image"
                    src={review2}
                    alt="Hannah Shield"
                  />
                </center>

                <div className="testimonial-text">
                  <h5>Hannah Shield</h5>
                  <p>
                    I've always been health-conscious but found it tedious to
                    track down recipes that fit my lifestyle. Since I started
                    using Healthy, not only have I saved a ton of time, but I've
                    also been consistently impressed with the variety and taste
                    of the meals I've made. The app's design is sleek and
                    user-friendly, and I love how it uses my pantry staples to
                    suggest recipes.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testimonial">
                <center>
                  <img
                    className="testimonial-image"
                    src={review3}
                    alt="Bob Warret"
                  />
                </center>
                <div className="testimonial-text">
                  <h5>Bob Warret</h5>
                  <p>
                    Healthy has been a game-changer for my family and me. As a
                    busy parent, I struggled to find time to search for recipes
                    that catered to our varied dietary needs. With Healthy, I've
                    been able to discover a world of new, nutrition-packed meals
                    that everyone enjoys
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUs
