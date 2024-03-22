import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./css/faqComponent.css"
import searchDietCat from "../images/searchDietCat.svg"
import selectMealType from "../images/selectMealType.svg"
import discAndSave from "../images/discAndSave.svg"

const FAQComponent = () => {
  return (
    <Container fluid className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title-explanation">Right diet</h1>
        <h1 className="faq-title-explanation">Right mind</h1>
        <h2 className="faq-subtitle-explanation">Discover Speedy Gourmet</h2>
        <h2 className="faq-subtitle-explanation">30-Minute Meals for Busy Lives</h2>
        
        </div>
      <Row className="faq-row faq-top-row align-items-start">
        <Col md={4} className="faq-option">
          <Card className="btn-faq btn-faq-orange">
            <img className="svg-image" src={searchDietCat} alt={"1"} />
            <div className="text-container">
              <p className="title-text">Choose Your Diet</p>
              <div className="info-faq-text-cont">
                <p className="info-faq-text">Pick from Vegetarian, Vegan,</p>
                <p className="info-faq-text"> or Mediterranean diets.</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={8}></Col> {/* Empty columns for spacing */}
      </Row>
      <Row className="faq-row faq-middle-row align-items-center">
        <Col md={4}></Col> {/* Empty columns for spacing */}
        <Col md={3} className="faq-option">
          <Card className="btn-faq btn-faq-yellow">
            <img className="svg-image" src={selectMealType} alt={"1"} />
            <div className="text-container">
              <p className="title-text">Select Meal Type</p>
              <div className="info-faq-text-cont">
                <p className="info-faq-text">Choose from breakfast,</p>
                <p className="info-faq-text"> lunch, dinner, or snacks.</p>
              </div>
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
              <div className="info-faq-text-cont">
                <p className="info-faq-text">
                  Browse quick recipes, save your favorites,
                </p>
                <p className="info-faq-text">and plan your meals easily.</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4}></Col> {/* Empty columns for spacing */}
      </Row>
    </Container>
  )
}

export default FAQComponent
