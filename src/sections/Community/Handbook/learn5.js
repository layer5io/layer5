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
        <h1>Learn Layer5</h1>
      </div>
      <TOC />

      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Learn">
              {" "}
              <h2>Learn</h2>{" "}
            </a>
            <p>
              As a community, we have put together good learning materials and
              resources to guide you through learning about service meshes.
            </p>
            <p>The resource includes:</p>
            <div className="content">
              <ul>
                <li>
                  <Link to="/learn">Service Mesh Training.</Link>
                </li>
                <li>
                  <Link to="/learn/service-mesh-labs">
                    Learn how to service mesh with interactive labs.
                  </Link>
                </li>
                <li>
                  <Link to="/learn/service-mesh-books">Books.</Link>
                </li>
                <li>
                  <Link to="/learn/service-mesh-workshops">Workshops.</Link>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/Layer5io?sub_confirmation=1/playlists">
                    Layer5 youtube playlist.
                  </a>
                </li>
                <li>
                  <Link to="/learn/learning-paths">Learning Paths.</Link>
                </li>
              </ul>
            </div>
            <p>
              These materials were created to be interactive, easy to use, and
              free for all.
            </p>

            <a id="Events">
              {" "}
              <h2>Events</h2>{" "}
            </a>
            <p>
              At Layer5, we participate in international events, online
              workshops, and also meetups( both small and large). They all vary
              in topics ranging from cloud-native management, service mesh,
              DevOps, and open-source. In these events, more awareness about the
              Layer5 projects and the community is created.
            </p>
            <p>
              Layer5 has participated in numerous CNCF events over the years.
            </p>
            <p>
              Check out <Link to="/community/events">Layer5 events</Link> to
              participate in any of the latest events.
            </p>

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
