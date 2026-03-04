import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
  SistentThemeProvider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@sistent/sistent";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const CardGuidance = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Card">
      <div className="content">
        <a id="Identity">
          <h2>Card</h2>
        </a>
        <p>
          The <code>Card</code> component is a surface that displays content and
          actions on a single topic. Cards are composed of sub-components such
          as <code>CardHeader</code>, <code>CardContent</code>,{" "}
          <code>CardActions</code>, and <code>CardMedia</code>, which can be
          combined to create a variety of layouts.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/card"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/card")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/card/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/card/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/card/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/card/code")}
            title="Code"
          />
        </div>

        <div className="main-content">
          <p>
            Cards provide a structured and visually distinct container for
            related information. They are ideal for presenting items such as
            user profiles, product listings, blog posts, or settings panels.
          </p>

          <a id="Best Practices">
            <h2>Best Practices</h2>
          </a>

          <h3>When to Use Cards</h3>
          <p>Cards are best suited for:</p>
          <ul>
            <li>Displaying a collection of similar items in a grid or list</li>
            <li>Presenting a summary with an option to view more details</li>
            <li>Grouping related content and actions together</li>
            <li>Profile previews, product tiles, or news articles</li>
          </ul>

          <h3>Sub-components</h3>
          <ul>
            <li>
              <strong>CardHeader</strong>: Renders a title, optional subheader,
              and an optional avatar or action icon at the top of the card.
            </li>
            <li>
              <strong>CardContent</strong>: The primary content area. Use it to
              place text, descriptions, and other information.
            </li>
            <li>
              <strong>CardActions</strong>: A dedicated area for buttons and
              interactive controls, placed at the bottom of the card.
            </li>
            <li>
              <strong>CardMedia</strong>: Embeds an image or other media at the
              top or within the card.
            </li>
          </ul>

          <h3>CardHeader</h3>
          <p>
            Use <code>CardHeader</code> when the card needs a clearly labeled
            title and optional metadata such as a date or author name.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title="Component Guide"
                  subheader="Last updated: March 2026"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This card demonstrates the CardHeader sub-component with a
                    title and subheader.
                  </Typography>
                </CardContent>
              </Card>
            </SistentThemeProvider>
          </Row>

          <h3>CardContent</h3>
          <p>
            <code>CardContent</code> is the main body of the card. It accepts
            any child elements and provides consistent padding.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    CardContent Example
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use CardContent to wrap descriptive text, lists, or any
                    other content that belongs inside the card.
                  </Typography>
                </CardContent>
              </Card>
            </SistentThemeProvider>
          </Row>

          <h3>CardActions</h3>
          <p>
            <code>CardActions</code> anchors interactive elements like buttons
            to the bottom of the card. Use <code>disableSpacing</code> for
            manual spacing control.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    A card with action buttons at the bottom.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained">
                    Accept
                  </Button>
                  <Button size="small" variant="outlined">
                    Decline
                  </Button>
                </CardActions>
              </Card>
            </SistentThemeProvider>
          </Row>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <ul>
            <li>
              Ensure card headings use semantic HTML (e.g., <code>h2</code>,{" "}
              <code>h3</code>) for screen reader compatibility.
            </li>
            <li>
              Interactive elements inside cards must be keyboard-focusable and
              have descriptive labels.
            </li>
            <li>
              Avoid placing too many actions inside a single card to reduce
              cognitive load.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CardGuidance;
