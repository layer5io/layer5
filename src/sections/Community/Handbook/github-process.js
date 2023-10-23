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
                  <td>CYPRESS_RECORD_KEY</td>
                  <td>Needed for recording the Cypress run in the Cypress Dashboard</td>
                </tr>
                <tr>
                  <td>DOCKER_PASSWORD</td>
                  <td>Belongs to user “mesheryci”</td>
                </tr>
                <tr>
                  <td>DOCKER_USERNAME</td>
                  <td>“mesheryci”</td>
                </tr>
                <tr>
                  <td>NETLIFY_AUTH_TOKEN</td>
                  <td></td>
                </tr>
                <tr>
                  <td>NETLIFY_SITE_ID</td>
                  <td></td>
                </tr>
                <tr>
                  <td>RELEASEDRAFTER_PAT</td>
                  <td>Belongs to user “l5io”</td>
                </tr>
                <tr>
                  <td>RELEASE_NOTES_PAT</td>
                  <td>Belongs to user “l5io”</td>
                </tr>
                <tr>
                  <td>SLACK_BOT_TOKEN</td>
                  <td></td>
                </tr>
                <tr>
                  <td>GITHUB_TOKEN</td>
                  <td>For the community scope repo that can be use commit and release</td>
                </tr>
                <tr>
                  <td>NODE_VERSION</td>
                  <td>“v18” as of Nov 15, 2022.</td>
                </tr>
                <tr>
                  <td>GO_VERSION</td>
                  <td>1.19</td>
                </tr>
                <tr>
                  <td>PROVIDER_TOKEN</td>
                  <td>Infinite Meshery Cloud token</td>
                </tr>
                <tr>
                  <td>NPM_TOKEN</td>
                  <td>l5io user’s token for publishing packages</td>
                </tr>
                <tr>
                  <td>INTEGRATION_SPREADSHEET_CRED</td>
                  <td>Base64 encoded cred for accessing integration spreadsheet on behalf of user  <a href="mailto: no-reply@layer5.io">no-reply@layer5.io</a></td>
                </tr>
                <tr>
                  <td>PLAYGROUND_CONFIG</td>
                  <td>Base64 encoded kubeconfig of Playground</td>
                </tr>
                <tr>
                  <td>METAL_SSH_KEY</td>
                  <td>SMP Project-wide SSH private key</td>
                </tr>
                <tr>
                  <td>METAL_AUTH_TOKEN</td>
                  <td>Metal cli auth token</td>
                </tr>
                <tr>
                  <td>METAL_SERVER1</td>
                  <td>ID of 1st metal server running playground</td>
                </tr>
                <tr>
                  <td>METAL_SERVER2</td>
                  <td>ID of 2nd metal server running playground</td>
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
