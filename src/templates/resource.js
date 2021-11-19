import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import ResourceGrid from "../sections/Resources/Resource-grid";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

import {graphql} from "gatsby";
import ResourceList from "../sections/Resources/Resource-list";

export const query = graphql`query allResources($skip: Int!, $limit: Int!) {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "resources"}}, frontmatter: {published: {eq: true}}}
    skip: $skip
    limit: $limit
  ) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        author
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
}
`;

const Resource = props => {
  const [isListView, setIsListView] = useState(false);

  const setListView = () => {
    setIsListView(true);
  };

  const setGridView = () => {
    setIsListView(false);
  };

  useEffect(() => {
    if (props.location.state){
      if (props.location.state.isListView) setListView();
    }
  }, []);

  let ResourceView = props => {
    if (isListView)
      return (<ResourceList {...props} />);
    return (<ResourceGrid {...props} />);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Resources" description="Articles on how to service mesh from the world's largest service mesh community. Service mesh how-tos and cloud native ecosystem news." />
        <Navigation />
        <ResourceView data={props.data} isListView={isListView}
          setListView={setListView} setGridView={setGridView}
          pageContext={props.pageContext}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Resource;
