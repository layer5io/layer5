import React from "react";
import { SistentThemeProvider, Tabs, Tab } from "@layer5/sistent";
import { SistentLayout } from "../../sistent-layout";
import { CodeBlock } from "../button/code-block";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const tabCodes = [
  `
    <Tabs value={0}>
      <Tab label="Tab One" />
      <Tab label="Tab Two" />
      <Tab label="Tab Three" />
    </Tabs>
  `,
  `
    <Tabs variant="fullWidth" value={0}>
      <Tab label="Full Width Tab" />
    </Tabs>
    <Tabs variant="scrollable" scrollButtons value={0}>
      <Tab label="Scrollable Tab" />
    </Tabs>
  `,
  `
    <Tabs value={0}>
      <Tab icon={<Icon name="home" />} label="Home" />
      <Tab icon={<Icon name="settings" />} label="Settings" />
    </Tabs>
  `
];

const TabCodeExamples = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Tab Code Examples">
      <div className="content">
        <h2>Tab Component Code</h2>
        <p>Here are different implementations of the Tab component.</p>

        <h3>Basic Tabs</h3>
        <CodeBlock name="basic-tabs" code={tabCodes[0]} />

        <h3>Tabs Variants</h3>
        <CodeBlock name="variant-tabs" code={tabCodes[1]} />

        <h3>Tabs with Icons</h3>
        <CodeBlock name="tabs-with-icons" code={tabCodes[2]} />
      </div>
    </SistentLayout>
  );
};

export default TabCodeExamples;