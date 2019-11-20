// * Coded by Agora42.com team *
import React from "react";
// importing the image of landing page from assets/img
import home from "./../assets/img/landing.jpeg";

//Start the components of landing page
function LandingPage() {
  return (
    <div className="landing-bg">
      <img src={home} className="landingimg" alt="logo" />
    </div>
  );
}
//end of the components of landing page

export default LandingPage;
