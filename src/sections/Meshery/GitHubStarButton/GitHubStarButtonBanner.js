import React, { useState, useEffect } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import styled from "styled-components";

const BannerButton = styled.a`
  box-sizing: border-box;
  position: relative;
  isolation: isolate;

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 200px;
  padding: 12px 30px;

  color: ${({ theme }) => theme.bannerText || "#f0f6fc"};

  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2;

  text-decoration: none;
  text-transform: none;

  transition: 250ms ease;

  /* --- Hexagonal banner shape lives on a pseudo-element so clip-path never clips the focus ring --- */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    background: ${({ theme }) => theme.bannerBg || "#0d1117"};
    border: 1px solid ${({ theme }) => theme.bannerAccent || "#2bb77c"};
    clip-path: polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%);

    transition: inherit;
  }

  &:hover::before {
    border-color: ${({ theme }) => theme.bannerAccentHover || "#3fd9a0"};
    background: ${({ theme }) => theme.bannerBgHover || "#131a22"};
  }

  &:active {
    transform: scale(0.98);
  }

  /* Retain visible focus indicator for accessibility */
  &:focus {
    outline: 2px solid
      ${({ theme }) => theme.activeColor || theme.bannerAccent || "#2bb77c"};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid
      ${({ theme }) => theme.activeColor || theme.bannerAccent || "#2bb77c"};
    outline-offset: 3px;
  }

  &:visited {
    color: ${({ theme }) => theme.bannerText || "#f0f6fc"};
  }

  .banner-action,
  .banner-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .banner-count {
    padding-left: 16px;
    margin-left: 16px;
    border-left: 1px dashed ${({ theme }) => theme.bannerAccent || "#2bb77c"};
    /* Fixed min-width reserves space to prevent Cumulative Layout Shift (CLS) */
    min-width: 55px;
  }

  .banner-icon {
    flex-shrink: 0;
    color: ${({ theme }) => theme.bannerAccent || "#2bb77c"};
  }

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 12px 24px;
    font-size: 14px;

    .banner-count {
      padding-left: 12px;
      margin-left: 12px;
      min-width: 48px;
    }
  }
`;

const GitHubStarButtonBanner = ({
  repo = "meshery/meshery",
  url,
  className,
  ...props
}) => {
  const [stars, setStars] = useState(null);
  const [loading, setLoading] = useState(true);

  // Derive URL dynamically from repo to avoid mismatches
  const targetUrl = url || `https://github.com/${repo}`;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const cacheKey = `gh_stars_${repo.replace("/", "_")}`;

    // Reset loading state if repo prop changes
    setStars(null);
    setLoading(true);

    const checkCacheAndFetch = async () => {
      let cached = null;
      try {
        cached =
          typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;
      } catch {
        cached = null;
      }

      if (cached) {
        try {
          const { count, timestamp } = JSON.parse(cached);
          const age = Date.now() - timestamp;
          if (typeof count === "number" && age >= 0 && age < 3600000) {
            if (isMounted) {
              setStars(count);
              setLoading(false);
            }
            return;
          }
        } catch {
          try {
            localStorage.removeItem(cacheKey);
          } catch {
            // Ignore storage errors
          }
        }
      }

      try {
        const res = await fetch(`https://api.github.com/repos/${repo}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();

        if (typeof data.stargazers_count === "number") {
          const count = data.stargazers_count;
          try {
            localStorage.setItem(
              cacheKey,
              JSON.stringify({ count, timestamp: Date.now() }),
            );
          } catch {
            // Ignore storage errors
          }
          if (isMounted) {
            setStars(count);
          }
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          // Silent catch for network errors
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkCacheAndFetch();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [repo]);

  const formatCount = (num) => {
    if (typeof num !== "number") return "Star";
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <BannerButton
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Star ${repo} on GitHub`}
      className={className}
      {...props}
    >
      <span className="banner-action">
        <FaGithub className="banner-icon" size={18} />
        Star on GitHub
      </span>
      <span className="banner-count">
        <FaStar className="banner-icon" size={14} />
        {loading ? "…" : stars !== null ? formatCount(stars) : "Star"}
      </span>
    </BannerButton>
  );
};

export default GitHubStarButtonBanner;
