import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import { Link } from "gatsby";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id: 0,
    link: "#Learn",
    text: "Learn",
  },
  { id: 1, link: "#Event", text: "Event" },
  { id: 2, link: "#Blog", text: "Blog" },
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

            <a id="Learn"> 
              <h2>Learn</h2>
            </a>
            <p>As a community, we have put together an excellent set of learning materials and training resources to guide you through learning about cloud native infrastucture and service meshes.</p>
            <p>You can review the <Link to="/learn">complete list of learning resources</Link> or jump straight to the type of training you prefer:</p>
            <div className="content">
              <ul>
                <li>Interactive <Link to="/learn/service-mesh-labs">service mesh labs</Link></li>
                <li>Free <Link to="/learn/service-mesh-books">service mesh books</Link></li>
                <li>Self-paced <Link to="/learn/service-mesh-workshops">service mesh workshops</Link></li>
                <li>Recorded training and talks on the <a href="https://www.youtube.com/c/Layer5io?sub_confirmation=1/playlists">Layer5 YouTube Channel</a></li> 
                <li>Multi-course, multi-mesh <Link to="/learn/learning-paths">service mesh learning paths</Link></li>

              </ul>
            </div>
            <p>
              These materials were created to be interactive, easy to use, and
              free for all.
            </p>

    
            <a id="Events">    
              <h2>Events</h2>
            </a>
            <p>At Layer5, we participate in international events, online workshops, and also meetups (both small and large). They all vary in topics ranging from cloud-native management, service mesh, DevOps, and open-source. In these events,  more awareness about the Layer5 projects and the community is created.
            </p>
            <p>A member of the Layer5 community has presented at every KubeCon since its inception. Join us at the many events we host or participate in.</p>
            <p>Check out <Link to="/community/events">Layer5 events</Link> to participate in any of the latest events.</p>


            <a id="Blog">
              {" "}
              <h2>Blog</h2>{" "}
            </a>
            <p>
              Visit our <Link to="/blog">Blog</Link> for the latest blog posts
              on Layer5
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
