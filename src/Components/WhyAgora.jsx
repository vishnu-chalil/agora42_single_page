// * Coded by Agora42.com team *
import React from "react";
// importing the component from react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//Start the components of why Us?
function WhyAgora() {
  return (
    <section id="WhyUs">
      <div className="whyus-bg">
        <Container>
          <Row>
            <Col className="mt-10 mb-10">
              <h1 className="whyus">Why us?</h1>
              <p className="para-content">
                We live, breathe and believe in art and know that the youth can
                perform wonders, if given the right stage. We know that your
                talent has the potential to change the world as we see today. We
                want to connect young artists, architects, designers and help
                them collaborate and create. Agora42 wants to give your work the
                stage it truly deserves and help you bridge the gap between
                students and professionals. The work that you create will be
                showcased to professionals all across the country. The top firms
                and professionals will now have a chance to view and judge your
                work and lead to more opportunities and innovations that could
                change the face of the architecture and design industry as we
                know it.
              </p>
              <p className="para-content">
                The world is changing constantly and we want to help you become
                an active part of that change. Let us showcase your work to
                fellow designers and architects and professionals and give you
                the right to let your work do the talking.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
//end of the components of why Us?

export default WhyAgora;
