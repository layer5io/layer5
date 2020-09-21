import React, { Component } from "react";
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


class MembersPage extends Component {
    state = {
        active: false,
        inActive: false
    };

    toggleActive = () =>{
        let status = this.state.active;
        this.setState({
            active : !status,
            inActive: false
        })
    };

    toggleInactive = () =>{
        let status = this.state.inActive;
        this.setState({
            active : false,
            inActive: !status
        })
    };

    render() {
        let MembersView = props => {
            if (this.state.active) return <ActiveMembers {...props}/>;
            else if(this.state.inActive) return <InactiveMembers {...props}/>;
            return <AllMembers {...props}/>;
        };
        return(
            <ThemeProvider theme={theme}>
                <Layout>
                    <GlobalStyle />
                    <SEO title="Members | Layer5 - The Service Mesh Company" />
                    <Navigation />
                    <MembersView toggleActive={this.toggleActive} toggleInactive={this.toggleInactive}
                                 active={this.state.active} inActive={this.state.inActive} />
                    <Footer/>
                </Layout>
            </ThemeProvider>
        )
    }
}

export default MembersPage;
