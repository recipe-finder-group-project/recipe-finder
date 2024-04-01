import React from "react"
import "react-bootstrap"

const Contacts = () => {
  return (
    <section class="py-5 bg-light text-dark rounded mt-4 ml-4 mr-4">
      <div class="container-fluid p-lg-0">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6">
            <div class="col-lg-8 mx-auto">
              <h2 class="display-5 fw-bold">Contact Us</h2>
              <p class="lead">
                Thank you for reaching out to us! Whether you have a question,
                feedback, or just want to say hello, we're here to listen and
                help. Please fill out the form below with your details and
                message. We strive to respond to all inquiries as swiftly as
                possible.
              </p>
              <form>
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        class="form-control bg-light"
                        placeholder="Your name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        class="form-control bg-light"
                        placeholder="Your email"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <textarea
                        class="form-control bg-light"
                        placeholder="Your message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="d-grid">
                      <button class="btn btn-primary" type="submit">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 mr-4">
            <div class="mt-5 mt-lg-0">
              <img
                alt=""
                class="img-fluid"
                src="https://freefrontend.dev/assets/map-img-3.png"
                style={{ marginRight: "5px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
