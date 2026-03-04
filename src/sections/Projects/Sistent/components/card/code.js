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
import { CodeBlock } from "../button/code-block";
import { SistentLayout } from "../../sistent-layout";

import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
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
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      title="Card Title"
      subheader="Card Subheader"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This card includes a header with a title and subheader,
        followed by descriptive body content.
      </Typography>
    </CardContent>
  </Card>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://source.unsplash.com/random/345x140"
      alt="Card media"
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Card with Media
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This card uses CardMedia to display an image at the top.
      </Typography>
    </CardContent>
  </Card>
</SistentThemeProvider>`,
  `<SistentThemeProvider>
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        Card with Actions
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Cards can include action buttons at the bottom for user interaction.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
      <Button size="small">Share</Button>
    </CardActions>
  </Card>
</SistentThemeProvider>`,
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
            The following examples demonstrate the different ways to use the{" "}
            <code>Card</code> component and its sub-components.
          </p>
          <a id="Basic Card">
            <h2>Basic Card</h2>
          </a>
          <p>
            A minimal card with only <code>CardContent</code> displaying a title
            and description.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="card-basic" code={codes[0]} />
          </div>
          <a id="Card with Header and Content">
            <h2>Card with Header and Content</h2>
          </a>
          <p>
            Combining <code>CardHeader</code> and <code>CardContent</code> to
            present a titled card with body text.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="card-header-content" code={codes[1]} />
          </div>
          <a id="Card with Media">
            <h2>Card with Media</h2>
          </a>
          <p>
            Use <code>CardMedia</code> to embed an image within the card.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Card with Media
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This card uses CardMedia to display an image at the top.
                    </Typography>
                  </CardContent>
                </Card>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="card-media" code={codes[2]} />
          </div>
          <a id="Card with Actions">
            <h2>Card with Actions</h2>
          </a>
          <p>
            Use <code>CardActions</code> to place interactive buttons at the
            bottom of the card.
          </p>
          <div className="showcase">
            <div className="items">
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
            </div>
            <CodeBlock name="card-actions" code={codes[3]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

export default CardCode;
