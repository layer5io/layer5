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

const options = [
  { label: <option disabled className="category">BADGES&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>, value: "", color: `${theme.linkColor}`,isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Community</option>, value: "community", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Landscape</option>, value: "lanscape", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Image Hub</option>, value: "imagehub", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Meshery</option>, value: "meshery", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Meshery Operator</option>, value: "mesheryoperator", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Service Mesh Performance</option>, value: "smp", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;GetNighthawk</option>, value: "getnighthawk", color: `${theme.linkColor}`, isFixed: true},
  { label: <option disabled className="category">STATUS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;All Members</option>, value: "all", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Active Members</option>, value: "active", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Inactive Members</option>, value: "inactive", color: `${theme.menuColor}`, isFixed: true},
  { label: <option disabled className="category">ROLE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</option>, value: "", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;Maintainers</option>, value: "maintainers", color: `${theme.linkColor}`, isFixed: true},
  { label: <option className="allOptions">&ensp;&emsp;&nbsp;&nbsp;&nbsp;MeshMates</option>, value: "meshmates", color: `${theme.linkColor}`, isFixed: true}
];

var style = document.createElement("style");
style.innerHTML = `
.category {
font-weight: bold;
color: black;
}

.allOptions {
  color: grey;
}
`;
document.head.appendChild(style);

const MembersPage = () => {
  const [members, setMembers] = useState(options[1]);

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
      //case "" : return props.hover={disabled};

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
