import React, { useState, useEffect } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import styled from "styled-components";

const StyledButton = styled.a`
  box-sizing: border-box;

  cursor: pointer;
  display: inline-flex;
  align-items: stretch;
  justify-content: center;

  min-width: 170px;

  border: 0;
  border-radius: 6px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  text-decoration: none;
  text-transform: none;

  position: relative;
  transition: 250ms ease;

  /* --- Core segment: GitHub-style outlined button, not a filled CTA --- */
  .star-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 11px 16px;

    background: ${({ theme }) => theme.githubButtonBg || "#ffffff"};
    color: ${({ theme }) => theme.githubButtonText || "#24292f"};
    border: 1px solid ${({ theme }) => theme.githubButtonBorder || "#24292f"};
    border-right: none;

    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    svg:first-child {
      flex-shrink: 0;
      fill: currentColor;
    }
  }

  /* --- Count segment: separated, badge-like, GitHub convention --- */
  .star-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    padding: 11px 14px;
    min-width: 48px;

    background: ${({ theme }) => theme.githubCountBg || "#f6f8fa"};
    color: ${({ theme }) => theme.githubButtonText || "#24292f"};
    border: 1px solid ${({ theme }) => theme.githubButtonBorder || "#24292f"};

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    font-size: 14px;
    font-weight: 600;
    line-height: 1;

    svg {
      flex-shrink: 0;
      fill: currentColor;
    }
  }

  &:hover {
    .star-action {
      background: ${({ theme }) => theme.githubButtonHoverBg || "#f3f4f6"};
    }
    .star-count {
      background: ${({ theme }) => theme.githubCountHoverBg || "#eaeef2"};
    }
    // box-shadow: 0 1px 4px rgba(27, 31, 36, 0.15);
    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.activeColor};
    outline-offset: 2px;
  }

  &:visited {
    color: ${({ theme }) => theme.githubButtonText || "#24292f"};
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 15px;

    .star-action,
    .star-count {
      padding: 12px 12px;
    }
  }
`;

const GitHubStarButton = ({
  repo = "meshery/meshery",
  url = "https://github.com/meshery/meshery",
  className,
  ...props
}) => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheKey = `gh_stars_${repo.replace("/", "_")}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      try {
        const { count, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 3600000) {
          setStars(count);
          setLoading(false);
          return;
        }
      } catch {
        localStorage.removeItem(cacheKey);
      }
    }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          const count = data.stargazers_count;
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ count, timestamp: Date.now() }),
          );
          setStars(count);
        }
      })
      .catch(() => {
        // silent fail
      })
      .finally(() => setLoading(false));
  }, [repo]);

  const formatCount = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(1) + "k";
    return num;
  };

  return (
    <StyledButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Star ${repo} on GitHub`}
      className={className}
      {...props}
    >
      <span className="star-action">
        <FaGithub size={18} />
        <span>Star</span>
      </span>
      <span className="star-count">
        <FaStar size={12} />
        {loading ? "…" : stars !== null ? formatCount(stars) : "Star"}
      </span>
    </StyledButton>
  );
};

export default GitHubStarButton;
