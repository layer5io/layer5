import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { SistentThemeProvider, Input } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import styled from "styled-components";

const CodeBlock = styled.pre`
  background: ${props => props.isDark ? '#1B1B1B' : '#F5F5F5'};
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
`;

const ScrollableWrapper = styled.div`
  .main-content {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    padding-right: 1rem;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #00B39F;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      background: ${props => props.isDark ? '#2B2B2B' : '#E5E5E5'};
    }
  }

  section {
    margin: 2rem 0;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.isDark ? '#2B2B2B' : '#E5E5E5'};
    &:last-child {
      border-bottom: none;
    }
  }
`;

const TextInputCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Text Input">
      <ScrollableWrapper isDark={isDark}>
        <div className="content">
          <a id="Identity">
            <h2>Text Input</h2>
          </a>
          <p>
            Text inputs are important elements that help users interact with an
            experience by providing text commands that will in turn return
            expected results. These commands can range from providing a free range
            of personal information to entering a limited number of characters for
            a use case.
          </p>
          <div className="filterBtns">
            <TabButton
              className={location.pathname === "/projects/sistent/components/text-input" ? "active" : ""}
              onClick={() => navigate("/projects/sistent/components/text-input")}
              title="Overview"
            />
            <TabButton
              className={location.pathname === "/projects/sistent/components/text-input/guidance" ? "active" : ""}
              onClick={() => navigate("/projects/sistent/components/text-input/guidance")}
              title="Guidance"
            />
            <TabButton
              className={location.pathname === "/projects/sistent/components/text-input/code" ? "active" : ""}
              onClick={() => navigate("/projects/sistent/components/text-input/code")}
              title="Code"
            />
          </div>
          <div className="main-content">
            <section>
              <h3>Basic Text Input</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input placeholder="Enter text" />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`import { Input } from "@layer5/sistent";

<Input placeholder="Enter text" />`}
              </CodeBlock>
            </section>

            <section>
              <h3>Input with Label</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input label="Username" placeholder="Enter username" />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  label="Username"
  placeholder="Enter username"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Required Input</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input label="Email" required placeholder="Enter email" />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  label="Email"
  required
  placeholder="Enter email"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Input with Helper Text</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    label="Password" 
                    helperText="Must be at least 8 characters"
                    placeholder="Enter password"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  label="Password"
  helperText="Must be at least 8 characters"
  placeholder="Enter password"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Error State</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    error
                    label="Username"
                    helperText="Username already taken"
                    placeholder="Enter username"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  error
  label="Username"
  helperText="Username already taken"
  placeholder="Enter username"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Disabled Input</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    disabled
                    label="Username"
                    placeholder="Enter username"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  disabled
  label="Username"
  placeholder="Enter username"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Multiline Input</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    multiline
                    rows={4}
                    label="Description"
                    placeholder="Enter description"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`<Input 
  multiline
  rows={4}
  label="Description"
  placeholder="Enter description"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Input Sizes</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    size="medium"
                    label="Medium Input (56px)"
                    placeholder="56px / 3.5rem"
                  />
                </SistentThemeProvider>
              </Row>
              <Row $Hcenter style={{ marginTop: "1rem" }}>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    size="small"
                    label="Small Input (48px)"
                    placeholder="48px / 3rem"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`// Medium Input (56px)
<Input 
  size="medium"
  label="Medium Input"
  placeholder="56px / 3.5rem"
/>

// Small Input (48px)
<Input 
  size="small"
  label="Small Input"
  placeholder="48px / 3rem"
/>`}
              </CodeBlock>
            </section>

            <section>
              <h3>Input Types</h3>
              <Row $Hcenter>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    type="email"
                    label="Email Input"
                    placeholder="Enter email"
                  />
                </SistentThemeProvider>
              </Row>
              <Row $Hcenter style={{ marginTop: "1rem" }}>
                <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                  <Input 
                    type="password"
                    label="Password Input"
                    placeholder="Enter password"
                  />
                </SistentThemeProvider>
              </Row>
              <CodeBlock isDark={isDark}>
                {`// Email Input
<Input 
  type="email"
  label="Email Input"
  placeholder="Enter email"
/>

// Password Input
<Input 
  type="password"
  label="Password Input"
  placeholder="Enter password"
/>`}
              </CodeBlock>
            </section>
          </div>
        </div>
      </ScrollableWrapper>
    </SistentLayout>
  );
};

export default TextInputCode;