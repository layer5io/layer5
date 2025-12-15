import React, { useState } from "react";
// Libraries
// Components
import SEO from "../../components/seo";


import MultipleMembers from "../../sections/Community/Members-grid/MemberList";
import Dropdown from "../../sections/Community/Members-grid/Dropdown";
import { DropdownWrapper } from "../../components/dropdownLayouts/labels.style";
// Assets + Icons
import lighttheme from "../../theme/app/themeStyles";

const writerIcon = "https://badges.layer5.io/assets/badges/writer-program/writer-program.svg";
const communityIcon = "https://badges.layer5.io/assets/badges/community/community.svg";
const hubIcon = "https://badges.layer5.io/assets/badges/image-hub/image-hub.svg";
const landscapeIcon = "https://badges.layer5.io/assets/badges/landscape/landscape.svg";
const mesheryOpIcon = "https://badges.layer5.io/assets/badges/meshery-operator/meshery-operator.svg";
const patternsIcon = "https://badges.layer5.io/assets/badges/patterns/patterns.svg";
const uiuxrIcon = "https://badges.layer5.io/assets/badges/ui-ux/ui-ux.svg";
const docsIcon = "https://badges.layer5.io/assets/badges/meshery-docs/meshery-docs.svg";
const dockerExtensionIcon = "https://badges.layer5.io/assets/badges/docker-extension/docker-extension.svg";
const mesheryCatalogIcon = "https://badges.layer5.io/assets/badges/meshery-catalog/meshery-catalog.svg";
const sistentIcon = "https://badges.layer5.io/assets/badges/sistent-contributor/sistent-contributor.png";

import icon5 from "../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";
import meshmateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import hawkIcon from "../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import mesheryIcon from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import smpIcon from "../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import inactiveIcon from "../../assets/images/status/inactive.webp";
import activeIcon from "../../assets/images/status/active.webp";
import kanvasIcon from "../../assets/images/kanvas/badges/kanvas.svg";
/**
 * Array containing a list of categories to be shown in the dropdown.
 * The map function in the end wraps the label property with a component.
 */
const options = [
  {
    label: "BADGES",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Community",
    value: "community",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: communityIcon,
    className: "allOptions",
  },
  {
    label: "Writer",
    value: "writer",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: writerIcon,
    className: "allOptions",
  },
  {
    label: "Landscape",
    value: "landscape",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: landscapeIcon,
    className: "allOptions",
  },
  {
    label: "Docker Extension",
    value: "docker-extension",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: dockerExtensionIcon,
    className: "allOptions",
  },
  {
    label: "Image Hub",
    value: "image-hub",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: hubIcon,
    className: "allOptions",
  },
  {
    label: "Docs",
    value: "docs",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: docsIcon,
    className: "allOptions",
  },
  {
    label: "Meshery",
    value: "meshery",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: mesheryIcon,
    className: "allOptions",
  },
  {
    label: "Meshery Catalog",
    value: "meshery-catalog",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: mesheryCatalogIcon,
    className: "allOptions",
  },
  {
    label: "Meshery Operator",
    value: "meshery-operator",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: mesheryOpIcon,
    className: "allOptions",
  },
  {
    label: "Kanvas",
    value: "kanvas",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: kanvasIcon,
    className: "allOptions",
  },
  {
    label: "Sistent",
    value: "sistent",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: sistentIcon,
    className: "allOptions",
  },
  {
    label: "Cloud Native Performance",
    value: "smp",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: smpIcon,
    className: "allOptions",
  },
  {
    label: "Nighthawk",
    value: "nighthawk",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: hawkIcon,
    className: "allOptions",
  },
  {
    label: "Cloud Native Patterns",
    value: "patterns",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: patternsIcon,
    className: "allOptions",
  },
  {
    label: "UI/UX'er",
    value: "ui-ux",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: uiuxrIcon,
    className: "allOptions",
  },
  {
    label: "STATUS",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "All Members",
    value: "all",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "allOptions",
  },
  {
    label: "Active",
    value: "active",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: activeIcon,
    className: "allOptions",
  },
  {
    label: "Inactive",
    value: "inactive",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: inactiveIcon,
    className: "allOptions",
  },
  {
    label: "ROLE",
    value: "",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: null,
    className: "category",
  },
  {
    label: "Maintainers",
    value: "maintainers",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: icon5,
    className: "allOptions",
  },
  {
    label: "Meshmates",
    value: "meshmates",
    color: lighttheme.linkColor,
    isFixed: true,
    icon: meshmateIcon,
    className: "allOptions",
  },
  {
    label: "Community Managers",
    value: "community_managers",
    color: lighttheme.linkColor,
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
const activeMember = {
  label: (
    <DropdownWrapper>
      <div className="allOptions">Active</div>
    </DropdownWrapper>
  ),
  value: "active",
  color: lighttheme.linkColor,
  isFixed: true,
  icon: activeIcon && `url(${activeIcon})`,
  className: "allOptions",
};
const MembersPage = () => {
  /**
   * state storing the currently selected categories.
   */
  const [members, setMembers] = useState([activeMember]);
  const handleChange = (value) => setMembers(value);
  return (
    <>
      <Dropdown options={options} defaultOption={activeMember} handleChange={handleChange} />
      <MultipleMembers members={members} />

    </>
  );
};
export default MembersPage;
export const Head = () => {
  return <SEO
    title="Members"
    description="An awarding-winning, open source community with a warm and welcoming collection of contributors."
  />;
};