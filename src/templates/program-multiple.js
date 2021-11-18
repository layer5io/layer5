import React, { useState } from "react";
import { graphql } from "gatsby";

import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import ProgramsSingle from "../sections/Careers/Careers-Programs-single";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

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

const ProgramsPage = ({data}) => {
  const [activeOption, setActiveOption] = useState(0);
  const programs = data.allMdx.nodes;
  const options = programs.map((program, index) => {
    let optionItem = new Object();
    optionItem.label = program.frontmatter.title;
    optionItem.value = index;
    return optionItem;
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title={programs[activeOption].frontmatter.program} />
        <Navigation />
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

