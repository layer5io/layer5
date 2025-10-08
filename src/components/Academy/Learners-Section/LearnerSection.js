import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { Link } from "gatsby";

const LearnerSectionWrapper = styled.section`  
  &.audience-section.learners-section {
    padding: 4rem 0;
    background: ${props => props.theme.body};
    
    .audience-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .audience-text {
      h2 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        
        .highlight {
          background: linear-gradient(135deg, #00b39f, #00d3a9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      
      p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      
      .audience-features {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
        
        li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;     
          &:before {
            content: "✓";
            position: absolute;
            left: 0;
            font-weight: bold;
          }
        }
      }
      
      .btn {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.3s ease;
        
        &.btn-primary {
          background: linear-gradient(135deg, #00b39f, #00d3a9);
          color: white;
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 179, 159, 0.3);
          }
        }
      }
    }
    
    .stats-container {
      h3 {
        margin-bottom: 1rem;
        text-align: center;
        font-size: 1.5rem;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        
        .stat-item {
          text-align: center;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: ${props => props.isDark ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 179, 159, 0.1)"};
          box-shadow: ${props => props.isDark ? "0 8px 32px rgba(0, 0, 0, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.1)"};
          transition: all 0.3s ease;
          
          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
          }
          
          .stat-label {
            display: block;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: color 0.3s ease;
          }
          
          
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.8; }
            100% { opacity: 1; }
          }
        }
      }
    }
    
    @media (max-width: 768px) {
      .audience-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .audience-text h2 {
        font-size: 2rem;
      }
    }
  }
`;

const LearnerSection = () => {
  return (
    <LearnerSectionWrapper className="audience-section learners-section fade-in">
      <div className="audience-content">
        <div className="audience-text">
          <h2>For Learners</h2>
          <p>Whether you're just starting with containers or deepening your microservices architecture knowledge, our comprehensive platform adapts to your learning style and pace.</p>
          <ul className="audience-features">
            <li>Progressive <a href="https://cloud.layer5.io/academy?contentType=learning-path" target="_blank" rel="noopener noreferrer">learning paths</a> tailored to your experience</li>
            <li>Interactive courses and hands-on labs</li>
            <li>Earn industry-recognized <a href="https://cloud.layer5.io/academy?contentType=certification" target="_blank" rel="noopener noreferrer">certifications</a></li>
            <li>Participate in coding <a href="https://cloud.layer5.io/academy?contentType=challenge" target="_blank" rel="noopener noreferrer">challenges</a></li>
            <li>
              Community mentorship through{" "}
              <Link to="/community/meshmates">MeshMate </Link> program
            </li>
            <li> <a href="https://docs.layer5.io/cloud/academy/platform-development/" target="_blank" rel="noopener noreferrer">Open source</a> contribution opportunities</li>
            <li>Industry expert guidance and best practices</li>
          </ul>
          <Button
            $primary
            title="Begin with Easy Academy Learner Guide"
            $external={true}
            $url="https://docs.layer5.io/cloud/academy/using-the-academy/"
          />
        </div>
        <div className="stats-container">
          <h3 style={{ marginBottom: "1rem", color: "var(--primary-color)", textAlign: "center" }}>Learning Community</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Difficulty Levels</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Community Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Cloud Native Focused</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Community Centric</span>
            </div>

          </div>
        </div>
      </div>
    </LearnerSectionWrapper>
  );
};

export default LearnerSection;