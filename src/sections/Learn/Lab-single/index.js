import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LabSinglePageWrapper from "./LabSinglePageWrapper.style";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "gatsby";
import PageHeader from "../../../reusecore/PageHeader";
import { Container } from "../../../reusecore/Layout";

const LabSinglePage = ({ frontmatter, body }) => {

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const script = document.createElement("script");
      script.setAttribute("src", "//katacoda.com/embed.js");
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <LabSinglePageWrapper>
      <div className="backBtn">
        <Link to="/service-mesh">
          <IoIosArrowDropleftCircle />
          <h4>All Labs</h4>
        </Link>
      </div>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="cardContent">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </LabSinglePageWrapper>
  );
};

export default LabSinglePage;
