// * Coded by Agora42.com team *
import React from "react";
// importing the component from react-bootstrap
import {
  Accordion,
  Container,
  Card,
  Button,
  Row,
  Col,
  Media
} from "react-bootstrap";
import { Label } from "reactstrap";
// importing the list of bartin hill college's member
import GecBht from "./GecBht";
// importing the list of asadi college's member
import AsadiKochi from "./AsadiKochi";
// importing the list of CET college's member
import CoeTdm from "./CoeTdm";

//creating style for accordion toggle and card header
const styles = {
  link: {
    color: "white",
    textDecoration: "none"
  },
  header: {
    backgroundColor: "black"
  }
};

//start the components of about the team
function AboutTeam() {
  return (
    <section id="AboutTeam">
      <div>
        <Container>
          <Row>
            <Col>
              <div className="mt-5 mb-10">
                <Accordion>
                  <Card className="card-mem-out-bor">
                    <Card.Header style={styles.header}>
                      <Accordion.Toggle
                        as={Button}
                        style={styles.link}
                        variant="link"
                        eventKey="0"
                      >
                        <strong>From : </strong>
                        Govt Engineering College Barton Hill, Trivandrum
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Media>
                        <Media.Body>
                          <div className="mr-3 ml-3 mt-3">
                            <p className="para-content">
                              "Working for a meaningful startup was always our
                              dream. When we heard about the idea we were all
                              set to bridge the gap and bring up all the
                              creative developers, designers, architects and
                              artists out there. We truly believe in this and
                              together we desire to change the future."
                            </p>
                            <p>
                              For more information, collaborations and to be a
                              part of our team, <strong>Contact : </strong>
                              <Label className="text-primary">
                                agora42bartonhill@gmail.com
                              </Label>
                            </p>
                          </div>
                          {/* importing the list of barton hill college member */}
                          <Container>
                            <GecBht />
                          </Container>
                        </Media.Body>
                      </Media>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-mem-out-bor">
                    <Card.Header style={styles.header}>
                      <Accordion.Toggle
                        as={Button}
                        style={styles.link}
                        variant="link"
                        eventKey="1"
                      >
                        <strong>From : </strong>
                        College of Engineering Trivandrum
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Media>
                          <Media.Body>
                            <div className="mr-3 ml-3">
                              <p className="para-content">
                                "We joined this company to get practical work
                                experience and exposure outside of college.This
                                is not just a job for us, We see it as a
                                community-based service and we are happy to be
                                part of the incredible team behind Agora42."
                              </p>
                              <p>
                                For more information, collaborations and to be a
                                part of our team, <strong>Contact : </strong>
                                <Label className="text-primary">
                                  agora42cetteam@gmail.com
                                </Label>
                              </p>
                            </div>
                            {/* importing the list of CET college member */}
                            <Container>
                              <CoeTdm />
                            </Container>
                          </Media.Body>
                        </Media>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="card-mem-out-bor">
                    <Card.Header style={styles.header}>
                      <Accordion.Toggle
                        as={Button}
                        style={styles.link}
                        variant="link"
                        eventKey="2"
                      >
                        <strong>From : </strong>
                        Asian School of Architecture and Design Innovation,
                        Kochi
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {" "}
                        <Media>
                          <Media.Body>
                            <div className="mr-3 ml-3">
                              <p className="para-content">
                                "Being a part of agora42, we look forward
                                towards helping other students like us to reach
                                out to the architecture community more easily
                                and efficiently. The social media platform
                                provides a lot of resources for the arch-related
                                branches, thereby helping ourselves too.
                                <br />
                                Most importantly we believe we need more
                                connections and a communication medium where we
                                find agora42 an apt platform to learn out of our
                                colleges and out of our comfort zones. "
                              </p>
                              <p>
                                For more information, collaborations and to be a
                                part of our team, <strong>Contact : </strong>
                                <Label className="text-primary">
                                  asadiagora42@gmail.com
                                </Label>
                              </p>
                            </div>
                            {/* importing the list of asadi college member */}
                            <Container>
                              <AsadiKochi />
                            </Container>
                          </Media.Body>
                        </Media>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of about the team

export default AboutTeam;
