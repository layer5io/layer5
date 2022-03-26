import React from "react";
import {Link} from "gatsby";
import {Col, Container, Row} from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Meshery_Logo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import styled from "styled-components";

const BannerSectionWrapper = styled.div`

    background: #000000;
    padding: 8rem 6rem 6rem;
    margin-bottom: 3rem;
    min-height: 25rem;

    h1{
        color: ${props => props.theme.white};
    }
    h3, p{
        color: ${props => props.theme.primaryLightColor};
    }

    .learn-particle-img {
        width: 35rem;
        height: 27rem;
        overflow: hidden;
        margin-top: -8rem;
        position: absolute;
        right: 0;

        img {
            position: absolute;
            top: -8rem;
            right: -6rem;
        }
    }

    @media screen and (max-width: 1700px) {
        .learn-particle-img {
            width: 25rem;
            height: 18rem;

            img {
                top: -7rem;
                right: -5rem;
            }
        }
    }
    @media screen and (max-width: 1150px) {
        .learn-particle-img {
            width: 20rem;
            height: 16rem;

            img {
                top: -6rem;
                right: -4rem;
            }
        }
    }
    @media screen and (max-width: 992px) {
        .learn-particle-img {
            display: none;
        }
        padding: 5rem 3rem;
    }

`;

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <div className="learn-particle-img">
        <img src={Meshery_Logo} alt="Meshery Logo"/>
      </div>
      <div>
        <PageHeader title="MeshMap" subtitle="bringing GitOps to service meshes" superscript="BETA"/> 
        <p className= "para">MeshMap is the world's only visual designer for Kubernetes and service mesh deployments. Use MeshMap to design, deploy, and manage your Kubernetes-based, service mesh deployments. As a plugin for Meshery, MeshMap supports 10+ service meshes. MeshMap not only allows you to create and verify your cloud native application and infrastructure configurations, but also integrates with Meshery's <a href="https://meshery.io/catalog">service mesh catalog</a>.</p>
        <p>Take advantage of Meshery's catalog of patterns, WebAssembly filters, and eBPF programs (coming soon). MeshMap has two modes:  <b>Designer</b> mode and <b>Visualizer</b> mode. Deployments configured and modeled in Designer mode, can be deployed into your environment and managed using Visualizer. MeshMap designs are centered around service mesh patterns.</p>
        <p>Create and share your own Kubernetes deployments and <Link to="/learn/service-mesh-books/service-mesh-patterns">service mesh patterns</Link> in MeshMap Designer or import from the catalog. </p>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerSection;
