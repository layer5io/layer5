import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import IntraPage from "../../../components/handbook-navigation/intra-page";
import { Link } from "gatsby";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

const contents = [
  { id: 0, link: "#top", text: "What are the different roles in the Layer5 community?", },
  { id: 1, link: "#Community Manager", text: "Community Manager" },
  { id: 2, link: "#MeshMate", text: "MeshMate" },
  { id: 3, link: "#Maintainer", text: "Maintainer", },
];

const CommunityGuide = () => {
  return (
    <HandbookWrapper>
      <>
        <div className="page-header-section">
          <h1>Community Roles</h1>
        </div>
        <TOC />
        <div className="page-section">
          <Container>
            <div className="content">
              <a id="top">
                <h2>Layer5 community leader undertake different roles</h2>
              </a>
              <p>
                A leader is someone who can contribute to the Layer5 Community's
                growth by faithfully upholding one of the responsibilities outlined in the roles below.
              </p>
              <h3>
                <a id="Community Manager"><strong>Community Manager</strong></a>
              </h3>
              <p>
                Layer5 Community Managers generally oversee community activities and support ongoing initiatives. They are responsible for the health and growth of the community. Community Managers cultivate an environment which attracts new community members by ensuring that timely and completed responses are provided to questions asked. Community Managers work to ensure that existing community members are retained by helping those members stay engaged in projects on an ongoing basis. Aspects of marketing including member and project promotion as well as aspects of project management by organizing meetings and triaging issues are under the purview of Community Managers.
              </p>
              <p>
                A Community Manager is a person who has an innate drive to contribute to the community's prosperity. A community manager serves as a link between the organisation and
                its community, overcoming obstacles as they arise—or even before
                they arise!—by collaborating with other departments and the
                community to find solutions that benefit the entire community.
              </p>
              <p><strong>Role:</strong></p>
              <ol>
                <li>Moderating, engaging, and supporting community members on platforms like Slack, GitHub etc.</li>
                <li>Building healthy relationships among community members.</li>
                <li>Celebrating community successes, sending swag, and recognizing top contributors.</li>
                <li>Regularly updating the community on the metrics performance.</li>
                <li>Creating and managing new community programs.</li>
                <li>Organizing meetups, events, and other engagements.</li>
                <li>Coordinating with other departments—such as product, engineering, and content marketing—to support community initiatives.</li>
              </ol>
              <p><strong>Responsibilities of Community Managers</strong></p>
              <p>
                The responsibilities of a Community Manager involves building, stewarding, and organizing the Layer5 Community.
              </p>
              <h4>Daily:</h4>
              <ol>
                <li>Issue Triage on GitHub (Issue squatters)
                  <ol>
                    <li>Make use of <code>issue/remind</code> and <code>issue/dco</code>.</li>
                    <li>Issue squatters are to be politely, but briskly brushed aside</li>
                    <li>Remove assignment if not response from the assignee.</li>
                    <li>Search Link: <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Alayer5labs+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+sort%3Acreated-asc+" target="_blank" rel="noopener noreferrer">All Open Issues Across Layer5 Orgs (Sorted by Oldest First)</a></li>
                  </ol>
                </li>
              </ol>
              <h4>Weekly:</h4>
              <ol start="2">
                <li>Assess as a candidate for GitHub org invitation.
                  <ol>
                    <li>Make use of <code>issue/invite</code> (on issues only, not PRs).</li>
                  </ol>
                </li>
                <li>Assess as a candidate for community member profile.
                  <ol>
                    <li>See sample message.</li>
                  </ol>
                </li>
                <li>Weekly evaluation and nomination of community members for the next step in the contributor ladder.</li>
                <li>Review <a href="https://docs.google.com/spreadsheets/d/1ebMTuQ3eTX-cDDIg4qxU07HrXvlvFAVebNFDD_l7v7I/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Community Members spreadsheet</a>. Identify members that need extra attention.</li>
              </ol>
              <h4>Monthly:</h4>
              <ol>
                <li>Assess each <a href="http://layer5.io/community/members" target="_blank" rel="noopener noreferrer">community member profile</a> for transition to inactive. Use a period of two months of inactivity as the metric.</li>
                <li>Monthly evaluation of Social sharing and SEO tracker.
                  <ol>
                    <li>For each Twitter account:
                      <ol>
                        <li>Rate of new followership, Month over month count of followers.</li>
                      </ol>
                    </li>
                    <li>For each LinkedIn account:
                      <ol>
                        <li>Competitive comparison: total count, current month (new follower rate) and historical (rate)</li>
                      </ol>
                    </li>
                    <li>For layer5.io site:</li>
                    <li>MailChimp: rate of new subscriber vs unsubscribers; most popular content; click rate</li>
                  </ol>
                </li>
                <li>Monthly evaluation of DevStats
                  <ol>
                    <li>Orbit: Evaluation
                      <ol>
                        <li>Slack integration for Orbit?</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Every week on Thursday at 8:30 pm | 10:00 am CT - <a href="http://meet.layer5.io/gaurav-chadha" target="_blank" rel="noopener noreferrer">meeting</a> and <a href="https://app.clickup.com/t/85zt86613" target="_blank" rel="noopener noreferrer">minutes</a>.
                  <ol>
                    <li>Evaluation of suggested changes to community management process, tooling, or people. See <a href="https://docs.google.com/document/d/10iwunyCdy0JiOcQw61DHxY0JSSU0P7uaQvg2_K1SF3M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Community Management Improvements</a>.</li>
                  </ol>
                </li>
                <li>Event management
                  <ol>
                    <li>Workshops, Webinars, Conferences</li>
                    <li>CFPs</li>
                  </ol>
                </li>
                <li>Reset the Slack invitation on slack.layer5.io and slack.meshery.io.
                  <ol>
                    <li>Visit <a href="https://layer5io.slack.com/admin/invites" target="_blank" rel="noopener noreferrer">https://layer5io.slack.com/admin/invites</a></li>
                    <li>Deactivate existing invite link. Create new invite link.</li>
                    <li>Update both <a href="https://github.com/layer5io/slack/blob/master/index.html" target="_blank" rel="noopener noreferrer">https://github.com/layer5io/slack/blob/master/index.html</a> and <a href="https://github.com/meshery/slack/blob/master/index.html" target="_blank" rel="noopener noreferrer">https://github.com/meshery/slack/blob/master/index.html</a></li>
                  </ol>
                </li>
              </ol>
              <a id="MeshMate">
                <h3>
                  <strong>
                    <Link to="/community/meshmates">MeshMate</Link>
                  </strong>
                </h3>
              </a>
              <p><strong>Role</strong></p>
              <p>
                **Layer5 MeshMates** is a community member onboarding and mentoring program. Layer5 MeshMates are committed to helping community members be successful contributors. MeshMates aid in identifying areas of projects to engage within, working groups to join, and in helping community members grow in their open source and cloud native knowledge. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.
              </p>
              <p>
                The role of the **Community Manager** and the **MeshMate** are intertwined. It is not uncommon for an individual to be both a Community Manager and a MeshMate. The role of a Community Manager involves stewarding, building, and organizing the Layer5 Community.

                Layer5 MeshMates are committed to helping community members be
                successful contributors. MeshMates aid in identifying areas of
                projects to engage within, working groups to join, and helping
                community members grow in their open-source and cloud-native
                knowledge. By connecting one-on-one, MeshMates will share tips on how to have the best community experience possible.
              </p>
              <ul>
                <li>Increasing awareness of the community to others</li>
                <li>Helping newbies in the community get familiar with all of the projects</li>
                <li>Providing necessary resources to contributors</li>
                <li>Mentoring members of the community</li>
                <li>Facilitate newcomers call</li>
              </ul>
              <a id="Maintainer">
                <h4>
                  <strong>Maintainer</strong>
                </h4>
              </a>
              <p>
                Roles/Responsibilities:
                <br />
                Maintainers are those who are responsible for managing the growth
                and performance of the project. They are incharge of the project's
                wellbeing, reviewing and merging the PR, updating the libraries
                and dependencies in that project, monitoring the codebase and so
                much more.
              </p>
              <ul>
                <li>Send a reminder about meetings</li>
                <li>Prepare meetings</li>
                <li>Lead meetings</li>
                <li>Make sure meeting minutes are kept</li>
                <li>Facilitate the creation and advancement of metrics/software</li>
                <li>Answer questions about the progress of Layer5 projects</li>
                <li>Report on weekly community call progress on a project</li>
                <li>Review issues on the repository</li>
                <li>Review and merge pull requests</li>
                <li>Regularly check the repository for stale content</li>
                <li>Monitor issue tracker and pull requests</li>
              </ul>
              <p>
                <strong>Checklist before becoming a Maintainer</strong>
              </p>
              <div>
                <input type="checkbox" name="maintainer-checklist-1" id="maintainer-checklist-1" />
                <label htmlFor="maintainer-checklist-1">Makes consistent contributions within the Layer5 community</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-2" id="maintainer-checklist-2" />
                <label htmlFor="maintainer-checklist-2">Has the ability to commit directly to a project repository</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-3" id="maintainer-checklist-3" />
                <label htmlFor="maintainer-checklist-3">Holds knowledge of Layer5 project performance, and software</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-4" id="maintainer-checklist-4" />
                <label htmlFor="maintainer-checklist-4">Attends community meeting</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-5" id="maintainer-checklist-5" />
                <label htmlFor="maintainer-checklist-5">Holds good knowledge in helping others achieve their goals</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-6" id="maintainer-checklist-6" />
                <label htmlFor="maintainer-checklist-6">Has knowledge of Git and GitHub</label>
              </div>
              <div>
                <input type="checkbox" name="maintainer-checklist-7" id="maintainer-checklist-7" />
                <label htmlFor="maintainer-checklist-7">Understands the workflow of the Issues and Pull Requests</label>
              </div>
              <a id="ReleaseManager">
                <h2>Release Manager Role</h2>
              </a>
              <p>
                The role of release manager for a release lasts a total of about 6 months. This is divided up among activities before the initial release comes out and activities after the initial release while the release is within active maintenance. The majority of the time is spent in the month before the first release. After that, there is 6 months of time during which point releases come out on approximately a 3 week cycle. During three of these months, the release manager is working on the latest release. This 6 month time period is divided into two sections. In the first three months, this is the primary release and all fixes get cherry-picked from master here. After 3 months, the next release of the Meshery project comes out and there are three more months of support before this release goes to the end of life.
              </p>
              <h3>Responsibilities</h3>
              <h4>Before Release</h4>
              <ul>
                <li>Cutting branches -- 8 to 16 hours divided between all release managers. Working on automating. Will still take a while with automation, probably around half a day. With automation, a lot of the time will be waiting for automated steps to complete as opposed to being directly involved.</li>
                <li>Testing days -- 8 to 16 hours divided between all release managers spread over two weeks in order to orchestrate the testing events. This does not include any time that the release managers additionally devote to picking up and testing individual tests.</li>
                <li>Spreadsheets</li>
                <li>Prioritization</li>
                <li>Chasing people to get things done</li>
                <li>Prioritization of issues in step with workgroups</li>
                <li>Release management meetings -- 45 minutes to 1 hour every week for each release manager. Increases as the release gets closer.</li>
                <li>Release notes/upgrade notes for point release -- 1 week for of the release managers as well as reviewing from other release managers</li>
                <li>Code reviews from docs team as well as workgroup leads</li>
                <li>Generation of release notes using automated tooling</li>
                <li>Updating release notes to make them more readable</li>
                <li>Announcement of release on Twitter/Discuss/Slack -- 5 minutes for one release manager for Discuss/Slack. For Twitter, reach out to someone with access.</li>
              </ul>
              <h4>Ongoing for all releases</h4>
              <ul>
                <li>Watching for release blockers - part of the code review process. Wouldn't say it needs additional time</li>
                <li>Code reviews/deciding whether to accept cherry picks -- about an hour per day for each release manager. Ramps up just before the initial release. Ramps down to an hour per week towards the EOL for a release</li>
                <li>Minor release every 3 weeks.</li>
                <li>Release notes - 1 hour for a single release manager</li>
                <li>Creating releases - 8 hours spread across all release managers. Most of this is automated (i.e. update proxy and then wait for tests to complete, trigger a build and wait for tests to complete)</li>
                <li>48 hour testing -- this involves requesting those who run the tests to trigger the tests and waiting for 48 hours. There is very little needed from a release manager other than checking in to make sure everything is working well</li>
                <li>Handle vulnerability fix integration in step with product security workgroup -- approximately 3 patch releases -- for private security releases, release managers are responsible for coordinating a flush release to get all fixes before the security fix out as well as ensuring they don't accept patches until the release is out. Most of the additional release related work is taken care of by the security fix lead although the release managers are expected to review release notes, build PRs, and other related content. The flush release takes about the same amount of time as a regular release.</li>
                <li>Meshery build and release meetings -- one hour per release manager per week</li>
                <li>End Of Life for release -- 8 hours</li>
              </ul>
              <h4>Qualifications for Release Manager</h4>
              <ul>
                <li>A member of the Layer5 community and active for the last 3 months</li>
                <li>Approved by a majority vote of current maintainers.</li>
                <li>At least one release manager for each version needs to meet requirements for access info in case of vulnerabilities</li>
              </ul>
              <h3>Process for volunteering for release management</h3>
              <p>Contact a current maintainer to volunteer or nominate yourself.</p>
            </div>
            <TocPagination />
          </Container>
          <IntraPage contents={contents} />
        </div>
      </>
    </HandbookWrapper>
  );
};

export default CommunityGuide;
