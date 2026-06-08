import React from "react";
import CanvasIllustrationWrapper from "./canvas-illustration.style";
import IstioIcon from "../../../assets/images/service-mesh-icons/istio.svg";
import Button from "../../../reusecore/Button";

const CanvasIllustration = () => {
  return (
    <CanvasIllustrationWrapper aria-hidden="true">
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
        <svg className="canvas-svg" xmlns="http://www.w3.org/2000/svg">
          <path
            className="blue-path"
            d="M 15% 20% C 30% 20%, 40% 40%, 50% 40%"
          />
          <path
            className="blue-path"
            d="M 25% 70% C 35% 70%, 40% 40%, 50% 40%"
          />
          <path
            className="purple-path"
            d="M 50% 40% C 60% 40%, 65% 30%, 75% 30%"
          />
          <path
            className="teal-path"
            d="M 50% 40% C 58% 48%, 64% 58%, 72% 64%"
          />
          <path
            className="yellow-path"
            d="M 50% 40% C 48% 24%, 58% 16%, 66% 16%"
          />
          <path
            className="purple-path muted"
            d="M 25% 70% C 38% 82%, 56% 80%, 72% 64%"
          />
          <path
            className="blue-path muted"
            d="M 15% 20% C 26% 10%, 46% 10%, 66% 16%"
          />
          <path
            className="teal-path muted"
            d="M 32% 52% C 40% 58%, 48% 58%, 58% 54%"
          />
          <path
            className="yellow-path muted"
            d="M 72% 64% C 80% 58%, 84% 44%, 76% 30%"
          />
        </svg>

        <div className="canvas-node node-k8s">
          <svg
            className="node-icon"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.9 0L14.6 15.6l-8.5 73.1L64 128l58.1-39.3-8.5-73.1L63.9 0z"
              fill="currentColor"
              opacity=".8"
            />
            <path
              d="M96.7 44.2l-32.8-19-32.8 19v37.9l32.8 19 32.8-19V44.2zm-32.8 51L36.2 79.1v-32l27.7-16 27.7 16v32l-27.7 16.1z"
              fill="#fff"
            />
          </svg>
          <span>Kubernetes</span>
        </div>

        <div className="canvas-node node-istio">
          <img src={IstioIcon} className="node-icon" alt="Istio" />
          <span>Istio</span>
        </div>

        <div className="canvas-node hexagon node-meshery">
          <svg
            className="node-icon"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0l20 11.5v23L20 40 0 34.5v-23L20 0zm0 4.6L4 13.8v18.4L20 35.4l16-9.2V13.8L20 4.6z"
              fill="currentColor"
            />
          </svg>
          <span>Meshery</span>
        </div>

        <div className="canvas-node node-gitops">
          <svg
            className="node-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 6l-4.22 5.63a2.5 2.5 0 11-3.46-.87L10.5 5A2.5 2.5 0 1114 6z" />
            <path d="M10.5 19l4.22-5.63a2.5 2.5 0 113.46.87L14 19.87a2.5 2.5 0 11-3.5-.87z" />
          </svg>
          <span>GitOps</span>
        </div>

        <div className="canvas-node compact node-workshop">
          <svg
            className="node-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4.5h9a3 3 0 013 3v12H8a3 3 0 01-3-3v-12z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M8 8h5M8 11h6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span>Workshops</span>
        </div>

        <div className="canvas-node compact node-certification">
          <svg
            className="node-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3l2.2 4.46 4.92.72-3.56 3.47.84 4.9L12 14.24l-4.4 2.31.84-4.9-3.56-3.47 4.92-.72L12 3z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9 18.5l-1 2 4-1 4 1-1-2"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
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
          <div className="learning-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6.5l8-3 8 3-8 3-8-3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M7 9v5.5c0 1.4 2.24 2.5 5 2.5s5-1.1 5-2.5V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M20 7v5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
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
