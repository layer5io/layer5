import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./adventures.style";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import { Link } from "gatsby";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
} from "../../../reusecore/Accordion";


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
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionTitle>Is Layer5's software open source?</AccordionTitle>
                <AccordionBody>
                  Yes, all Layer5 projects are licensed under Apache V2. Additionally, Layer5 offers enterprise-grade extensions to the Meshery project with commercial support.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>How can I start contributing to open source?</AccordionTitle>
                <AccordionBody>
                  The best way to begin is by reading our <a href="https://layer5.io/community/newcomers">Newcomers' Welcome Guide</a>, which provides a structured path for new contributors.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>What is a MeshMate?</AccordionTitle>
                <AccordionBody>
                  <Link to="/community/meshmates">MeshMates</Link> are experienced Layer5 community members who mentor and guide new contributors. They help identify suitable projects based on your interests, connect you with relevant groups, and support your growth in open-source and cloud native technologies.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>How can I subscribe to the Layer5 mailing list?</AccordionTitle>
                <AccordionBody>
                  You can subscribe to our mailing list by visiting our <a href="https://layer5.io/subscribe">subscription page</a>.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>How can I secure an internship at Layer5?</AccordionTitle>
                <AccordionBody>
                  The best path to an internship at Layer5 is through active community participation and consistent contributions. We prioritize offering internships to community members who demonstrate dedication and make meaningful contributions to our projects.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>How can I stay updated with community meetings?</AccordionTitle>
                <AccordionBody>
                  You can stay informed about our community meetings by adding the <a href="https://bit.ly/2SbrRhe">Layer5 community calendar</a> to your personal calendar.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>Will my contributions be recognized by the community?</AccordionTitle>
                <AccordionBody>
                  We actively celebrate our contributors' achievements and work to highlight their contributions across the technology industry. While we may not feature every contribution, we regularly showcase community work through our <a href="https://twitter.com/layer5">Twitter</a>, <a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1">YouTube</a>, and <a href="https://www.linkedin.com/company/layer5/">LinkedIn</a> channels.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>Can I contribute without coding experience?</AccordionTitle>
                <AccordionBody>
                  Absolutely! Our community welcomes diverse contributions. Whether you're interested in documentation, community management, design, or just learning, there's a place for you. Join us on <a href="https://slack.layer5.io">Slack</a> to connect with fellow community members and find your niche.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>What is the best approach to working on community issues?</AccordionTitle>
                <AccordionBody>
                  <p>For effective collaboration, please follow these guidelines:</p>
                  <ul>
                    <li>Verify Issue Relevance: Ensure the issue is valid and currently needed before investing time.</li>
                    <li>Foster Positive Collaboration: Maintain respectful communication and support project momentum through constructive interactions.</li>
                    <li>Follow Established Processes: Help maintainers focus on core tasks by adhering to community guidelines and documentation.</li>
                  </ul>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>What are the key considerations when assigning issues?</AccordionTitle>
                <AccordionBody>
                  <p>Follow these principles when assigning issues:</p>
                  <ul>
                    <li>Issue Validity: Ensure the issue requires immediate attention.</li>
                    <li>Resolution Priority: Focus on timely completion of assignments.</li>
                    <li>Assignment Considerations:</li>
                    <ul>
                      <li>Current skill level matches the task requirements</li>
                      <li>Availability to complete the task in a timely manner</li>
                      <li>Familiarity with the context and background</li>
                      <li>Current workload and existing assignments</li>
                    </ul>
                  </ul>
                  <p>These guidelines help maintain an efficient and collaborative community environment.</p>
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>How can I find issues to work on?</AccordionTitle>
                <AccordionBody>
                  First, check for stale issues (those without recent activity or updates) and ask if you can help. You can also browse our <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">help-wanted</a> issues for opportunities to contribute.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionTitle>Do contributors hold special topic discussions outside regular meetings?</AccordionTitle>
                <AccordionBody>
                  Yes, in addition to our regular community meetings on the calendar (meet.layer5.io), contributors often organize focused discussions for specific topics or deep-dive sessions. These may be scheduled on the community calendar or arranged impromptu through Slack huddles or Zoom. To schedule a new meeting on the community calendar, contact a <Link to="/community/community-managers">Community Manager</Link>.
                </AccordionBody>
              </AccordionItem>
            </Accordion>


            {/* <p>Q: Why does the community use slack?</p>
            <p>A:</p>

            <p>Q: When should I use Slack vs Discuss?</p>
            <p>A:</p>

            <p>Q: Why can’t I find an open issue to work on?</p>
            <p>A:</p>

            <p>Q: How do I know if an issue is available to work on?</p>
            <p>A:</p>

            <p>Q: Can I create new issues or suggest changes?</p>
            <p>A:</p> */}
          </div>
        </Container>
      </div>
      <TocPagination />
    </HandbookWrapper>
  );
};

export default Faq;