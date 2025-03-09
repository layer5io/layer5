import React, { useState } from "react";
import { Container } from "../../../../reusecore/Layout";
import SistentWrapper from "../sistent.style";
import TOC from "../../../../components/SistentNavigation";
import SearchBox from "../../../../reusecore/Search";
import useDataList from "../../../../utils/usedataList";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link } from "gatsby";
import { componentsData } from "./content";

const SistentComponents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { queryResults, searchData } = useDataList(
    componentsData,
    setSearchQuery,
    searchQuery,
    ["name"],
    "id"
  );

  const compArray = [...queryResults].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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