import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./css/faqComponent.css"
import searchDietCat from "../images/searchDietCat.svg"
import selectMealType from "../images/selectMealType.svg"
import discAndSave from "../images/discAndSave.svg"

const FAQComponent = () => {
  return (
    <Container fluid className="faq-container">
      <Row className="faq-row faq-top-row align-items-start">
        <Col md={4} className="faq-option">
          <Card className="btn-faq btn-faq-orange">
            <img className="svg-image" src={searchDietCat} alt={"1"} />
            <div className="text-container">
            <p className="title-text">Choose Your Diet</p>
            <p className="info-faq-text">
              Pick from Vegetarian, Vegan,
              <p className="info-faq-text"> or Mediterranean diets.</p>
            </p>
            </div>
          </Card>
        </Col>
        <Col md={8}></Col> {/* Empty columns for spacing */}
      </Row>

      {/* Middle row for 'Select Meal Type' */}
      <Row className="faq-row faq-middle-row align-items-center">
        <Col md={4}></Col> {/* Empty columns for spacing */}
        <Col md={4} className="faq-option">
          <Card className="btn-faq btn-faq-yellow">
            <img className="svg-image" src={selectMealType} alt={"1"} />
            <div className="text-container">
              <p className="title-text">Select Meal Type</p>
              <p className="info-faq-text">
                Choose from breakfast,
                <p className="info-faq-text"> lunch, dinner, or snacks.</p>
              </p>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Bottom row for 'Discover & Save' */}
      <Row className="faq-row faq-bottom-row align-items-end">
        <Col md={2}></Col>
        <Col md={4} className="faq-option">
          <Card className="btn-faq btn-faq-green">
            <img className="svg-image" src={discAndSave} alt={"1"} />
            <div className="text-container">
              <p className="title-text">Discover & Save</p>
              <p className="info-faq-text">
                Browse quick recipes, save your favorites, and plan your meals
                easily.
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}></Col> {/* Empty columns for spacing */}
      </Row>
    </Container>
  )
}

export default FAQComponent
