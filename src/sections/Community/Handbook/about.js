import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import {Link} from "gatsby";
import TOC from "../../../components/handbook-navigation/index";

const Intro= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Community Handbook</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <h2>About Layer5</h2>
            <p>
              Layer5 is a community and open-source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world.
              Layer5 is the creator and maintainer of <Link to="../blog/announcements/a-standard-interface-for-service-meshes">service mesh standards</Link> and also the maker of <a href="https://meshery.io">Meshery</a>,  the <Link to="/service-mesh-management/meshery">Service Mesh Management Plane</Link>.<br/>
              Layer5 is not just a company, we are also:
            </p>
            <h4>Community First</h4>
            <p>
              Layer5 represents the community.  We build projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more.
              Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome.
            </p>
            <h4>Open Source First</h4>
            <p>
              All Layer5 projects are open-source. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration,
              globalism, and innovation. Layer5 projects are distributed under the terms of <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache v2</a>.
            </p>
            <h3>Values</h3>
            <ul>
              <li>Collaboration</li>
              <li>Inclusivity & Diversity</li>
              <li>Community-Centered</li>
              <li>Respect</li>
              <li>Openness/Transparency</li>
            </ul>
            <h3>Goals</h3>
            <ul>
              Our goals as a community and company are:
              <li>To build a large collection of service meshes.</li>
              <li>To build products that are accessible and easy to use.</li>
              <li>To build a welcoming community for open-source contributions.</li>
            </ul>
            <br/>
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};

export default Intro;
