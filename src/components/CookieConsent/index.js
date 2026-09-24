import React, { useEffect, useState } from "react";

import { Link } from "gatsby";
import Button from "../../reusecore/Button";
import styled from "styled-components";

// Rendered from `src/components/layout.js`, so this component is part of every
// page's shared bundle. It is built on styled-components (the site's styling
// system) rather than a component library to keep that bundle small.
const ConsentBar = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1400;
  width: max-content;
  max-width: calc(100% - 3rem);

  .paper-container {
    background-color: ${(props) => props.theme.elevationColor};
    color: ${(props) => props.theme.text};
    box-shadow:
      0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    padding: 0.75rem;
    max-width: 32.5rem;
  }

  .consent-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }

  .consent-text {
    flex: 1;
    margin-bottom: 0;
    font-size: 0.875rem;
    line-height: 1.43;
  }

  .consent-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    flex-shrink: 0;
  }

  @media screen and (max-width: 37.5rem) {
    .consent-row {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

const STORAGE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const timer = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, "declined");
      setOpen(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [open]);

  const handleResponse = (response) => {
    localStorage.setItem(STORAGE_KEY, response);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <ConsentBar role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="paper-container">
        <div className="consent-row">
          <p className="consent-text">
            We use cookies to enhance your browsing experience. By clicking
            &quot;Accept&quot;, you consent to our use of cookies. Read more in
            our{" "}
            <Link
              to="/company/legal/privacy"
              target="_self"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>{" "}
            or visit our{" "}
            <Link to="/company/legal" target="_self" rel="noopener noreferrer">
              Trust Center
            </Link>
            .
          </p>

          <div className="consent-actions">
            <Button
              $outlined
              onClick={() => handleResponse("declined")}
              style={{ minWidth: 92, padding: "10px 14px", fontSize: 14 }}
            >
              Decline
            </Button>
            <Button
              $secondary
              onClick={() => handleResponse("accepted")}
              style={{ minWidth: 92, padding: "10px 14px", fontSize: 14 }}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </ConsentBar>
  );
};

export default CookieConsent;
