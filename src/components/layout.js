/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// added GlobalStyle in Layout as recommended: https://www.gatsbyjs.com/docs/how-to/styling/global-css/

import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Navigation from "../sections/General/Navigation";
import { GlobalStyle } from "../sections/app.style";
const Footer = loadable(() => import("../sections/General/Footer"));
const ScrollToTopBtn = loadable(() => import("./Scrolltotop-button"));

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navigation/>
      {children}
      <ScrollToTopBtn />
      <Footer location={children.props.location} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;