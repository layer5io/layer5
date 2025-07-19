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
            <h2>General FAQs</h2>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: Are Layer5's solutions open source?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: Yes, all Layer5 projects are licensed under Apache V2. Layer5 also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: I am new to Open Source, where do I begin?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: You can start by going through the{" "}
              <a href="https://layer5.io/community/newcomers" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>
                Newcomers' Welcome Guide
              </a>.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: What exactly is a MeshMate?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: Layer5 <Link to="/community/meshmates" style={{ color: '#00b39f' }}>MeshMates</Link> are individuals committed to helping community members be successful contributors. Meshmates are there to guide and support the community members, helping them identify projects they can contribute to depending on their areas of interest, directing them on groups to join and helping them grow in their open-source and cloud native knowledge.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: How do I join the mailing list?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: You can subscribe to the Layer5 mailing list{" "}
              <a href="https://layer5.io/subscribe" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>
                here
              </a>.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: How do I get an internship in Layer5?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: To best position your candidacy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up – particularly members who are making significantly impactful contributions.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: How do I follow up on the meetings?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: To follow up on the community meetings, you can view and add the{" "}
              <a href="https://bit.ly/2SbrRhe" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>
                community calendar
              </a>{" "}
              to your calendar list.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: I see works of other contributors being highlighted, will my contributions be highlighted too?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: We might not get to everyone, but we try to elevate the works of all of our contributors. All of our community members are proud of their work and we like to help share it around with the community. You can follow and tag{" "}
              <a href="https://twitter.com/layer5" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>@layer5</a> on Twitter, subscribe to our{" "}
              <a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>YouTube channel</a>, and follow our{" "}
              <a href="https://www.linkedin.com/company/layer5/" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>LinkedIn page</a> to stay up-to-date with the latest news.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: I am not a coder. Can I contribute too?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: Absolutely! Layer5 projects and the broader community welcome all types of contribution. Join our{" "}
              <a href="https://slack.layer5.io" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>
                Slack
              </a>{" "}
              and introduce yourself. All contributions are valued, including documentation, organizing, tutorials, testing, graphic design, etc.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: How should I approach assigning and working on issues within the community?
            </p>
            <div style={{ marginBottom: '20px' }}>
              <p>A: Follow these principles:</p>
              <ul>
                <li><strong>Assignment Confirmation:</strong> Verify issue validity.</li>
                <li><strong>Avoiding Conflict:</strong> Respect others' efforts.</li>
                <li><strong>Minimize Maintainer Burden:</strong> Follow guidelines closely.</li>
              </ul>
            </div>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: What should I consider when assigning issues to contributors?
            </p>
            <div style={{ marginBottom: '20px' }}>
              <p>A: Use these principles:</p>
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

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: What if I can't find an open issue to work on?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: Look for stale issues or browse{" "}
              <a href="https://github.com/issues?q=is%3Aopen%20is%3Aissue%20archived%3Afalse%20(org%3Ameshery%20OR%20org%3Aservice-mesh-performance%20OR%20org%3Aservice-mesh-patterns%20OR%20org%3Ameshery-extensions)%20label%3A%22help%20wanted%22" target="_blank" rel="noopener noreferrer" style={{ color: '#00b39f' }}>
                help-wanted issues
              </a>{" "}
              across the Layer5 orgs.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: Do project contributors ever meet separately to deep-dive on special topics?
            </p>
            <p style={{ marginBottom: '20px' }}>
              A: Yes. In addition to regularly scheduled meetings listed on the{" "}
              <Link to="/community/calendar#meetings" style={{ color: '#00b39f' }}>community calendar</Link>, many contributors schedule ad-hoc sessions using Zoom or Slack huddles.
            </p>

            <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
              Q: How do I access the community docs?
            </p>
            <div style={{ marginBottom: '20px' }}>
              <p>A: </p>
              <ol>
                <li>Fill the <Link to="https://layer5.io/newcomers" style={{ color: '#00b39f' }}>community member form</Link>.</li>
                <li>Go to Google Drive's "Shared Drives" with the same email.</li>
                <li>Find the "Layer5 Community" drive.</li>
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
