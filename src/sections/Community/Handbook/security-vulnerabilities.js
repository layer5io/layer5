import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

import layer5icon from "../../../assets/images/layer5/5 icon/svg/light/5-light-bg.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import MeshSync from "../../../assets/images/meshsync/meshsync.svg";
import servicemeshperformance from "../../../assets/images/service-mesh-performance/icon/smp-dark.svg";
import meshery from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import servicemeshpattern from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";

const SecurityVulnerabilitiesPage = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Security Vulnerabilities</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>Reporting a vulnerability</h2><br />
            <p>We are very grateful to the security researchers and users that report security vulnerabilities. We investigate each report thoroughly.</p>
            <p>To make a report, send an email to the private <a href="mailto: security@layer5.io">security@layer5.io</a>  mailing list with the vulnerability details. For normal product bugs unrelated to latent security vulnerabilities, please head to the appropriate repository and submit a <a href="https://github.com/layer5io/layer5/issues/new/choose">new issue</a> .</p>
            <p>Note that the Layer5 community spans four GitHub organizations:</p>
            <ul className="project-org-list">
              <li>
                <a href="https://github.com/layer5io">
                  <img
                    src={layer5icon}
                    alt="layer5 icon"
                  />
                  &nbsp; Layer5
                </a>
                  - emerging projects like GetNighthawk, community with  MeshMates, a catch-all org.
              </li>

              <li>
                <a href="https://github.com/meshery">
                  <img
                    src={meshery}
                    alt="meshery icon"
                  />
                  &nbsp; Meshery
                </a>
                  -  Meshery and its components Meshery Operator
                <img
                  src={MesheryOperator}
                  alt="meshery operator icon"
                  style={{ marginLeft: ".3rem" }}
                /> and MeshSync
                <img
                  src={MeshSync}
                  alt="mesh sync icon"
                  style={{ marginLeft: ".3rem" }}
                />.
              </li>

              <li>
                <a href="https://github.com/service-mesh-performance">
                  <img
                    src={servicemeshperformance}
                    alt="service mesh performance icon"
                  />
                  &nbsp; Service Mesh Performance
                </a>
                  - Service Mesh Performance specification and site.
              </li>
              <li>
                <a href="https://github.com/service-mesh-patterns">
                  <img
                    src={servicemeshpattern}
                    alt="service mesh patterns icon"
                  />
                  &nbsp; Service Mesh Patterns
                </a>
                  - a collection of curated patterns of service mesh use cases compatible with Meshery.
              </li>
            </ul>
            <p>You can find the list of all the Layer5 project repositories <a hrf="https://layer5.io/community/handbook/repository-overview">here</a></p>
            <h3>When to report a security vulnerability?</h3>
            <p>Send us a report whenever you:</p>
            <ul>
              <li>Think Layer5 projects have a potential security vulnerability.</li>
              <li>Are unsure whether or how a vulnerability affects the project.</li>
              <li>Think a vulnerability is present in another project that Layer5 projects depends on (Docker for example).</li>
            </ul>

            <h3>When not to report a security vulnerability?</h3>
            <p>Don’t send a vulnerability report if:</p>
            <ul>
              <li>You need help tuning Layer5 project components for security.</li>
              <li>You need help applying security related updates.</li>
              <li>Your issue is not security related.</li>
            </ul>
            <p>Instead, join the community <a href="https://slack.layer5.io/">Slack</a>  and ask questions.</p>

            <h3>Evaluation</h3>
            <p>The Layer5 team acknowledges and analyzes each vulnerability report within 10 working days.</p>

            <p>Any vulnerability information you share with the Layer5 team stays within the respective Layer5 project. We don’t disseminate the information to other projects. We only share the information as needed to fix the issue.</p>

            <p>We keep the reporter updated as the status of the security issue is addressed.</p>

            <h3>Fixing the issue</h3>
            <p>Once a security vulnerability has been fully characterized, a fix is developed by the Layer5 team. The development and testing for the fix happens in a private GitHub repository in order to prevent premature disclosure of the vulnerability.</p>

            <h3>Early disclosures</h3>
            <p>The Layer5 project maintains a mailing list for private early disclosure of security vulnerabilities. The list is used to provide actionable information to close Layer5 partners. The list is not intended for individuals to find out about security issues.</p>

            <h3>Public disclosures</h3>
            <p>On the day chosen for public disclosure, a sequence of activities takes place as quickly as possible:</p>
            <ul>
              <li>Changes are merged from the private GitHub repository holding the fix into the appropriate set of public branches.</li>
              <li>Layer5 team ensures all necessary binaries are promptly built and published.</li>
              <li>Once the binaries are available, an announcement is sent out on the following channels:
                <ul>
                  <li>The <a href="https://layer5.io/blog">Layer5 blog</a></li>
                  <li>The <a href="https://twitter.com/layer5">Layer5 Twitter feed</a></li>
                  <li>The <a href="https://layer5io.slack.com/archives/CSF3PSZT9">#announcements</a> channel on community <a href="https://slack.layer5.io/">Slack</a></li>
                </ul>
              </li>
            </ul>
            <p>As much as possible this announcement will be actionable, and include any mitigating steps customers can take prior to upgrading to a fixed version.</p>

            <h2>List of Announced Vulnerabilities:</h2>
            <table>
              <thead>
                <tr>
                  <th><b>DATE ANNOUNCED</b></th>
                  <th><b>CVE ID</b></th>
                  <th><b>DESCRIPTION</b></th>
                  <th><b>AFFECTED COMPONENT</b></th>
                  <th><b>VULNERABLE VERSION</b></th>
                  <th><b>PATCHED VERSION</b></th>
                  <th><b>FIX DETAILS</b></th>
                  <th><b>LINKS</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021-04-28</td>
                  <td>CVE-2021-31856</td>
                  <td>A SQL Injection vulnerability in the REST API in Layer5 Meshery 0.5.2 allows an attacker to execute arbitrary SQL commands via the /experimental/patternfiles endpoint (order parameter in GetMesheryPatterns in models/meshery_pattern_persister.go).</td>
                  <td>REST API</td>
                  <td>v0.5.2</td>
                  <td>v0.5.3</td>
                  <td><a href="https://github.com/layer5io/meshery/pull/2745">fix pull</a></td>
                  <td><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-31856">mitre</a>, <a href="https://github.com/ssst0n3/CVE-2021-31856">details</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default SecurityVulnerabilitiesPage;