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

    const options = [
        { label: "All Members", value: "all" },
        { label: "Active Members", value: "active" },
        { label: "Inactive Members", value: "inactive" },
        { label: "Maintainers", value: "maintainers" }
    ];

    const [state, setState] = React.useState({ 
        label: "All Members", value: "all" ,
    });

    const handleChange = value => {
        setState({ value: value });
    };
    

    let MembersView = props => {
        let status = state.value.value;
        if (status=="active") return <ActiveMembers {...props} />;
        else if (status=="inactive") return <InactiveMembers {...props} />;
        else if (status=="maintainers") return <Maintainers {...props} />;
        return <AllMembers {...props} />;
    };
    const selectStyles = { menu: styles => ({ ...styles, zIndex: 999 }) };
    return (
        <ThemeProvider theme={theme}>
            <Layout>    
                <GlobalStyle />
                <SEO title="Members | Layer5 - The Service Mesh Company" />
                <Navigation />
                <MembersView options={options} handleChange = {handleChange} 
                    currMember={state.value} selectStyles={selectStyles}/>
                <Footer/>
            </Layout>
        </ThemeProvider>
    );
};

export default MembersPage;
