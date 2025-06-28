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
            <a id="top">
              <h2>Issue and PR Labels and Templates, Bots</h2><br/>
            </a>
            <h3><strong>Overview</strong></h3><br />
            <p>The Layer5 GitHub Process emphasizes consistent pull requests and issue labels to streamline continuous integration and reduce overhead across the growing repository collection.</p>
            <p>The number of repositories under the “Layer5io” organization is growing. In order to ensure consistency across the repositories and to decrease the time it takes for a continuous integration (GitHub Actions) to execute, consistent use of pull request and issue labels will aid in the reduction of overhead.</p>

            <h3>Issue and Pull Request Templates</h3>
            <p>Layer5 uses issue and pull request templates. See the `.github` folder in any repo for examples.</p>

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

            <h3>Labels for Issues</h3>
            <p>The following list of GitHub issue labels are applied organization-wide. New repositories created as of June 13th, 2020 will contain these labels by default.</p>

            <table>
              <thead>
                <tr>
                  <th><b>labels</b></th>
                  <th><b>Description</b></th>
                  <th><b>Color</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>area/ci</td>
                  <td>Continuous integration | Build and release</td>
                  <td>#5319e1</td>
                </tr>
                <tr>
                  <td>area/docs</td>
                  <td>Improvements or additions to documentation</td>
                  <td>#5319e2</td>
                </tr>
                <tr>
                  <td>area/lifecycle</td>
                  <td>Lifecycle management (install, uninstall, configure) related</td>
                  <td>#5319e3</td>
                </tr>
                <tr>
                  <td>area/performance</td>
                  <td>Performance management</td>
                  <td>#5319e4</td>
                </tr>
                <tr>
                  <td>area/tests</td>
                  <td>Testing / quality assurance</td>
                  <td>#5319e5</td>
                </tr>
                <tr>
                  <td>area/ui</td>
                  <td>User Interface</td>
                  <td>#5319e6</td>
                </tr>
                <tr>
                  <td>area/workloads</td>
                  <td>Applications / services</td>
                  <td>#5319e7</td>
                </tr>
                <tr>
                  <td>area/helm</td>
                  <td>Helm charts issues</td>
                  <td>#5319e8</td>
                </tr>
                <tr>
                  <td>component/api</td>
                  <td>API related</td>
                  <td>#3a0485</td>
                </tr>
                <tr>
                  <td>component/mesheryctl</td>
                  <td>Meshery CLI related</td>
                  <td>#3a0486</td>
                </tr>
                <tr>
                  <td>component/ui</td>
                  <td></td>
                  <td>#3a0486</td>
                </tr>
                <tr>
                  <td>component/filters</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>component/patterns</td>
                  <td></td>
                  <td>#3a0486</td>
                </tr>
                <tr>
                  <td>component/meshsync</td>
                  <td>MeshSync related</td>
                  <td>#3a0487</td>
                </tr>
                <tr>
                  <td>component/meshery-perf</td>
                  <td>Meshery-perf related</td>
                  <td>#3a0488</td>
                </tr>
                <tr>
                  <td>good first issue</td>
                  <td>Good for newcomers</td>
                  <td>#7057ff</td>
                </tr>
                <tr>
                  <td>help wanted</td>
                  <td>Extra attention is needed</td>
                  <td>#35f48e</td>
                </tr>
                <tr>
                  <td>issue/invite</td>
                  <td>When applied, this label triggers a to send an invitation to the issue author to join the respective GH org. Invitations are missing appropriate team assignments, however.</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/blocked</td>
                  <td>Issue is blocked</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/design required</td>
                  <td>A labeler bot comments with a note stipulating the a design specification required prior to proceeding.</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/duplicate</td>
                  <td>This issue or pull request already exists</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/invalid</td>
                  <td>This doesn't seem right</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/stale</td>
                  <td>Issue has not had any activity for an extended period of time. Label is most often applied by a stale bot, working under specific inactivity timeouts.</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/tweet</td>
                  <td>Posts</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/remind</td>
                  <td>A labeler bot comments on the issue with a helpful reminder to the current assignee that help is available, if needed, and a reminder that their issue remains outstanding (undone).</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>issue/willfix</td>
                  <td>This issue will be worked on. The stale bot honors this label and skips staleness consideration of issues with this label.</td>
                  <td>#eeeeee</td>
                </tr>
                <tr>
                  <td>kind/bug</td>
                  <td>Something isn't working</td>
                  <td>#088073</td>
                </tr>
                <tr>
                  <td>kind/child</td>
                  <td>One of a number of issues relating to an epic</td>
                  <td>#088074</td>
                </tr>
                <tr>
                  <td>kind/chore</td>
                  <td>Necessary task</td>
                  <td>#088075</td>
                </tr>
                <tr>
                  <td>kind/enhancement</td>
                  <td>Improvement in current feature</td>
                  <td>#088076</td>
                </tr>
                <tr>
                  <td>kind/epic</td>
                  <td>An issue that describes a set of concerns (issues)</td>
                  <td>#088077</td>
                </tr>
                <tr>
                  <td>kind/feature</td>
                  <td>New major feature or request</td>
                  <td>#088078</td>
                </tr>
                <tr>
                  <td>kind/proposal</td>
                  <td>Proposal request for project</td>
                  <td>#088079</td>
                </tr>
                <tr>
                  <td>kind/question</td>
                  <td>Further information is requested</td>
                  <td>#088080</td>
                </tr>
                <tr>
                  <td>language/go</td>
                  <td>Golang related</td>
                  <td>#16e2e2</td>
                </tr>
                <tr>
                  <td>language/javascript</td>
                  <td>Javascript related</td>
                  <td>#16e2e3</td>
                </tr>
                <tr>
                  <td>language/ruby</td>
                  <td>Ruby related</td>
                  <td>#16e2e4</td>
                </tr>
                <tr>
                  <td>pr/dependencies</td>
                  <td>Dependabot or manual dependencies addressed in this PR</td>
                  <td>#0366d5</td>
                </tr>
                <tr>
                  <td>pr/do-not-merge</td>
                  <td>PRs not ready to be merged</td>
                  <td>#0366d6</td>
                </tr>
                <tr>
                  <td>pr/draft</td>
                  <td>WIP/Draft pull request</td>
                  <td>#0366d7</td>
                </tr>
                <tr>
                  <td>pr/on hold</td>
                  <td>PR/Issue on hold</td>
                  <td>#0366d8</td>
                </tr>
                <tr>
                  <td>priority/urgent</td>
                  <td>Issue to be addressed urgently</td>
                  <td>#f60205</td>
                </tr>
                <tr>
                  <td>priority/high</td>
                  <td>High priority issue</td>
                  <td>#d60205</td>
                </tr>
                <tr>
                  <td>priority/low</td>
                  <td>Low priority issue</td>
                  <td>#a60205</td>
                </tr>
                <tr>
                  <td>service-mesh/app-mesh</td>
                  <td>Issues related to App Mesh</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/consul</td>
                  <td>Issues related to Consul</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/cpx</td>
                  <td>Issues related to CPX</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/istio</td>
                  <td>Issues related to Istio</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/kuma</td>
                  <td>Issues related to Kuma</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/linkerd</td>
                  <td>Issues related to Linkerd</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/maesh</td>
                  <td>Issues related to Maesh</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/nginx</td>
                  <td>ssues related to NGINX SM</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/nsm</td>
                  <td>Issues related to NSM</td>
                  <td>#57b6cc</td>
                </tr>
                <tr>
                  <td>service-mesh/tanzu</td>
                  <td>Issues related to Tanzu</td>
                  <td>#57b6cc</td>
                </tr>
              </tbody>
            </table>

            <h3>List for Pull Requests</h3>
            <p>The following list of pull request labels will be used to both indicate purpose or status of the PR to maintainers, and significantly, they will be used in conditional logic during workflow execution to determine the PR’s appropriate path through the CI flow.</p>
            <ul>
              <li><b>Refactor</b> - Chore related pull request</li>
              <li><b>Fix</b> - Bug fixes PRs</li>
              <li><b>On-hold</b> - PR needs review before merging or it needs to behold until a specific issue is fixed.</li>
              <li><b>Dependabot</b> - All dependabot related automated PRs</li>
              <li><b>release</b> - identifies that a release is / will be made</li>
              <li><b>Draft</b> - PR is in draft state, GitHub provides a way for the draft state but having a label will help us in triage purposes.</li>
              <li><b>Approved</b> - Indicates a PR has been approved by approver form all required OWNERS files. #51ed31</li>
              <li><b>help wanted</b> - Extra attention is needed #008672</li>
              <li><b>needs-ok-to-test</b> -  #d60c6a</li>
              <li><b>awaiting review</b> - The PR is ready for the reviewer to review. #fbca04</li>
            </ul>

            <p>Improving the build times through conditional logic that will skip sections of the ci.yml, unless these labels are present:</p>
            <ul>
              <li><b>docs</b> -  build the Jekyll site for Meshery documentation</li>
              <li><b>component/mesheryctl</b> - build the Meshery CLI</li>
              <li><b>area/ui</b> -  build the Meshery UI</li>
              <li><b>component/meshery-server</b> - Assumed that Meshery Server should always be build, but this is not the case.</li>
            </ul>

            <h3>Bots</h3>
            <p>Layer5 uses the following bots:</p>
            <ul>
              <li>Triage bot</li>
              <li>Stale bot</li>
              <li>Welcome bot</li>
              <li>DCO bot</li>
            </ul>

            <h3>Actions</h3>
            <ul>
              <li>Labeler.yml</li>
              <li>label-commenter.yml</li>
            </ul>

            <p>Good resource - <a href="https://github.com/sdras/awesome-actions#pull-requests">https://github.com/sdras/awesome-actions#pull-requests</a></p>

          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default SecurityVulnerabilitiesPage;
