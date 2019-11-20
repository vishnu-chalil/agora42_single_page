// * Coded by Agora42.com team *
import React from "react";
// importing the image of about us from the assets
import about from "./../assets/img/aboutus.jpeg";
// importing the component from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//start the components of about us
function AboutUs() {
  return (
    <section id="About">
      <div className="about-bg">
        <Container>
          <Row>
            <Col>
              <div className="mt-20 mb-10">
                <img src={about} className="about-team" alt="logo" />
              </div>
            </Col>

            <Col>
              <div className="mt-10 mb-10">
                <h1>About Us</h1>
                <p className="para-content">
                  Agora42 is a bridge that connects the budding artists,
                  architects and designers across the country. It was envisioned
                  to bring young, talented minds together and give them a stage
                  for their work. We believe that every piece of artwork or
                  design deserves a platform and are committed to ensuring that
                  your talent reaches the world.
                </p>
                <h1>Mission and Vision</h1>
                <p className="para-content">
                  We solemnly connect the architecture community be it student,
                  professional or a firm and all kinds of designers to enhance
                  their opportunities as well as to gain inspiration from
                  profound achievements and accomplishments. To rise up to
                  leading company and make best use of our internet platform to
                  please our customers in every way possible, we have a
                  dedicated and passionate team with us to attain our mission.
                </p>
                <p className="para-content">
                  Create a rostrum for artists, architects and designers to
                  blossom their talents and grow professionally. Our vision is
                  to eradicate the problems faced by them and enhance their
                  talents.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of about us

export default AboutUs;
