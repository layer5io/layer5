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

const MembersPage = () => {
    const [active, setActive] = useState(false);
    const [inActive, setinActive] = useState(false);

    const toggleActive = () => {
        let status = active;
        setActive(!status);
        setinActive(false);
    };

    const toggleInactive = () => {
        let status = inActive;
        setActive(false);
        setinActive(!status);
    };

    let MembersView = props => {
        if (active) return <ActiveMembers {...props} />;
        else if (inActive) return <InactiveMembers {...props} />;
        return <AllMembers {...props} />;
    };

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Members | Layer5 - The Service Mesh Company" />
                <Navigation />
                <MembersView toggleActive={toggleActive} toggleInactive={toggleInactive}
                    active={active} inActive={inActive} />
                <Footer/>
            </Layout>
        </ThemeProvider>
    );
};

export default MembersPage;
