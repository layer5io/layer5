import React, { useState } from "react";
import { Container } from "../../../../reusecore/Layout";
import SistentWrapper from "../sistent.style";
import TOC from "../../../../components/SistentNavigation";
// import SistentPagination from "../../../../components/SistentNavigation/pagination";
import SearchBox from "../../../../reusecore/Search";
import useDataList from "../../../../utils/usedataList";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link } from "gatsby";

export const componentsData = [
  {
    id: 1,
    name: "Button",
    description:
      "A button is an interactive element that triggers a specific action and also lets users know what will happen next.",
    url: "/projects/sistent/components/button",
  },
  {
    id: 2,
    name: "Text Input",
    description:
      "A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",
    url: "/projects/sistent/components/text-input",
  },
  {
    id: 3,
    name: "Modal",
    description:
      "A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",
    url: "/projects/sistent/components/modal",
  },
  {
    id: 4,
    name: "Paper",
    description:
      "The Paper component offers an elevated surface with shadow effects, following Material Design’s elevation system.",
    url: "/projects/sistent/components/paper",
  },
  {
    id: 5,
    name: "Popper",
    description:
      "A popper is a tooltip that appears when a user interacts with an element.",
    url: "/projects/sistent/components/popper",
  },
  {
    id: 6,
    name: "Text Field",
    description:
      "The TextField component is a versatile input field used to capture user input in forms and user interfaces.",
    url: "/projects/sistent/components/text-field",
  },
  {
    id: 7,
    name: "Link",
    description:
      "Links are essential and integral components of an interface. They are primarily used for navigation, guiding users to the next step in a journey or redirecting them to relevant sections or pages.",
    url: "/projects/sistent/components/link",
  },
  {
    id: 8,
    name: "Container",
    description:
      "Containers align and center content, providing responsive layout options for different screen sizes.",
    url: "/projects/sistent/components/container",
  },
  {
    id: 9,
    name: "ButtonGroup",
    description:
      "ButtonGroup is a component that groups multiple buttons together.",
    url: "/projects/sistent/components/button-group",
  },
  {
    id: 10,
    name: "Box",
    description:
      "Box is used as a flexible container for layout and styling, allowing quick customization and responsive design adjustments.",
    url: "/projects/sistent/components/box",
  },
  {
    id: 11,
    name: "Tooltip",
    description:
      "The Tooltip component is a small pop-up box that appears when a user hovers over an element.",
    url: "/projects/sistent/components/tooltip",
  },
  {
    id: 12,
    name: "Backdrop",
    description:
      "Backdrop component overlays a dimmed screen to focus attention on foreground content.",
    url: "/projects/sistent/components/backdrop",
  },
];

const SistentComponents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    componentsData,
    setSearchQuery,
    searchQuery,
    ["name"],
    "id"
  );

  const compArray = queryResults;

  return (
    <SistentWrapper>
      <div className="page-header-section">
        <h1>Components</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container className="components-container">
          <div className="content">
            <a id="Identity">
              <h2>Components</h2>
            </a>
            <p>
              Components are reusable elements that serve as the building blocks
              of the design system. They are curated using the established
              identity principles and can be combined to form various elements,
              patterns, and templates that can be used to design user
              interfaces.
            </p>
          </div>
          <div className="main-content">
            <div className="search-container">
              <SearchBox searchQuery={searchQuery} searchData={searchData} />
            </div>
            <div className="product_cards">
              <div className="cards">
                {compArray.map((comp) => (
                  <Link key={comp.id} to={comp.url}>
                    <div className="card">
                      <div className="card_head">
                        <div className="title">{comp.name}</div>
                        <div className="text">{comp.description}</div>
                      </div>
                      <div>
                        <div className="card_bottom">
                          <a className="learn" href={comp.url}>
                            <div className="learn-more">
                              <div>Learn more</div>
                              <div className="icon">
                                <FaArrowRight />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SistentWrapper>
  );
};

export default SistentComponents;
