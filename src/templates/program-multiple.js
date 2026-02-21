import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";


import ProgramsSingle from "../sections/Careers/Careers-Programs-single";

export const query = graphql`query ProgramByName($program: String!) {
  allMdx(
    sort: {frontmatter: {title: DESC}}
    filter: {frontmatter: {program: {eq: $program}}}
  ) {
    nodes {
      frontmatter {
        title
        program
      }
      fields {
        slug
      }
    }
  }
}`;

const ProgramsPage = ({ data, children, pageContext }) => {
  const programs = data.allMdx.nodes;
  const { navigate } = require("gatsby");

  const options = programs.map((program) => {
    let optionItem = new Object();
    optionItem.label = program.frontmatter.title;
    optionItem.value = program.fields.slug;
    return optionItem;
  });

  const currentSlug = pageContext && pageContext.slug;
  const activeOption = Math.max(
    options.findIndex((opt) => opt.value === currentSlug),
    0
  );

  return (

    <>


      <ProgramsSingle
        data={programs[activeOption]}
        options={options}
        setActiveOption={(slug) => navigate(slug)}
        activeOption={activeOption}
      >
        {children}
      </ProgramsSingle>

    </>

  );
};

export default ProgramsPage;


export const Head = ({ data }) => {
  const programs = data.allMdx.nodes;
  return <SEO title={programs[0].frontmatter.program} />;
};