// * Coded by Agora42.com team *
import React from "react";
// importing the image of magzine pic from assets
import magzine from "./../assets/img/magzines.jpeg";
// importing the component from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//start the components of Agora42 magzine
function AgoraMagzine() {
  return (
    <section id="Magzine">
      <div className="magzine-bg">
        <Container>
          <Row>
            <Col>
              <div className="mt-15 mb-10">
                <img src={magzine} className="magzine-team" alt="logo" />
              </div>
            </Col>
            <Col>
              <div className="mt-20 mb-10">
                <h1>Agora42 Magzine</h1>
                <p className="para-content">
                  We have a magazine exclusively for architects and architecture
                  students where we write about the various innovations in
                  architecture and design, trying to bring more practical
                  knowledge about the field, especially for students. We will
                  also have a monthly column of architectural facts to enlighten
                  the readers. We are proud to announce that our authors and
                  editorial board consists entirely of students. Our magazine
                  believes in simplicity, uniqueness and innovation. We aim to
                  open up doors of opportunity for budding architects to
                  innovate and lead.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of Agora42 magzine

export default AgoraMagzine;
