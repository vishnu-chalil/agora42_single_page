// * Coded by Agora42.com team *
import React from "react";
// importing the component from react-bootstrap
import { Row, Col, Container } from "react-bootstrap";
// importing the component from reactstrap
import { Label } from "reactstrap";

//Start the components of Contact Us
function ContactUs() {
  return (
    <section id="contactus">
      <div className="contact-bg">
        <Container>
          <Row>
            <Col>
              <div className="mt-15 mb-10">
                <h2>Contact Us</h2>
              </div>
            </Col>
            <Col>
              <div className="mt-10 mb-10">
                <p>
                  <strong>Mobile No. </strong>+91-6375126037
                </p>
                <p>
                  <strong>WhatsApp No. </strong>+91-9455776606
                </p>
                <strong>Email:- </strong>
                <Label className="text-primary">
                  onshadeeprmaald1505@gmail.com
                </Label>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of Contact Us

export default ContactUs;
