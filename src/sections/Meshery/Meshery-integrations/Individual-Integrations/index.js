import React from "react";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Button from "../../../../reusecore/Button";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CTA_Book from "./cta-book";
import Image from "../../../../components/image";
import HowIntegrationWorks from "./howItWork";
import { IntegrationPageWrapper } from "./individual-integrations.style";
import RelatedIntegration from "../IntegrationsGrid";

const IndividualIntegrations = ({ theme, data }) => {
  const { frontmatter, body } = data.mdx;

  console.log(frontmatter.category);
  return (
    <IntegrationPageWrapper>
      <section className="herosection">
        <Image {...frontmatter.integrationIcon} alt={frontmatter.title}/>
        <h2>
          {frontmatter.title} with {" "}<span className="hero-header">Meshery</span>
        </h2>
        <p>{frontmatter.subtitle}</p>
      </section>
      <section className="overview">
        <div className="feature">
          <h2>Features</h2>
          <ul>
            {frontmatter.featureList.map((feature, indx) => (
              <li key={indx}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h2>Overview</h2>
          <MDXRenderer>{body}</MDXRenderer>
          <section className="external-btns">
            <Button primary className="get-started" title="Get Started" url="../../getting-started" />
            <span className="doc-link">
              <a href={frontmatter.docURL}>See Documentation</a>
              <FaArrowRight />
            </span>
          </section>
        </div>
      </section>
      <HowIntegrationWorks name={frontmatter.title} slides={frontmatter.workingSlides} />
      <section className="integration-collection">
        <h2>Related Integrations</h2>
        <RelatedIntegration theme={theme} category={frontmatter.category} />
      </section>
      <CTA_Book />
    </IntegrationPageWrapper>
  );
};

export default IndividualIntegrations;