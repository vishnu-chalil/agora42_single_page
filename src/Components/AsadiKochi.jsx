// * Coded by Agora42.com team *
import React from "react";
//importing the image of vidya from assets/asadi
import Azemember from "./../assets/asadi/Vidya V Ganesh.jpeg";
//importing the image of Aaysha from assets/asadi
import AFmember from "./../assets/asadi/Aaysha Noor.jpeg";
//importing the image of Aneetta from assets/asadi
import ASmember from "./../assets/asadi/Aneetta Paul.jpeg";
//importing the image of Kripa from assets/asadi
import ATmember from "./../assets/asadi/Kripa K.jpeg";
//importing the image of Mohammed from assets/asadi
import AFomember from "./../assets/asadi/Mohammed Azharudeen.jpeg";
//importing the image of Sandra from assets/asadi
import AFimember from "./../assets/asadi/Sandra Joseph.jpeg";
//importing the image of Shyam from assets/asadi
import Asmember from "./../assets/asadi/Shyam Prasad.jpeg";
//importing the image of Vishnu from assets/asadi
import Aemember from "./../assets/asadi/Vishnu R Narayanan.jpeg";

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

//start the components of asadi college's member
function AsadiKochi() {
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
                              src={Azemember}
                              roundedCircle
                              alt="Vidya"
                            />
                            <Media.Body className="ml-3">
                              <p>Vidya V Ganesh</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={AFmember}
                              roundedCircle
                              alt="Aaysha"
                            />
                            <Media.Body className="ml-3">
                              <p>Aaysha Noor</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={ASmember}
                              roundedCircle
                              alt="Aneetta Paul"
                            />
                            <Media.Body className="ml-3">
                              <p>Aneetta Paul</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              width={64}
                              height={64}
                              src={AFimember}
                              roundedCircle
                              alt="Sandra"
                            />
                            <Media.Body className="ml-3">
                              <p>Sandra Joseph</p>
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
                              src={ATmember}
                              roundedCircle
                              alt="Kripa"
                            />
                            <Media.Body className="ml-3">
                              <p>Kripa K</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={AFomember}
                              roundedCircle
                              alt="Mohammed"
                            />
                            <Media.Body className="ml-3">
                              <p>Mohammed Azharudeen</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={Asmember}
                              roundedCircle
                              alt="Shyam"
                            />
                            <Media.Body className="ml-3">
                              <p>Shyam Prasad</p>
                            </Media.Body>
                          </Media>
                          <hr />
                          <Media as="li" className="card-mem-bor">
                            <Image
                              // className="mr-3"
                              width={64}
                              height={64}
                              src={Aemember}
                              roundedCircle
                              alt="Vishnu"
                            />
                            <Media.Body className="ml-3">
                              <p>Vishnu R Narayanan</p>
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
//end of the components of asadi college's member

export default AsadiKochi;
