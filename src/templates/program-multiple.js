import React, { useState } from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import ProgramsSingle from "../sections/Careers/Careers-Programs-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
export const query = graphql`
    query ProgramByName($program: String!) {
        allMdx(
          sort: {fields: [frontmatter___title], order: DESC}
          filter:{frontmatter: { program: { eq: $program } }}
        ) {
          nodes{
            body
            frontmatter {
                title
                program
            }
          }
        }
    }
`;

const ProgramsPage = ({ data }) => {
  const [activeOption, setActiveOption] = useState(0);
  const programs = data.allMdx.nodes;
  const options = programs.map((program, index) => {
    let optionItem = new Object();
    optionItem.label = program.frontmatter.title;
    optionItem.value = index;
    return optionItem;
  });
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title={programs[activeOption].frontmatter.program} />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <ProgramsSingle
          data={programs[activeOption]}
          options={options}
          setActiveOption={setActiveOption}
          activeOption={activeOption}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default ProgramsPage;

