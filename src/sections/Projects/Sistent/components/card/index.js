import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@sistent/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const SistentCard = () => {
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
            Cards are used to group related information in a flexible container.
            They support rich media, headers, body text, and action buttons.
          </p>
          <a id="Usage">
            <h2>Usage</h2>
          </a>
          <h3>Basic Card</h3>
          <p>
            A basic <code>Card</code> wraps content in an elevated surface with
            shadow and rounded corners.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Basic Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a simple card with only content inside it.
                  </Typography>
                </CardContent>
              </Card>
            </SistentThemeProvider>
          </Row>

          <h3>Card with Header and Content</h3>
          <p>
            Use <code>CardHeader</code> to add a title and subheader above the
            card content.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title="Card Title" subheader="Card Subheader" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This card includes a header with a title and subheader,
                    followed by descriptive body content.
                  </Typography>
                </CardContent>
              </Card>
            </SistentThemeProvider>
          </Row>

          <a id="Customization">
            <h2>Customization</h2>
          </a>
          <p>
            Cards can be customized with actions using <code>CardActions</code>,
            which places buttons or other interactive elements at the bottom of
            the card.
          </p>

          <h3>Card with Actions</h3>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Card with Actions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cards can include action buttons at the bottom for user
                    interaction.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentCard;
