import React, { useState, useEffect } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import styled from "styled-components";

const StyledButton = styled.a`
  box-sizing: border-box;

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 170px;
  padding: 14px 16px;

  border: 0;
  border-radius: 5px;

  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  text-decoration: none;
  text-transform: capitalize;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.secondaryColor};

  position: relative;
  transition: 450ms all;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.activeColor};
    box-shadow: 0 2px 10px ${({ theme }) => theme.whiteFourToBlackFour};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 10px ${({ theme }) => theme.blackFourToWhiteFour};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.activeColor};
    outline-offset: 2px;
  }

  &:visited {
    color: ${({ theme }) => theme.white};
  }

  svg:first-child {
    margin-right: 8px;
    flex-shrink: 0;
  }

  .star-count {
    display: inline-flex;
    align-items: center;

    margin-left: 8px;
    padding: 2px 6px;

    border-radius: 3px;

    background: rgba(255, 255, 255, 0.18);

    font-size: 12px;
    font-weight: 600;
    line-height: 1;

    svg {
      margin-right: 4px;
    }
  }

  @media (max-width: 768px) {
    min-width: 150px;
    padding: 12px 14px;
    font-size: 15px;
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
      <FaGithub size={18} />
      <span>Star</span>
      {!loading && stars !== null && (
        <span className="star-count">
          <FaStar size={12} />
          {formatCount(stars)}
        </span>
      )}
      {loading && <span className="star-count">…</span>}
    </StyledButton>
  );
};

export default GitHubStarButton;
