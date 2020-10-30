import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import AllMembers from "../../sections/Members-grid/AllMembers";
import ActiveMembers from "../../sections/Members-grid/ActiveMembers";
import InactiveMembers from "../../sections/Members-grid/InactiveMembers";
import Maintainers from "../../sections/Members-grid/Maintainers";

const MembersPage = () => {
    const [active, setActive] = useState(false);
    const [inActive, setinActive] = useState(false);
    const [maintainers, setMaintainers] = useState(false);

    const toggleActive = () => {
        let status = active;
        setActive(!status);
        setinActive(false);
        setMaintainers(false);

    };

    const toggleInactive = () => {
        let status = inActive;
        setActive(false);
        setinActive(!status);
        setMaintainers(false);
    };

    const toggleMaintainers = () => {
        let status = Maintainers;
        setActive(false);
        setinActive(false);
        setMaintainers(!status);
    };

    let MembersView = props => {
        if (active) return <ActiveMembers {...props} />;
        else if (inActive) return <InactiveMembers {...props} />;
        else if (Maintainers) return <Maintainers {...props} />;
        return <AllMembers {...props} />;
    };

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Members | Layer5 - The Service Mesh Company" />
                <Navigation />
                <MembersView toggleActive={toggleActive} toggleInactive={toggleInactive} toggleMaintainers={toggleMaintainers}
                    active={active} inActive={inActive} maintainers={maintainers}/>
                <Footer/>
            </Layout>
        </ThemeProvider>
    );
};

export default MembersPage;
