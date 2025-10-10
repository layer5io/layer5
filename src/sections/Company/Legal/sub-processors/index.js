import React from "react";
import { Container, Row, Col } from "../../../../reusecore/Layout";
import TermsWrapper from "../terms.style";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";
import {
  styled,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  SistentThemeProvider,
} from "@sistent/sistent";
import TOC from "../../../../components/legal-navigation/index";
import TocPagination from "../../../../components/legal-navigation/TocPagination";



// Styled components from Privacy page
const StyledTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  backgroundColor: "transparent",
  boxShadow: "none",
  padding: 0,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-child(odd)": {
    backgroundColor: theme.palette.background.default,
    borderRadius: "0px",
  },
  "&:nth-child(even)": {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: "0px",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.975rem",
  padding: "0.75rem",
  borderBottom: `1px solid ${theme.palette.divider}`,
  borderRadius: "0px",
}));

const StyledHeaderCell = styled(StyledTableCell)(() => ({
  fontWeight: 600,
  backgroundColor: "transparent",
}));

// Data structure for sub-processors and service providers
const subProcessorData = [
  {
    section: "Third-Party Sub-Processors",
    rows: [
      {
        name: "Amazon Web Services US",
        applicableServices: "Community Discussion Forum",
        typeOfService: "Cloud computing provider",
        dataShared: "Community Discussion Forum user account data, posts, and comments therein.",
        hostingRegions: "United States",
        additionalInfo: "All accounts",
      },
      {
        name: "Equinix",
        applicableServices: "Layer5 Cloud",
        typeOfService: "Data center provider",
        dataShared: "Layer5 Cloud user account data, including email addresses and hashed passwords.",
        hostingRegions: "United States",
        additionalInfo: "All accounts",
      },
      {
        name: "GitHub, Inc.",
        applicableServices: "Layer5 Cloud",
        typeOfService: "Code repository and version control",
        dataShared: "Issue tracking",
        hostingRegions: "United States",
        additionalInfo: "",
      },
      {
        name: "Cloudflare, Inc.",
        applicableServices: "Layer5 Cloud, kanvas.new",
        typeOfService: "Content delivery network and DDoS mitigation",
        dataShared: "Web traffic data",
        hostingRegions: "United States",
        additionalInfo: "",
      },
      {
        name: "Stripe",
        applicableServices: "Layer5 Cloud, kanvas.new",
        typeOfService: "Payment processing",
        dataShared: "Payment information",
        hostingRegions: "United States",
        additionalInfo: "Commercial accounts only",
      },
      {
        name: "Slack",
        applicableServices: "Internal Communications, Customer support messaging",
        typeOfService: "Communication platform",
        dataShared: "Messages, files, and user information",
        hostingRegions: "United States",
        additionalInfo: "Used for internal team communication and customer support interactions.",
      },
      {
        name: "Celonis, Inc. (make.com)",
        applicableServices: "Layer5 Cloud (for workflow automation), open source community, Slack, and MailChimp",
        typeOfService: "Workflow automation platform",
        dataShared: "Workflow data and user information",
        hostingRegions: "United States",
        additionalInfo: "Used for automating workflows within Layer5 Cloud and open source community.",
      },
      {
        name: "ClickUp",
        applicableServices: "Project Management and Task Tracking",
        typeOfService: "Project management software",
        dataShared: "Project data, tasks, and user information",
        hostingRegions: "United States",
        additionalInfo: "Used for managing internal projects and customer support tasks.",
      },
      {
        name: "Atlassian StatusPage",
        applicableServices: "Public Service Status and Incident Communication",
        typeOfService: "Status page hosting and incident communication",
        dataShared: "Service status data and user information",
        hostingRegions: "United States",
        additionalInfo: "Used for communicating service status and incidents to users.",
      },
    ],
  },
  {
    section: "Service Providers Contact Information",
    rows: [
      {
        name: "Amazon Web Services US",
        contactInfo: "<a href=\"https://aws.amazon.com/contact-us/\">https://aws.amazon.com/contact-us/</a>",
        dataProtectionAddendum: "<a href=\"https://aws.amazon.com/compliance/data-privacy-faq/\">https://aws.amazon.com/compliance/data-privacy-faq/</a>",
      },
      {
        name: "Equinix",
        contactInfo: "<a href=\"https://www.equinix.com/contact-us/\">https://www.equinix.com/contact-us/</a>",
        dataProtectionAddendum: "<a href=\"https://www.equinix.com/legal/data-protection-addendum/\">https://www.equinix.com/legal/data-protection-addendum/</a>",
      },
      {
        name: "GitHub, Inc.",
        contactInfo: "GitHub Privacy Office<br />88 Colin P. Kelly Jr. Street<br />San Francisco, California 94107 USA<br />dpo@github.com<br /><a href=\"https://support.github.com/contact\">https://support.github.com/contact</a>",
        dataProtectionAddendum: "<a href=\"https://docs.github.com/en/site-policy/privacy-policies\">https://docs.github.com/en/site-policy/privacy-policies</a>",
      },
      {
        name: "Cloudflare, Inc.",
        contactInfo: "101 Townsend Street<br />San Francisco, CA 94107<br />USA<br />Emily Hancock<br />Data Protection Officer<br />legal@cloudflare.com<br /><a href=\"https://www.cloudflare.com/contact/\">https://www.cloudflare.com/contact/</a>",
        dataProtectionAddendum: "<a href=\"https://www.cloudflare.com/terms/cloudflare-dpa/\">https://www.cloudflare.com/terms/cloudflare-dpa/</a>",
      },
      {
        name: "Stripe",
        contactInfo: "Stripe, Inc.<br />510 Townsend St.<br />San Francisco, CA 94103<br />USA<br />dpo@stripe.com<br /><a href=\"https://support.stripe.com/contact\">https://support.stripe.com/contact</a>",
        dataProtectionAddendum: "<a href=\"https://stripe.com/privacy\">https://stripe.com/privacy</a>",
      },
      {
        name: "Slack",
        contactInfo: "Slack Technologies, LLC<br />500 Howard Street<br />San Francisco, CA 94105<br />USA<br />dpo@slack.com<br /><a href=\"https://slack.com/contact\">https://slack.com/contact</a>",
        dataProtectionAddendum: "<a href=\"https://slack.com/privacy\">https://slack.com/privacy</a>",
      },
      {
        name: "Celonis, Inc. (make.com)",
        contactInfo: "Celonis, Inc.<br />800 W El Camino Real, Suite 180<br />Mountain View, CA 94040<br />USA<br />dpo@celonis.com<br /><a href=\"https://www.celonis.com/contact/\">https://www.celonis.com/contact/</a>",
        dataProtectionAddendum: "<a href=\"https://www.make.com/en/privacy-and-gdpr\">https://www.make.com/en/privacy-and-gdpr</a>",
      },
      {
        name: "ClickUp",
        contactInfo: "ClickUp, Inc.<br />55 Almaden Blvd, Suite 650<br />San Jose, CA 95113<br />USA<br />dpo@clickup.com<br /><a href=\"https://www.clickup.com/contact\">https://www.clickup.com/contact</a>",
        dataProtectionAddendum: "<a href=\"https://www.clickup.com/privacy\">https://www.clickup.com/privacy</a>",
      },
      {
        name: "Atlassian StatusPage",
        contactInfo: "Atlassian, Inc.<br />350 Bush Street, 6th Floor<br />San Francisco, CA 94104<br />USA<br />dpo@atlassian.com<br /><a href=\"https://www.atlassian.com/contact\">https://www.atlassian.com/contact</a>",
        dataProtectionAddendum: "<a href=\"https://www.atlassian.com/legal/privacy-policy\">https://www.atlassian.com/legal/privacy-policy</a>",
      },
    ],
  },
];

