import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import MembersGrid from "../../sections/Community/Members-grid/index";

import Community from "../../sections/Community/Members-grid/community";
import Landscape from "../../sections/Community/Members-grid/landscape";
import ImageHub from "../../sections/Community/Members-grid/imagehub";
import Meshery from "../../sections/Community/Members-grid/meshery";
import MesheryOperator from "../../sections/Community/Members-grid/mesheryoperator.js";
import SMP from "../../sections/Community/Members-grid/smp";
import GetNighthawk from "../../sections/Community/Members-grid/getnighthawk";

import AllMembers from "../../sections/Community/Members-grid/AllMembers";
import ActiveMembers from "../../sections/Community/Members-grid/ActiveMembers";
import InactiveMembers from "../../sections/Community/Members-grid/InactiveMembers";

import Maintainers from "../../sections/Community/Members-grid/Maintainers";
import Meshmate from "../../sections/Community/Members-grid/Meshmate";
import { bool } from "prop-types";
import { DropdownWrapper } from "../../components/dropdownLayouts/labels.style";

import communityIcon from "../../assets/images/community/community-green.svg";
import hubIcon from "../../assets/images/image-hub/layer5-image-hub.svg";
import icon5 from "../../assets/images/layer5/5 icon/svg/light/5-light-no-trim.svg";
import meshmateIcon from "../../assets/images/meshmate/meshmate-icon.svg";
import hawkIcon from "../../assets/images/getnighthawk/icon-only/SVG/getnighthawk-logo.svg";
import landscapeIcon from "../../assets/images/landscape/layer5_landscape_green.svg";
import mesheryIcon from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import mesheryOpIcon from "../../assets/images/meshery-operator/meshery-operator-skinny.svg";
import smpIcon from "../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import inactiveIcon from "../../assets/images/status/inactive.png";
import activeIcon from "../../assets/images/status/active.png";





