import React from "react";
import Layout from "./src/components/layout.js";

export const wrapPageElement = ({ element ,props }) => (
  <Layout location={props.location}>
    {element}
  </Layout>
);