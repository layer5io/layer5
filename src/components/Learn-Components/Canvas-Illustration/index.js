import React from "react";
import CanvasIllustrationWrapper from "./canvas-illustration.style";
import { ReactComponent as KubernetesIcon } from "../../../assets/images/learning-path/kubernetes-icon.svg";
import { ReactComponent as ServiceMeshIcon } from "../../../assets/images/learning-path/service-mesh.svg";
import { ReactComponent as JaegerIcon } from "../../../assets/images/learning-path/jaeger-icon.svg";
import { ReactComponent as AcademyLogo } from "../../../assets/images/academy/academy-layer5.svg";
import { ReactComponent as MesheryLogo } from "../../../assets/images/meshery/meshery-logo.svg";
import BookCover from "../../../assets/images/learn/book-cover.webp";
import CourseCover from "../../../assets/images/learn/sercice-mesh-course1.webp";
import Button from "../../../reusecore/Button";

const CanvasIllustration = () => {
  return (
    <CanvasIllustrationWrapper>
      <div className="text-side">
        <h2>Elevate Your Cloud Native Expertise</h2>
        <p>
          Master Kubernetes, service meshes, and GitOps with structured,
          hands-on learning paths. Design, manage, and collaborate seamlessly.
        </p>
        <Button
          $primary
          title="Explore all learning paths"
          $url="https://cloud.layer5.io/academy?contentType=learning-path"
          $external={true}
        />
      </div>
      <div className="illustration-side">
        <div className="canvas-node node-k8s">
          <KubernetesIcon className="node-icon" />
          <span>Kubernetes</span>
        </div>

        <div className="canvas-node node-istio">
          <ServiceMeshIcon className="node-icon" />
          <span>Service Mesh</span>
        </div>

        <div className="node-academy center-academy">
          <AcademyLogo className="node-icon" />
        </div>

        <div className="canvas-node hexagon node-meshery">
          <MesheryLogo className="node-icon" />
          <span>Meshery</span>
        </div>

        <div className="canvas-node node-gitops">
          <JaegerIcon className="node-icon" />
          <span>Jaeger</span>
        </div>

        <div className="canvas-node compact node-workshop">
          <img
            src={BookCover}
            alt="Workshop"
            className="node-icon"
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
          <span>Workshops</span>
        </div>

        <div className="canvas-node compact node-certification">
          <img
            src={CourseCover}
            alt="Certify"
            className="node-icon"
            style={{ borderRadius: "4px", objectFit: "cover" }}
          />
          <span>Certify</span>
        </div>

        <div className="canvas-node mini node-quiz" aria-hidden="true">
          <span>?</span>
        </div>

        <div className="canvas-node mini node-check" aria-hidden="true">
          <svg
            className="node-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.5l4 4L19 6"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="learning-card">
          <div
            className="learning-card-icon"
            style={{ background: "transparent" }}
          >
            <img
              src={CourseCover}
              alt="Course"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <span>Learning path</span>
            <strong>Cloud native foundations</strong>
          </div>
        </div>

        <div className="progress-strip" aria-hidden="true">
          <span className="progress-step active">1</span>
          <span className="progress-line"></span>
          <span className="progress-step active">2</span>
          <span className="progress-line"></span>
          <span className="progress-step">3</span>
        </div>

        <div className="cursor cursor-1">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.04c.45 0 .67-.54.35-.85L6.35 3.56a.5.5 0 00-.85.35z" />
          </svg>
          <div className="cursor-label">Ryan</div>
        </div>

        <div className="cursor cursor-2">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.04c.45 0 .67-.54.35-.85L6.35 3.56a.5.5 0 00-.85.35z" />
          </svg>
          <div className="cursor-label">Suzan</div>
        </div>

        <div className="comment-block">Concept unlocked</div>
      </div>
    </CanvasIllustrationWrapper>
  );
};

export default CanvasIllustration;
