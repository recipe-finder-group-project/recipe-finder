import React from "react"
import "./css/FooterComponent.css"

const Footer = () => {
  return (
    <div className="container-fluid my-component">
      <div className="row">
        <div className="col-md-6 p-5 bg-black text-white">
          <h1>Our mission</h1>
          <p>At Recipe Finder, we believe that everyone deserves to enjoy cooking and eating, regardless of their dietary preferences or restrictions.</p>
          <p>Our mission is to revolutionize the way people discover recipes and plan meals. We strive to provide a platform that caters to a diverse range of dietary needs, making meal planning a simple, personalized, and enjoyable experience for all.</p>
        </div>
        <div className="col-md-6 p-5 bg-orange">
          <h2>What people says</h2>
          <div className="testimonial bg-dark p-3">
            <p>Absolutely love this app! The "Craft Your Culinary Story" feature has transformed my meal planning. It's so easy to find inspiring recipes for any meal type, and the energizing breakfast options are my favorite. A game-changer for busy foodies!</p>
            <div className="testimonial-footer">
              <img src="path-to-kian-graham-image.jpg" alt="Kian Graham" className="rounded-circle"/>
              <h6>Kian Graham</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-5 bg-olive">
          <h3>Enhancing Your Learning, One Byte at a Time.</h3>
          <p>Thank you for choosing us as your partner in learning.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
