import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/General/Navigation";
import TopicGrid from "../sections/Topics/Topic-grid";
import Footer from "../sections/General/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/app/themeStyles";

import {graphql} from "gatsby";
import TopicList from "../sections/Topics/Topic-list";

export const query = graphql`query allTopics($skip: Int!, $limit: Int!) {
  allMdx(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fields: {collection: {eq: "topics"}}, frontmatter: {published: {eq: true}}}
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

const Topic = props => {
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

  let TopicView = props => {
    if (isListView)
      return (<TopicList {...props} />);
    return (<TopicGrid {...props} />);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Resources" description="Articles on how to service mesh from the world's largest service mesh community. Service mesh how-tos and cloud native ecosystem news." />
        <Navigation />
        <TopicView data={props.data} isListView={isListView}
          setListView={setListView} setGridView={setGridView}
          pageContext={props.pageContext}
        />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default Topic;
