import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import {
  SistentThemeProvider,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import MesheryLogo from "../../../../../assets/images/meshery/meshery-logo-light-text-side.webp";
import KanvasLogo from "../../../../../assets/images/kanvas/icon-only/kanvas-icon-color.png";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<Card variant="outlined">
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
  </Card>`,

  `<Card sx={{ maxWidth: 345 }} variant="outlined">
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
  </Card>`,

  `<Card sx={{ maxWidth: 345 }} variant="outlined">
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
  </Card>`,
];

const CardCode = () => {
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
            A card often lets users interact with its entire surface to trigger
            its main function, whether it&apos;s expanding, navigating to
            another screen, or activating some other behavior.
          </p>
          <a id="Outlined Card">
            <h2>Oultined Card Example</h2>
          </a>
          <p>
            An outlined card is a variation of the standard card component,
            often used to provide a lighter, more minimalist design. Instead of
            a solid background or shadow, an outlined card uses a border to
            define its boundaries, giving it a cleaner and more refined
            appearance.
          </p>
          <div className="showcase">
            <div className="items">
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
                    <Typography
                      sx={{ color: "#9d9d9d", fontSize: 15, mb: 1.5 }}
                    >
                      Platform
                    </Typography>
                    <Typography variant="body">
                      Empowering engineers with cloud-native management
                      solutions.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="container-fluid-sm" code={codes[0]} />
          </div>
          <div>
            <a id="Main Action Cards">
              <h2>Main Action Cards</h2>
            </a>
            <p>
              This type of interactive card is well-suited for use in
              applications where quick access to more information or actions is
              important, such as dashboards, or product catalogs. For example,
              ont the website, users can tap anywhere on the card to open the
              full product page.
            </p>
            <div className="showcase">
              <div className="items">
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
                          Meshery is an open-source cloud-native management
                          platform designed to help users manage, monitor, and
                          optimize the performance of service meshes and their
                          workloads.
                        </Typography>
                      </CardContent>
                    </CardActions>
                  </Card>
                </SistentThemeProvider>
              </div>
              <CodeBlock name="Container-fluid-md" code={codes[1]} />
            </div>
          </div>
          <p>
            Cards can also include secondary actions, which should be positioned
            away from the primary action area to avoid unintentional interaction
            conflicts.
          </p>
          <div className="showcase">
            <div className="items">
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
                        Kanvas is a collaborative design tool that allows users
                        to create, edit, and manage visual assets seamlessly
                        within a shared workspace.
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
            </div>
            <CodeBlock name="Container-fixed" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};
export default CardCode;
