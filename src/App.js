// * Coded by Agora42.com team *
import React from "react";
// importing the style from assets/css
import "./assets/css/SiteAgora.css";
// import the navbar components
import SiteNavbar from "./Components/SiteNavbar";
// import the landing components
import LandingPage from "./Components/LandingPage";
// import the launching soon page
import LaunchingSoon from "./Components/LaunchingSoon";
// import the about us components
import AboutUs from "./Components/AboutUs";
// import the porfolio components
import OurPortfolio from "./Components/OurPortfolio";
// import the collaborator components
// import OurCollaborator from "./Components/OurCollaborator";
// import the magzine components
import AgoraMagzine from "./Components/AgoraMagzine";
// import the why us components
import WhyAgora from "./Components/WhyAgora";
// import the team members components
import TeamMembers from "./Components/TeamMembers";
// import the about team components
import AboutTeam from "./Components/AboutTeam";
// import the contact us components
import ContactUs from "./Components/ContactUs";
// import the footer components
import SiteFooter from "./Components/SiteFooter";

//start the application
function App() {
  return (
    <div>
      <SiteNavbar />
      <LandingPage />
      <LaunchingSoon />
      <AboutUs />
      <OurPortfolio />
      {/* <OurCollaborator /> */}
      <AgoraMagzine />
      <WhyAgora />
      <TeamMembers />
      <AboutTeam />
      <ContactUs />
      <SiteFooter />
    </div>
  );
}
//end the application

export default App;
