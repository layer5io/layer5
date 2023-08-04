import React from "react";
import { Container } from "../../../reusecore/Layout";
import { Link } from "gatsby";
import { HandbookWrapper } from "./Handbook.style";
import Button from "../../../reusecore/Button";
import TOC from "../../../components/handbook-navigation/index";
import TocPagination from "../../../components/handbook-navigation/TocPagination";



const Designers = () => {

  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Design with Layer5!</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content writing_program">
            <a id="UI/UX">
              <h2>UI/UX</h2>
            </a>
            <p>
            The UI/UX badge is given to community members who contribute towards creating or improving the visual design or user flow of various aspects such as websites, flyers, promotions, Meshery UI, and more. This recognition is awarded as an appreciation of their efforts in enhancing the user experience. The badge serves as a symbol of their expertise in UI/UX design and acknowledges their valuable contribution to the community.
            We are always looking for ways to improve the user experience of our projects. If you have ideas for how to improve the user experience of any of our projects, please share them with us.
            </p>

            <h2>Where can you contribute?</h2>

            <p>
            You can contribute to the Meshery project website redesign and creation of new video-based content. The site structure and content need a revamp, and contributors will use the existing brand guide, colors, and logos in their designs. The project also requires video editing and graphic/illustration creation skills. If you want to participate in the project and build your portfolio in collaboration with the Meshery team, you can submit your interest by filling out the form provided.
              <br />
            </p>

            <h2>What is the process?</h2>

            <div className="process">
              <div className="item">
                <p>If you’re interested in the Layer5 Design Program, please submit your information to get started. <i>Don't know where to start? Don't worry, we have plenty of suggestions for you.</i></p>


                <Button primary title="Layer5 UX Contributor Application" url="https://docs.google.com/forms/d/e/1FAIpQLSdB2NDhXN_Sn-w5_7dDelvcQN9BvfddLOTEYfnrpikc_uUatA/viewform" external={true} />

              </div>
              <div className="item">
                <p>Upon being accepted, you'll work with a coordinator on the content team to decide on a topic, develop a project plan, and discuss submission details.</p>
              </div>
            </div>

            <h3>Additional Resources</h3>
            <ul>
              <li><a href="https://layer5.io/community/handbook/repository-overview#Frontend%20Projects">List of website maintainers</a></li>
              <li><a href="https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-resource">Contributing to Layer5 Resources</a></li>
              <li><a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3Afigma">View open Design enhancing issues</a></li>
              <li>Join the <a href="https://discuss.layer5.io/">Layer5 Discussion Forum</a></li>
              <li>Explore our <Link to="/resources">Resource Library</Link></li>
              <li><Link to="/learn">Learn Cloud Native</Link></li>
            </ul>

            <TocPagination />
          </div>
        </Container>
      </div>
    </HandbookWrapper>
  );
};
export default Designers;