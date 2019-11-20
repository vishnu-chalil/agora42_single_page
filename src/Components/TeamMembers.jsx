// * Coded by Agora42.com team *
import React from "react";
// importing the image of aboutteam from assets/img
import firstpro from "./../assets/img/firstproj.jpeg";
// importing the component from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Start the components of Team member
function TeamMembers() {
  return (
    <section id="TeamMember">
      <div>
        <Container>
          <Row>
            <Col>
              <div className="mt-20 mb-5">
                <h1>Introducing our team members</h1>
                <p className="para-content">
                  We are a group of engineering and architecture students trying
                  to build a wide platform for all you creative people out
                  there!
                </p>
                <p className="para-content">
                  For more information, collaborations with us and to be a part
                  of the agora family, contact us at any of the email ids given
                  below each of our teams.
                </p>
              </div>
            </Col>
            <Col>
              <div className="mt-10 mb-5">
                <img src={firstpro} className="team-mem" alt="logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of Team member

export default TeamMembers;
