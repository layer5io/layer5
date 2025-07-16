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
                Layer5 <Link to="/community/meshmates">MeshMates</Link> are individuals committed to helping community members be successful contributors. They guide members to identify projects based on interest, join groups, and grow in their open-source and cloud native knowledge.
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
                Engage in the community and its projects. Keep contributing — those who make impactful contributions are prioritized when internship opportunities arise.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I follow up on the meetings?</h3>
              <p>
                View and add the{" "}
                <a href="https://bit.ly/2SbrRhe" target="_blank" rel="noopener noreferrer">
                  community calendar
                </a>{" "}
                to your list.
              </p>
            </div>

            <div className="faq-entry">
              <h3>I see works of other contributors being highlighted. Will mine be highlighted too?</h3>
              <p>
                We strive to elevate all contributors. Follow and engage with{" "}
                <a href="https://twitter.com/layer5" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
                <a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a>, and{" "}
                <a href="https://www.linkedin.com/company/layer5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>
            </div>

            <div className="faq-entry">
              <h3>I am not a coder. Can I contribute too?</h3>
              <p>
                Absolutely! Join the{" "}
                <a href="https://slack.layer5.io" target="_blank" rel="noopener noreferrer">
                  Slack
                </a>{" "}
                and introduce yourself. Contributions come in many forms — documentation, design, organization, etc.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How should I approach assigning and working on issues within the community?</h3>
              <p>Follow these principles:</p>
              <ul>
                <li><strong>Assignment Confirmation:</strong> Verify issue validity.</li>
                <li><strong>Avoiding Conflict:</strong> Respect others’ efforts.</li>
                <li><strong>Minimize Maintainer Burden:</strong> Follow guidelines closely.</li>
              </ul>
            </div>

            <div className="faq-entry">
              <h3>What should I consider when assigning issues to contributors?</h3>
              <p>Use these principles:</p>
              <ul>
                <li>Valid Issue: Needs attention.</li>
                <li>Fix Promptly: Timeliness matters.</li>
                <li>Assignment Order: Usually chronological, with exceptions:</li>
                <ul>
                  <li>Contributor lacks required skill set</li>
                  <li>Unavailable or non-responsive</li>
                  <li>Another contributor has more context</li>
                  <li>Already has multiple assignments</li>
                </ul>
              </ul>
            </div>

            <div className="faq-entry">
              <h3>What if I can’t find an open issue to work on?</h3>
              <p>
                Look for stale issues or browse{" "}
                <a href="https://github.com/issues?q=is%3Aopen%20is%3Aissue%20archived%3Afalse%20(org%3Ameshery%20OR%20org%3Aservice-mesh-performance%20OR%20org%3Aservice-mesh-patterns%20OR%20org%3Ameshery-extensions)%20label%3A%22help%20wanted%22" target="_blank" rel="noopener noreferrer">
                  help-wanted issues
                </a>{" "}
                across the Layer5 orgs.
              </p>
            </div>

            <div className="faq-entry">
              <h3>Do project contributors ever meet separately to deep-dive on special topics?</h3>
              <p>
                Yes. In addition to regularly scheduled meetings listed on the{" "}
                <Link to="/community/calendar#meetings">community calendar</Link>, many contributors schedule ad-hoc sessions using Zoom or Slack huddles.
              </p>
            </div>

            <div className="faq-entry">
              <h3>How do I access the community docs?</h3>
              <ol>
                <li>Fill the <Link to="https://layer5.io/newcomers">community member form</Link>.</li>
                <li>Go to Google Drive's “Shared Drives” with the same email.</li>
                <li>Find the “Layer5 Community” drive.</li>
              </ol>
              <p>If not accessible, reach out to a MeshMate or Community Manager.</p>
            </div>

          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default Faq;
