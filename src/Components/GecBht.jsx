// * Coded by Agora42.com team *
import React from "react";
// importing the image of Gayatri from assets/bartonhill
import Zemember from "./../assets/bartonhill/Gayatri.jpeg";
// importing the image of Farzana from assets/bartonhill
import Smember from "./../assets/bartonhill/Farzana.jpeg";
// importing the image of Celesteena from assets/bartonhill
import Fmember from "./../assets/bartonhill/Celesteena C George.jpeg";
// importing the image of Sherin from assets/bartonhill
import Fomember from "./../assets/bartonhill/Sherin Mary.jpeg";
// importing the image of Thaniya from assets/bartonhill
import Fimember from "./../assets/bartonhill/Thaniya Nair.jpeg";
// importing the component from react-bootstrap
import {
  Card,
  Row,
  Col,
  Accordion,
  Button,
  Media,
  Image,
  Container
} from "react-bootstrap";

//creating style for accordion toggle
const styles = {
  link: {
    color: "black",
    textDecoration: "none"
  }
};

//Start the components of Barton hill college's member
function GecBht() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    style={styles.link}
                    variant="link"
                    eventKey="0"
                  >
                    List of Member
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row>
                      <Col>
                        <ul className="list-unstyled">
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={Zemember}
                              roundedCircle
                              alt="Gayatri"
                            />
                            <Media.Body className="ml-3">
                              <p>Gayatri</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={Fmember}
                              roundedCircle
                              alt="Celesteena C George"
                            />
                            <Media.Body className="ml-3">
                              <p>Celesteena C George</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={Fimember}
                              roundedCircle
                              alt="Thaniya"
                            />
                            <Media.Body className="ml-3">
                              <p>Thaniya Nair</p>
                            </Media.Body>
                          </Media>
                          <hr />
                        </ul>
                      </Col>
                      <Col>
                        <ul className="list-unstyled">
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={Smember}
                              roundedCircle
                              alt="Farzana"
                            />
                            <Media.Body className="ml-3">
                              <p>Farzana</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={Fomember}
                              roundedCircle
                              alt="Sherin Mary"
                            />
                            <Media.Body className="ml-3">
                              <p>Sherin Mary</p>
                            </Media.Body>
                          </Media>
                          <hr />
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
//end of the components of Barton hill college's member

export default GecBht;