const options = [
  { label: <DropdownWrapper><div className="category " >BADGES</div></DropdownWrapper>, value: "", color: `${theme.linkColor}`,isFixed: true},
  { label: <DropdownWrapper><div className="allOptions">Community</div></DropdownWrapper>, value: "community", color: `${theme.linkColor}`, isFixed: true, icon: `url(${communityIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Landscape</div></DropdownWrapper>, value: "landscape", color: `${theme.linkColor}`, isFixed: true, icon: `url(${landscapeIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Image Hub</div></DropdownWrapper>, value: "imagehub", color: `${theme.linkColor}`, isFixed: true, icon: `url(${hubIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Meshery </div></DropdownWrapper>,value: "meshery", color: `${theme.linkColor}`, isFixed: true, icon: `url(${mesheryIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Meshery Operator</div></DropdownWrapper>, value: "mesheryoperator", color: `${theme.linkColor}`, isFixed: true, icon: `url(${mesheryOpIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Service Mesh Performance</div></DropdownWrapper>, value: "smp", color: `${theme.linkColor}`, isFixed: true, icon: `url(${smpIcon})`},
  { label: <DropdownWrapper><div className="allOptions">GetNighthawk </div></DropdownWrapper>, value: "getnighthawk", color: `${theme.linkColor}`, isFixed: true, icon: `url(${hawkIcon})`},
  { label: <DropdownWrapper><div className="category">STATUS</div></DropdownWrapper>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <DropdownWrapper><div className="allOptions">All Members</div></DropdownWrapper>, value: "all", color: `${theme.linkColor}`, isFixed: true, icon: ""},
  { label: <DropdownWrapper><div className="allOptions">Active Members</div></DropdownWrapper>, value: "active", color: `${theme.linkColor}`, isFixed: true, icon:  `url(${activeIcon})`},
  { label: <DropdownWrapper><div className="allOptions">Inactive Members</div></DropdownWrapper>, value: "inactive", color: `${theme.menuColor}`, isFixed: true, icon: `url(${inactiveIcon})`},
  { label: <DropdownWrapper><div className="category">ROLE</div></DropdownWrapper>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <DropdownWrapper><div className="allOptions">Maintainers</div></DropdownWrapper>, value: "maintainers", color: `${theme.linkColor}`, isFixed: true, icon: `url(${icon5})`},
  { label: <DropdownWrapper><div className="allOptions">MeshMates</div></DropdownWrapper>, value: "meshmates", color: `${theme.linkColor}`, isFixed: true, icon: `url(${meshmateIcon})`}

const options = [
  { label: <DropdownWrapper><option disabled className="category comm">BADGES</option></DropdownWrapper>, value: "", color: `${theme.linkColor}`,isFixed: true},
  { label: <DropdownWrapper><option className="allOptions">Community</option></DropdownWrapper>, value: "community", color: `${theme.linkColor}`, isFixed: true, icon: `url(${communityIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Landscape</option></DropdownWrapper>, value: "landscape", color: `${theme.linkColor}`, isFixed: true, icon: `url(${landscapeIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Image Hub</option></DropdownWrapper>, value: "imagehub", color: `${theme.linkColor}`, isFixed: true, icon: `url(${hubIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Meshery</option></DropdownWrapper>, value: "meshery", color: `${theme.linkColor}`, isFixed: true, icon: `url(${mesheryIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Meshery Operator</option></DropdownWrapper>, value: "mesheryoperator", color: `${theme.linkColor}`, isFixed: true, icon: `url(${mesheryOpIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Service Mesh Performance</option></DropdownWrapper>, value: "smp", color: `${theme.linkColor}`, isFixed: true, icon: `url(${smpIcon})`},
  { label: <DropdownWrapper><option className="allOptions">GetNighthawk</option></DropdownWrapper>, value: "getnighthawk", color: `${theme.linkColor}`, isFixed: true, icon: `url(${hawkIcon})`},
  { label: <DropdownWrapper><option disabled className="category">STATUS</option></DropdownWrapper>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <DropdownWrapper><option className="allOptions">All Members</option></DropdownWrapper>, value: "all", color: `${theme.linkColor}`, isFixed: true, icon: ""},
  { label: <DropdownWrapper><option className="allOptions">Active Members</option></DropdownWrapper>, value: "active", color: `${theme.linkColor}`, isFixed: true, icon:  `url(${activeIcon})`},
  { label: <DropdownWrapper><option className="allOptions">Inactive Members</option></DropdownWrapper>, value: "inactive", color: `${theme.menuColor}`, isFixed: true, icon: `url(${inactiveIcon})`},
  { label: <DropdownWrapper><option disabled className="category">ROLE</option></DropdownWrapper>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <DropdownWrapper><option className="allOptions">Maintainers</option></DropdownWrapper>, value: "maintainers", color: `${theme.linkColor}`, isFixed: true, icon: `url(${icon5})`},
  { label: <DropdownWrapper><option className="allOptions">MeshMates</option></DropdownWrapper>, value: "meshmates", color: `${theme.linkColor}`, isFixed: true, icon: `url(${meshmateIcon})`}

]; 



const MembersPage = () => {
  const [members, setMembers] = useState(options[10]);

  const handleChange = value => {
    setMembers(value);
  };

  let MembersView = props => {
    switch (members.value) {
      case "community" : return <Community {...props} />;
      case "landscape" : return <Landscape {...props}/>;
      case "imagehub" : return <ImageHub {...props}/>;
      case "meshery" : return <Meshery {...props}/>;
      case "mesheryoperator" : return <MesheryOperator {...props}/>;
      case "smp" : return <SMP {...props}/>;
      case "getnighthawk" : return <GetNighthawk {...props}/>;
      case "active" : return <ActiveMembers {...props} />;
      case "inactive" : return <InactiveMembers {...props}/>;
      case "maintainers" : return <Maintainers {...props}/>;
      case "meshmates" : return <Meshmate {...props}/>;

      default: return <AllMembers {...props}/>;
    }
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Members" description="Members - The Layer5 contributors list" />
        <Navigation />
        <MembersView options={options} handleChange={handleChange}
          members={members} />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
