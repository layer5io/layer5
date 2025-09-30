import React from "react";
import { Container, Row, Col } from "../../../../reusecore/Layout";
import PageHeader from "../../../../reusecore/PageHeader";
import TermsWrapper from "../terms.style";
import TOC from "../../../../components/legal-navigation/index";
import TocPagination from "../../../../components/legal-navigation/TocPagination";

const Conduct = () => {
  return (
    <TermsWrapper>
      <div className="page-header-section">
        <h1>Terms of Service</h1>
      </div>
      <TOC />
      <div className="terms-content">
        <Container>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Agreement between User and Layer5, Inc.</h2>
              </div>
              <p>Welcome to Layer5, Inc. Founded in 2020 as a remote-first company, Layer5 is an open-source innovator and community dedicated to empowering engineers to extract greater value from their infrastructure. We are the creators and maintainers of Meshery, the cloud native management platform that began its journey in July 2019 to simplify the adoption and operation of cloud native infrastructure. Today, Meshery stands 9th fastest growing CNCF project with over 7,500 GitHub stars, alongside our other offerings like Layer5 Cloud and Kanvas. Our mission is to champion developer-defined infrastructure, enabling collaborative design and management of multi-cluster, multi-cloud environments while fostering an inclusive, global community of cloud native enthusiasts.</p>
              <p>At Layer5, we are committed to fostering a safe, transparent, and trustworthy online environment for our users, customers, and community members across our digital platforms, including layer5.io, meshery.dev, getnighthawk.dev, cloud.layer5.io, kanvas.new, and our open-source community hubs (e.g., GitHub, Slack). This Digital Services Notice outlines how we manage user-generated content, ensure transparency, and protect user rights, reflecting our core values of integrity, collaboration, and paying it forward.</p>
              <p>This notice is provided for informational purposes only and is not part of the Layer5 Terms of Service. It is not intended to provide legal advice, and Layer5 encourages users to consult with their own legal counsel to understand applicable legal obligations. The information here is subject to change.</p>
              <h3>Our History and Commitment to Open Source</h3>
              <p>Layer5's origins trace back to a group of service mesh pioneers who recognized the need for better tools to manage the complexities of cloud native architectures. Established in 2020, we built upon the foundational work of Meshery, launched in 2019 as an extensible platform for designing and operating Kubernetes workloads. Our remote-first model from day one has allowed us to tap into a diverse, global talent pool, creating an inclusive environment where contributors from around the world collaborate on open-source projects.</p>
              <p>As leaders in the Cloud Native Computing Foundation (CNCF)—with representatives on the Technical Oversight Committee (TOC), as Docker Captains, Linkerd maintainers, Cloud Native Ambassadors, Kubernetes authors and trainers, and chairs of CNCF Working Groups—Layer5 is at the forefront of cloud native standards. Milestones like Meshery's progression to CNCF incubation and our growing community of collaborators underscore our dedication to open source. We host global meetups, support initiatives like Open Source Africa, and encourage participation in our projects, ensuring our digital services remain community-driven and transparent.</p>
              <p>This commitment to openness directly informs our approach to digital services: by prioritizing collaboration and accessibility, we create platforms that not only innovate but also safeguard user trust and safety.</p>
              <h3>User Activity and Transparency</h3>
              <p>Layer5 operates several digital platforms, including Layer5 Community (https://layer5.io/community), Meshery (https://meshery.io), Layer5 Cloud (https://cloud.layer5.io), Kanvas (https://kanvas.new), and GitHub repositories (layer5io repositories on github.com). We are committed to transparency regarding user activity and content moderation to maintain a safe and productive environment. In compliance with U.S. regulations, such as the California Consumer Privacy Act (CCPA), we do not engage in practices that would constitute a "sale" of personal information as defined by the CCPA.</p>
              <p>We monitor user activity to improve our services and ensure compliance with our policies. Aggregated and anonymized data may be used to analyze platform usage, but we do not disclose individual user data unless required by law or to protect the safety and integrity of our platforms. Our community-first ethos ensures that transparency extends to how we handle contributions, feedback, and interactions across our ecosystem.</p>
              <h3>Single Point of Contact</h3>
              <p>To facilitate communication with users, regulators, or other stakeholders regarding our digital services, Layer5 has designated a single point of contact. You may reach us at <a href="mailto:abuse@layer5.io">abuse@layer5.io</a>. Communications should be made in English, but we will work with you to accommodate other languages if necessary.</p>
              <h3>Reporting Illegal or Inappropriate Content</h3>
              <p>Layer5 provides mechanisms for users, authorities, or other parties to report illegal or inappropriate content on our platforms. You can submit reports concerning content on Layer5 Community, Meshery, Layer5 Cloud, Kanvas, or our GitHub repositories by emailing <a href="mailto:abuse@layer5.io">abuse@layer5.io</a> or using any available "report" functionality on our platforms (e.g., within community forums or GitHub issues). We review reports promptly and notify reporters of our actions, offering an opportunity to appeal decisions if they disagree. This process aligns with our inclusive community guidelines, ensuring swift resolution while upholding open dialogue.</p>
              <h3>Content Moderation</h3>
              <p>Our <a href="/company/legal/acceptable-use-policy">Acceptable Use Policy (AUP)</a> prohibits the use of Layer5 platforms (collectively, the "Layer5 Service") for content or activities that promote, encourage, or facilitate illegal activity, hate speech, threatening or abusive behavior, violence, infringing content, or discrimination based on characteristics such as race, color, religion, national or ethnic origin, sex, sexual orientation, marital status, gender identity, age, disability, or other protected characteristics under applicable U.S. law. Users or organizations engaging in such activities are prohibited from using Layer5’s products and services.</p>
              <p>We maintain a robust content moderation program to identify, review, and address violations of our AUP or platform guidelines. This program includes internal policies and guidelines to ensure consistent, fair, and equitable enforcement across our user base. We apply objective criteria to evaluate content and prioritize user safety. Users whose content is removed are notified and may appeal the decision if they believe it was made in error. Drawing from our open-source roots, we encourage community input on moderation practices to keep them aligned with our values of kindness and inclusivity.</p>
              <h3>Transparency Reporting</h3>
              <p>Layer5 is committed to transparency in our operations. We publish periodic transparency reports on our <a href="/company/legal/trust-center">Trust Center</a>, detailing aggregated data on content moderation actions, user reports, and appeals across our platforms. These reports aim to provide insight into our efforts to maintain a safe and positive online environment while respecting user privacy and rights. As a community-powered organization, these reports also highlight contributions and collaborative achievements, reinforcing our shared commitment to ethical digital practices.</p>
              <h3>User Rights</h3>
              <p>In alignment with U.S. privacy laws, such as the CCPA, Layer5 respects your rights regarding your personal information. These rights may include the ability to access, delete, or opt out of certain data processing activities. For details on how we handle personal data and how you can exercise your rights, please see our <a href="/company/legal/privacy">Privacy Notice</a>. To submit a request related to your personal data, contact us at <a href="mailto:privacy@layer5.io">privacy@layer5.io</a>.</p>
              <h3>Further Information</h3>
              <p>For more details about how we process your personal data, please review our <a href="/company/legal/privacy">Privacy Notice</a> and <a href="/company/legal/cookie-notice">Cookie Notice</a>. If you have questions or concerns about our digital services or content moderation practices, contact us at the details below. We invite you to join our community to contribute to and shape the future of cloud native technologies.</p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Electronic Communications</h2>
              </div>
              <p>
              Visiting cloud.layer5.io or sending emails to Layer5 constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
              </p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Children Under Eighteen</h2>
              </div>
              <h5 className="black-text"></h5>
Layer5 does not knowingly collect, either online or offline, personal information from persons under the age of eighteen. If you are under 18, you may use cloud.layer5.io only with permission of a parent or guardian.
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>No Unlawful or Prohibited Use/Intellectual Property</h2>
              </div>
              <h5 className="black-text">Links to Third Party Sites/Third Party Services</h5>
            cloud.layer5.io may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Layer5 and Layer5 is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Layer5 is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Layer5 of the site or any association with its operators.

              <p>Certain services made available via cloud.layer5.io are delivered by third party sites and organizations. By using any product, service or functionality originating from the cloud.layer5.io domain, you hereby acknowledge and consent that Layer5 may share such information and data with any third party with whom Layer5 has a contractual relationship to provide the requested product, service or functionality on behalf of cloud.layer5.io users and customers.</p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>No Unlawful or Prohibited Use/Intellectual Property</h2>
              </div>

              <p>You are granted a non-exclusive, non-transferable, revocable license to access and use cloud.layer5.io strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Layer5 that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.</p>

              <p>You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.</p>

              <p>All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Layer5 or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.</p>

              <p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Layer5 content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Layer5 and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Layer5 or our licensors except as expressly authorized by these Terms.</p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>International Users</h2>
              </div>
              <p>
              The Service is controlled, operated and administered by Layer5 from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Layer5 Content accessed through cloud.layer5.io in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
              </p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Indemnification</h2>
              </div>
              <p>
              You agree to indemnify, defend and hold harmless Layer5, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Layer5 reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Layer5 in asserting any available defenses.
              </p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Class Action Waiver</h2>
              </div>
              <p>
              Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Layer5 agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.
              </p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Liability Disclaimerr</h2>
              </div>
              <p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. LAYER5.IO, INC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.</p>

              <p>LAYER5.IO, INC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. LAYER5.IO, INC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>

              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LAYER5.IO, INC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF LAYER5.IO, INC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.</p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Termination/Access Restriction</h2>
              </div>
              <p>Layer5 reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of California and you hereby consent to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.</p>

              <p>You agree that no joint venture, partnership, employment, or agency relationship exists between you and Layer5 as a result of this agreement or use of the Site. Layer5's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Layer5's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Layer5 with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.</p>

              <p>Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Layer5 with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Layer5 with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.</p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Changes to Terms</h2>
              </div>
              <p>
              Layer5 reserves the right, in its sole discretion, to change the Terms under which cloud.layer5.io is offered. The most current version of the Terms will supersede all previous versions. Layer5 encourages you to periodically review the Terms to stay informed of our updates.
              </p>
            </Col>
          </Row>
          <Row>
            <Col $xs={12} $sm={12} $lg={12}>
              <div className="conduct_heading">
                <h2>Contact Us</h2>
              </div>
              <p>Layer5 welcomes your questions or comments regarding the Terms:</p>
              <p className="address">
              Layer5, Inc<br />
              1000 Congress Avenue<br />
              Austin, Texas 78735<br />
              Email Address: legal@layer5.io<br />
              Telephone number: 512-810-8200
              </p>
              <p><i>Last Updated: April 15th, 2025</i></p>
            </Col>
          </Row>
        </Container>
      </div>
      <TocPagination />
    </TermsWrapper>
  );
};

export default Conduct;
