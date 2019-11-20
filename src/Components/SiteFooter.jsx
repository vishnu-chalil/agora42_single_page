// * Coded by Agora42.com team *
import React from "react";
// importing the component from react-bootstrap
import { Container } from "reactstrap";

//Start the components of Footer
function SiteFooter() {
  return (
    <div className="footer-bg">
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          agora42.com &copy; {new Date().getFullYear()}
        </Container>
      </div>
    </div>
  );
}
//end of the components of Footer

export default SiteFooter;
