import React, { useState } from "react";
import styled from "styled-components";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import { featuresData, sectionContent } from "./OutlineFeaturesData";

const OutlinedFeaturesWrapper = styled.div`
  width: 100%;
  background: ${props => props.isDark ? "#0a0a0a" : "#ffffff"};
  transition: all 0.3s ease;
  padding: 3rem 0;
  font-family: "Qanelas Soft", sans-serif;
  margin: 0;
  position: relative;
  
  .features-container {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin: 0 auto;
  }

  .features-container::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${props => props.isDark
  ? `radial-gradient(circle at 25% 25%, #00B39F08 0%, transparent 60%),
         radial-gradient(circle at 75% 75%, #00B39F05 0%, transparent 60%)`
  : `radial-gradient(circle at 25% 25%, #00B39F05 0%, transparent 60%),
         radial-gradient(circle at 75% 75%, #00B39F03 0%, transparent 60%)`
    };
  }
  
  .project__block__wrap {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    
    &:before {
      position: absolute;
      right: -2rem;
      bottom: 0;
    }
  }

  .project__block__inner {
    display: flex;
    flex-direction: column;
    background: ${props => props.isDark ? "#2a2a2a" : "#ffffff"};
    box-shadow: 0px 0px ${props => props.isDark ? "20px rgba(0,0,0,0.3)" : "20px rgba(0,0,0,0.1)"};
    transition: all 0.5s ease;
    padding: 6% 5%;
    height: 20rem;
    border-radius: 16px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 3% 0%;
    border: 1px solid ${props => props.isDark ? "#333" : "#e6e6e6"};

    &:hover {
      box-shadow: 0px 0px 30px ${props => props.isDark ? "rgba(0, 211, 169, 0.3)" : "rgba(0, 211, 169, 0.2)"};
      transform: translateY(-4px);
      border-color: #00D3A9;
    }

    h3 {
      margin: auto;
      font-weight: 700;
      font-size: 1.6rem;
      color: #00D3A9;
      text-align: center;
      justify-content: center;
      margin-bottom: 0.7rem;
    }

    p {
      font-weight: 400;
      color: ${props => props.isDark ? "#cccccc" : "#666666"};
      margin: auto;
      transition: all 0.5s ease;
      line-height: 1.6;
      font-size: 1.05rem;
      opacity: 0.9;
      margin-top: 0.7rem;
    }

    .feature-icon-container {
      margin-bottom: 1.2rem;
      padding: 0.5rem 0;
    }

    .feature-icon {
      width: 70px;
      height: 70px;
      color: #00D3A9;
      transition: all 0.3s ease;
      
      /* Ensure SVG inherits color */
      svg {
        color: inherit;
      }
    }

    &:hover .feature-icon {
      transform: scale(1.1);
      color: #00F5C4;
    }
  }

  .darken {
    background: ${props => props.isDark ? "#1e1e1e" : "#f8f8f8"};
    opacity: 0.7;
    transition: all 0.5s ease;
  }

  .col {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding: 0 15px;
    
    @media (max-width: 992px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    
    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    width: 100%;

    h2 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      color: ${props => props.isDark ? "#ffffff" : "#333333"};
    }

    p {
      font-size: 1.3rem;
      opacity: 0.8;
      color: ${props => props.isDark ? "#cccccc" : "#666666"};
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
    
    .section-header {
      margin-bottom: 2rem;
      
      h2 {
        font-size: 2.2rem;
      }
      
      p {
        font-size: 1.1rem;
      }
    }
    
    .project__block__inner {
      height: auto;
      padding: 2rem 1.5rem;
      margin: 2% 0%;
      
      h3 {
        font-size: 1.4rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
    
    .section-header {
      margin-bottom: 1.5rem;
      
      h2 {
        font-size: 1.9rem;
      }
      
      p {
        font-size: 1rem;
      }
    }
    
    .project__block__inner {
      padding: 1.5rem 1rem;
      margin: 1.5% 0%;
      
      h3 {
        font-size: 1.3rem;
      }
      
      p {
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }
  }
`;

const OutlinedFeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const { isDark } = useStyledDarkMode();

  const handleMouseOver = (index) => {
    setIsHovered(true);
    setHoveredFeature(`Feature${index}`);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setHoveredFeature("");
  };

  return (
    <OutlinedFeaturesWrapper isDark={isDark}>
      <div className="features-container">
        <div className="project__block__wrap">
          <div className="section-header">
            <h2>{sectionContent.title}</h2>
            <p>{sectionContent.subtitle}</p>
          </div>

          <div className="row">
            {featuresData.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="col">
                  <div
                    className={
                      (isHovered && hoveredFeature !== `Feature${index + 1}`)
                        ? "project__block__inner darken"
                        : "project__block__inner"
                    }
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="feature-icon-container">
                      <IconComponent className="feature-icon" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </OutlinedFeaturesWrapper>
  );
};

export default OutlinedFeaturesSection;