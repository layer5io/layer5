import React from "react";
import MesheryLogo from  "../../../assets/images/meshery/meshery-logo-complete-white-side.svg";
import { MesheryPlatformsWrapper } from "./MesheryPlatforms.style";
import {Col, Container, Row} from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";

const supported_platforms = [
    {
        icon : require("./supported-icons/apple.svg"),
        alt: "Apple"
    },
    {
        icon : require("./supported-icons/docker.svg"),
        alt: "Docker"
    },
    {
        icon : require("./supported-icons/eks.svg"),
        alt: "EKS"
    },
    {
        icon : require("./supported-icons/gke.svg"),
        alt: "GKE"
    },
    {
        icon : require("./supported-icons/helm.svg"),
        alt: "Helm"
    },
    {
        icon : require("./supported-icons/homebrew.svg"),
        alt: "HomeBrew"
    },
    {
        icon : require("./supported-icons/kind.svg"),
        alt: "Kind"
    },
    {
        icon : require("./supported-icons/kubernetes.svg"),
        alt: "Kubernetes"
    },
    {
        icon : require("./supported-icons/linux.svg"),
        alt: "Linux"
    },
    {
        icon : require("./supported-icons/minikube.svg"),
        alt: "Minikube"
    },
    {
        icon : require("./supported-icons/openshift.svg"),
        alt: "OpenShift"
    },
    {
        icon : require("./supported-icons/wsl2.svg"),
        alt: "WSL2"
    }
];

const MesheryPlatforms = () =>{
    return(
        <MesheryPlatformsWrapper>
            <div className="background-wrapper"/>
            <>
                <div className="content">
                    <h2 className="step-1">Step 1: Choose your platform</h2>
                    <Row className="supported-platforms">
                        { supported_platforms.map(platform => (
                            <Col xs={6} sm={4} md={3} lg={2} key={platform.alt}>
                                <Button className="single-platform">
                                    <img src={platform.icon} alt={platform.alt} />
                                </Button>
                            </Col>
                        ))}
                    </Row>
                    <h2 className="step-2">Step 2: Manage your mesh</h2>
                    <img src={MesheryLogo} alt="Meshery"/>
                </div>
            </>
        </MesheryPlatformsWrapper>
    );
};

export default MesheryPlatforms;
