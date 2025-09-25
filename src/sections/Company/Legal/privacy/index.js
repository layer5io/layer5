import React from "react";

import { Container, Row, Col } from "../../../../reusecore/Layout";
import PageHeader from "../../../../reusecore/PageHeader";

import TermsWrapper from "../terms.style";

const Privacy = () => {
  return (
    <TermsWrapper>
      <PageHeader title="Privacy" path="Terms > Privacy" />
      <Container>
        <Row>
          <Col $xs={12} $sm={12} $lg={12}>
            <h1>Layer5 Privacy Notice</h1>
            <strong>Effective Date:</strong>
            <h3>Section 2.1: Introduction</h3>
            <p>
              Welcome to Layer5. We are Layer5, Inc., the company behind the cloud native management platform Meshery, the Layer5 Cloud service, and a vibrant global open-source community. We are committed to protecting your privacy and being transparent about how we handle your personal data.
            </p>
            <p>
              This Privacy Notice explains what personal data we collect when you visit our websites, use our services, or participate in our community. It also describes why we collect it, how we use and protect it, and what rights you have regarding your personal data.
            </p>
            <h3>Section 2.2: Who We Are and How to Contact Us</h3>
            <p>
              The data controller responsible for your personal data is:
            </p>
            <p>
              Layer5, Inc.
            </p>
            <p>
              If you have any questions about this Privacy Notice or wish to exercise your data protection rights, please contact us at our dedicated privacy email address: privacy@layer5.io.
            </p>
            <p>
              <strong>Important Clarification:</strong> This Privacy Notice applies solely to the services, websites, and communities operated by Layer5, Inc., accessible via the layer5.io domain and its subdomains. It does not apply to any other company or organization that may have a similar name, such as Layer 5 Solutions Ltd.9
            </p>
            <h3>Section 2.3: Personal Data We Collect, Our Purposes, and Lawful Bases</h3>
            <p>
              We process your personal data for a variety of purposes depending on how you interact with us. The table below details what we collect, why we collect it, and the legal justification (lawful basis) under the GDPR for doing so.
            </p>
            <p>
              <strong>Table 2: Summary of Our Data Processing Activities</strong>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Our Purpose for Processing Your Data</th>
                  <th>Categories of Personal Data We Process</th>
                  <th>Our Lawful Basis for Processing (under GDPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3"><strong>When you browse our website (layer5.io)</strong></td>
                </tr>
                <tr>
                  <td>To operate, secure, and maintain our website.</td>
                  <td>IP Address, device type, browser information, server logs.</td>
                  <td><strong>Legitimate Interest</strong> (Article 6(1)(f)) - to ensure the security, availability, and performance of our digital properties.</td>
                </tr>
                <tr>
                  <td>To analyze website usage and improve user experience.</td>
                  <td>Anonymized IP address, cookie identifiers, pages visited, duration of visit, clickstream data.</td>
                  <td><strong>Consent</strong> (Article 6(1)(a)) - for non-essential analytics and tracking cookies. You can manage your consent through our cookie banner.</td>
                </tr>
                <tr>
                  <td colSpan="3"><strong>When you join our community (e.g., Slack, Forum, GitHub)</strong></td>
                </tr>
                <tr>
                  <td>To manage your participation and facilitate collaboration in our open-source projects.</td>
                  <td>Name, email address, GitHub username, public profile information, content of your contributions (code, comments, issues), and communications.</td>
                  <td><strong>Legitimate Interest</strong> (Article 6(1)(f)) - to operate, manage, and grow our collaborative open-source community.</td>
                </tr>
                <tr>
                  <td colSpan="3"><strong>When you sign up for and use Layer5 Cloud</strong></td>
                </tr>
                <tr>
                  <td>To create and manage your account and provide our services to you.</td>
                  <td>Name, email address, company name, securely hashed password, GitHub user ID (if used for single sign-on).</td>
                  <td><strong>Performance of a Contract</strong> (Article 6(1)(b)) - this data is necessary to fulfill our contractual obligation to provide the service you have signed up for.</td>
                </tr>
                <tr>
                  <td>To process payments for our paid subscription plans.</td>
                  <td>Billing address, payment card information (we do not store full card details; they are securely processed by our payment provider, who provides us with a transaction token and confirmation).</td>
                  <td><strong>Performance of a Contract</strong> (Article 6(1)(b)).</td>
                </tr>
                <tr>
                  <td>To communicate with you about the service (e.g., important updates, security alerts, billing information).</td>
                  <td>Email address.</td>
                  <td><strong>Performance of a Contract</strong> (Article 6(1)(b)) and <strong>Legitimate Interest</strong> (Article 6(1)(f)) - to provide you with essential information about the service you are using.</td>
                </tr>
                <tr>
                  <td>To monitor service performance and improve our products.</td>
                  <td>Service usage data, API logs, user activity logs, device and browser information.</td>
                  <td><strong>Legitimate Interest</strong> (Article 6(1)(f)) - to maintain and improve the quality and functionality of our services.</td>
                </tr>
                <tr>
                  <td colSpan="3"><strong>When you contact us for support or information</strong></td>
                </tr>
                <tr>
                  <td>To respond to your inquiries and provide customer support.</td>
                  <td>Name, email address, and any other information you provide in the content of your message.</td>
                  <td><strong>Legitimate Interest</strong> (Article 6(1)(f)) - to effectively respond to user inquiries and provide assistance.</td>
                </tr>
                <tr>
                  <td colSpan="3"><strong>When you subscribe to our marketing communications</strong></td>
                </tr>
                <tr>
                  <td>To send you newsletters, product updates, and other marketing materials.</td>
                  <td>Name, email address.</td>
                  <td><strong>Consent</strong> (Article 6(1)(a)) - you provide your consent when you opt-in to receive these communications, and you can unsubscribe at any time.</td>
                </tr>
              </tbody>
            </table>
            <h3>Section 2.4: Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies on our website to help it function, to analyze performance, and to personalize your experience. A cookie is a small text file stored on your device.
            </p>
            <ul>
              <li><strong>Strictly Necessary Cookies:</strong> These are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.</li>
              <li><strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Marketing Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.</li>
            </ul>
            <p>
              We will not set non-essential cookies on your device without your explicit consent. You can manage your cookie preferences at any time through our cookie consent tool, which is accessible via a link in the footer of our website. Withdrawing your consent is as easy as giving it.
            </p>
            <h3>Section 2.5: Who We Share Your Personal Data With</h3>
            <p>
              We do not sell your personal data. However, we share it with trusted third-party service providers who act as our data processors to help us operate our business and services. We only share the minimum amount of data necessary and have contracts in place that require them to keep your information secure and only use it for the purposes we specify.
            </p>
            <p>
              Categories of these recipients include:
            </p>
            <ul>
              <li><strong>Cloud & Hosting Providers:</strong> We use third-party cloud infrastructure providers (e.g., Amazon Web Services, Google Cloud) to host our website, services, and data.</li>
              <li><strong>Payment Processors:</strong> We use secure third-party payment processors (e.g., Stripe) to handle financial transactions for our paid services.</li>
              <li><strong>Analytics & Monitoring Services:</strong> We use services (e.g., Google Analytics) to help us understand how our website and services are used so we can improve them.</li>
              <li><strong>Communication & Collaboration Platforms:</strong> Our open-source community operates on platforms like GitHub and Slack. When you participate, your data is processed by these platforms according to their own privacy policies.</li>
              <li><strong>Business & Support Tools:</strong> We use third-party software for customer support (e.g., Zendesk) and customer relationship management (e.g., HubSpot) to communicate with you effectively.</li>
              <li><strong>Email and Marketing Automation Providers:</strong> We use third-party services to send transactional emails and marketing communications.</li>
            </ul>
            <p>
              We may also disclose your personal data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
            </p>
            <h3>Section 2.6: International Transfers of Personal Data</h3>
            <p>
              Layer5, Inc. is based in the United States. Your personal data will be processed in the United States and other countries where our third-party service providers are located. When we transfer personal data from the European Economic Area (EEA), the UK, or Switzerland to other countries, we do so in compliance with applicable data protection laws.
            </p>
            <p>
              For transfers of data to countries not deemed to provide an adequate level of data protection by the European Commission, we rely on legal safeguards, primarily the European Commission's Standard Contractual Clauses (SCCs), to ensure your data is protected.
            </p>
            <h3>Section 2.7: How Long We Keep Your Personal Data</h3>
            <p>
              We retain your personal data only for as long as is necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process it, and whether we can achieve those purposes through other means.
            </p>
            <ul>
              <li><strong>Account Data:</strong> We retain your Layer5 Cloud account data for as long as your account is active and for a period of 12 months thereafter to allow for account reactivation and to resolve any final billing or support issues.</li>
              <li><strong>Financial Data:</strong> Data related to financial transactions is retained for 7 years to comply with legal and tax obligations.</li>
              <li><strong>Community Contributions:</strong> Your contributions to our open-source projects on platforms like GitHub (e.g., code, comments, issues) are part of the public project record and are retained indefinitely.</li>
              <li><strong>Website Analytics Data:</strong> Data collected for analytics purposes is typically retained in an aggregated or anonymized form for up to 26 months.</li>
            </ul>
            <h3>Section 2.8: Your Data Protection Rights</h3>
            <p>
              Under the GDPR, you have several important rights regarding your personal data. These include:
            </p>
            <ul>
              <li><strong>The right to be informed:</strong> You have the right to be provided with clear, transparent, and easily understandable information about how we use your information and your rights.</li>
              <li><strong>The right of access:</strong> You have the right to obtain access to your personal data.</li>
              <li><strong>The right to rectification:</strong> You are entitled to have your information corrected if it is inaccurate or incomplete.</li>
              <li><strong>The right to erasure:</strong> Also known as ‘the right to be forgotten,’ this enables you to request the deletion or removal of your information where there is no compelling reason for us to keep using it.</li>
              <li><strong>The right to restrict processing:</strong> You have rights to ‘block’ or suppress further use of your information.</li>
              <li><strong>The right to data portability:</strong> You have the right to obtain and reuse your personal data for your own purposes across different services.</li>
              <li><strong>The right to object:</strong> You have the right to object to certain types of processing, such as direct marketing.</li>
              <li><strong>Rights in relation to automated decision making and profiling:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you.</li>
            </ul>
            <h3>Section 2.9: How to Exercise Your Rights</h3>
            <p>
              To exercise any of the rights described above, please send your request to our dedicated privacy email address: privacy@layer5.io.
            </p>
            <p>
              We will respond to your request within one month of receipt. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it.
            </p>
            <h3>Section 2.10: Children's Privacy</h3>
            <p>
              Our services and community are not directed to individuals under the age of 16. We do not knowingly collect personal data from children under 16. If we become aware that a child under 16 has provided us with personal data, we will take steps to delete such information. If you believe that a child has provided us with personal data, please contact us at privacy@layer5.io.
            </p>
            <h3>Section 2.11: Updates to This Privacy Notice</h3>
            <p>
              We may update this Privacy Notice from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new notice on our website and, where appropriate, by notifying you directly via email. We encourage you to review this notice periodically.
            </p>
            <h3>Section 2.12: How to Make a Complaint</h3>
            <p>
              We are committed to resolving any concerns you may have about our use of your information. If you have a complaint, we hope you will contact us first at privacy@layer5.io so that we can try to resolve it.
            </p>
            <p>
              However, if you are not satisfied with our response, you have the right to lodge a complaint with a data protection supervisory authority. This will typically be the authority in the EU country where you live or work, or where the alleged infringement of data protection law occurred.
            </p>
            <hr />
            <h2>Part III: Strategic Recommendations for Implementation and Ongoing Compliance</h2>
            <p>
              The publication of a GDPR-compliant privacy notice is a critical first step, but it must be supported by robust internal processes and technical measures to be effective. The following recommendations provide a strategic roadmap for Layer5 to operationalize its commitment to data privacy and ensure ongoing compliance.
            </p>
            <h3>Section 3.1: Operationalizing Data Subject Rights</h3>
            <p>
              A privacy notice that promises data subject rights without the internal capacity to fulfill them creates a significant liability. Layer5 must establish a formal, documented process for managing Data Subject Access Requests (DSARs) received at the designated privacy@layer5.io email address.
            </p>
            <p>
              This process should include:
            </p>
            <ol>
              <li><strong>Request Logging:</strong> Creating a centralized log to track the date of each request, the identity of the requester, the nature of the request, the deadline for response (30 days), and the date of fulfillment.</li>
              <li><strong>Identity Verification:</strong> Implementing a secure procedure to verify the identity of the individual making the request to prevent unauthorized disclosure of personal data.</li>
              <li><strong>Data Discovery and Compilation:</strong> Developing clear workflows for locating and gathering all relevant personal data for a specific individual across all of Layer5's systems. This includes the Layer5 Cloud production database, CRM systems, payment processor dashboards, community platforms (to the extent possible), and marketing automation tools.</li>
              <li><strong>Secure Delivery:</strong> Establishing a secure method for delivering the compiled information to the data subject.</li>
            </ol>
            <p>
              Operational readiness is a core component of the accountability principle under GDPR. Having this process in place ensures that Layer5 can meet its legal obligations efficiently and demonstrably.
            </p>
            <h3>Section 3.2: Implementing Compliant Consent Management</h3>
            <p>
              To lawfully use non-essential cookies for analytics and marketing, Layer5 must obtain valid, explicit consent from users in the EU/EEA. This requires more than a simple "we use cookies" banner.
            </p>
            <p>
              It is strongly recommended that Layer5 deploy a reputable Consent Management Platform (CMP) on the layer5.io website and any other web properties. A compliant CMP should:
            </p>
            <ul>
              <li>Block all non-essential cookies and tracking scripts from firing <em>until</em> the user has given their explicit consent.</li>
              <li>Provide users with granular control, allowing them to consent to specific categories of cookies (e.g., "Analytics") while rejecting others (e.g., "Marketing").</li>
              <li>Make it as easy for a user to withdraw consent as it was to give it, typically via an easily accessible link or icon on the website.</li>
              <li>Log user consent choices to provide an audit trail for demonstrating compliance.</li>
            </ul>
            <p>
              This technical implementation is a prerequisite for lawfully conducting website analytics and honoring the user's right to withdraw consent at any time.2
            </p>
            <h3>Section 3.3: Maintaining a Record of Processing Activities (ROPA)</h3>
            <p>
              Article 30 of the GDPR requires most data controllers to maintain an internal Record of Processing Activities (ROPA). This document is more detailed than the public-facing privacy notice and serves as the primary evidence of compliance for regulators.
            </p>
            <p>
              The data mapping exercise conducted in Part I of this report and the detailed summary in Table 2 of the new privacy notice serve as an excellent foundation for creating Layer5's ROPA. This internal record should be expanded to include additional legally required details for each processing activity, such as a description of the security measures in place, details of data processors, and information on data protection impact assessments (DPIAs), if any have been conducted. The ROPA is a living document that must be kept up-to-date as Layer5's data processing activities evolve.
            </p>
            <h3>Section 3.4: Concluding Note on Brand and Entity Clarity</h3>
            <p>
              The research for this report identified potential public confusion between Layer5, Inc. (layer5.io) and an unrelated UK-based entity, Layer 5 Solutions Ltd.9 While the new privacy notice includes a disclaimer to address this, Layer5 should undertake a broader review of its public-facing materials to ensure consistent and clear identification of the legal entity responsible for its services.
            </p>
            <p>
              This includes reviewing website footers, terms of service agreements, and other legal and commercial documents. User or regulatory confusion can lead to misdirected legal notices, data subject requests, or official inquiries, creating unnecessary administrative friction and potential legal complications. Proactively ensuring clarity in all corporate communications is a low-cost, high-impact risk mitigation strategy that reinforces professionalism and transparency.
            </p>
          </Col>
          <Col>
            <div className="conduct_heading">
              <h2>Contact information</h2>
            </div>
            <p>We welcome your comments or questions about this privacy policy. You may also contact us as follows:
            </p>
            <p className="address">
              Layer5, Inc<br />
              1000 Congress Avenue<br />
              Austin, Texas 78735<br />
              Email Address: legal@layer5.io<br />
              Telephone number: 512-810-8200
            </p>
            <p>
              <i>Last Updated: March 8th, 2024</i>
            </p>
          </Col>
        </Row>
      </Container>
    </TermsWrapper>
  );
};

export default Privacy;