import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import { Link } from "gatsby";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id : 0, link : "#Learning",text : "Learning", },
  { id : 1, link : "#Eventing", text : "Eventing" },
  { id : 2, link : "#Blogging", text : "Blogging" },
];

const LearnLayer = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Learning with Layer5</h1>
      </div>
      <TOC />

      <div className="page-section">
        <Container>
          <div className="content">

            <a id="Learning">
              <h2>Learning together</h2>
            </a>
            <p>As a community, we have put together an excellent set of learning materials and training resources to guide you through learning about cloud native infrastucture and service meshes.</p>
            <p>You can review the <Link to="/learn">complete list of learning resources</Link> or jump straight to the type of training you prefer:</p>
            <ul>
              <li>Interactive <Link to="/learn/service-mesh-labs">service mesh labs</Link></li>
              <li>Free <Link to="/learn/service-mesh-books">service mesh books</Link></li>
              <li>Self-paced <Link to="/learn/service-mesh-workshops">service mesh workshops</Link></li>
              <li>Recorded training and talks on the <a href="https://www.youtube.com/c/Layer5io?sub_confirmation=1/playlists">Layer5 YouTube Channel</a></li>
              <li>Multi-course, multi-mesh <Link to="/learn/learning-paths">service mesh learning paths</Link></li>
            </ul>
            <p>
              These materials were created to be interactive, easy to use, and
              free for all.
            </p>

            <a id="Eventing">
              <h2>Sharing what you've learned at a technical event</h2>
            </a>
            <p>At Layer5, we participate in many different technical conferences, in international events, in online workshops, at meetups, and so on. Our engagement in these events ranges across  various cloud native and open source topics and varies between speaking, hosting workshops, managing project booths, and so on. Our engagement in these events, increases awareness about our projects and the individual community members that contribute to the projects.
            </p>
            <p>A member of the Layer5 community has presented at every KubeCon since its inception. Join us at the many events we host or participate in. Check out <Link to="/community/events">Layer5 events</Link> to for a current list of events.</p>


            <a id="Blogging">
              {" "}
              <h2>Sharing what you've learned on our blog</h2>{" "}
            </a>
            <p>
              Write down what you've learned, what you've built, and what experiences that you have had in the community. All community members are welcome to contribute to the <Link to="/blog">Layer5 blog</Link>.
            </p>
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default LearnLayer;
