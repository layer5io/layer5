import styled, { keyframes } from "styled-components";

const flowAnimation = keyframes`
  to {
    stroke-dashoffset: -20;
  }
`;

const float1 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(10px, -15px); }
  100% { transform: translate(0, 0); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 12px); }
  100% { transform: translate(0, 0); }
`;

const CanvasIllustrationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 3rem 0;
  border-radius: 0;
  overflow: hidden;
  background-color: transparent;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    box-shadow: none;
  }

  .illustration-side {
    position: relative;
    width: 60%;
    height: 450px;
    max-width: 760px;
    isolation: isolate;
    background-image: radial-gradient(#888 1px, transparent 1px);
    background-size: 20px 20px;
    mask-image: linear-gradient(to left, black 60%, transparent 100%);
    -webkit-mask-image: linear-gradient(to left, black 60%, transparent 100%);
    overflow: hidden;

    @media (max-width: 900px) {
      width: 100%;
      height: 350px;
      mask-image: linear-gradient(to top, black 50%, transparent 100%);
      -webkit-mask-image: linear-gradient(to top, black 50%, transparent 100%);
    }
  }

  .text-side {
    width: 40%;
    padding: 2rem;
    padding-left: 0;
    padding-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 900px) {
      width: 100%;
      align-items: center;
      padding: 1rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      line-height: 1.2;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      opacity: 0.8;
      line-height: 1.6;
    }
  }

  /* SVG layer for connections */
  .canvas-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    path {
      fill: none;
      stroke: #00b39f;
      stroke-width: 2.5;
      stroke-dasharray: 6 6;
      animation: ${flowAnimation} 1s linear infinite;
    }

    path.muted {
      stroke-width: 1.8;
      stroke-dasharray: 3 8;
      opacity: 0.58;
    }

    path.blue-path {
      stroke: #326ce5;
    }

    path.purple-path {
      stroke: #7a4bb5;
    }

    path.teal-path {
      stroke: #00b39f;
    }

    path.yellow-path {
      stroke: #ebc017;
    }
  }

  /* Canvas nodes */
  .canvas-node {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    background: #1a1c1e;
    border: 2px solid #555;
    border-radius: 8px;
    color: #e0e0e0;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

    .node-icon {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
      fill: currentColor;
    }
  }

  .canvas-node.compact {
    padding: 9px 14px;
    min-width: 96px;
    font-size: 0.82rem;
    background: rgba(26, 28, 30, 0.94);

    .node-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 5px;
    }
  }

  .canvas-node.mini {
    width: 42px;
    height: 42px;
    padding: 0;
    border-radius: 50%;
    font-size: 1.15rem;
    font-weight: 800;
    background: #111416;

    .node-icon {
      width: 22px;
      height: 22px;
      margin-bottom: 0;
    }
  }

  /* Hexagon shape for the center node */
  .canvas-node.hexagon {
    width: 120px;
    height: 120px;
    border-radius: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color: #00b39f;
    color: white;

    &:before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      bottom: 3px;
      background-color: #1a1c1e;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      z-index: -1;
    }

    .node-icon {
      color: #00b39f;
    }
  }

  /* Node positioning */
  .node-k8s {
    top: 20%;
    left: 10%;
    border-color: #326ce5;
    .node-icon {
      color: #326ce5;
    }
  }

  .node-istio {
    top: 70%;
    left: 20%;
    border-color: #466bb0;
    .node-icon {
      color: #466bb0;
    }
  }

  .node-meshery {
    top: 40%;
    left: 45%;
    transform: translate(-50%, -50%);
  }

  .node-gitops {
    top: 30%;
    left: 70%;
    border-color: #ebc017;
    .node-icon {
      color: #ebc017;
    }
  }

  .node-workshop {
    top: 16%;
    left: 62%;
    border-color: #00b39f;
    .node-icon {
      color: #00b39f;
    }
  }

  .node-certification {
    top: 64%;
    left: 68%;
    border-color: #7a4bb5;
    .node-icon {
      color: #7a4bb5;
    }
  }

  .node-quiz {
    top: 49%;
    left: 29%;
    color: #ffd200;
    border-color: #ffd200;
  }

  .node-check {
    top: 53%;
    left: 56%;
    color: #00b39f;
    border-color: #00b39f;
  }

  .learning-card {
    position: absolute;
    top: 76%;
    left: 38%;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 240px;
    padding: 12px 14px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid rgba(0, 179, 159, 0.28);
    border-radius: 8px;
    color: #1a1c1e;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
    animation: ${float2} 7s ease-in-out infinite;

    .learning-card-icon {
      display: grid;
      place-items: center;
      flex: 0 0 36px;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: rgba(0, 179, 159, 0.12);
      color: #00b39f;
    }

    svg {
      width: 24px;
      height: 24px;
    }

    span,
    strong {
      display: block;
    }

    span {
      margin-bottom: 2px;
      font-size: 0.72rem;
      line-height: 1.2;
      text-transform: uppercase;
      color: #4b5563;
      font-weight: 700;
    }

    strong {
      font-size: 0.9rem;
      line-height: 1.25;
    }
  }

  .progress-strip {
    position: absolute;
    top: 8%;
    left: 32%;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    background: rgba(26, 28, 30, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
  }

  .progress-step {
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid rgba(255, 255, 255, 0.32);
    border-radius: 50%;
    color: #cfd8dc;
    font-size: 0.72rem;
    font-weight: 800;

    &.active {
      background: #00b39f;
      border-color: #00b39f;
      color: #fff;
    }
  }

  .progress-line {
    width: 28px;
    height: 2px;
    background: rgba(255, 255, 255, 0.32);
  }

  /* Collaborative Cursors */
  .cursor {
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    animation: ${float1} 4s ease-in-out infinite;

    svg {
      width: 20px;
      height: 20px;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
    }

    .cursor-label {
      background: #7a4bb5;
      color: white;
      font-size: 0.8rem;
      padding: 4px 10px;
      border-radius: 12px;
      margin-left: -2px;
      margin-top: 12px;
      font-weight: 600;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    }
  }

  .cursor-1 {
    top: 15%;
    left: 40%;
    svg path {
      fill: #7a4bb5;
      stroke: white;
      stroke-width: 1.5;
    }
    .cursor-label {
      background: #7a4bb5;
    }
  }

  .cursor-2 {
    top: 65%;
    left: 60%;
    animation: ${float2} 5s ease-in-out infinite;
    svg path {
      fill: #e6522c;
      stroke: white;
      stroke-width: 1.5;
    }
    .cursor-label {
      background: #e6522c;
    }
  }

  /* Comment block */
  .comment-block {
    position: absolute;
    top: 25%;
    left: 55%;
    z-index: 5;
    background: #ffd200;
    color: #1a1c1e;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    animation: ${float1} 6s ease-in-out infinite;

    &:after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 20px;
      border-width: 8px 8px 0;
      border-style: solid;
      border-color: #ffd200 transparent transparent transparent;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    .canvas-node {
      padding: 8px 16px;
      font-size: 0.85rem;
      .node-icon {
        width: 24px;
        height: 24px;
      }
    }
    .canvas-node.hexagon {
      width: 90px;
      height: 90px;
    }
    .canvas-node.compact {
      min-width: 82px;
      padding: 7px 10px;
      font-size: 0.72rem;
    }
    .canvas-node.mini {
      width: 34px;
      height: 34px;
    }
    .cursor-2,
    .comment-block,
    .learning-card {
      display: none;
    }
    .progress-strip {
      top: 7%;
      left: 38%;
      transform: scale(0.86);
      transform-origin: left top;
    }
  }

  @media (max-width: 500px) {
    .node-gitops {
      top: 70%;
      left: 70%;
    }
    .node-k8s {
      top: 15%;
      left: 10%;
    }
    .cursor-1 {
      top: 10%;
      left: 55%;
    }
    .node-workshop {
      top: 14%;
      left: 62%;
    }
    .node-certification {
      top: 60%;
      left: 58%;
    }
    .node-quiz,
    .node-check,
    .progress-strip {
      display: none;
    }
  }
`;

export default CanvasIllustrationWrapper;
