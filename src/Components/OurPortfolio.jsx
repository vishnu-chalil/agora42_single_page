// * Coded by Agora42.com team *
import React from "react";
// importing the image of the portfolio pic from assets/img
import portfolio from "./../assets/img/portfolios.jpeg";
// importing the component from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Start the components of Portfolio
function OurPortfolio() {
  return (
    <section id="Portfolio">
      <div>
        <Container>
          <Row>
            <Col>
              <div className="mt-10 mb-10">
                <h2>CURATING YOUR PORTFOLIO</h2>
                <h4>Publish projects and work</h4>
                <p className="para-content">
                  Users can upload pictures or videos to their profile
                  themselves which will be manually screened by our team to make
                  sure it is an authentic work as we only allow artistic or
                  architecture work to be posted under your profile.
                </p>
                <h4>Grading System</h4>
                <p className="para-content">
                  We also have made sure that the grading system which allows
                  you to be on state-wise leader board is just. Grading depends
                  on the quality of your work rather than the number of
                  followers someone has.
                </p>
                <h4>Manage your digital representation</h4>
                <p className="para-content">
                  Add key information and project details to enhance your firm's
                  portfolio
                </p>
              </div>
            </Col>
            <Col>
              <div className="mt-15 mb-10">
                <img src={portfolio} className="port-team" alt="logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of Portfolio

export default OurPortfolio;
