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
      <div className="page-header-section">
        <h1>Community Roles</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="top">
              {" "}
              <h2>What are the roles held by individuals in the Layer5 community?</h2>{" "}
            </a>

            <p>
              A leader is someone who can contribute to the Layer5 Community's
              growth by being accountable, participating in decision-making, and
              feeling responsible.
            </p>
            <h3>What does it take to be a leader?</h3>

            <a id="Community Manager">
              {" "}
              <h4>
                <strong>Community Manager</strong>
              </h4>{" "}
            </a>

            <p>
              Roles/Responsibilities: <br />A Community Manager is a person who
              has an innate drive to contribute to the community's prosperity. A
              community manager serves as a link between the organisation and
              its community, overcoming obstacles as they arise—or even before
              they arise!—by collaborating with other departments and the
              community to find solutions that benefit the entire community.
              <ul>
                <li>
                  Moderating, engaging, and supporting community members on
                  platforms like Slack, GitHub etc.
                </li>
                <li>Building healthy relationships among community members.</li>
                <li>
                  Celebrating community successes, sending swag, and recognizing
                  top contributors.
                </li>
                <li>
                  Regularly updating the community on the metrics performance.
                </li>
                <li>Creating and managing new community programs.</li>
                <li>Organizing meetups, events, and other engagements.</li>
                <li>
                  Coordinating with other departments—such as product,
                  engineering, and content marketing—to support community
                  initiatives.
                </li>
              </ul>
            </p>
            <p>
              <strong>Checklist before becoming a Community Manager</strong>
            </p>
            <input type="checkbox" name="CM-checklist-1" id="CM-checklist-1" />
            <label htmlFor="CM-checklist-1">
              Prior technical community management experience
            </label>
            <input type="checkbox" name="CM-checklist-2" id="CM-checklist-2" />
            <label htmlFor="CM-checklist-2">
              Self-motivated with the ability to manage multiple competing
              priorities
            </label>
            <input type="checkbox" name="CM-checklist-3" id="CM-checklist-3" />
            <label htmlFor="CM-checklist-3">
              A growth mindset and an approach to new information and knowledge
              with curiosity
            </label>
            <input type="checkbox" name="CM-checklist-4" id="CM-checklist-4" />
            <label htmlFor="CM-checklist-4">
              A challenge seeker who desires and readily takes on new challenges
              and works towards solutions
            </label>
            <input type="checkbox" name="CM-checklist-5" id="CM-checklist-5" />
            <label htmlFor="CM-checklist-5">Good communication skills</label>
            <input type="checkbox" name="CM-checklist-6" id="CM-checklist-6" />
            <label htmlFor="CM-checklist-6">Strong relational skills</label>
            <input type="checkbox" name="CM-checklist-7" id="CM-checklist-7" />
            <label htmlFor="CM-checklist-7">
              An understanding of how contemporary open-source projects function
            </label>
            <br />

            <a id="MeshMate">
              {" "}
              <h4>
                <strong>
                  <Link to="/community/meshmates">MeshMate</Link>
                </strong>
              </h4>{" "}
            </a>

            <p>
              <strong> Roles and Responsibilities: </strong>
              <br />
              Layer5 MeshMates are committed to helping community members be
              successful contributors. MeshMates aid in identifying areas of
              projects to engage within, working groups to join, and helping
              community members grow in their open-source and cloud-native
              knowledge. By connecting one-on-one, MeshMates will share tips on
              how to have the best community experience possible.
              <ul>
                <li>Increasing awareness of the community to others</li>
                <li>
                  Helping newbies in the community get familiar with all of the
                  projects
                </li>
                <li>Providing necessary resources to contributors</li>
                <li>Mentoring members of the community</li>
                <li>Facilitate newcomers call</li>
              </ul>
            </p>

            <a id="Maintainer">
              {" "}
              <h4>
                <strong>Maintainer</strong>
              </h4>{" "}
            </a>

            <p>
              Roles/Responsibilities:
              <br />
              Maintainers are those who are responsible for managing the growth
              and performance of the project. They are incharge of the project's
              wellbeing, reviewing and merging the PR, updating the libraries
              and dependencies in that project, monitoring the codebase and so
              much more.
              <ul>
                <li>Send a reminder about meetings</li>
                <li>Prepare meetings</li>
                <li>Lead meetings</li>
                <li>Make sure meeting minutes are kept</li>
                <li>
                  Facilitate the creation and advancement of metrics/software
                </li>
                <li>Answer questions about the progress of Layer5 projects</li>
                <li>Report on weekly community call progress on a project</li>
                <li>Review issues on the repository</li>
                <li>Review and merge pull requests</li>
                <li>Regularly check the repository for stale content</li>
                <li>Monitor issue tracker and pull requests</li>
              </ul>
            </p>
            <p>
              <strong>Checklist before becoming a Maintainer</strong>
            </p>
            <input
              type="checkbox"
              name="maintainer-checklist-1"
              id="maintainer-checklist-1"
            />
            <label htmlFor="maintainer-checklist-1">
              Makes consistent contributions within the Layer5 community
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-2"
              id="maintainer-checklist-2"
            />
            <label htmlFor="maintainer-checklist-2">
              Has the ability to commit directly to a project repository
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-3"
              id="maintainer-checklist-3"
            />
            <label htmlFor="maintainer-checklist-3">
              Holds knowledge of Layer5 project performance, and software
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-3"
              id="maintainer-checklist-4"
            />
            <label htmlFor="maintainer-checklist-4">
              Attends community meeting
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-5"
              id="maintainer-checklist-5"
            />
            <label htmlFor="maintainer-checklist-5">
              Holds good knowledge in helping others achieve their goals
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-6"
              id="maintainer-checklist-6"
            />
            <label htmlFor="maintainer-checklist-6">
              Has knowledge of Git and GitHub
            </label>
            <input
              type="checkbox"
              name="maintainer-checklist-7"
              id="maintainer-checklist-7"
            />
            <label htmlFor="maintainer-checklist-7">
              Understands the workflow of the Issues and Pull Requests
            </label>
            <a id="ReleaseManager">
              <h2>Release Manager Role</h2>
            </a>

            <p>
              The role of release manager for a release lasts a total of about 6 months. This is divided up among activities before the initial release comes out and activities after the initial release while the release is within active maintenance. The majority of the time is spent in the month before the first release. After that, there is 6 months of time during which point releases come out on approximately a 3 week cycle. During three of these months, the release manager is working on the latest release. This 6 month time period is divided into two sections. In the first three months, this is the primary release and all fixes get cherry-picked from master here. After 3 months, the next release of the Meshery project comes out and there are three more months of support before this release goes to the end of life.
            </p>

            <h3 >Responsibilities</h3>

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

            <h3>Qualifications for Release Manager</h3>
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
    </HandbookWrapper>
  );
};

export default CommunityGuide;
