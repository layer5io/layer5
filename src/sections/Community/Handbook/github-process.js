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
            <h2>Issue and PR Labels and Templates, Bots</h2><br/>
            <h3><strong>Overview</strong></h3><br />
            <p>The Layer5 GitHub Process emphasizes consistent pull requests and issue labels to streamline continuous integration and reduce overhead across the growing repository collection.</p>
            <p>The number of repositories under the "Layer5io" organization is growing. In order to ensure consistency across the repositories and to decrease the time it takes for a continuous integration (GitHub Actions) to execute, consistent use of pull request and issue labels will aid in the reduction of overhead.</p>

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
                  <td>Belongs to user "mesheryci"</td>
                </tr>
                <tr>
                  <td>DOCKER_USERNAME</td>
                  <td>"mesheryci"</td>
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
                  <td>Belongs to user "l5io"</td>
                </tr>
                <tr>
                  <td>RELEASE_NOTES_PAT</td>
                  <td>Belongs to user "l5io"</td>
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
                  <td>"v18" as of Nov 15, 2022.</td>
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
                  <td>l5io user's token for publishing packages</td>
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

            <h2>Layer5 Issue Labels Guide</h2>
            <p>
              Well-chosen issue labels keep our repositories organized, make contributing easier, and help everyone—from maintainers to first-time contributors—find relevant tasks quickly. Below, we explain each major label category and when to use them.
            </p>

            <h3>Area Labels</h3>
            <p>
              Area labels specify which part of the project an issue or PR relates to—such as documentation, user interface, or continuous integration. Using area labels helps contributors with specific interests or expertise find and filter issues that are relevant to them, and helps project maintainers prioritize or assign tasks more efficiently. Assign an area label any time you create or triage an issue/PR that falls within a specific domain (docs, UI, CI, performance, etc.).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>area/ci</td><td>Continuous integration, build &amp; release</td><td>#5319e1</td></tr>
                <tr><td>area/docs</td><td>Improvements/additions to documentation</td><td>#5319e2</td></tr>
                <tr><td>area/lifecycle</td><td>Lifecycle management (install, uninstall, configure)</td><td>#5319e3</td></tr>
                <tr><td>area/performance</td><td>Performance management</td><td>#5319e4</td></tr>
                <tr><td>area/tests</td><td>Testing / quality assurance</td><td>#5319e5</td></tr>
                <tr><td>area/ui</td><td>User interface</td><td>#5319e6</td></tr>
                <tr><td>area/workloads</td><td>Applications / services</td><td>#5319e7</td></tr>
                <tr><td>area/helm</td><td>Helm charts issues</td><td>#5319e8</td></tr>
              </tbody>
            </table>

            <h3>Component Labels</h3>
            <p>
              Component labels indicate which software module or subsystem is affected by an issue. This ensures issues are routed to the right maintainers and allows more detailed filtering beyond the broader area labels. Attach a component label when your issue/PR impacts a specific module (e.g., a CLI tool, API, or pattern engine).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>component/api</td><td>API related</td><td>#3a0485</td></tr>
                <tr><td>component/mesheryctl</td><td>Meshery CLI related</td><td>#3a0486</td></tr>
                <tr><td>component/ui</td><td>UI component related</td><td>#3a0486</td></tr>
                <tr><td>component/filters</td><td>Filters related</td><td>#3a0486</td></tr>
                <tr><td>component/patterns</td><td>Patterns related</td><td>#3a0486</td></tr>
                <tr><td>component/meshsync</td><td>MeshSync component related</td><td>#3a0487</td></tr>
                <tr><td>component/meshery-perf</td><td>Meshery-perf related</td><td>#3a0488</td></tr>
              </tbody>
            </table>

            <h3>Programming Language Labels</h3>
            <p>
              Programming language labels highlight the primary language used in the issue or PR. This helps contributors looking for language-specific work, and aids in code review or help requests. Use a programming language label if the change, bug, or feature is specific to a particular language (e.g., a Go backend bug, a JavaScript UI enhancement).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>language/go</td><td>Golang related</td><td>#16e2e2</td></tr>
                <tr><td>language/javascript</td><td>Javascript</td><td>#16e2e3</td></tr>
                <tr><td>language/ruby</td><td>Ruby</td><td>#16e2e4</td></tr>
              </tbody>
            </table>

            <h3>PR (Pull Request) Labels</h3>
            <p>
              PR labels manage the state or special requirements of a pull request, like indicating it's a draft, dependent on others, or not yet ready for merging. Apply a PR label if your pull request isn't ready, should not be merged, updates dependencies, or is on hold.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>pr/dependencies</td><td>Updates addressed dependencies</td><td>#0366d5</td></tr>
                <tr><td>pr/do-not-merge</td><td>Not ready for merging</td><td>#0366d6</td></tr>
                <tr><td>pr/draft</td><td>Work in progress/draft PR</td><td>#0366d7</td></tr>
                <tr><td>pr/on hold</td><td>PR/Issue on hold</td><td>#0366d8</td></tr>
              </tbody>
            </table>

            <h3>Issue Process &amp; Status Labels</h3>
            <p>
              These labels show the current status of an issue—such as blocked, duplicate, in need of a design, or if an action (like an invitation) should be triggered. Some are used by bots to automate reminders or mark stale issues. Apply these when the situation applies (e.g. "blocked" if work can't proceed, "design required" if more planning is needed).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>issue/invite</td><td>Invitation for author to join GH org</td><td>#eeeeee</td></tr>
                <tr><td>issue/blocked</td><td>Issue is blocked</td><td>#eeeeee</td></tr>
                <tr><td>issue/design required</td><td>Requires a design prior to proceeding</td><td>#eeeeee</td></tr>
                <tr><td>issue/duplicate</td><td>Issue or PR already exists</td><td>#eeeeee</td></tr>
                <tr><td>issue/invalid</td><td>This doesn't seem right</td><td>#eeeeee</td></tr>
                <tr><td>issue/stale</td><td>No activity for an extended period (often applied automatically)</td><td>#eeeeee</td></tr>
                <tr><td>issue/tweet</td><td>Posts (for social or outreach)</td><td>#eeeeee</td></tr>
                <tr><td>issue/remind</td><td>Reminder comment to assignee</td><td>#eeeeee</td></tr>
                <tr><td>issue/willfix</td><td>Issue will be worked on ("stale" bot skips)</td><td>#eeeeee</td></tr>
              </tbody>
            </table>

            <h3>Kind Labels</h3>
            <p>
              Kind labels classify the general type of change or discussion: bug, feature, chore, enhancement, epic, question, or proposal. This improves searchability and helps teams organize their workflows. Use the kind label that best describes your issue or PR.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>kind/bug</td><td>Something isn't working</td><td>#088073</td></tr>
                <tr><td>kind/child</td><td>Child of a larger Epic</td><td>#088074</td></tr>
                <tr><td>kind/chore</td><td>Maintenance or other necessary task</td><td>#088075</td></tr>
                <tr><td>kind/enhancement</td><td>Improvement to an existing feature</td><td>#088076</td></tr>
                <tr><td>kind/epic</td><td>An umbrella issue, covers many issues</td><td>#088077</td></tr>
                <tr><td>kind/feature</td><td>New major feature or request</td><td>#088078</td></tr>
                <tr><td>kind/proposal</td><td>Suggestion or proposal for change</td><td>#088079</td></tr>
                <tr><td>kind/question</td><td>Explanation or further info requested</td><td>#088080</td></tr>
              </tbody>
            </table>

            <h3>Priority Labels</h3>
            <p>
              Priority labels help teams triage and allocate attention, making it clear which issues are urgent and which can wait. Always apply a priority label, adjusting as priorities shift or as issues are escalated or downgraded.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>priority/urgent</td><td>Needs immediate attention</td><td>#f60205</td></tr>
                <tr><td>priority/high</td><td>High priority issue</td><td>#d60205</td></tr>
                <tr><td>priority/low</td><td>Lower priority, can wait</td><td>#a60205</td></tr>
              </tbody>
            </table>

            <h3>Service Mesh Labels</h3>
            <p>
              Service mesh labels point out which mesh technology or ecosystem the issue pertains to. This is vital for projects supporting multiple meshes, enabling modular attention and expertise. Use these when your change or report is specific to one mesh (like Istio or Linkerd).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>service-mesh/app-mesh</td><td>App Mesh</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/consul</td><td>Consul</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/cpx</td><td>CPX</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/istio</td><td>Istio</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/kuma</td><td>Kuma</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/linkerd</td><td>Linkerd</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/maesh</td><td>Maesh</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/nginx</td><td>NGINX SM</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/nsm</td><td>NSM</td><td>#57b6cc</td></tr>
                <tr><td>service-mesh/tanzu</td><td>Tanzu</td><td>#57b6cc</td></tr>
              </tbody>
            </table>

            <h3>Help &amp; Onboarding Labels</h3>
            <p>
              Help labels signal issues where some support is needed, or which are especially suitable for newcomers. These labels foster open source engagement and make onboarding easier for new contributors. Apply these to issues where you'd appreciate community help (<code>help wanted</code>) or for issues that are clearly documented, small in scope, and ideal for first-timers (<code>good first issue</code>).
            </p>
            <table>
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Description</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>help wanted</td><td>Maintainers need help here</td><td>#35f48e</td></tr>
                <tr><td>good first issue</td><td>Good for new contributors</td><td>#7057ff</td></tr>
              </tbody>
            </table>

            <h3>Best Practices &amp; Example</h3>
            <ul>
              <li><b>Apply all relevant labels</b>: an issue may belong to an area, a component, a kind, have a priority, AND be language-specific.</li>
              <li><b>Update labels as issues evolve</b>: don't hesitate to add or remove as information changes.</li>
              <li><b>When in doubt, ask!</b>: The <a href="https://layer5.io/community">Layer5 community Slack</a> is a welcoming place.</li>
            </ul>

            <strong>Example:</strong><br />
            <p>
              If you find a documentation error regarding Meshery's CLI, that's an easy fix, you might use these labels:<br/>
              <code>area/docs, component/mesheryctl, kind/bug, priority/low, good first issue</code>
            </p>

            <h3>Questions or Suggestions?</h3>
            <p>
              Labels missing? Unclear usage? Open a discussion or tag a maintainer in your issue, or bring it up in <a href="https://layer5.io/community">community Slack</a>.
            </p>

            <h3>List for Pull Requests</h3>
            <p>The following list of pull request labels will be used to both indicate purpose or status of the PR to maintainers, and significantly, they will be used in conditional logic during workflow execution to determine the PR's appropriate path through the CI flow.</p>
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
