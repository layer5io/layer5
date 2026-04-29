import React, { useEffect, useState, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../../reusecore/Button";
import PaginationWrapper from "./pagination.style";

const STABLE_ROUTES = [
  // Getting Started
  { link: "/projects/sistent/getting-started/about", text: "About" },
  { link: "/projects/sistent/getting-started/installation", text: "Installation" },
  { link: "/projects/sistent/getting-started/usage", text: "Usage" },
  { link: "/projects/sistent/getting-started/tokens", text: "Tokens" },

  // Identity
  { link: "/projects/sistent/identity/color", text: "Colors" },
  { link: "/projects/sistent/identity/color/guidance", text: "Colors" },
  { link: "/projects/sistent/identity/color/code", text: "Colors" },
  { link: "/projects/sistent/identity/spacing", text: "Spacing" },
  { link: "/projects/sistent/identity/spacing/guidance", text: "Spacing" },
  { link: "/projects/sistent/identity/spacing/code", text: "Spacing" },
  { link: "/projects/sistent/identity/typography", text: "Typography" },
  { link: "/projects/sistent/identity/typography/guidance", text: "Typography" },
  { link: "/projects/sistent/identity/typography/code", text: "Typography" },
];

const PAGE_TYPE_ORDER = {
  overview: 1,
  guidance: 2,
  code: 3,
};

const SistentPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const data = useStaticQuery(graphql`
    query SistentPaginationNav {
      allMdx(
        filter: {
          fields: { collection: { eq: "sistent" } }
        }
      ) {
        nodes {
          frontmatter {
            name
            component
            published
          }
          fields {
            slug
            pageType
          }
        }
      }
    }
  `);

  // Published components based on overview pages
  const publishedComponents = useMemo(() => {
    const published = new Set();
    data.allMdx.nodes.forEach((node) => {
      if (node.fields.pageType === "overview" && node.frontmatter.published === true) {
        published.add(node.frontmatter.component);
      }
    });
    return published;
  }, [data.allMdx.nodes]);

  // Map, filter, and sort dynamic routes
  const dynamicRoutes = useMemo(() => {
    return data.allMdx.nodes
      .map((node) => ({
        componentSlug: node.frontmatter.component,
        text: node.frontmatter.name || node.frontmatter.component,
        link: node.fields.slug,
        pageType: node.fields.pageType,
      }))
      .filter((node) => publishedComponents.has(node.componentSlug))
      .sort((a, b) => {
        if (a.componentSlug !== b.componentSlug) {
          return (a.componentSlug || "").localeCompare(b.componentSlug || "");
        }
        return (
          (PAGE_TYPE_ORDER[a.pageType] || 99) - (PAGE_TYPE_ORDER[b.pageType] || 99)
        );
      });
  }, [data.allMdx.nodes, publishedComponents]);

  // Combine and de-duplicate routes by link
  const fullContentArray = useMemo(() => {
    const combined = [...STABLE_ROUTES, ...dynamicRoutes];
    const seenLinks = new Set();
    return combined.filter((route) => {
      if (seenLinks.has(route.link)) return false;
      seenLinks.add(route.link);
      return true;
    });
  }, [dynamicRoutes]);

  useEffect(() => {
    const path = window.location.pathname;
    // Handle trailing slashes
    const cleanPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
    const index = fullContentArray.findIndex((x) => x.link === cleanPath);
    setCurrentPage(index);
  }, [fullContentArray]);

  return (
    <PaginationWrapper>
      {currentPage > 0 ? (
        <Button $secondary $url={fullContentArray[currentPage - 1]?.link}>
          &larr; Previous
        </Button>
      ) : null}

      {currentPage !== -1 && currentPage < fullContentArray.length - 1 ? (
        <Button $primary $url={fullContentArray[currentPage + 1]?.link}>
          Next &rarr;
        </Button>
      ) : null}
    </PaginationWrapper>
  );
};

export default SistentPagination;
