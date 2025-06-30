import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import Image from "../image";
import { AnimatedCardWrapper } from "./AnimatedCard.style";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const AnimatedCard = ({ 
  frontmatter = {}, // Default to empty object
  fields = null, // Allow null
  showVisualizer = false,
  showSchemaPreview = false,
  useOriginalLayout = false
}) => {
  const { isDark } = useStyledDarkMode();
  const canvasRef = useRef(null);

  // Automatically disable visualizer in light mode for better visual contrast
  const shouldShowVisualizer = isDark && showVisualizer;

  // Wave visualizer logic (only if shouldShowVisualizer is true)
  useEffect(() => {
    if (!shouldShowVisualizer || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationId;
    
    let waveData = Array(8).fill(0).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.15 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) {
          data.targetValue = Math.random() * 0.7 + 0.1;
        }
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      // Theme-aware background
      ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 8; i++) {
        const freq = waveData[i].value * 7.0;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 2) {
          const normalizedX = (x / canvas.width) * 2 - 1;
          let px = normalizedX + i * 0.04 + freq * 0.03;
          let py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const canvasY = (py + 1) * canvas.height / 2;

          if (x === 0) {
            ctx.moveTo(x, canvasY);
          } else {
            ctx.lineTo(x, canvasY);
          }
        }

        const intensity = Math.min(1, freq * 0.3);
        
        // Theme-aware wave colors
        if (isDark) {
          const r = Math.min(255, 200 + intensity * 55);
          const g = Math.min(255, 230 + intensity * 25);
          const b = 200;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;
        } else {
          const r = Math.min(255, 100 + intensity * 55);
          const g = Math.min(255, 150 + intensity * 25);
          const b = 255;
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
        }
        
        ctx.lineWidth = 0.5 + (i * 0.2);
        ctx.stroke();
      }
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldShowVisualizer, isDark]);

  // Safe prop access with fallbacks
  const cardTitle = frontmatter?.title || "Default Title";
  const cardDescription = frontmatter?.description || "Default description";
  const hasSlug = fields && fields.slug;
  const hasExternalUrl = frontmatter && frontmatter.eurl;
  const hasThumbnail = frontmatter && frontmatter.thumbnail;
  const hasDate = frontmatter && frontmatter.date;
  const hasAuthor = frontmatter && frontmatter.author;
  const hasType = frontmatter && frontmatter.type;

  // If using original layout, render like the existing Card but with animations
  if (useOriginalLayout) {
    return (
      <AnimatedCardWrapper fixed={!!frontmatter?.abstract} $isDark={isDark}>
        {shouldShowVisualizer && (
          <canvas 
            ref={canvasRef}
            className="wave-visualizer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              pointerEvents: 'none'
            }}
          />
        )}
        
        <div className="post-block">
          {hasThumbnail && (
            <div className="post-thumb-block">
              <Image
                {...((isDark && frontmatter.darkthumbnail && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL)
                  ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
                imgStyle={{ objectFit: "contain" }}
                alt={cardTitle}
              />
            </div>
          )}
          <div className="post-content-block">
            <h2 className="post-title">
              {cardTitle}
            </h2>
            <div className="post-meta-block">
              {hasDate && hasAuthor && (
                <>
                  <p>{frontmatter.date}</p>
                  <p className="author">{frontmatter.author}</p>
                </>
              )}
              {hasDate && !hasAuthor && (
                <p>{frontmatter.date}</p>
              )}
              {!hasDate && hasAuthor && (
                <p className="author">{frontmatter.author}</p>
              )}
              {!hasAuthor && hasType && (
                <p className="type">{frontmatter.type}</p>
              )}
            </div>
            <div className="readmore-btn-wrapper">
              {hasSlug && hasExternalUrl && (
                <>
                  <Link className="readmore-btn" to={fields.slug}>
                    see more <IoIosArrowRoundForward />
                  </Link>
                  <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                    <BiLinkExternal />
                  </a>
                </>
              )}
              {hasSlug && !hasExternalUrl && (
                <Link className="readmore-btn" to={fields.slug}>
                  see more <IoIosArrowRoundForward />
                </Link>
              )}
              {!hasSlug && hasExternalUrl && (
                <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              )}
            </div>
          </div>
        </div>
      </AnimatedCardWrapper>
    );
  }

  // New HTML-based design
  return (
    <AnimatedCardWrapper $isDark={isDark}>
      {shouldShowVisualizer && (
        <canvas 
          ref={canvasRef}
          className="wave-visualizer"
        />
      )}
      
      <div className="animated-card-content">
        {/* Schema Preview OR regular thumbnail */}
        {showSchemaPreview ? (
          <div className="preview-section">
            <div className="preview-container">
              {/* Simplified schema preview */}
              <div className="grid-background">
                <div className="animated-grid"></div>
              </div>
              
              {/* Database connections SVG */}
              <svg className="connections-svg" viewBox="0 0 320 180">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: "#4f46e5", stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: "#00b39f", stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: "#8b5cf6", stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none">
                  <path className="connector" d="M75,40 L140,60 L140,90 L200,90" />
                  <path className="connector" d="M225,90 L240,90 L240,60 L240,60" />
                  <path className="connector" d="M140,90 L140,120 L220,120" />
                  <path className="connector" d="M225,120 L240,120 L240,150 L220,150" />
                  
                  <circle cx="75" cy="40" r="3" fill="#4f46e5"/>
                  <circle cx="225" cy="90" r="3" fill="#3b82f6"/>
                  <circle cx="245" cy="60" r="3" fill="#8b5cf6"/>
                  <circle cx="225" cy="120" r="3" fill="#f59e0b"/>
                  <circle cx="225" cy="150" r="3" fill="#ef4444"/>
                </g>
              </svg>
              
              {/* Floating table cards */}
              <div className="database-tables">
                <div className="table-card table-card-1">
                  <div className="table-header designs">designs</div>
                  <div className="table-content">
                    <div className="table-row">
                      <div className="status-dot yellow"></div>
                      <div className="table-line w-6"></div>
                    </div>
                    <div className="table-line w-4"></div>
                    <div className="table-line w-7"></div>
                  </div>
                </div>
                
                <div className="table-card table-card-2">
                  <div className="table-header relationships">relationships</div>
                  <div className="table-content">
                    <div className="table-row">
                      <div className="status-dot blue"></div>
                      <div className="table-line w-6"></div>
                    </div>
                    <div className="table-line w-3"></div>
                    <div className="table-line w-5"></div>
                  </div>
                </div>
                
                <div className="table-card table-card-3">
                  <div className="table-header models">models</div>
                  <div className="table-content">
                    <div className="table-row">
                      <div className="status-dot green"></div>
                      <div className="table-line w-6"></div>
                    </div>
                    <div className="table-line w-6"></div>
                    <div className="table-line w-4"></div>
                  </div>
                </div>
                
                <div className="table-card table-card-4">
                  <div className="table-header components">components</div>
                  <div className="table-content">
                    <div className="table-row">
                      <div className="status-dot orange"></div>
                      <div className="table-line w-6"></div>
                    </div>
                    <div className="table-line w-3"></div>
                    <div className="table-line w-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          hasThumbnail && (
            <div className="post-thumb-block">
              <Image
                {...((isDark && frontmatter.darkthumbnail && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL)
                  ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
                imgStyle={{ objectFit: "contain" }}
                alt={cardTitle}
              />
            </div>
          )
        )}
        
        <div className="glass-divider"></div>
        
        <div className="card-content">
          {/* Dynamic tags (from frontmatter or defaults) */}
          <div className="tags-container">
            {(frontmatter?.tags || ["AWS", "Azure", "GCP"]).map((tag, index) => (
              <span key={index} className={`tag tag-${tag.toLowerCase()}`}>
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-description">{cardDescription}</p>
          
          {/* Safe meta block */}
          {(hasDate || hasAuthor || hasType) && (
            <div className="post-meta-block">
              {hasDate && hasAuthor && (
                <>
                  <p>{frontmatter.date}</p>
                  <p className="author">{frontmatter.author}</p>
                </>
              )}
              {hasDate && !hasAuthor && (
                <p>{frontmatter.date}</p>
              )}
              {!hasDate && hasAuthor && (
                <p className="author">{frontmatter.author}</p>
              )}
              {!hasAuthor && hasType && (
                <p className="type">{frontmatter.type}</p>
              )}
            </div>
          )}
          
          {/* Safe action buttons */}
          <div className="card-actions">
            {hasSlug && hasExternalUrl && (
              <>
                <Link className="action-btn" to={fields.slug}>
                  Manage <IoIosArrowRoundForward />
                </Link>
                <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              </>
            )}
            {hasSlug && !hasExternalUrl && (
              <Link className="action-btn" to={fields.slug}>
                see more <IoIosArrowRoundForward />
              </Link>
            )}
            {!hasSlug && hasExternalUrl && (
              <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                <BiLinkExternal />
              </a>
            )}
            {!hasSlug && !hasExternalUrl && (
              <span className="action-btn" style={{ cursor: 'default' }}>
                Learn More <IoIosArrowRoundForward />
              </span>
            )}
            <span className="status-badge">Live</span>
          </div>
        </div>
      </div>
    </AnimatedCardWrapper>
  );
};

export default AnimatedCard;