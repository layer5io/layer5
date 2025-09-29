import React from "react";
import SEO from "../../../components/seo";
import CookieNotice from "../../../sections/Company/Legal/cookie-notice";

const CookieNoticePage = () => {
  return (
    <>
      <CookieNotice />
    </>
  );
};
export default CookieNoticePage;
export const Head = () => {
  return <SEO title="Cookie Notice" description="Learn how Layer5 uses cookies and how you can manage your preferences." />;
};