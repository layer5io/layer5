
import React from "react";
import { Container, Row, Col } from "../../../../reusecore/Layout";
import PageHeader from "../../../../reusecore/PageHeader";

import TermsWrapper from "../terms.style";

const subProcessors = () => {
  return (
    <TermsWrapper>
      <PageHeader title="Sub-Processors and Service Providers" path="Terms > Sub-Processors and Service Providers" />
      <Container>
        <Row>
          <Col $xs={12} $sm={12} $lg={12}>
            <p>
            This document outlines the sub-processors and service providers that Layer5 works with to deliver our services. For comprehensive information about how we collect, use, and protect your personal data, please refer to our <a href="/company/legal/privacy">Privacy Policy</a>.</p>
            <p>
            To deliver our services effectively, Layer5, Inc. partners with various sub-processors, subsidiaries, and support providers. We may share customer data with the entities listed below to support our platform's functionality and performance.
            </p>

            <h3>Third-Party Sub-Processors</h3>
            <p>We engage the third-party organizations listed below to host customer data and provide specific functionalities within the Layer5 platform. These partners are integral to our service delivery and infrastructure.</p>

            <p>The hosting region for a sub-processor will typically align with your account's designated data region. For details on whether a specific sub-processor applies to your account's data region or service plan, please consult the Additional Information column in the list that follows.</p>
            <table className="simple">
              <caption id="tableCaption_01">Table 1: Sub-Processors, Subsidiaries & Support</caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Applicable Services</th>
                  <th scope="col">Type of Service</th>
                  <th scope="col">Data Shared</th>
                  <th scope="col">Sub-Processor Hosting Regions</th>
                  <th scope="col">Additional Information</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="section">
                  <td colSpan="4"><strong>When you browse our websites (layer5.io, getnighthawk.dev, meshery.dev, ) and applications (cloud.layer5.io, kanvas.new)</strong></td>
                </tr> */}
                <tr>
                  <td>Amazon Web Services US</td>
                  <td>Community Discussion Forum</td>
                  <td>Cloud computing provider</td>
                  <td>Community Discussion Forum user account data, posts, and comments therein.</td>
                  <td>United States</td>
                  <td>All accounts</td>
                </tr>
                <tr>
                  <td>Equinix</td>
                  <td>Layer5 Cloud</td>
                  <td>Data center provider</td>
                  <td>Layer5 Cloud user account data, including email addresses and hashed passwords.</td>
                  <td>United States</td>
                  <td>All accounts</td>
                </tr>
                <tr>
                  <td>GitHub, Inc.</td>
                  <td>Layer5 Cloud</td>
                  <td>Code repository and version control</td>
                  <td>Issue tracking</td>
                  <td>United States</td>
                </tr>
                <tr>
                  <td>Cloudflare, Inc.</td>
                  <td>Layer5 Cloud, kanvas.new</td>
                  <td>Content delivery network and DDoS mitigation</td>
                  <td>Web traffic data</td>
                  <td>United States</td>
                  <td>All accounts</td>
                </tr>
                <tr>
                  <td>Stripe</td>
                  <td>Layer5 Cloud, kanvas.new</td>
                  <td>Payment processing</td>
                  <td>Payment information</td>
                  <td>United States</td>
                  <td>All accounts</td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Internal Communications, Customer support messaging</td>
                  <td>Communication platform</td>
                  <td>Messages, files, and user information</td>
                  <td>United States</td>
                  <td>Used for internal team communication and customer support interactions.</td>
                </tr>
              </tbody>
              {/* <tfoot>
                <th scope="row">INTERNAL DOC#</th>
                <td>#gdpr-10c</td>
                <td>#gdpr-2</td>
                <td>#gdpr-9b</td>
              </tfoot> */}
            </table>
            <table>
              <caption id="tableCaption_02">Table 2: Service Providers Contact Information</caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contact Information</th>
                  <th scope="col">Data Protection Addendum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Amazon Web Services US</td>
                  <td><a href="https://aws.amazon.com/contact-us/">https://aws.amazon.com/contact-us/</a></td>
                  <td><a href="https://aws.amazon.com/compliance/data-privacy-faq/">https://aws.amazon.com/compliance/data-privacy-faq/</a></td>
                </tr>
                <tr>
                  <td>Equinix</td>
                  <td><a href="https://www.equinix.com/contact-us/">https://www.equinix.com/contact-us/</a></td>
                  <td><a href="https://www.equinix.com/legal/data-protection-addendum/">https://www.equinix.com/legal/data-protection-addendum/</a></td>
                </tr>
                <tr>
                  <td>GitHub, Inc.</td>
                  <td>GitHub Privacy Office<br />
88 Colin P. Kelly Jr. Street<br />
San Francisco, California 94107 USA<br />
dpo@github.com<br />
                    <a href="https://support.github.com/contact">https://support.github.com/contact</a></td>
                  <td><a href="https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-addendum">https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-addendum</a></td>
                </tr>
                <tr>
                  <td>Cloudflare, Inc.</td>
                  <td>
101 Townsend Street<br />
San Francisco, CA 94107<br />
USA<br />
Emily Hancock<br />
Data Protection Officer<br />
legal@cloudflare.com<br />
                    <a href="https://www.cloudflare.com/contact/">https://www.cloudflare.com/contact/</a></td>
                  <td><a href="https://www.cloudflare.com/terms/cloudflare-dpa/">https://www.cloudflare.com/terms/cloudflare-dpa/</a></td>
                </tr>
                <tr>
                  <td>Stripe</td>
                  <td>Stripe, Inc.<br />
510 Townsend St.<br />
San Francisco, CA 94103<br />
USA<br />
dpo@stripe.com<br />
                    <a href="https://support.stripe.com/contact">https://support.stripe.com/contact</a></td>
                  <td><a href="https://stripe.com/privacy">https://stripe.com/privacy</a></td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td>Slack Technologies, LLC<br />
                    500 Howard Street<br />
                    San Francisco, CA 94105<br />
                    USA<br />
                    dpo@slack.com<br />
                    <a href="https://slack.com/contact">https://slack.com/contact</a></td>
                  <td><a href="https://slack.com/privacy">https://slack.com/privacy</a></td>
                </tr>
              </tbody>
            </table>
            <h3>Data Hosting Locations</h3>
            <p>To provide our users with transparency about where their data is stored, Layer5 has defined primary hosting locations for its services. Data is stored in a specific region in the United States based on the service used.</p>

            <p>Layer5 Cloud Account Data (cloud.layer5.io): All user account data is hosted in the United States at an Equinix datacenter in Dallas, Texas.</p>

            <p>Layer5 Discussion Forum Data (discuss.layer5.io): All forum data is hosted in the United States within the Amazon Web Services (AWS) US East region.</p>

            <p>Please note that in some cases, certain third-party services (sub-processors) that we use to deliver our services may operate and process data in additional regions.</p>
            <p>

              <h3>Can I change my data region?</h3>

              <p>Since data is physically stored in a predetermined location, once an account begins storing data it cannot be moved. If you want to switch to a different region, contact your local partner or Enterprise account manager to create a new account hosted in the region of your choice going forward.</p>

              <i>Last Updated: Sept 25th, 2025</i>
            </p>
          </Col>
        </Row>
      </Container>
    </TermsWrapper>
  );
};

export default subProcessors;