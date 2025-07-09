import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import KubernetesImg from "./images/kubernetes.svg";
import WhiteBoardImg from "./images/whiteboarding.svg";
import DevRelImage from "./images/integration-image-colorMode.svg";
import CollabImg from "./images/collab.svg";
import ClusterImg from "./images/cluster.png";
import CatalogImg from "./images/catalog-light.svg";
import KanvasImg from "./images/kanvas.svg";

const SolutionsMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  max-width: 80%;

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;

    p {
      margin-top: 0.5rem;

      @media only screen and (max-width: 500px) {
        font-size: 1rem;
        max-width: 100%;
      }
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
    justify-content: center;

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;

const CardComponentWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
  background-color: ${props => props.theme.grey212121ToWhite};

  &:hover {
    transform: translateY(-5px);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    h3 {
        max-width: 70%;
        @media only screen and (max-width: 500px) {
            max-width: 100%;
        }   
    }
    @media only screen and (max-width: 500px) {
        text-align: center;
        align-item: center;
    }  
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;
    background-color:  #191919;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .join-community-button {
    margin-top: auto;
  }
`;


const CardComponent = ({ info }) => {
  return (
    <CardComponentWrapper>
      <div className="image-wrapper">
        <img src={info.image} alt={info.title} />
      </div>
      <div className="content">
        <h1>{info.title}</h1>
        <h3>{info.description}</h3>
        <Button
          $secondary
          className="join-community-button"
          title="Explore"
          $url={info.link}
          $external={true}
        />
      </div>
    </CardComponentWrapper>
  );
};


const SolutionsMain = () => {
  return (
    <SolutionsMainWrapper>
      <div className="main-content">
        <h1>A tour of our distinct solutions</h1>
        <p>
          Explore solutions that are suitably geared to cater to the much needed issues
          that might cause setbacks for enterprises, professionals and end users. We
          enable capabilities that assist businesses scale, improve developer experience,
          and optimize workflow speed and operations.
        </p>
      </div>
      <div className="cards">
        {solutions.map((solution, index) => (
          <CardComponent key={index} info={solution} />
        ))}
      </div>
    </SolutionsMainWrapper>
  );
};

export default SolutionsMain;


const solutions = [
  {
    title: "Developer-defined Infrastructure",
    description: "Cloud Native application and infrastructure management software that empowers organizations to expect more from their infrastructure.",
    link: "/solutions/developer-defined-infrastructure",
    image: KubernetesImg,
  },
  {
    title: "Cloud Native Deployments by Diagram",
    description: "Design and Deploy your Kubernetes-based, cloud native deployments",
    link: "/solutions/cloud-native-deployments-by-diagram",
    image: WhiteBoardImg,
  },
  {
    title: "Kubernetes Multi-cluster Operation",
    description: "Manage all of your Kubernetes clusters with the cloud native management plane, Meshery.",
    link: "/solutions/kubernetes-multi-cluster-operation",
    image: ClusterImg,
  },
  {
    title: "Colaborative Gitops",
    description: "Designer and Operator live side-by-side, so all design work, from ideation to operation, can be found in one place.",
    link: "https://layer5.io/cloud-native-management/kanvas/collaborate",
    image: CollabImg,
  },
  {
    title: "GitOps with Cloud Native Insights",
    description: "Give your pipelines super powers with Meshery's GitHub Actions.",
    link: "/solutions/gitops",
    image: KanvasImg
  },
  {
    title: "Kubernetes and Cloud Native DevRel",
    description: "Layer5 offers a powerful platform to create, share, and teach cloud native technologies while building your personal brand and expanding your reach.",
    link: "/solutions/devrel-platform-for-kubernetes-and-cloud-native-content",
    image: DevRelImage
  },
  {
    title: "Platform Engineering",
    description: "Deliver reliable self-service toolchains and workflows for all dev teams, at scale, with observability, security, and automation.",
    link: "/solutions/platform-engineering",
    image: CatalogImg
  },
];