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

  /* Glass utility class from HTML */
  .glass {
    background: rgba(255, 255, 255, 0.05);
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

  /* Gradient border exactly from HTML */
  .gradient-border {
    position: relative;
    background: linear-gradient(135deg, rgba(0, 179, 159, 0.1), rgba(59, 130, 246, 0.1), rgba(0, 211, 169, 0.1));
    
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

  /* Inner glow exactly from HTML */
  .inner-glow {
    box-shadow: 
      inset 0 0 20px rgba(0, 179, 159, 0.3),
      inset 0 0 40px rgba(59, 130, 246, 0.2),
      0 0 30px rgba(0, 211, 169, 0.4);
  }

  /* Card border exactly from HTML */
  .card-border {
    background: rgba(0, 179, 159, 0.08);
    border: 1px solid rgba(0, 179, 159, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 
      0 0 0 1px rgba(0, 179, 159, 0.3),
      inset 0 0 30px rgba(0, 179, 159, 0.1),
      inset 0 0 60px rgba(0, 211, 169, 0.05),
      0 0 50px rgba(0, 211, 169, 0.2);
  }

  /* Main card container - matches HTML structure */
  .animated-card-container {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 10;
  }

  .card-wrapper {
    width: 100%;
    position: relative;
    max-width: 20rem; /* max-w-xs from HTML */
  }

  /* Card content - matches HTML classes */
  .animated-card-content {
    position: relative;
    overflow: hidden;
    border-radius: 1rem; /* rounded-2xl */
    display: flex;
    flex-direction: column;
    animation: ${float} 6s ease-in-out infinite; /* animate-float */
    
    /* Apply card-border styles */
    background: rgba(0, 179, 159, 0.08);
    border: 1px solid rgba(0, 179, 159, 0.3);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 
      0 0 0 1px rgba(0, 179, 159, 0.3),
      inset 0 0 30px rgba(0, 179, 159, 0.1),
      inset 0 0 60px rgba(0, 211, 169, 0.05),
      0 0 50px rgba(0, 211, 169, 0.2);
  }

  /* Database Schema Preview - matches HTML */
  .preview-section {
    padding: 1rem; /* p-4 */
    display: flex;
    justify-content: center;
    position: relative;
  }

  .preview-container {
    width: 100%;
    height: 12rem; /* h-48 */
    border-radius: 0.75rem; /* rounded-xl */
    overflow: hidden;
    position: relative;
    
    /* Apply gradient-border and inner-glow */
    background: linear-gradient(135deg, rgba(0, 179, 159, 0.1), rgba(59, 130, 246, 0.1), rgba(0, 211, 169, 0.1));
    
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
    
    box-shadow: 
      inset 0 0 20px rgba(0, 179, 159, 0.3),
      inset 0 0 40px rgba(59, 130, 246, 0.2),
      0 0 30px rgba(0, 211, 169, 0.4);
  }

  /* Animated grid background - matches HTML */
  .grid-background {
    position: absolute;
    inset: 0;
    opacity: 0.1; /* opacity-10 */
    
    .animated-grid {
      width: 100%;
      height: 100%;
      animation: ${pulse} 2s ease-in-out infinite; /* animate-pulse */
      background-image: 
        linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), 
        linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px);
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

  /* Animated Database Tables container */
  .database-tables {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* Kanvas icon hub - matches HTML positioning */
  .kanvas-icon {
    position: absolute;
    bottom: 0.5rem; /* bottom-2 */
    left: 0.5rem; /* left-2 */
    transform: translateX(-50%);
    animation: ${schemaPulse} 4s ease-in-out infinite; /* animate-schema-pulse */
    
    .icon-container {
      width: 2rem; /* w-8 */
      height: 2rem; /* h-8 */
      border-radius: 0.75rem; /* rounded-xl */
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(79, 70, 229, 0.3); /* border-indigo-400/30 */
      
      /* Apply glass and inner-glow */
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 
        inset 0 0 20px rgba(0, 179, 159, 0.3),
        inset 0 0 40px rgba(59, 130, 246, 0.2),
        0 0 30px rgba(0, 211, 169, 0.4);
      
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  /* Floating table cards - exact positioning from HTML */
  .table-card {
    position: absolute;
    width: 4rem; /* w-16 */
    height: 3rem; /* h-12 */
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
    overflow: hidden;
    
    /* Apply glass, gradient-border */
    background: rgba(255, 255, 255, 0.05);
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

  /* Exact positioning from HTML */
  .table-card-1 {
    left: 0.75rem; /* left-3 */
    top: 3rem; /* top-12 */
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -1s;
  }

  .table-card-2 {
    right: 0.75rem; /* right-3 */
    top: 3rem; /* top-12 */
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -2s;
  }

  .table-card-3 {
    left: 50%;
    transform: translateX(-50%);
    top: 6rem; /* top-24 */
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: -3s;
  }

  .table-card-4 {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.75rem; /* bottom-3 */
    animation: ${float} 6s ease-in-out infinite;
    animation-delay: 0s;
  }

  /* Table headers with exact gradients from HTML */
  .table-header {
    color: white;
    font-size: 0.4375rem; /* text-[7px] */
    padding: 0.375rem 0.375rem 0.125rem; /* px-1.5 py-0.5 */
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
    
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

  /* Table content styling */
  .table-content {
    padding: 0.375rem; /* px-1.5 py-0.5 */
    display: flex;
    flex-direction: column;
    gap: 0.125rem; /* space-y-0.5 */
  }

  .table-row {
    display: flex;
    align-items: center;
    gap: 0.125rem; /* space-x-0.5 */
  }

  /* Status dots with exact colors from HTML */
  .status-dot {
    border-radius: 50%;
    
    &.yellow {
      width: 0.25rem; /* w-1 */
      height: 0.25rem; /* h-1 */
      background: #fbbf24; /* bg-yellow-400 */
    }
    
    &.blue {
      width: 0.25rem;
      height: 0.25rem;
      background: #60a5fa; /* bg-blue-400 */
    }
    
    &.green {
      width: 0.25rem;
      height: 0.25rem;
      background: #34d399; /* bg-green-400 */
    }
    
    &.orange {
      width: 0.25rem;
      height: 0.25rem;
      background: #fb923c; /* bg-orange-400 */
    }
  }

  /* Table lines with exact sizing from HTML */
  .table-line {
    height: 0.125rem; /* h-0.5 */
    background: rgba(255, 255, 255, 0.3); /* bg-white/30 */
    border-radius: 0.125rem;
    
    &.w-4 { width: 1rem; }
    &.w-6 { width: 1.5rem; }
    &.w-7 { width: 1.75rem; }
    &.w-3 { width: 0.75rem; }
    &.w-5 { width: 1.25rem; }
  }

  /* Glass divider - matches HTML */
  .glass-divider {
    width: 100%;
    height: 1px; /* h-px */
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  /* Content section - matches HTML padding */
  .card-content {
    padding: 1rem; /* p-4 */
  }

  /* Tags exactly from HTML */
  .tags-container {
    margin-bottom: 0.75rem; /* mb-3 */
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .tag {
    display: inline-block;
    padding: 0.25rem 0.75rem; /* px-3 py-1 */
    border-radius: 9999px; /* rounded-full */
    font-size: 0.75rem; /* text-xs */
    font-weight: 500;
    margin-bottom: 0.75rem; /* mb-3 */
    
    /* Apply glass styling */
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    &.tag-aws {
      color: #fb923c; /* text-orange-300 */
      border: 1px solid rgba(251, 146, 60, 0.3); /* border-orange-400/30 */
    }
    
    &.tag-azure {
      color: #a78bfa; /* text-indigo-300 */
      border: 1px solid rgba(79, 70, 229, 0.3); /* border-indigo-400/30 */
    }
    
    &.tag-gcp {
      color: #38bdf8; /* text-sky-300 */
      border: 1px solid rgba(14, 165, 233, 0.3); /* border-sky-400/30 */
    }
  }

  /* Title exactly from HTML */
  .card-title {
    font-size: 1.125rem; /* text-lg */
    font-weight: 500;
    color: white;
    margin-bottom: 0.5rem; /* mb-2 */
  }

  /* Description exactly from HTML */
  .card-description {
    color: rgba(255, 255, 255, 0.7); /* text-white/70 */
    margin-bottom: 1rem; /* mb-4 */
    line-height: 1.5; /* leading-relaxed */
    font-size: 0.75rem; /* text-xs */
  }

  /* Actions exactly from HTML */
  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .action-btn {
    color: #34d399; /* text-green-400 */
    text-decoration: none;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    font-size: 0.75rem; /* text-xs */
    font-weight: 500;
    padding: 0.375rem 0.75rem; /* px-3 py-1.5 */
    border-radius: 0.5rem; /* rounded-lg */
    border: 1px solid rgba(52, 211, 153, 0.3); /* border-green-400/30 */
    
    /* Apply glass styling */
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    &:hover {
      color: #10b981; /* hover:text-green-300 */
    }
    
    svg {
      width: 0.75rem; /* w-3 */
      height: 0.75rem; /* h-3 */
      margin-left: 0.25rem; /* ml-1 */
    }
  }

  .status-badge {
    color: rgba(0, 0, 0, 0.5); /* text-black-400/50 */
    font-size: 0.75rem; /* text-xs */
    padding: 0.25rem 0.5rem; /* px-2 py-1 */
    border-radius: 9999px; /* rounded-full */
    border: 1px solid rgba(156, 163, 175, 0.1); /* border-gray-400/10 */
    
    /* Apply glass styling */
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
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

  /* Original Card styles for backward compatibility */
  .post-block {
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme?.grey212121ToWhite || '#fff'};
    box-shadow: 0px 2px 6px 0px ${props => props.theme?.green00D3A9ToBlackTwo || 'rgba(0, 211, 169, 0.2)'};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    animation: ${float} 6s ease-in-out infinite;

    &:hover {
      box-shadow: 0px 2px 15px 4px ${props => props.theme?.whiteNineToBlackOne || 'rgba(255, 255, 255, 0.1)'};
      
      .post-thumb-block {
        .gatsby-image-wrapper, .old-gatsby-image-wrapper {
          transform: scale3d(1.1, 1.1, 1);
        }
      }
    }
  }

  .post-content-block {
    padding: 1rem 2rem;
    height: 8rem;
  }

  .post-title {
    font-size: 1.4rem;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .post-meta-block {
    height: auto;
    display: flex;
    margin-bottom: 0.5rem;
    
    .author {
      text-align: end;
    }
    
    .author, p {
      color: ${props => props.theme?.whiteSixToBlackSix || '#666'};
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

  .readmore-btn-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .readmore-btn, .external-link-btn {
    color: ${props => props.theme?.whiteFourToBlackFour || '#333'};
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
`;