// * Coded by Agora42.com team *
import React from "react";
// importing the image of abin from assets/CET
import CFmember from "./../assets/CET/Abin.jpeg";
// importing the image of Adharsh from assets/CET
import CSmember from "./../assets/CET/Adharsh.jpeg";
// importing the image of Ajay from assets/CET
import CTmember from "./../assets/CET/Ajay.jpeg";
// importing the image of Akhil from assets/CET
import CFomember from "./../assets/CET/Akhil.jpeg";
// importing the image of Akhila from assets/CET
import CFimember from "./../assets/CET/Akhila.jpeg";
// importing the image of Devika from assets/CET
import Csmember from "./../assets/CET/Devika.jpeg";
// importing the image of Haseena from assets/CET
import Czemember from "./../assets/CET/Haseena.jpeg";

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

//Start the components of CET college's member
function CoeTdm() {
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
                              src={Czemember}
                              roundedCircle
                              alt="Hasheena"
                            />
                            <Media.Body className="ml-3">
                              <p>Hasheena</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={CFmember}
                              roundedCircle
                              alt="Abin"
                            />
                            <Media.Body className="ml-3">
                              <p>Abin</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={CSmember}
                              roundedCircle
                              alt="Adharsh"
                            />
                            <Media.Body className="ml-3">
                              <p>Adharsh</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={CFimember}
                              roundedCircle
                              alt="Akhila"
                            />
                            <Media.Body className="ml-3">
                              <p>Akhila</p>
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
                              src={CTmember}
                              roundedCircle
                              alt="Ajay"
                            />
                            <Media.Body className="ml-3">
                              <p>Ajay</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={CFomember}
                              roundedCircle
                              alt="Akhil"
                            />
                            <Media.Body className="ml-3">
                              <p>Akhil</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={Csmember}
                              roundedCircle
                              alt="Devika"
                            />
                            <Media.Body className="ml-3">
                              <p>Devika</p>
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
//end of the components of CET college's member

export default CoeTdm;
