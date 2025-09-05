import React, { useState, useEffect, useRef } from "react";
import PictureSlider from "./picture-slider";
import Button from "../../../reusecore/Button";
import Labs from "../images/labs.png";
import Badges from "../images/badges.png";
import Progress from "../images/progress.png";
import styled from "styled-components";
import FAQ from "../../../sections/General/Faq";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";
import Container from "../../../reusecore/Layout/Container";

const Card = ({ children, className = "", ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

const AcademyFeaturesWrapper = styled.div`
  font-family: "Qanelas Soft", "Qanelas Soft", sans-serif;
  
  .academy-features {
    padding: 8rem 0;
    background: ${props => props.isDark ? "#0a0a0a" : "#ffffff"};
    color: ${props => props.isDark ? "#ffffff" : "#333333"};
    position: relative;
    transition: all 0.3s ease;
  }

  .academy-features::before {
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

  .container {
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .header {
    text-align: center;
    margin-bottom: 6rem;
  }

  .header h2 {
    font-size: 4rem;
    font-weight: 800;
    margin: 2rem 0 1.5rem;
    background: ${props => props.isDark
      ? "linear-gradient(135deg, #ffffff 0%, #00B39F 50%, #00D3A9 100%)"
      : "linear-gradient(135deg, #333333 0%, #00B39F 50%, #00D3A9 100%)"
    };
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    animation: gradientShift 3s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .header p {
    font-size: 1.3rem;
    opacity: 0.8;
    max-width: 700px;
    margin: 0 auto;
    color: ${props => props.isDark ? "#cccccc" : "#666666"};
  }

  .section {
    margin-bottom: 8rem;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-row {
    display: flex;
    align-items: center;
    gap: 4rem;
    min-height: 500px;
  }

  .content {
    flex: 0 0 45%;
    max-width: 500px;
  }

  .visual {
    flex: 0 0 55%;
    display: flex;
    justify-content: center;
  }

  .content h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem 0 1.5rem;
    line-height: 1.2;
    color: ${props => props.isDark ? "#ffffff" : "#333333"};
  }

  .content p {
    font-size: 1.1rem;
    line-height: 1.7;
    opacity: 0.8;
    margin-bottom: 2rem;
    color: ${props => props.isDark ? "#cccccc" : "#666666"};
  }

  .features {
    margin-bottom: 2.5rem;
  }

  .feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .feature span:last-child {
    color: ${props => props.isDark ? "#e0e0e0" : "#555555"};
  }

  .check {
    color: #00B39F;
    font-weight: 700;
    width: 20px;
    height: 20px;
    background: rgba(0,179,159,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  .image-container {
    width: 100%;
    max-width: 700px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: ${props => props.isDark
      ? "0 12px 40px rgba(0,0,0,0.4)"
      : "0 12px 40px rgba(0,0,0,0.15)"
    };
    border: 1px solid ${props => props.isDark ? "#333" : "#e6e6e6"};
    transition: all 0.4s ease;
    position: relative;
    background: ${props => props.isDark ? "#1a1a1a" : "#ffffff"};
  }

  .image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    z-index: 2;
  }

  .image-container:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.isDark
      ? "0 20px 60px rgba(0,179,159,0.2)"
      : "0 20px 60px rgba(0,179,159,0.15)"
    };
  }

  .image {
    width: 100%;
    height: auto;
    min-height: 350px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  .screenshot {
    display: block;
    box-shadow: var(--box-shadow-primary) !important;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    background: #868e96
        url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244%22%20height%3D%2212%22%20viewBox%3D%220%200%2044%2012%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3Ccircle%20cx%3D%2222%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3Ccircle%20cx%3D%2238%22%20cy%3D%226%22%20r%3D%224%22%20fill%3D%22%23eee%22%20%2F%3E%3C%2Fsvg%3E")
        4px 4px no-repeat;
    padding: 20px 0 0 0;
    position: relative;
    width: 100%;
  }

  .badge {
    display: inline-block;
    padding: 0.6rem 1.8rem;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }

  .badge.primary {
    background: linear-gradient(135deg, #00B39F, #00D3A9);
    color: white;
  }

  .badge.category {
    background: rgba(0,179,159,0.1);
    color: #00B39F;
    border: 1px solid rgba(0,179,159,0.3);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
  }

  .btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    font-family: inherit;
  }

  .btn.primary {
    background: linear-gradient(135deg, #00B39F, #00D3A9);
    color: white;
    box-shadow: 0 4px 16px rgba(0, 179, 159, 0.3);
  }

  .btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 179, 159, 0.4);
  }

  .btn.outline {
    background: transparent;
    color: ${props => props.isDark ? "#ffffff" : "#333333"};
    border: 2px solid ${props => props.isDark ? "rgba(255,255,255,0.3)" : "rgba(51,51,51,0.3)"};
  }

  .btn.outline:hover {
    background: ${props => props.isDark ? "rgba(255,255,255,0.1)" : "rgba(51,51,51,0.1)"};
    border-color: ${props => props.isDark ? "rgba(255,255,255,0.6)" : "rgba(51,51,51,0.6)"};
  }

  .btn.large {
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
  }

  .cta {
    margin-top: 6rem;
  }

  .cta-card {
    background: linear-gradient(135deg, #00B39F 0%, #00D3A9 100%);
    color: white;
    border-radius: 24px;
    padding: 4rem 2rem;
    text-align: center;
    border: none;
    position: relative;
    overflow: hidden;
  }

  .cta-card h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .cta-card p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2.5rem;
  }

  .cta-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card {
    border-radius: 16px;
    box-shadow: ${props => props.isDark
      ? "0 4px 20px rgba(0,0,0,0.4)"
      : "0 4px 20px rgba(0,0,0,0.1)"
    };
    background: ${props => props.isDark ? "#1a1a1a" : "#ffffff"};
    border: 1px solid ${props => props.isDark ? "#333" : "#e6e6e6"};
    transition: all 0.3s ease;
  }

  @media (max-width: 968px) {
    .section-row {
      flex-direction: column;
      gap: 3rem;
      text-align: center;
    }

    .content,
    .visual {
      flex: none;
      width: 100%;
    }

    /* Always show content first, visual second */
    .content {
      order: 1;
    }

    .visual {
      order: 2;
    }

    .image-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .header h2 {
      font-size: 2.5rem;
    }

    .content h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    .academy-features {
      padding: 6rem 0;
    }

    .container {
      padding: 0 1rem;
    }

    .header h2 {
      font-size: 2rem;
    }

    .header p {
      font-size: 1.1rem;
    }

    .content h3 {
      font-size: 1.8rem;
    }

    .content p {
      font-size: 1rem;
    }

    .section-row {
      gap: 2rem;
    }

    .image {
      min-height: 280px;
    }

    .cta-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
`;

const Layer5AcademyFeatures = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const { isDark } = useStyledDarkMode();

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  const sections = [
    {
      title: "CNCF Structured Learning Paths",
      description: "Comprehensive CNCF-aligned learning paths designed for different skill levels. Master Kubernetes, service mesh, and cloud native technologies through hands-on experience.",
      features: [
        "CNCF aligned curriculum",
        "Beginner to advanced levels",
        "Hands-on labs included",
        "Industry-expert curated"
      ],
      hasSlider: true,
    },
    {
      title: "Hands-on Labs and Real-world Challenges",
      description: "Interactive challenges that simulate real-world scenarios. Practice with live Kubernetes clusters and get instant feedback on your solutions.",
      features: [
        "Self-paced learning modules",
        "Best practices and patterns",
        "Beginner to advanced pathways",
        "Scenario-based challenges"
      ],
      image: Labs,
      imageAlt: "Interactive Labs Interface",
    },
    {
      title: "Earn Certifications and Badges",
      description: "Validate your expertise with badges and certifications. Build credibility and advance your career in cloud native technologies.",
      features: [
        "Digital badges",
        "Skill validation",
        "Verifiable credentials",
        "Career advancement"
      ],
      image: Badges,
      imageAlt: "Digital Badges Collection",
    },
    {
      category: "Progress Tracking",
      title: "Track Your Learning Journey",
      description: "Monitor your progress through learning paths, track completed labs, and see your skill development over time.",
      features: [
        "Learning path progress",
        "Completed labs tracking",
        "Skill development metrics",
        "Achievement milestones"
      ],
      image: Progress,
      imageAlt: "Progress Tracking Dashboard",
      actionText: "View Progress",
      actionLink: "https://cloud.layer5.io/academy/profile"
    }
  ];

  return (
    <AcademyFeaturesWrapper isDark={isDark}>
      <div className="academy-features">
        <Container>
          <div className="header">
            <h2>Master Cloud Native Technologies</h2>
            <p>Learn through structured paths, practice with hands-on labs, earn badges, and track your progress.</p>
          </div>

          <div className="sections">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={el => sectionRefs.current[index] = el}
                className={`section ${visibleSections.has(index) ? "visible" : ""} ${index % 2 === 0 ? "layout-left" : "layout-right"}`}
              >
                <div className="section-row">
                  {index % 2 === 0 ? (
                    <>
                      <div className="content">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                        <div className="features">
                          {section.features.map((feature, idx) => (
                            <div key={idx} className="feature">
                              <span className="check">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="visual">
                        {section.hasSlider ? (
                          <PictureSlider maxImages={4} isDark={isDark}/>
                        ) : (
                          <div className="image-container">
                            <img
                              src={section.image}
                              alt={section.imageAlt}
                              className="image screenshot"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="visual">
                        {section.hasSlider ? (
                          <PictureSlider maxImages={4} />
                        ) : (
                          <div className="image-container">
                            <img
                              src={section.image}
                              alt={section.imageAlt}
                              className="image screenshot"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                      <div className="content">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                        <div className="features">
                          {section.features.map((feature, idx) => (
                            <div key={idx} className="feature">
                              <span className="check">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="cta">
            <Card className="cta-card">
              <h3>Ready to Start Learning?</h3>
              <p>Join the cloud native community and advance your skills</p>
              <div className="cta-actions">
                <Button $primary size="large" $url="https://cloud.layer5.io/academy" $external>
                Join Now
                </Button>
                <Button variant="outline" size="large" $url="https://docs.layer5.io/cloud/academy" $external>
                Explore Guides
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    </AcademyFeaturesWrapper>
  );
};

export default Layer5AcademyFeatures;