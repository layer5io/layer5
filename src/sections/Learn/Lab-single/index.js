import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LabSinglePageWrapper from "./LabSinglePageWrapper.style";
import { IoIosArrowDropleftCircle } from "react-icons/io";
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
          <h1>Don't Learn Alone</h1>
          <p>Join other learners and cloud native engineers in the Layer5 community. Join us on Slack and learn with us.</p>
          <Button primary title="Join Our Community" url="http://slack.layer5.io/" external={true}/>
        </div>
      </div>
    </LabSinglePageWrapper>
  );
};

export default LabSinglePage;
