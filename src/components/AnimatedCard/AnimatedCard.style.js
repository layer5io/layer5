import styled, { keyframes } from "styled-components";

// Keyframes from the original HTML
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const dataStream = keyframes`
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
`;

const schemaPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.03); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

export const AnimatedCardWrapper = styled.div`
  /* Match the original HTML body styles */
  font-family: 'Geist', sans-serif;
  position: relative;
  
  /* Wave visualizer - matches HTML canvas styles */
  .wave-visualizer {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  /* Glass utility class from HTML - Theme aware */
  .glass {
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(0, 0, 0, 0.05)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Connector animation from HTML */
  .connector {
    stroke-dasharray: 8;
    animation: ${dataStream} 2s linear infinite;
  }

  /* Table float animations from HTML */
  .table-float {
    animation: ${float} 6s ease-in-out infinite;
    
    &:nth-child(2) { animation-delay: -1s; }
    &:nth-child(3) { animation-delay: -2s; }
    &:nth-child(4) { animation-delay: -3s; }
  }

  /* Gradient border - Theme aware */
  .gradient-border {
    position: relative;
    background: ${props => props.$isDark
      ? 'linear-gradient(135deg, rgba(0, 179, 159, 0.1), rgba(59, 130, 246, 0.1), rgba(0, 211, 169, 0.1))'
      : 'linear-gradient(135deg, rgba(0, 179, 159, 0.2), rgba(59, 130, 246, 0.2), rgba(0, 211, 169, 0.2))'};
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(135deg, #EBC017, #477E96, #477E96, #EBC017);
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
    }
  }

  /* Inner glow - Theme aware */
  .inner-glow {
    box-shadow: ${props => props.$isDark
      ? `inset 0 0 20px rgba(0, 179, 159, 0.3),
         inset 0 0 40px rgba(59, 130, 246, 0.2),
         0 0 30px rgba(0, 211, 169, 0.4)`
      : `inset 0 0 20px rgba(0, 179, 159, 0.2),
         inset 0 0 40px rgba(59, 130, 246, 0.1),
         0 0 30px rgba(0, 211, 169, 0.3)`};
  }

  /* Card content - Theme aware */
  .animated-card-content {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    animation: ${float} 6s ease-in-out infinite;
    
    /* Theme-aware card styling */
    background: ${props => props.$isDark
      ? 'rgba(0, 179, 159, 0.08)'
      : 'rgba(255, 255, 255, 0.9)'};
    border: 1px solid ${props => props.$isDark
      ? 'rgba(0, 179, 159, 0.3)'
      : 'rgba(0, 179, 159, 0.2)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: ${props => props.$isDark
      ? `0 0 0 1px rgba(0, 179, 159, 0.3),
         inset 0 0 30px rgba(0, 179, 159, 0.1),
         inset 0 0 60px rgba(0, 211, 169, 0.05),
         0 0 50px rgba(0, 211, 169, 0.2)`
      : `0 4px 6px rgba(0, 0, 0, 0.1),
         0 1px 3px rgba(0, 0, 0, 0.08),
         inset 0 0 0 1px rgba(255, 255, 255, 0.1)`};
  }

  /* Preview section */
  .preview-section {
    padding: 1rem;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .preview-container {
    width: 100%;
    height: 12rem;
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
    
    /* Theme-aware background */
    background: ${props => props.$isDark
      ? 'linear-gradient(135deg, rgba(0, 179, 159, 0.1), rgba(59, 130, 246, 0.1), rgba(0, 211, 169, 0.1))'
      : 'linear-gradient(135deg, rgba(0, 179, 159, 0.15), rgba(59, 130, 246, 0.15), rgba(0, 211, 169, 0.15))'};
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(135deg, #EBC017, #477E96, #477E96, #EBC017);
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
    }
    
    box-shadow: ${props => props.$isDark
      ? `inset 0 0 20px rgba(0, 179, 159, 0.3),
         inset 0 0 40px rgba(59, 130, 246, 0.2),
         0 0 30px rgba(0, 211, 169, 0.4)`
      : `inset 0 0 20px rgba(0, 179, 159, 0.2),
         inset 0 0 40px rgba(59, 130, 246, 0.1),
         0 0 20px rgba(0, 211, 169, 0.2)`};
  }

  /* Animated grid background */
  .grid-background {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    
    .animated-grid {
      width: 100%;
      height: 100%;
      animation: ${pulse} 2s ease-in-out infinite;
      background-image: 
        linear-gradient(90deg, ${props => props.$isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'} 1px, transparent 1px), 
        linear-gradient(${props => props.$isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'} 1px, transparent 1px);
      background-size: 15px 15px;
    }
  }

  /* Database connections SVG */
  .connections-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Database tables container */
  .database-tables {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Floating table cards - Theme aware */
  .table-card {
    position: absolute;
    width: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    
    /* Theme-aware styling */
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 2px;
      background: linear-gradient(135deg, #EBC017, #477E96, #477E96, #EBC017);
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
    }
  }

  /* Table positioning */
  .table-card-1 {
    left: 0.75rem;
    top: 3rem;
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -1s;
  }

  .table-card-2 {
    right: 0.75rem;
    top: 3rem;
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -2s;
  }

  .table-card-3 {
    left: 50%;
    transform: translateX(-50%);
    top: 6rem;
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -3s;
  }

  .table-card-4 {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.75rem;
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: 0s;
  }

  /* Table headers - Theme aware */
  .table-header {
    color: ${props => props.$isDark ? 'white' : '#1f2937'};
    font-size: 0.4375rem;
    padding: 0.375rem 0.375rem 0.125rem;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'};
    
    &.designs {
      background: linear-gradient(to right, rgba(79, 70, 229, 0.2), rgba(59, 130, 246, 0.2));
    }
    
    &.relationships {
      background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
    }
    
    &.models {
      background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
    }
    
    &.components {
      background: linear-gradient(to right, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2));
    }
  }

  /* Table content */
  .table-content {
    padding: 0.375rem;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .table-row {
    display: flex;
    align-items: center;
    gap: 0.125rem;
  }

  /* Status dots */
  .status-dot {
    border-radius: 50%;
    
    &.yellow {
      width: 0.25rem;
      height: 0.25rem;
      background: #fbbf24;
    }
    
    &.blue {
      width: 0.25rem;
      height: 0.25rem;
      background: #60a5fa;
    }
    
    &.green {
      width: 0.25rem;
      height: 0.25rem;
      background: #34d399;
    }
    
    &.orange {
      width: 0.25rem;
      height: 0.25rem;
      background: #fb923c;
    }
  }

  /* Table lines - Theme aware */
  .table-line {
    height: 0.125rem;
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.3)' 
      : 'rgba(0, 0, 0, 0.3)'};
    border-radius: 0.125rem;
    
    &.w-4 { width: 1rem; }
    &.w-6 { width: 1.5rem; }
    &.w-7 { width: 1.75rem; }
    &.w-3 { width: 0.75rem; }
    &.w-5 { width: 1.25rem; }
  }

  /* Glass divider - Theme aware */
  .glass-divider {
    width: 100%;
    height: 1px;
    background: ${props => props.$isDark
      ? 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)'
      : 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.2), transparent)'};
  }

  /* Content section */
  .card-content {
    padding: 1rem;
  }

  /* Tags - Theme aware with comprehensive color mapping */
  .tags-container {
    margin-bottom: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    
    /* Theme-aware glass styling */
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    /* AWS/Azure/GCP - Original colors */
    &.tag-aws {
      color: #fb923c;
      border: 1px solid rgba(251, 146, 60, 0.3);
    }
    
    &.tag-azure {
      color: #a78bfa;
      border: 1px solid rgba(79, 70, 229, 0.3);
    }
    
    &.tag-gcp {
      color: #38bdf8;
      border: 1px solid rgba(14, 165, 233, 0.3);
    }
    
    /* Cloud/Container Platforms */
    &.tag-kubernetes {
      color: #3b82f6;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    
    &.tag-docker {
      color: #0ea5e9;
      border: 1px solid rgba(14, 165, 233, 0.3);
    }
    
    &.tag-openshift {
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }
    
    /* DevOps Tools */
    &.tag-devops {
      color: #10b981;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    
    &.tag-cicd {
      color: #8b5cf6;
      border: 1px solid rgba(139, 92, 246, 0.3);
    }
    
    &.tag-jenkins {
      color: #f59e0b;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
    
    /* Service Mesh */
    &.tag-istio {
      color: #6366f1;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }
    
    &.tag-linkerd {
      color: #06b6d4;
      border: 1px solid rgba(6, 182, 212, 0.3);
    }
    
    &.tag-consul {
      color: #ec4899;
      border: 1px solid rgba(236, 72, 153, 0.3);
    }
    
    /* Monitoring */
    &.tag-prometheus {
      color: #f97316;
      border: 1px solid rgba(249, 115, 22, 0.3);
    }
    
    &.tag-grafana {
      color: #fb7185;
      border: 1px solid rgba(251, 113, 133, 0.3);
    }
    
    &.tag-monitoring {
      color: #14b8a6;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }
    
    /* Languages/Frameworks */
    &.tag-golang {
      color: #00d4aa;
      border: 1px solid rgba(0, 212, 170, 0.3);
    }
    
    &.tag-javascript {
      color: #fbbf24;
      border: 1px solid rgba(251, 191, 36, 0.3);
    }
    
    &.tag-python {
      color: #3b82f6;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    
    &.tag-react {
      color: #06b6d4;
      border: 1px solid rgba(6, 182, 212, 0.3);
    }
    
    /* Content Types */
    &.tag-tutorial {
      color: #22c55e;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    
    &.tag-guide {
      color: #a855f7;
      border: 1px solid rgba(168, 85, 247, 0.3);
    }
    
    &.tag-blog {
      color: #64748b;
      border: 1px solid rgba(100, 116, 139, 0.3);
    }
    
    &.tag-news {
      color: #dc2626;
      border: 1px solid rgba(220, 38, 38, 0.3);
    }
    
    /* Special Categories */
    &.tag-performance {
      color: #f59e0b;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
    
    &.tag-security {
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }
    
    &.tag-testing {
      color: #84cc16;
      border: 1px solid rgba(132, 204, 22, 0.3);
    }
    
    /* Default fallback for unknown tags */
    &.tag-default {
      color: #6b7280;
      border: 1px solid rgba(107, 114, 128, 0.3);
    }
  }

  /* Title - Theme aware */
  .card-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${props => props.$isDark ? 'white' : '#1f2937'};
    margin-bottom: 0.5rem;
  }

  /* Description - Theme aware */
  .card-description {
    color: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.7)' 
      : 'rgba(0, 0, 0, 0.7)'};
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: 0.75rem;
  }

  /* Actions */
  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  /* Action button - Theme aware */
  .action-btn {
    color: #34d399;
    text-decoration: none;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(52, 211, 153, 0.3);
    
    /* Theme-aware glass styling */
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    &:hover {
      color: #10b981;
    }
    
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.25rem;
    }
  }

  /* Status badge - Theme aware */
  .status-badge {
    color: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.5)' 
      : 'rgba(0, 0, 0, 0.5)'};
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    border: 1px solid ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'};
    
    /* Theme-aware glass styling */
    background: ${props => props.$isDark 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Post meta block - Theme aware */
  .post-meta-block {
    height: auto;
    display: flex;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    .author {
      text-align: end;
    }
    
    .author, p {
      color: ${props => props.theme?.whiteSixToBlackSix || (props.$isDark ? '#999' : '#666')};
      font-size: 0.9rem;
      font-weight: 400;
      flex: auto;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    .type {
      text-align: end;
      font-size: 1rem;
      font-weight: 400;
    }
  }

  /* Post thumb block for regular cards */
  .post-thumb-block {
    overflow: hidden;
    height: 11.5rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;

    .gatsby-image-wrapper, .old-gatsby-image-wrapper {
      height: 100%;
      margin-top: 0.2rem;
      transition: all 0.3s ease-in;
    }

    img {
      height: inherit;
      max-height: 180px;
      display: block;
      text-align: center;
      margin: auto;
    }
  }

  /* Original Card styles for backward compatibility - Theme aware */
  .post-block {
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme?.grey212121ToWhite || (props.$isDark ? '#212121' : '#fff')};
    box-shadow: 0px 2px 6px 0px ${props => props.theme?.green00D3A9ToBlackTwo || 'rgba(0, 211, 169, 0.2)'};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    animation: ${float} 6s ease-in-out infinite;

    &:hover {
      box-shadow: 0px 2px 15px 4px ${props => props.theme?.whiteNineToBlackOne || (props.$isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
      
      .post-thumb-block {
        .gatsby-image-wrapper, .old-gatsby-image-wrapper {
          transform: scale3d(1.1, 1.1, 1);
        }
      }
    }
  }

  .post-content-block {
    padding: 1rem 2rem;
    height: auto;
    min-height: 8rem;
  }

  .post-title {
    font-size: 1.4rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme?.textColor || (props.$isDark ? '#fff' : '#000')};
  }

  .readmore-btn-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .readmore-btn, .external-link-btn {
    color: ${props => props.theme?.whiteFourToBlackFour || (props.$isDark ? '#ccc' : '#333')};
    display: flex;
    flex: auto;
    align-items: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    text-decoration: none;
    
    svg {
      font-size: 1.5rem;
      transition: all 0.3s;
    }
    
    &:hover {
      color: ${props => props.theme?.secondaryColor || '#00b39f'};
      
      svg {
        transform: scale(1.2);
      }
    }
  }

  .external-link-btn {
    justify-content: flex-end;
    
    svg {
      font-size: 2rem;
      padding: 0.25rem;
      position: relative;
    }
  }

  /* Mobile Responsive Design */
  @media screen and (max-width: 768px) {
    .animated-card-content {
      margin: 0 0.5rem;
    }
    
    .preview-container {
      height: 8rem; /* Smaller on mobile */
    }
    
    .table-card {
      width: 3rem; /* Smaller floating tables */
      height: 2.5rem;
    }
    
    .table-header {
      font-size: 0.375rem;
      padding: 0.25rem;
    }
    
    .card-content {
      padding: 0.75rem;
    }
    
    .card-title {
      font-size: 1rem;
    }
    
    .card-description {
      font-size: 0.875rem;
    }
    
    .tags-container {
      gap: 0.125rem;
    }
    
    .tag {
      padding: 0.125rem 0.5rem;
      font-size: 0.625rem;
    }
    
    .card-actions {
      flex-direction: column;
      align-items: stretch;
      gap: 0.75rem;
    }
    
    .action-btn {
      justify-content: center;
    }
    
    /* Original card mobile styles */
    .post-block {
      width: auto;
      margin: auto auto 2rem;
    }
    
    .post-content-block {
      height: auto;
      min-height: 10rem;
      padding: 1rem;
    }
    
    .post-title {
      font-size: 1.2rem;
      white-space: normal;
    }
    
    .post-meta-block {
      flex-direction: column;
      gap: 0.25rem;
      
      .author {
        text-align: start;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .preview-container {
      height: 6rem;
    }
    
    .table-card {
      width: 2.5rem;
      height: 2rem;
    }
    
    .card-content {
      padding: 0.5rem;
    }
    
    .card-title {
      font-size: 0.875rem;
    }
    
    .post-content-block {
      padding: 0.75rem;
    }
  }
`;