const SubProcessors = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <TermsWrapper>
      <div className="page-header-section">
        <h1>Sub-Processors and Service Providers</h1>
      </div>
      <TOC />
      <div className="terms-content">
        <Container>
          <p>
            <small>
              <i>Effective Date: March 8th, 2024</i>
              <br />
              <i>Version 4</i>
            </small>
          </p>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <p>
              This document outlines the sub-processors and service providers that Layer5 works with to deliver our services. For comprehensive information about how we collect, use, and protect your personal data, please refer to our <a href="/company/legal/privacy">Privacy Policy</a>.
              </p>
              <p>
              To deliver our services effectively, Layer5, Inc. partners with various sub-processors, subsidiaries, and support providers. We may share customer data with the entities listed below to support our platform's functionality and performance.
              </p>
              <h3>Data Hosting Locations</h3>
              <p>
              To provide our users with transparency about where their data is stored, Layer5 has defined primary hosting locations for its services. Data is stored in a specific region in the United States based on the service used.
              </p>
              <ul>
                <li><strong>Layer5 Cloud Account Data (cloud.layer5.io):</strong> All user account data is hosted in the United States at an Equinix datacenter in Dallas, Texas.</li>
                <li><strong>Kanvas (kanvas.new):</strong> Design data is hosted in the United States at an Equinix datacenter in Dallas, Texas.</li>
                <li><strong>Layer5 Discussion Forum Data (discuss.layer5.io):</strong> All forum data is hosted in the United States within the Amazon Web Services (AWS) US East region.</li>
              </ul>
              <p>
              Please note that in some cases, certain third-party services (sub-processors) that we use to deliver our services may operate and process data in additional regions.
              </p>
              <h4>Can I change my data region?</h4>
              <p>
              Since data is physically stored in a predetermined location, once an account begins storing data it cannot be moved. If you want to switch to a different region, contact your local partner or Enterprise account manager to create a new account hosted in the region of your choice going forward.
              </p>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Row className="table-container" $Hcenter>
                  <Col md={12} sx={{ px: 0 }}>
                    {subProcessorData.map((section, index) => (
                      <StyledTableContainer key={index}>
                        <Table size="small" aria-label={`${section.section.toLowerCase().replace(/\s+/g, "-")}-table`}>
                          <caption>{`Table ${index + 1}: ${section.section}`}</caption>
                          <TableHead>
                            <TableRow>
                              {section.section === "Third-Party Sub-Processors" ? (
                                <>
                                  <StyledHeaderCell>Name</StyledHeaderCell>
                                  <StyledHeaderCell>Applicable Services</StyledHeaderCell>
                                  <StyledHeaderCell>Type of Service</StyledHeaderCell>
                                  <StyledHeaderCell>Data Shared</StyledHeaderCell>
                                  <StyledHeaderCell>Sub-Processor Hosting Regions</StyledHeaderCell>
                                  <StyledHeaderCell>Additional Information</StyledHeaderCell>
                                </>
                              ) : (
                                <>
                                  <StyledHeaderCell>Name</StyledHeaderCell>
                                  <StyledHeaderCell>Contact Information</StyledHeaderCell>
                                  <StyledHeaderCell>Data Protection Addendum</StyledHeaderCell>
                                </>
                              )}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <StyledTableRow>
                              <StyledTableCell colSpan={section.section === "Third-Party Sub-Processors" ? 6 : 3} sx={{ fontWeight: 600 }}>
                                {section.section}
                              </StyledTableCell>
                            </StyledTableRow>
                            {section.rows.map((row, rowIndex) => (
                              <StyledTableRow key={`${index}-${rowIndex}`}>
                                <StyledTableCell>{row.name}</StyledTableCell>
                                {section.section === "Third-Party Sub-Processors" ? (
                                  <>
                                    <StyledTableCell>{row.applicableServices}</StyledTableCell>
                                    <StyledTableCell>{row.typeOfService}</StyledTableCell>
                                    <StyledTableCell>{row.dataShared}</StyledTableCell>
                                    <StyledTableCell>{row.hostingRegions}</StyledTableCell>
                                    <StyledTableCell>{row.additionalInfo}</StyledTableCell>
                                  </>
                                ) : (
                                  <>
                                    <StyledTableCell dangerouslySetInnerHTML={{ __html: row.contactInfo }} />
                                    <StyledTableCell dangerouslySetInnerHTML={{ __html: row.dataProtectionAddendum }} />
                                  </>
                                )}
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </StyledTableContainer>
                    ))}
                  </Col>
                </Row>
              </SistentThemeProvider>
              <p>
                <small>
                  <i>Last Updated: Sept 25th, 2025</i>
                </small>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <TocPagination />
    </TermsWrapper>
  );
};

export default SubProcessors;