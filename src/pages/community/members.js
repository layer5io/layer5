import React, { useState } from "react";

// Libraries
import { ThemeProvider } from "styled-components";

// Components
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import MultipleMembers from "../../sections/Community/Members-grid/MemberList";
import Dropdown from "../../sections/Community/Members-grid/Dropdown";
import { DropdownWrapper } from "../../components/dropdownLayouts/labels.style";

// Assets + Icons
import theme from "../../theme/app/themeStyles";
import communityIcon from "../../assets/images/community/community-green.svg";
import hubIcon from "../../assets/images/image-hub/layer5-image-hub.svg";
import icon5 from "../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";
import meshmateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import hawkIcon from "../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import landscapeIcon from "../../assets/images/landscape/layer5_landscape_green.svg";
import mesheryIcon from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import mesheryOpIcon from "../../assets/images/meshery-operator/meshery-operator-dark.svg";
import smpIcon from "../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import inactiveIcon from "../../assets/images/status/inactive.png";
import activeIcon from "../../assets/images/status/active.png";
import patternsIcon from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";

import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
/**
 * Array containing a list of categories to be shown in the dropdown.
 * The map function in the end wraps the label property with a component.
 */
const options = [
  {
    label: "BADGES",
    value: "",
    color: theme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Community",
    value: "community",
    color: theme.linkColor,
    isFixed: true,
    icon: communityIcon,
    className: "allOptions",
  },
  {
    label: "Landscape",
    value: "landscape",
    color: theme.linkColor,
    isFixed: true,
    icon: landscapeIcon,
    className: "allOptions",
  },
  {
    label: "Image Hub",
    value: "image-hub",
    color: theme.linkColor,
    isFixed: true,
    icon: hubIcon,
    className: "allOptions",
  },
  {
    label: "Meshery",
    value: "meshery",
    color: theme.linkColor,
    isFixed: true,
    icon: mesheryIcon,
    className: "allOptions",
  },
  {
    label: "Meshery Operator",
    value: "meshery-operator",
    color: theme.linkColor,
    isFixed: true,
    icon: mesheryOpIcon,
    className: "allOptions",
  },
  {
    label: "Service Mesh Performance",
    value: "smp",
    color: theme.linkColor,
    isFixed: true,
    icon: smpIcon,
    className: "allOptions",
  },
  {
    label: "Nighthawk",
    value: "nighthawk",
    color: theme.linkColor,
    isFixed: true,
    icon: hawkIcon,
    className: "allOptions",
  },
  {
    label: "Service Mesh Patterns",
    value: "patterns",
    color: theme.linkColor,
    isFixed: true,
    icon: patternsIcon,
    className: "allOptions",
  },
  {
    label: "STATUS",
    value: "",
    color: theme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "All Members",
    value: "all",
    color: theme.linkColor,
    isFixed: true,
    icon: null,
    className: "allOptions",
  },
  {
    label: "Active",
    value: "active",
    color: theme.linkColor,
    isFixed: true,
    icon: activeIcon,
    className: "allOptions",
  },
  {
    label: "Inactive",
    value: "inactive",
    color: theme.linkColor,
    isFixed: true,
    icon: inactiveIcon,
    className: "allOptions",
  },
  {
    label: "ROLE",
    value: "",
    color: theme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Maintainers",
    value: "maintainers",
    color: theme.linkColor,
    isFixed: true,
    icon: icon5,
    className: "allOptions",
  },
  {
    label: "Meshmates",
    value: "meshmates",
    color: theme.linkColor,
    isFixed: true,
    icon: meshmateIcon,
    className: "allOptions",
  },
  {
    label: "Community Managers",
    value: "community_managers",
    color: theme.linkColor,
    isFixed: true,
    icon: communityIcon,
    className: "allOptions",
  },
].map((obj) => ({
  ...obj,
  label: (
    <DropdownWrapper>
      <div className={obj.className}>{obj.label}</div>
    </DropdownWrapper>
  ),
  color: `${obj.color}`,
  icon: obj.icon && `url(${obj.icon})`,
}));

const MembersPage = () => {
  /**
   * state storing the currently selected categories.
   */
  const [members, setMembers] = useState([options[11]]);
  const handleChange = (value) => setMembers(value);

  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Dropdown options={options} handleChange={handleChange} />

        {!members ? (
          <MultipleMembers members={[options[10]]} />
        ) : (
          <MultipleMembers members={members} />
        )}
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;

export const Head = () => {
  return <SEO
    title="Members"
    description="An awarding-winning, open source community with a warm and welcoming collection of contributors."
  />;
};