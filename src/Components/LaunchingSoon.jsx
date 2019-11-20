import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LaunchingSoon() {
  return (
    <div className="launch-bg">
      <Container>
        <Row>
          <Col>
            <div className="mt-3 launch-soon">
              <p>
                <strong>Launching Soon</strong>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LaunchingSoon;
