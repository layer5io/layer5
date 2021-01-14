import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

import BookPage from "../../sections/Books-grid";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

const BooksGridPage = ({ hide_path }) => (
    <Layout>
        <SEO title="Service Mesh Books" />
        <Navigation />
        <BookPage hide_path={hide_path} />
        <Footer />
    </Layout>
);
export default BooksGridPage;
