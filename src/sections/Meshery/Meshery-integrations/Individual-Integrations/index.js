import React from "react";
import loadable from "@loadable/component";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Button from "../../../../reusecore/Button";
import { IntegrationPageWrapper } from "./individual-integrations.style";
import Image from "../../../../components/image";

const HowIntegrationWorks = loadable(() => import("./howItWork"));
const CTA_Book = loadable(() => import("./cta-book"));
const RelatedIntegration = loadable(() => import("../IntegrationsGrid"));

const IndividualIntegrations = ({ data, children }) => {
  const { frontmatter } = data.mdx;

  return (
    <IntegrationPageWrapper>
      <section className="herosection">
        <Image {...frontmatter.integrationIcon} alt={frontmatter.title} />
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
          { children }
          <section className="external-btns">
            <Button primary className="get-started" title="Get Started" url="../../getting-started" />
            {(frontmatter.docURL != null) &&
              (<span className="doc-link">
                <a href={frontmatter.docURL}>See Documentation</a>
                <FaArrowRight />
              </span>)
            }
          </section>
        </div>
      </section>
      <HowIntegrationWorks name={frontmatter.title} howitworks={frontmatter.howItWorks} howitworksdetails={frontmatter.howItWorksDetails} slides={frontmatter.workingSlides} />
      <section className="integration-collection">
        <h2>Related Integrations</h2>
        <RelatedIntegration  category={frontmatter.category} />
      </section>
      <CTA_Book />
    </IntegrationPageWrapper>
  );
};

export default IndividualIntegrations;