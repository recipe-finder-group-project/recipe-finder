import React from "react"
import { Button, Card, Carousel } from "react-bootstrap"
import mediimage from "../images/medi-lunch.png"
import veganimage from "../images/vegan-lunch.png"
import veggieimage from "../images/veggie-lunch.png"
import "./css/BannerComponent.css" // Make sure your CSS file is named accordingly

const BannerComponent = () => {
  return (
    <div className="container-fluid p-0 d-flex" style={{ height: "400px" }}>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ flex: "1" }}
      >
        <Card className="rounded-15" style={{ flexGrow: "1" }}>
          <Card.Body className="d-flex flex-column" style={{paddingLeft: "25px"}}>
            <div style={{paddingTop: "12px"}}>
              <Card.Title className="title-text">Healthy Food</Card.Title>
              <Card.Title className="title-text">Recipe Finder</Card.Title>
            </div>
            <div style={{ paddingTop: "16px" }}>
              <Card.Subtitle className="text-formation">
                Welcome to Recipe
              </Card.Subtitle>
              <Card.Subtitle className="text-formation">
                Finder - Your Adventure in
              </Card.Subtitle>
              <Card.Subtitle className="text-formation">
                Cooking Begins Here!
              </Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
        <div className="d-flex">
          <Button
            className="rounded-15 btn-gap btn-start"
            style={{ width: "50%" }}
          >
            Start Now
          </Button>
          <Button className="rounded-15 btn-arrow" style={{ width: "50%" }}>
            ↙
          </Button>
        </div>
      </div>
      <div className="carousel-container" style={{ flex: "1" }}>
        <Carousel fade className="rounded-15 h-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={veganimage}
              alt="Vegan Lunches"
            />
            <Carousel.Caption>
              <h2 style={{ textAlign: "left" }}>Vegan Creations</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mediimage}
              alt="Mediterranean Creations"
            />
            <Carousel.Caption>
              <h2 style={{ textAlign: "left" }}>Mediterranean Marvels</h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={veggieimage}
              alt="Vegetarian tastes"
            />
            <Carousel.Caption>
              <h2 style={{ textAlign: "left" }}>Vegetarian tastes</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default BannerComponent
