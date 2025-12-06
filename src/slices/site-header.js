import React from "react";
import Navigation from "../sections/General/Navigation";
import CookieConsent from "../components/CookieConsent";

const SiteHeaderSlice = () => (
  <>
    <Navigation />
    <CookieConsent />
  </>
);

export default SiteHeaderSlice;
