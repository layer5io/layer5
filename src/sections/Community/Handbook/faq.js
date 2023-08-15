import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { Link } from "gatsby";


const Faq = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>FAQs</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>General FAQs:</h2><br />
            <h3>Q: Are <strong>Layer5’s</strong> solutions open source?</h3>
            <p><strong>A:</strong> Yes, all <strong>Layer5</strong> projects are licensed under Apache V2. <strong>Layer5</strong> also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported.</p>

            <h3>Q: I am new to Open Source, where do I begin?</h3>
            <p><strong>A:</strong> You can start by going through the <a href="https://layer5.io/community/newcomers">Newcomers’ Welcome Guide.</a></p>

            <h3>Q: What exactly is a MeshMate?</h3>
            <p><strong>A:</strong> <strong>Layer5</strong><Link to="/community/meshmates"> MeshMates </Link>are individuals committed to helping community members be successful contributors. Meshmates are there to guide and support the community members, helping them identify projects they can contribute to depending on their areas of interest, directing them on groups to join and helping them grow in their open-source and cloud native knowledge.</p>

            <h3>Q: How do I join the mailing list?</h3>
            <p><strong>A:</strong> You can subscribe to the <strong>Layer5</strong> mailing <a href="https://layer5.io/subscribe">here.</a></p>

            <h3>Q: How do I get an internship in <strong>Layer5</strong>?</h3>
            <p><strong>A:</strong> To best position your candidacy for an internship with <strong>Layer5</strong>, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up - particularly members who are making significantly impactful contributions.</p>

            <h3>Q: How do I follow up on the meetings?</h3>
            <p><strong>A:</strong> To follow up on the community meetings, you can view and add the <a href="https://bit.ly/2SbrRhe">community calendar</a> to your calendar list.</p>

            <h3>Q: I see works of other contributors being highlighted, will my contributions be highlighted too?</h3>
            <p><strong>A:</strong> We might not get to everyone, but we try to elevate the works of all of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with the <a href="https://twitter.com/layer5">Twitter,</a><a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"> Youtube,</a> and <a href="https://www.linkedin.com/company/layer5/">Linkedin</a> accounts.</p>

            <h3>Q: I am not a coder, can I contribute too?</h3>
            <p><strong>A:</strong> Some community members join to contribute to open source projects, others jump in to put those projects to use, some are here to help cultivate and steward our community, while others are here just to hangout and absorb. All members are most welcome. Be sure to introduce yourself in the <strong>Layer5</strong><a href="https://slack.layer5.io"> slack </a>and let other community members get acquainted with you and vice-versa.</p>

            <h3>Q: How should I approach assigning and working on issues within the community?</h3>
            <p><strong>A:</strong> To ensure efficiency and positive collaboration, please follow these guidelines:</p>
            <ul>
              <li><strong>Assignment Confirmation</strong>: Verify issue validity to avoid wasted effort and address only relevant problems.</li>
              <li><strong>Avoiding Conflict</strong>: Treat fellow contributors kindly, respecting their contributions to foster a harmonious environment and maintain project momentum.</li>
              <li><strong>Minimize Maintainer Burden</strong>: Adhere to guidelines to reduce maintainers' time spent on clarifications and resolving conflicts, enabling them to focus on essential tasks.</li>
            </ul>
            <h3>Q: What should I consider when assigning issues to contributors?</h3>
            <p><strong>A:</strong> When assigning issues, follow these principles:</p>
            <ul>
              <li><strong>Valid Issue</strong>: Assign issues that require attention.</li>
              <li><strong>Fix the Issue</strong>: Prioritize resolving them promptly.</li>
              <li><strong>Assignment Order</strong>: Generally chronological, with exceptions:</li>
              <ul>
                <li>Unqualified to perform this task currently.</li>
                <li>Unavailable and/or incapable of performing the task promptly.</li>
                <li>Lack of context when another contributor has it.</li>
                <li>Requesting contributor has existing open assignments.</li>
              </ul>
            </ul>
            <p>These guidelines aim to create a supportive and efficient community where everyone can contribute effectively.</p>


            <h3>Q: What if I can’t find an open issue to work on?</h3>
            <p><strong>A:</strong> Check if any assigned issues are stale. ( Assigned some time back, but no discussions have happened or is not updated for a long time ). If you find such issues, comment to ask if you can help. Alternatively, Look to find the <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">help-wanted</a> issues.</p>

            <h3>Q: In addition to the routinely scheduled project meetings, do project contributors ever meet separately to deep-dive on special topics?</h3>
            <p><strong>A:</strong> Yes, outside of the regularly scheduled meetings on the community calendar (meet.layer5.io), there are any number of other meetings that occur to facilitate deeper levels or more concentrated attention to particular bodies of work (e.g. a design spec review). On occasion, these one-off meetings are scheduled in advance and put onto the community calendar, while other other times they are simply self-organized by interested contributors. Often contributors will use Slack huddles or Zoom meetings to facilitate the discussion. If you need a new meeting placed onto the community calendar, please reach out to a <Link to="/community/community-managers">Community Manager</Link></p>


            {/* <p>Q: Why does the community use slack?</p>
            <p><strong>A:</strong></p>

            <p>Q: When should I use Slack vs Discuss?</p>
            <p><strong>A:</strong></p>

            <p>Q: Why can’t I find an open issue to work on?</p>
            <p><strong>A:</strong></p>

            <p>Q: How do I know if an issue is available to work on?</p>
            <p><strong>A:</strong></p>

            <p>Q: Can I create new issues or suggest changes?</p>
            <p><strong>A:</strong></p> */}
          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default Faq;