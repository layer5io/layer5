/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import FavIcon from "../assets/images/favicon.png";
import ScrollToTopBtn from "./Scrolltotop-button";

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{"Layer5"}</title>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </Helmet>
      {children}
      <ScrollToTopBtn />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
