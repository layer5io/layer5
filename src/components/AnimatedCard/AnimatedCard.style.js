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

// const schemaPulse = keyframes`
//   0%, 100% { transform: scale(1); opacity: 0.8; }
//   50% { transform: scale(1.03); opacity: 1; }
// `;

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

  /* Glass utility class - using theme variables */
  .glass {
    background: ${props => props.theme.whiteFiveToBlackFive};
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

  /* Card content - using theme variables */
  .animated-card-content {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    animation: ${float} 6s ease-in-out infinite;
    
    /* Theme-aware card styling using existing theme variables */
    background: ${props => props.theme.grey212121ToWhite};
    border: 1px solid ${props => props.theme.green00D3A9ToBlue477E96};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: ${props => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:hover {
      box-shadow: ${props => props.theme.boxShadowGreen00D3A9};
    }
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
    background: ${props => props.theme.linearToLinear2};
    box-shadow: ${props => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
    
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
        linear-gradient(90deg, ${props => props.theme.whiteThreeToBlackThree} 1px, transparent 1px), 
        linear-gradient(${props => props.theme.whiteThreeToBlackThree} 1px, transparent 1px);
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

  /* Floating table cards - using theme variables */
  .table-card {
    position: absolute;
    width: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.boxShadowGreyBABABAtoBlackTwoFive};
    overflow: hidden;
    background: ${props => props.theme.grey212121ToWhite};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    
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

  /* Table headers - using theme variables */
  .table-header {
    color: ${props => props.theme.whiteToBlack};
    font-size: 0.4375rem;
    padding: 0.375rem 0.375rem 0.125rem;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.whiteOneToBlackOne};
    
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

  /* Status dots - keeping original colors as they're UI indicators */
  .status-dot {
    border-radius: 50%;
    
    &.yellow {
      width: 0.25rem;
      height: 0.25rem;
      background: ${props => props.theme.highlightColor}; /* Using saffron color */
    }
    
    &.blue {
      width: 0.25rem;
      height: 0.25rem;
      background: ${props => props.theme.blue477E96ToGreen00B39F};
    }
    
    &.green {
      width: 0.25rem;
      height: 0.25rem;
      background: ${props => props.theme.secondaryColor};
    }
    
    &.orange {
      width: 0.25rem;
      height: 0.25rem;
      background: ${props => props.theme.highlightColor};
    }
  }

  /* Table lines - using theme variables */
  .table-line {
    height: 0.125rem;
    background: ${props => props.theme.whiteThreeToBlackThree};
    border-radius: 0.125rem;
    
    &.w-4 { width: 1rem; }
    &.w-6 { width: 1.5rem; }
    &.w-7 { width: 1.75rem; }
    &.w-3 { width: 0.75rem; }
    &.w-5 { width: 1.25rem; }
  }

  /* Glass divider - using theme variables */
  .glass-divider {
    width: 100%;
    height: 1px;
    background: ${props => props.theme.whiteThreeToBlackThree};
  }

  /* Content section */
  .card-content {
    padding: 1rem;
  }

  /* Tags - using theme variables for consistent styling */
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
  background: ${props => props.theme.grey212121ToWhite};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  &.tag-primary {
    color: ${props => props.theme.highlightColor};
    border: 1px solid ${props => props.theme.highlightColor};
  }
  
  &.tag-secondary  {
    color: ${props => props.theme.blue477E96ToGreen00B39F};
    border: 1px solid ${props => props.theme.blue477E96ToGreen00B39F};
  }
  
  &.tag-tertiary {
    color: ${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.secondaryColor};
  }
  }

  /* Title - using theme variables */
  .card-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${props => props.theme.whiteToBlack};
    margin-bottom: 0.5rem;
  }

  /* Description - using theme variables */
  .card-description {
    color: ${props => props.theme.whiteSixToBlackSix};
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

  /* Action button - using theme variables */
  .action-btn {
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.secondaryColor};
    background: ${props => props.theme.grey212121ToWhite};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    
    &:hover {
      color: ${props => props.theme.keppelColor}; /* Always #00d3a9 - visible in both modes */
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadowGreen00D3A9ToBlackTwoFive};
      
      svg {
        transform: scale(1.1);
      }
    }
    
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.25rem;
      transition: all 0.3s;
    }
  }

  /* Status badge - using theme variables */
  .status-badge {
    color: ${props => props.theme.whiteSixToBlackSix};
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    border: 1px solid ${props => props.theme.whiteOneToBlackOne};
    background: ${props => props.theme.grey212121ToWhite};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  /* Post meta block - using theme variables */
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
      color: ${props => props.theme.whiteSixToBlackSix};
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

  /* Original Card styles for backward compatibility */
  .post-block {
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.grey212121ToWhite};
    box-shadow: 0px 2px 6px 0px ${props => props.theme.green00D3A9ToBlackTwo};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    animation: ${float} 6s ease-in-out infinite;

    &:hover {
      box-shadow: 0px 2px 15px 4px ${props => props.theme.whiteNineToBlackOne};
      
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
    color: ${props => props.theme.whiteToBlack};
  }

  .readmore-btn-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .readmore-btn, .external-link-btn {
    color: ${props => props.theme.whiteFourToBlackFour};
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
      color: ${props => props.theme.secondaryColor};
      
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
      height: 8rem;
    }
    
    .table-card {
      width: 3rem;
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