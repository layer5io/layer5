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
          <div className="content faq-content">
            <h2 className="heading-top">General FAQs</h2>

            <div className="faq-entry">
              <h3>Are Layer5’s solutions open source?</h3>
              <p>
                Yes, all Layer5 projects are licensed under Apache V2. Layer5 also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported.
              </p>
            </div>

            <div className="faq-entry">
              <h3>I am new to Open Source, where do I begin?</h3>
              <p>
                You can start by going through the{" "}
                <a href="https://layer5.io/community/newcomers" target="_blank" rel="noopener noreferrer">
                  Newcomers’ Welcome Guide
                </a>.
              </p>
            </div>

            <div className="faq-entry">
              <h3>What exactly is a MeshMate?</h3>
              <p>
                Layer5 <Link to="/community/meshmates">MeshMates</Link> are individuals committed to helping community members be successful contributors. Meshmates are there to guide and support the community members, helping them identify projects they can contribute to depending on their areas of interest, directing them on groups to join and helping them grow in their open-source and cloud native knowledge.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I join the mailing list?</h3>
              <p>
                You can subscribe to the Layer5 mailing list{" "}
                <a href="https://layer5.io/subscribe" target="_blank" rel="noopener noreferrer">
                  here
                </a>.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I get an internship in Layer5?</h3>
              <p>
                To best position your candidacy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up — particularly members who are making significantly impactful contributions.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I follow up on the meetings?</h3>
              <p>
                To follow up on the community meetings, you can view and add the{" "}
                <a href="https://bit.ly/2SbrRhe" target="_blank" rel="noopener noreferrer">
                  community calendar
                </a>{" "}
                to your calendar list.
              </p>
            </div>

            <div className="faq-entry">
              <h3>I see works of other contributors being highlighted, will my contributions be highlighted too?</h3>
              <p>
                We try to elevate the works of all our contributors. Be sure to follow and engage with our{" "}
                <a href="https://twitter.com/layer5" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
                <a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a>, and{" "}
                <a href="https://www.linkedin.com/company/layer5/" target="_blank" rel="noopener noreferrer">LinkedIn</a> pages.
              </p>
            </div>

            <div className="faq-entry">
              <h3>I am not a coder, can I contribute too?</h3>
              <p>
                Absolutely! Be sure to introduce yourself on{" "}
                <a href="https://slack.layer5.io" target="_blank" rel="noopener noreferrer">
                  Slack
                </a>{" "}
                and let the community get to know you. Contributions come in many forms!
              </p>
            </div>

            <div className="faq-entry">
              <h3>How should I approach assigning and working on issues within the community?</h3>
              <p>Follow these guidelines:</p>
              <ul>
                <li><strong>Assignment Confirmation:</strong> Verify issue validity to avoid wasted effort.</li>
                <li><strong>Avoiding Conflict:</strong> Respect fellow contributors’ efforts and maintain harmony.</li>
                <li><strong>Minimize Maintainer Burden:</strong> Follow contribution guidelines closely.</li>
              </ul>
            </div>

            <div className="faq-entry">
              <h3>What should I consider when assigning issues to contributors?</h3>
              <p>Use these principles:</p>
              <ul>
                <li>Valid Issue: Assign issues that require attention.</li>
                <li>Fix Promptly: Timely contributions are appreciated.</li>
                <li>Assignment Order: Generally chronological, with exceptions such as:</li>
                <ul>
                  <li>Contributor lacks the skill set.</li>
                  <li>Unavailable or non-responsive.</li>
                  <li>Another contributor has more context.</li>
                  <li>Contributor has too many open assignments.</li>
                </ul>
              </ul>
            </div>

            <div className="faq-entry">
              <h3>What if I can’t find an open issue to work on?</h3>
              <p>
                Look for stale issues or explore{" "}
                <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+" target="_blank" rel="noopener noreferrer">
                  help-wanted issues
                </a>{" "}across Layer5 organizations.
              </p>
            </div>

            <div className="faq-entry">
              <h3>Do project contributors ever meet separately to deep-dive on special topics?</h3>
              <p>
                Yes, additional meetings outside of regular ones happen often. These may or may not be listed on the{" "}
                <Link to="/community/calendar#meetings">community calendar</Link>. Contributors also use Slack huddles or Zoom to collaborate.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I access the community docs?</h3>
              <ol>
                <li>Fill out the <Link to="https://layer5.io/newcomers">community member form</Link>.</li>
                <li>Use the same email to check Google Drive's "Shared Drives".</li>
                <li>Look for “Layer5 Community” shared drive.</li>
              </ol>
              <p>
                Still can’t find it? Contact a MeshMate or Community Manager.
              </p>
            </div>

          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default Faq;
