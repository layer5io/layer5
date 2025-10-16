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

const cookieData = [
  {
    section: "Third-Party Cookies",
    rows: [
      {
        provider: "Google",
        description: "We use Google Tag Manager, Google Analytics, Google Ads conversion tracking, and Google reCAPTCHA to manage tracking, analyze website usage, and prevent automated abuse. Google Analytics uses anonymized IP addresses to ensure no direct correlation to individuals.",
        category: "Functional and Marketing",
        privacyLink: "<a href=\"https://policies.google.com/privacy\">Google Privacy Preferences</a>",
      },
      {
        provider: "Cloudflare",
        description: "Cloudflare cookies distinguish users sharing the same IP address for rate limiting and performance optimization.",
        category: "Necessary & Performance",
        privacyLink: "<a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflare Privacy Policy</a>",
      },
      {
        provider: "GitHub",
        description: "GitHub cookies support seamless integration with our open-source community platforms, such as remembering your preferences during contributions.",
        category: "Functional",
        privacyLink: "<a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement\">GitHub Privacy Policy</a>",
      },
      {
        provider: "Slack",
        description: "Slack cookies enhance your experience in our community channels by remembering preferences and enabling seamless communication.",
        category: "Functional",
        privacyLink: "<a href=\"https://slack.com/trust/privacy/privacy-policy\">Slack Privacy Policy</a>",
      },
    ],
  },
];

