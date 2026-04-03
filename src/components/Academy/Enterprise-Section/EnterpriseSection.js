import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
// import { Link } from "gatsby";

const EnterpriseSectionWrapper = styled.section`
  
  &.audience-section.enterprise-section {
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
    
    
    .audience-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .demo-card {
      background: ${props => props.theme.grey212121ToWhite};
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 8px 32px ${props => props.theme.blackFourToWhiteFour};
      border: 1px solid rgba(0, 179, 159, 0.2);
      transition: all 0.4s ease;
      animation: slideInLeft 0.8s ease-out;
      
      &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 15px 40px rgba(0, 179, 159, 0.15);
        border-color: rgba(0, 179, 159, 0.3);
      }
      
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      .demo-header {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #f0f0f0;
      }
      
      .demo-content-alt {
        .progress-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          
          .progress-value {
            font-weight: bold;
          }
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
          
          .stat-item {
            text-align: center;
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid rgba(0, 179, 159, 0.1);
            
            .stat-number {
              display: block;
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 0.25rem;
            }
            
            .stat-label {
              display: block;
              font-size: 0.8rem;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          }
        }
      }
    }
    
    .audience-text {
      animation: slideInRight 0.8s ease-out 0.2s both;
      
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      h2 {
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        animation: fadeInUp 1s ease-out 0.4s both;
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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

      .button-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        
        @media (max-width: 600px) {
          justify-content: center;
        }
      }
    }
    
    @media (max-width: 768px) {
      .audience-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .demo-card {
        order: 2;
      }
      
      .audience-text {
        order: 1;
        text-align: center;
        
        h2 {
          font-size: 2rem;
        }
      }
    }
  }
`;

const EnterpriseSection = () => {
  return (
    <EnterpriseSectionWrapper className="audience-section enterprise-section fade-in">
      <div className="audience-content">
        <div className="demo-card">
          <div className="demo-header">Organizations using Layer5 Academy achieve:</div>
          <div className="demo-content-alt">
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="progress-item">
                <span className="progress-label">🚀 Platform Reliability</span>
                <span className="progress-value primary">99.9%</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">⚡ Deployment Velocity</span>
                <span className="progress-value primary">3x Faster</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">💰 Infrastructure Cost</span>
                <span className="progress-value primary">-35%</span>
              </div>
              <div className="progress-item">
                <span className="progress-label">🛡️ Security Compliance</span>
                <span className="progress-value primary">100%</span>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">60%</span>
                <span className="stat-label">Reduced Time-to-Market</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">90%</span>
                <span className="stat-label">Developer Productivity</span>
              </div>
            </div>
          </div>
        </div>
        <div className="audience-text">
          <h2>For Large Organizations</h2>
          {/* <p>
            Accelerate your enterprise platform transformation with structured cloud native training, customizable contents, and enterprise-grade analytics to maximize ROI and reduce risk.{" "}
            <Link to="/collections/resources/comparison/layer5-academy-vs-moocit">Compare Layer5 Academy with traditional platforms.</Link>
          </p> */}
          <p>Accelerate your enterprise platform transformation with structured cloud native training, customizable contents, and enterprise-grade analytics to maximize ROI and reduce risk. <a href="https://layer5.io/resources/academy/layer5-academy-vs-moocit" target="_blank" rel="noopener noreferrer">Compare Layer5 Academy with traditional platforms.</a></p>
          <ul className="audience-features">
            <li>Three comprehensive <a href="https://docs.layer5.io/cloud/academy/creating-content/" target="_blank" rel="noopener noreferrer">content library</a>: Learning Paths, Challenges, and Certifications for all skill levels and training scenarios</li>
            <li>Enterprise <a href="https://badges.layer5.io/" target="_blank" rel="noopener noreferrer">badge system</a> to showcase team achievements and drive motivation across your organization</li>
            <li>Advanced <a href="https://docs.layer5.io/cloud/academy/creating-content/instructor-console-guide/" target="_blank" rel="noopener noreferrer">instructor dashboard</a> with real-time progress tracking, skill assessment, and detailed analytics</li>
            <li>Flexible invitation system: Host public challenges, onboard new partners, and accelerate engineer hiring with structured assessments</li>
          </ul>

          <div className="button-container">
            <Button
              $primary
              title="View Pricing"
              $url="/pricing"
            />
            <Button
              $primary
              title="Schedule Enterprise Demo"
              $external={true}
              $url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3pmcApaDP4xd8hvG5fy8ylxuFxD3akIRc5vpWJ60q-HemQi80SFFAVftbiIsq9pgiA2o8yvU56?gv=true"
            />

          </div>
        </div>
      </div>
    </EnterpriseSectionWrapper>
  );
};

export default EnterpriseSection;