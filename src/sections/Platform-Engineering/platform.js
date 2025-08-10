import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../reusecore/Layout";
// import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import { StaticImage } from "gatsby-plugin-image";
import BestPracticesBanner from "./banner";
import RelatedPosts from "../../components/Related-Posts";
import { graphql, useStaticQuery } from "gatsby";
import Workspace from "./images/workspace.png";
import DeliveryCylesImg from "./images/delivery-cycles.png";
import ScaleDevopsImg from "./images/scale-devops-practices.png";
import CatalogImg from "./images/catalog-light.svg";
import ComponentLibrary from "./images/components.gif";
import Integrations from "../../sections/Home/Playground-home";
import InlineQuotes from "../../components/Inline-quotes";
import Maxi from "../../collections/members/maximiliano-churichi/Maximiliano-Churichi.webp";
import PlatformWrapper from "./platform-style";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Platform = () => {
  const data = useStaticQuery(
    graphql`query relatedBlogPosts {
      relatedPosts: allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: {
          fields: { collection: { eq: "blog" } }
          frontmatter: {
            published: { eq: true }
            category: { in: ["Docker", "Kubernetes", "Cloud Native", "Platform"] }
          }
        }
        limit: 6
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            category
            tags
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
              extension
              publicURL
            }
            darkthumbnail {
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
  `);
  const posts = data.relatedPosts.nodes;

  const MesheryIntegrationsImg = "./images/meshery-integrations.jpg";
  return (
    <PlatformWrapper>
      <Container className="platform-details-container">
        <div className="platform-engineering-description">
          <h1>What is Platform Engineering </h1>
          <p>
            Platform engineering can be defined as the process of designing, building, and maintaining a stable and scalable foundation upon which software applications and services can be developed, deployed, and operated. It involves creating a set of reusable and customizable components, tools, and frameworks that enable developers to build and deploy applications with greater efficiency and speed.
          </p>
          <StaticImage src={MesheryIntegrationsImg} alt="what is platform engineering" />
        </div>
        <BestPracticesBanner />
        <h1 style={{ textAlign: "center" }}>Benefits of Platform Engineering</h1>
        <PlatformSection
          heading="Visualize and Design Infrastructure Effortlessly"
          caption="Leverage the model and component library to visually design cloud-native infrastructure using pre-built tools and patterns. Simplify architecture creation with reusable components and drag-and-drop precision."
          image={ComponentLibrary}
        />

        <PlatformSection
          heading="Leverage Ready-to-Use Building Blocks"
          caption="Speed up development and architecture design with a rich library of reusable components. Empower teams to assemble systems quickly using proven, out-of-the-box patterns."
          image={CatalogImg}
          $reverse
        />

        <PlatformSection
          heading="Enhance developer productivity"
          caption="Remove infrastructure complexity from developer workflows by providing self-service portals, automated provisioning, and pre-configured environments. Enable teams to focus on feature development rather than operational overhead through streamlined tooling and instant access to development resources."
          image={Workspace}
        />

        <PlatformSection
          heading="Scale DevOps practices"
          caption="Extend DevOps methodologies organization-wide through platform automation, standardized pipelines, and collaborative infrastructure management. Bridge the gap between development and operations teams with shared tooling and consistent deployment processes across all environments."
          image={ScaleDevopsImg}
          $reverse
        />

        <PlatformSection
          heading="Accelerate delivery cycles"
          caption="Compress time-from-idea-to-production through automated infrastructure provisioning, integrated testing pipelines, and rapid deployment capabilities. Reduce manual bottlenecks and enable continuous delivery through platform-driven automation and validation processes."
          image={DeliveryCylesImg}
        />

        <InlineQuotes
          quote="The fact that Kanvas automatically renders our Kubernetes configuration is a game-changer for our team"
          person="Maximiliano Churichi"
          title="Software Engineer at HPE"
          image={Maxi} />
        <Integrations />
        <RelatedPosts
          postType="blogs"
          relatedPosts={posts}
          mainHead="Related Resources"
          lastCardHead="All Resources"
          linkToAllItems="/blog"
        />
      </Container>
    </PlatformWrapper>
  );
};


const PlatformSection = ({ heading, caption, image, $reverse }) => {
  return (
    <StyledRow className="platform" $reverse={$reverse}>
      <Col $md={6} className="platform-detail">
        <h2 className="heading">{heading}</h2>
        <p className="caption">{caption}</p>
      </Col>
      <Col $md={6} className="platform-image">
        <div className="img-wrapper">
          <SimpleReactLightbox>
            <SRLWrapper>
              <img src={image} alt={heading} />
            </SRLWrapper>
          </SimpleReactLightbox>

        </div>
      </Col>
    </StyledRow>
  );
};

const StyledRow = styled(Row)`
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  display: flex;
  padding: 5rem 0;
  gap: 2rem;
  color: ${(props) => props.theme.tertiaryColor};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;
  }
  
  @media (max-width: 468px) {
    flex-direction: column;
  }
  
  .platform-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.tertiaryColor};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    @media (max-width: 767px) {
      order: 1;
    }
    
    .heading {
      font-size: 3.125rem;
      line-height: 3.813rem;
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      margin-bottom: 2rem;
      
      @media (max-width: 992px) {
        font-size: 2.8rem;
        line-height: 3rem;
      }
      
      @media (max-width: 767px) {
        font-size: 2rem;
        line-height: 2.5rem;
        text-align: center;
        padding-left: 100px;
        padding-right: 100px;
        margin-bottom: 1rem;
      }
      
      @media (max-width: 467px) {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
    
    .caption {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      color: ${(props) => props.theme.tertiaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      opacity: 0.8;
      
      @media (max-width: 767px) {
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: center;
        padding-left: 100px;
        padding-right: 100px;
      }
      
      @media (max-width: 467px) {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
  }
  
  .platform-image {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: zoom-in;

      img {
        width: 600px;
        height: 300px;
        object-fit: cover;

        @media (max-width: 767px) {
          width: 300px;
          height: 200px;
          object-fit: cover;
        }

        @media (max-width: 467px) {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
      }
    }
  }
`;

export default Platform;
