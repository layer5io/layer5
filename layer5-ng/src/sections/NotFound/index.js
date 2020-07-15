import React from "react";
import { Link } from "gatsby";

import ContentWrappper from "./notFound.style";

const NotFound = () => {
  return (
    <ContentWrappper>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </ContentWrappper>
  );
};

export default NotFound;
