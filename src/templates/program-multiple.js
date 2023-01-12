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

  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
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


// TODO
export const Head = ({ data }) => {
  const programs = data.allMdx.nodes;
  return <SEO title={programs[0].frontmatter.program} />;
};