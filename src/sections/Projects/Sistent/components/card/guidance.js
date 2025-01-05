import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { Row } from "../../../../../reusecore/Layout";
import {
  SistentThemeProvider,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import MesheryLogo from "../../../../../assets/images/meshery/meshery-logo-light-text-side.webp";
import KanvasLogo from "../../../../../assets/images/kanvas/icon-only/kanvas-icon-color.png";

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
          The Card component is a UI element used to encapsulate information or
          actions related to a single topic, typically in a visually separated,
          easily digestible format. It often includes elements like images,
          text, and buttons to present content and enable quick interactions
          without navigating away from the card.
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
            For proper application, these cards can be used for different
            purposes to enable easier and consistent combination when guiding
            users across digital experiences.
          </p>

          <a id="Function">
            <h2>Function</h2>
          </a>

          <p>The Card Component serves various functions:</p>

          <h3>Oultined Card</h3>
          <p>
            Outlined cards are ideal for use in layouts that benefit from a
            subtle, modern look, such as in settings with light backgrounds
            where visual clarity is important. They’re perfect for showcasing
            items like product listings, profiles, or dashboard summaries, as
            the minimal border keeps the focus on the content without adding
            visual weight.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "#9d9d9d", fontSize: 15 }}
                  >
                    Company Spotlight
                  </Typography>
                  <Typography variant="h5" component="div">
                    Layer5
                  </Typography>
                  <Typography sx={{ color: "#9d9d9d", fontSize: 15, mb: 1.5 }}>
                    Platform
                  </Typography>
                  <Typography variant="body">
                    Empowering engineers with cloud-native management solutions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </SistentThemeProvider>
          </Row>

          <h3>Main Action Cards</h3>
          <p>
            This type of interactive card is well-suited for use in applications
            where quick access to more information or actions is important, such
            as dashboards, or product catalogs. For example, ont the website,
            users can tap anywhere on the card to open the full product page.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }} variant="outlined">
                <CardActions>
                  <CardMedia
                    component="img"
                    height="80"
                    image={MesheryLogo}
                    alt="Meshery"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Meshery
                    </Typography>
                    <Typography variant="body" sx={{ color: "#9d9d9d" }}>
                      Meshery is an open-source cloud-native management platform
                      designed to help users manage, monitor, and optimize the
                      performance of service meshes and their workloads.
                    </Typography>
                  </CardContent>
                </CardActions>
              </Card>
            </SistentThemeProvider>
          </Row>

          <p>
            In usage, cards can incorporate secondary actions, like sharing,
            bookmarking, or viewing additional details, which are typically
            placed separately from the main action area. This separation
            prevents accidental taps or clicks, allowing users to clearly
            distinguish between the primary function of the card (like opening a
            detailed view) and other supporting actions.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card sx={{ maxWidth: 345 }} variant="outlined">
                <CardActions>
                  <CardMedia
                    component="img"
                    height="90"
                    image={KanvasLogo}
                    alt="Kanvas"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Kanvas
                    </Typography>
                    <Typography variant="body" sx={{ color: "#9d9d9d" }}>
                      Kanvas is a collaborative design tool that allows users to
                      create, edit, and manage visual assets seamlessly within a
                      shared workspace.
                    </Typography>
                  </CardContent>
                </CardActions>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </SistentThemeProvider>
          </Row>

          <a id="Labeling">
            <h2>Labeling</h2>
          </a>
          <p>
            For card components, clear labeling helps define the purpose and
            hierarchy of each card, making it easier for users to understand the
            content at a glance. Labels, like titles or category tags, can
            indicate the main topic or action associated with each card,
            improving navigation and usability within a grid of multiple cards.
          </p>

          <h3>Hierarchy and Visual Cues</h3>
          <p>
            Cards benefit from a clear hierarchy, using typography, spacing, and
            color to guide users through the content. For instance, a card title
            in bold or larger text immediately draws attention, while secondary
            information is displayed with subdued colors.
          </p>

          <h3>Interactivity and Feedback</h3>
          <p>
            Cards often use hover effects, shadow adjustments, or subtle
            animations to indicate interactivity. This feedback helps users
            identify clickable areas or interactive elements within the card,
            providing a more engaging experience.
          </p>

          <h3>Consistency in Style and Layout</h3>
          <p>
            Cards should maintain a consistent style throughout an interface to
            ensure a unified look and feel. Consistency in aspects like font
            sizes, padding, border radii, and color schemes helps cards blend
            naturally into the overall UI design, improving readability and
            making interactions feel intuitive across different screens or
            sections.
          </p>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CardGuidance;
