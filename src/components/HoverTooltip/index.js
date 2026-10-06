import React from "react";
import styled from "styled-components";

// Lightweight, dependency-free replacement for design-system tooltips in
// components that render inside the global layout. Pulling a full design
// system into `src/components/layout.js` puts it in the shared bundle of
// every page, so anything rendered there stays on local primitives.
const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;

  .tooltip-bubble {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: rgba(60, 73, 79, 0.95);
    color: #ffffff;
    font-size: 0.75rem;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.15s ease-in-out;
  }

  &:hover .tooltip-bubble,
  &:focus-within .tooltip-bubble {
    opacity: 1;
    visibility: visible;
  }
`;

const HoverTooltip = ({ title, children, className }) => (
  <TooltipWrapper className={className}>
    {children}
    <span className="tooltip-bubble" role="tooltip">
      {title}
    </span>
  </TooltipWrapper>
);

export default HoverTooltip;
