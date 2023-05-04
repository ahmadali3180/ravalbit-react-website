import React from "react";
import "../../styles/HomePage.css";
import LandingPage from "../HomePage/LandingPage";
import AboutRavalbit from "../HomePage/AboutRavalbit";
import ServicesPage from "../HomePage/ServicesPage";
import TowardFuture from "../HomePage/TowardFuture";
import TechOfFuture from "../HomePage/TechOfFuture";
import ServicesInclude from "../HomePage/ServicesInclude";
import SendIdea from "../HomePage/SendIdea";
import ClientsReviews from "../HomePage/ClientReviews";
import HomePageFooter from "../HomePage/HomePageFooter";

export default function HomePage() {
  return (
    <div className="width-100">
      <LandingPage />
      <AboutRavalbit />
      <ServicesPage />
      <TowardFuture />
      <TechOfFuture />
      <ServicesInclude />
      <SendIdea />
      <ClientsReviews />
      <HomePageFooter />
    </div>
  );
}
