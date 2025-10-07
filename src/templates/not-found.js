import React from "react";
import { Link } from "gatsby";
import { Container } from "../reusecore/Layout";
import SEO from "../components/seo";

const NotFoundPage = ({ pageContext }) => {
  const { slug } = pageContext;

  return (
    <>
      <SEO title="Page Not Found" />
      <Container>
        <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <h1>Page Not Found</h1>
          <p>
            The page at <code>{slug}</code> could not be found.
          </p>
          <p>
            <Link to="/">Return to the homepage</Link>
          </p>
        </div>
      </Container>
    </>
  );
};

export default NotFoundPage;
