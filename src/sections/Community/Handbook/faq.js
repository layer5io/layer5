import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import {Link} from "gatsby";


const Faq= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>FAQs</h1>
      </div>  
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>General FAQs: </h2>
            <p></p>
            <h4><strong>Q: Are Layer5’s solutions open source?</strong></h4>
            <p><strong>A:</strong> Yes, all of Layer5 projects are licensed under Apache V2. Layer5 also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported.</p>
              
            <h4><strong>Q: I am new to Open Source, where do I begin?</strong></h4>
            <p><strong>A:</strong> You can start by going through the <a href="https://docs.google.com/document/d/1tpg2sLxirozNt3Ofr3GdM002f9rExp74EqrsGZBU710/edit#heading=h.rcr9t5pnt3bw">Newcomers’ Welcome Guide.</a></p>
              
            <h4><strong>Q: What exactly is a MeshMate?</strong></h4>
            <p><strong>A:</strong>Layer5<Link to="/community/meshmates"> MeshMates </Link>are individuals committed to helping community members be successful contributors. Meshmates are there to guide and support the community members, helping them identify projects they can contribute to depending on their areas of interest, directing them on groups to join and helping them grow in their open-source and cloud native knowledge.</p>

            <h4><strong>Q: How do I join the mailing list?</strong></h4>
            <p><strong>A:</strong> You can subscribe to the Layer5 mailing <a href="https://layer5.io/subscribe">here.</a></p>

            <h4><strong>Q: How do I get an internship in Layer5?</strong></h4>
            <p><strong>A:</strong> To best position your candidacy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up - particularly members who are making significantly impactful contributions.</p>

            <h4><strong>Q: How do I follow up on the meetings?</strong></h4>
            <p><strong>A:</strong> To follow up on the community meetings, you can view and add the <a href="https://bit.ly/2SbrRhe">community calendar</a> to your calendar list.</p>

            <h4><strong>Q: I see works of other contributors being highlighted, will my contributions be highlighted too?</strong></h4>
            <p><strong>A:</strong> We might not get to everyone, but we try to elevate the works of all of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Be sure to follow and engage with the <a href="https://twitter.com/layer5">Twitter,</a><a href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"> Youtube,</a> and <a href="https://www.linkedin.com/company/layer5/">Linkedin</a> accounts.</p>

            <h4><strong>Q: I am not a coder, can I contribute too?</strong></h4>
            <p><strong>A:</strong> Some community members join to contribute to open source projects, others jump in to put those projects to use, some are here to help cultivate and steward our community, while others are here just to hangout and absorb. All members are most welcome. Be sure to introduce yourself in the Layer5<a href="http://slack.layer5.io"> slack </a>and let other community members get acquainted with you and vice-versa.</p>
              
            <h4><strong>Q: What if I can’t find an open issue to work on?</strong></h4>
            <p><strong>A:</strong> Check if any assigned issues are stale. ( Assigned some time back, but no discussions have happened or is not updated for a long time ). If you find such issues, comment to ask if you can help. Alternatively, Look to find the <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">help-wanted</a> issues.</p>
              
            {/* <p><strong>Q: Why does the community use slack?</strong></p>
            <p><strong>A:</strong></p>

            <p><strong>Q: When should I use Slack vs Discuss?</strong></p>
            <p><strong>A:</strong></p>

            <p><strong>Q: Why can’t I find an open issue to work on?</strong></p>
            <p><strong>A:</strong></p>

            <p><strong>Q: How do I know if an issue is available to work on?</strong></p>
            <p><strong>A:</strong></p>

            <p><strong>Q: Can I create new issues or suggest changes?</strong></p>
            <p><strong>A:</strong></p> */}
          </div>
        </Container>
      </div>      
    </HandbookWrapper>
  );
};
    
export default Faq;