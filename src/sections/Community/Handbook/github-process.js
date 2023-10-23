import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

const SecurityVulnerabilitiesPage = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>GitHub Process</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>Overview</h2><br />
            <p>The Layer5 GitHub Process emphasizes consistent pull requests and issue labels to streamline continuous integration and reduce overhead across the growing repository collection.</p>
            <p>The number of repositories under the “Layer5io” organization is growing. In order to ensure consistency across the repositories and to decrease the time it takes for a continuous integration (GitHub Actions) to execute, consistent use of pull request and issue labels will aid in the reduction of overhead.</p>

            <h3>Issue and Pull Request Templates</h3>
            <p>Layer5 uses issue and pull request templates. See the .github folder in any repo.</p>

            <h3>Template Repositories</h3>
            <p>Layer5 uses the following repository templates:</p>
            <ul>
              <li>layer5-repo-template</li>
              <li>meshery-adapter-template</li>
            </ul>

            <h3>Branch Protection</h3>
            <p>Layer5 protects the <b>master</b> branch by requiring reviews from at least one approver.</p>

            <h3>Organization Secrets</h3>
            <p>Layer5 has the following org-wide secrets available:</p>

            <table>
              <thead>
                <tr>
                  <th><b>Secret Name</b></th>
                  <th><b>Description</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021-04-28</td>
                  <td>CVE-2021-31856</td>
                </tr>
                <tr>
                  <td>2021-05-12</td>
                  <td>CVE-2021-34567</td>
                </tr>
                <tr>
                  <td>2021-06-03</td>
                  <td>CVE-2021-37589</td>
                </tr>
              </tbody>
            </table>


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
          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default SecurityVulnerabilitiesPage;
