import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LabSinglePageWrapper from "./LabSinglePageWrapper.style";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Link } from "gatsby";
import PageHeader from "../../../reusecore/PageHeader";
import Button from "../../../reusecore/Button";


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
        <Link to="/learn/service-mesh-labs">
          <IoIosArrowDropleftCircle />
          <h4> All Labs</h4>
        </Link>
      </div>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="cardContent">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <div className="join-community">
        <div className="join-community_text-and_button">
          <h1>Use Service Mesh Patterns</h1>
          <p>Service mesh patterns help you get the most out of any service mesh. Each pattern can be used as a template and is customizable.</p>
          <Button primary title="Visit Service Mesh Patterns website" url="https://service-mesh-patterns.github.io/service-mesh-patterns/" external="true" />
        </div>
      </div>
    </LabSinglePageWrapper>
  );
};

export default LabSinglePage;
