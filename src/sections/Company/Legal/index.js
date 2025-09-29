import React from "react";
import { HandbookWrapper } from "../../../sections/Community/Handbook/Handbook.style.js";
import LegalCard from "../../../components/HandbookCard/index";

const trustCenter = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Trust Center</h1>
      </div>

      <div className="community-home-subtitle">
        <h3>Explore the Layer5 Trust Center</h3>
      </div>

      <div className="community-home-container">

        <LegalCard
          title="Privacy"
          description="Layer5 offers cloud native application management by harnessing the power of a developer-friendly applications management system that supports visualization of the modern infrastructure leading to effective operation with best practices."
          to="/company/legal/privacy"
        />

        <LegalCard
          title="Code of Conduct"
          description="At Layer5 We follow the CNCF Code of Conduct. We pledge to respect all people who contribute through reporting issues, to submit pull requests or patches, and other activities."
          to="/company/legal/code-of-conduct"
        />

        <LegalCard
          title="Sub-Processors and Service Providers"
          description="We use third-party service providers (sub-processors) to help us provide and improve our services. These sub-processors may have access to your personal data as necessary to perform their functions."
          to="/company/legal/sub-processors"
        />

        <LegalCard
          title="Terms of Service"
          description="Please read these Terms of Service ('Terms', 'Terms of Service') carefully before using the https://layer5.io website (the 'Service') operated by Layer5, Inc ('us', 'we', or 'our')."
          to="/company/legal/terms-of-service"
        />
        <LegalCard
          title="Cookie Notice"
          description="Learn how Layer5 uses cookies and similar technologies to enhance your experience, support analytics, and protect your privacy. Review the types of cookies we use and manage your preferences."
          to="/company/legal/cookie-notice"
        />
      </div>
    </HandbookWrapper>
  );
};

export default trustCenter;
