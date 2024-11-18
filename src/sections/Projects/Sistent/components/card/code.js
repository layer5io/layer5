import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider, Card, CardActions, CardContent, CardHeader, CardMedia , Typography, Box, Button } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import MesheryLogo from "../../../../../assets/images/meshery/meshery-logo-light-text-side.webp";
import KanvasLogo from "../../../../../assets/images/kanvas/icon-only/kanvas-icon-color.png";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `const cardOutlined = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Company Spotlight
        </Typography>
        <Typography variant="h5" component="div">
          Layer5
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14 , mb: 1.5 }}>Platform</Typography>
        <Typography variant="body2">
          Empowering engineers with cloud-native management solutions.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <Card variant="outlined">{cardOutlined}</Card>
  </SistentThemeProvider>`,

  `const cardMainAction1 = (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions>
        <CardMedia
          component="img"
          height="90"
          image={MesheryLogo}
          alt="Meshery"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Meshery
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Meshery is an open-source cloud-native management platform designed to help users manage, monitor, and optimize the performance of service meshes and their workloads. 
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
  
  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
      <Card variant="outlined">{cardMainAction1}</Card>
  </SistentThemeProvider>`,

  `
  const cardMainAction2 = (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions>
        <CardMedia
          component="img"
          height="80"
          image={KanvasLogo}
          alt="Kanvas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kanvas
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Kanvas is a collaborative design tool that allows users to create, edit, and manage visual assets seamlessly within a shared workspace.
          </Typography>
        </CardContent>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );

  <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
    <Card variant="outlined">{cardMainAction2}</Card>
  </SistentThemeProvider>
  `,
];

export const CardCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  const cardOutlined = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Company Spotlight
        </Typography>
        <Typography variant="h5" component="div">
          Layer5
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14 , mb: 1.5 }}>Platform</Typography>
        <Typography variant="body2">
          Empowering engineers with cloud-native management solutions.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const cardMainAction1 = (
    <Card sx={{ maxWidth: 345 }}>
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
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Meshery is an open-source cloud-native management platform designed to help users manage, monitor, and optimize the performance of service meshes and their workloads. 
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );

  const cardMainAction2 = (
    <Card sx={{ maxWidth: 345 }}>
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
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Kanvas is a collaborative design tool that allows users to create, edit, and manage visual assets seamlessly within a shared workspace.
          </Typography>
        </CardContent>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <SistentLayout title="Card">
      <div className="content">
        <a id="Identity">
          <h2>Card</h2>
        </a>
        <p>The Card component is a UI element used to encapsulate information or actions related to a single topic,
           typically in a visually separated, easily digestible format. It often includes elements like images, text,
            and buttons to present content and enable quick interactions without navigating away from the card.</p>
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
              location.pathname ===
              "/projects/sistent/components/card/guidance"
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
              location.pathname ===
              "/projects/sistent/components/card/code"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/card/code")
            }
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          A card often lets users interact with its entire surface to trigger its main function, whether it’s expanding,
           navigating to another screen, or activating some other behavior.
          </p>
          <a id="Outlined Card">
            <h2>Oultined Card Example</h2>
          </a>
          <p>
          An outlined card is a variation of the standard card component, often used to provide a lighter, more minimalist design. 
          Instead of a solid background or shadow, an outlined card uses a border to define its boundaries, giving it a cleaner and more refined appearance. 
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Card variant="outlined">{cardOutlined}</Card>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="container-fluid-sm" code={codes[0]} />
          </div>

          <div>
            <a id="Main Action Cards">
              <h2>Main Action Cards</h2>
            </a>
            <p>
          This type of interactive card is well-suited for use in applications where quick access to more information or actions is important, such as dashboards, or product catalogs. 
          For example, ont the website, users can tap anywhere on the card to open the full product page.
            </p>
            <div className="showcase">
              <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Card variant="outlined">{cardMainAction1}</Card>
              </SistentThemeProvider>
              </div>
              <CodeBlock name="Container-fluid-md" code={codes[1]} />
            </div>
          </div>
          <p>
          Cards can also include secondary actions, which should be positioned away 
          from the primary action area to avoid unintentional interaction conflicts.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Card variant="outlined">{cardMainAction2}</Card>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="Container-fixed" code={codes[2]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};
