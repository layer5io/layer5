import React from "react";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Button from "../../../../reusecore/Button";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CTA_Book from "./cta-book";
import PerformanceCTA from "./cta-performance";
import Image from "../../../../components/image";
import HowIntegrationWorks from "./howItWork";
import { IntegrationPageWrapper } from "./individual-integrations.style";
import RelatedIntegration from "../IntegrationsGrid";
import HowMesheryWorksSpecs from "../../../../components/specs";
import ModelComponents from "./ComponentsGrid";

const IndividualIntegrations = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  const screenshotNodes = data.allFile.nodes;
  const finalScreenshots =
    screenshotNodes.length === 0 ? frontmatter.workingSlides : screenshotNodes;

  const awsIntegrations = [
    "AWS API Gateway Operator",
    "AWS API Gateway v2",
    "AWS Applilcation Autoscaling",
    "AWS CloudFront",
    "AWS CloudTrail",
    "AWS CloudWatch",
    "AWS CloudWatch Logs",
    "AWS DynamoDB",
    "AWS EC2",
    "AWS Elastic Container Registry",
    "AWS Elastic Kubernetes Service",
    "AWS ElastiCache",
    "AWS ElasticSearch Service",
    "AWS EMR Containers",
    "AWS EventBridge",
    "AWS Identity and Access Management",
    "AWS Kinesis",
    "AWS Lambda",
    "AWS Load Balancer",
    "AWS MemoryDB for Redis",
    "AWS MQ",
    "AWS Node Termination Handler",
    "AWS Managed Service for Prometheus",
    "AWS Relational Database Service",
    "AWS Route 53",
    "AWS Route 53 Resolver",
    "AWS Simple Storage Service (S3)",
    "AWS SageMaker",
    "AWS Secrets Manager",
    "AWS Step Functions",
    "AWS Simple Notification Service",
    "AWS Target Group Binding",
    "AWS VPC CNI",
    "AWS App Mesh",
    "Kubeform Provider AWS",
  ];

  const gcpIntegrations = ["Google Cloud Platform"];

  const isAwsItem = awsIntegrations.includes(frontmatter.title);
  const isGcpItem = gcpIntegrations.includes(frontmatter.title);

  return (
    <IntegrationPageWrapper>
      <section className="herosection">
        <Image {...frontmatter.integrationIcon} alt={frontmatter.title} />
        <h2>
          {frontmatter.title} with <span className="hero-header">Meshery</span>
        </h2>
        <p>{frontmatter.subtitle}</p>
      </section>
      <section className="overview">
        <div className="feature">
          <h2>Features</h2>
          <ul>
            {frontmatter.featureList.map((feature, indx) => (
              <li key={indx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h2>Overview</h2>
          <MDXRenderer>{body}</MDXRenderer>
          <section className="external-btns">
            <Button
              primary
              className="get-started"
              title="Get Started"
              url="../../getting-started"
            />
            {frontmatter.docURL != null && (
              <span className="doc-link">
                <a href={frontmatter.docURL}>See Documentation</a>
                <FaArrowRight />
              </span>
            )}
          </section>
        </div>
      </section>
      {frontmatter.components && frontmatter.components.length > 0 && (
        <section className="component-collection">
          <ModelComponents frontmatter={frontmatter} />
        </section>
      )}
      <div>
        {isAwsItem ? (
          <HowMesheryWorksSpecs
            title="AWS Orchestration and Diagramming Software"
            desc="Orchestrate and Design Amazon Web Services architecture diagrams easily with predefined templates and symbols designed for professionals."
            btnUrl="/cloud-native-management/generate-aws-architecture-diagram"
          />
        ) : isGcpItem ? (
          <HowMesheryWorksSpecs
            title="GCP Orchestration and Diagramming Softwarel"
            desc="Orchestrate and design Google Cloud Platform architecture diagrams easily with predefined templates and symbols designed for professionals."
            btnUrl="/cloud-native-management/generate-gcp-architecture-diagram"
          />
        ) : (
          <>
            <HowMesheryWorksSpecs
              title="Kubernetes Orchestration and Diagramming software"
              desc="Orchestrate and design Kubernetes architecture diagrams easily with predefined templates and symbols designed for professionals."
              btnUrl="/cloud-native-management/generate-kubernetes-architecture-diagram"
            />
          </>
        )}
      </div>
      <HowIntegrationWorks
        name={frontmatter.title}
        howitworks={frontmatter.howItWorks}
        howitworksdetails={frontmatter.howItWorksDetails}
        slides={finalScreenshots}
      />
      <section className="integration-collection">
        <h2>Related Integrations</h2>
        <RelatedIntegration category={frontmatter.category} />
      </section>
      <PerformanceCTA category={frontmatter.category}/>
      <CTA_Book />

    </IntegrationPageWrapper>
  );
};

export default IndividualIntegrations;
