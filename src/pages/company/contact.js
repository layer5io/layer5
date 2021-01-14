import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import ContactPage from "../../sections/Contact";

class Contact extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact" />
                <Navigation />
                <ContactPage />
                <Footer />
            </Layout>
        );
    }
}

export default Contact;
