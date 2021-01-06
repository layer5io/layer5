/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { GlobalStyle } from "../../src/sections/app.style";
import { lightTheme, darkTheme } from "../../src/theme/app/themeStyles";
import styled, { ThemeProvider } from "styled-components";
import { DarkModeToggler } from "react-darkmode-toggler";
import FavIcon from "../assets/images/favicon.png";

const Div = styled.div`
  margin: 20px 0 20px 60px;
  display: flex;
`;

const Layout = ({ children }) => {
    const [isDark, setIsDark] = useState(getInitialMode());

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("mode", isDark);
        }
    }, [isDark]);

    const darkModeHandler = () => {
        setIsDark(isDark === "light" ? "dark" : "light");
    };

    function getInitialMode() {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("mode", isDark);
            return savedMode || "light";
        }
    }
    return (
        <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle theme={isDark} />
            <Div>
                <DarkModeToggler
                    size="small"
                    isDark={isDark}
                    onClick={darkModeHandler}
                />
            </Div>
            <Helmet>
                <html lang="pt" />
                <title>{"Layer5 - The Service Mesh Company"}</title>
                <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
                <link
                    href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Helmet>
            {children}
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