const CookieNotice = () => {
  const { isDark } = useStyledDarkMode();

  return (
    <TermsWrapper>
      <div className="page-header-section">
        <h1>Cookie Notice</h1>
      </div>
      <TOC />
      <div className="terms-content">
        <Container>
          <p>
            <small>
              <i>Effective Date: August 1, 2025</i>
            </small>
          </p>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <p>
              Welcome to Layer5, Inc. We are committed to protecting your privacy and providing transparency about how we use cookies and similar technologies on our websites, including layer5.io, meshery.dev, getnighthawk.dev, cloud.layer5.io, kanvas.new, and any related subdomains. This Cookie Notice explains what cookies are, how we use them, the types of cookies we employ, and how you can manage your cookie preferences.
              </p>
              <h3>General Information</h3>
              <p>
              When you visit our websites, we may store or retrieve information on your browser, primarily through cookies. Cookies are small text files placed on your device to store information such as your preferences, login details, or browsing behavior. This information helps our websites function properly, enhances your user experience, and supports analytics and marketing efforts.
              </p>
              <p>
              We use both <strong>first-party cookies</strong> (set by us) and <strong>third-party cookies</strong> (set by our trusted partners) for various purposes, such as improving site performance, personalizing content, and tailoring advertisements. This Cookie Notice applies to all Layer5 websites as defined in our <a href="/company/legal/privacy">Privacy Notice</a>.
              </p>
              <p>
              Because we respect your right to privacy, you can choose not to allow certain types of cookies. However, blocking some cookies may affect your experience on our websites and the services we provide.
              </p>
              <h3>Types of Cookies We Use</h3>
              <p>
              We utilize session-based and persistent cookies, as well as similar technologies like web beacons, to enhance user-friendliness and gather insights about website usage. Below are the categories of cookies we use:
              </p>
              <ul>
                <li>
                  <strong>Necessary Cookies:</strong> These cookies are essential for our websites to function properly and cannot be disabled in our systems. They are typically set in response to your actions, such as setting privacy preferences, logging in, or filling out forms. While you can configure your browser to block these cookies, doing so may cause some parts of our websites to malfunction. These cookies do not store personally identifiable information.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These cookies help us measure and improve our websites’ performance by collecting aggregated, anonymous data about visits and traffic sources. They allow us to understand which pages are most and least popular and how visitors navigate our sites. If you disable these cookies, we will not be able to track your visits or optimize site performance.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences or enabling specific features. They may be set by us or by third-party providers whose services we integrate. Disabling these cookies may limit the functionality of certain services.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> These cookies are used by our advertising partners to build a profile of your interests and deliver relevant ads on other websites. They identify your browser and device but do not store directly personal information. If you disable these cookies, you will experience less targeted advertising.
                </li>
              </ul>
              <p>
              To review or modify your cookie preferences, click <strong>Select Cookie Settings</strong> in the cookie banner or the link in our website footer.
              </p>
              <h3>Cookie Settings</h3>
              <p>
              You can manage your cookie preferences at any time through our <strong>Privacy Preference Center</strong>, accessible via the <strong>Select Cookie Settings</strong> link in the cookie banner or our website footer. This tool allows you to enable or disable non-essential cookies and withdraw consent as easily as you provided it.
              </p>
              <p>
              You can also prevent cookies by adjusting your browser settings to block them. Note that disabling cookies may limit certain features or functionalities on our websites. For specific third-party cookies, you can opt out by following the instructions in their respective privacy notices (see below).
              </p>
              <h3>Third-Party Cookies</h3>
              <p>
              Third-party cookies are set by domains other than Layer5’s to support analytics, advertising, or other functionalities. These cookies may collect data across multiple websites to tailor ads based on your interests. Below is a list of third-party providers we use, along with their purposes and opt-out options:
              </p>
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Row className="table-container" $Hcenter>
                  <Col md={12} sx={{ px: 0 }}>
                    <StyledTableContainer>
                      <Table size="small" aria-label="cookie-data">
                        <caption id="tableCaption_01">Table 1: Third-Party Cookies Used on Layer5 Websites</caption>
                        <TableHead>
                          <TableRow>
                            <StyledHeaderCell>Third Party</StyledHeaderCell>
                            <StyledHeaderCell>Description</StyledHeaderCell>
                            <StyledHeaderCell>Category</StyledHeaderCell>
                            <StyledHeaderCell>Privacy Notice</StyledHeaderCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {cookieData.map((section, index) => (
                            <React.Fragment key={index}>
                              <StyledTableRow>
                                <StyledTableCell colSpan={4} sx={{ fontWeight: 600 }}>
                                  {section.section}
                                </StyledTableCell>
                              </StyledTableRow>
                              {section.rows.map((row, rowIndex) => (
                                <StyledTableRow key={`${index}-${rowIndex}`}>
                                  <StyledTableCell>{row.provider}</StyledTableCell>
                                  <StyledTableCell>{row.description}</StyledTableCell>
                                  <StyledTableCell>{row.category}</StyledTableCell>
                                  <StyledTableCell dangerouslySetInnerHTML={{ __html: row.privacyLink }} />
                                </StyledTableRow>
                              ))}
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </StyledTableContainer>
                  </Col>
                </Row>
              </SistentThemeProvider>
              <p>
              You can also opt out of certain third-party cookies via the <a href="https://optout.aboutads.info">Digital Advertising Alliance’s opt-out tool</a> or, for European visitors, <a href="https://www.youronlinechoices.eu">Your Online Choices</a>.
              </p>
              <p>
              We do not knowingly share personal information with third-party advertising or marketing services in a manner that would constitute a “sale” under the California Consumer Privacy Act (CCPA).
              </p>
              <h3>Further Information</h3>
              <p>
              For more details about how we process your personal data, please review our <a href="/company/legal/privacy">Privacy Notice</a>. If you have questions or wish to exercise your data protection rights, contact us at the details below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="conduct_heading">
                <h2 id="how-to-contact-us">How to Contact Us</h2>
              </div>
              <p>
              We welcome your comments or questions about this Cookie Notice. You may contact us as follows:
              </p>
              <p className="address">
                <b>Layer5, Inc</b>
                <br />
              1000 Congress Avenue
                <br />
              Austin, Texas 78735
                <br />
              Email Address: <a href="mailto:privacy@layer5.io">privacy@layer5.io</a>
                <br />
              Telephone number: 512-810-8200
              </p>
              <p>
                <small>
                  <i>Last Updated: August 1, 2025</i>
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

export default CookieNotice;