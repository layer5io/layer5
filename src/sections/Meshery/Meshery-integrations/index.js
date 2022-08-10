import React from "react";
import { useState } from "react";
import IntegrationsGrid from "./IntegrationsGrid";
import IntegrationList from "../../../assets/data/integrations/IntegrationList";
import FAQ from "../../General/Faq";
import { IntegrationsWrapper } from "./Integration.style";
import CTA from "./Individual-Integrations/cta-book";

const Integrations = () => {
  const [categoryList, setcategoryList] = useState([
    { id: 1, name: "All", isSelected: true },
    { id: 2, name: "Platforms", isSelected: false },
    { id: 3, name: "Service Mesh", isSelected: false },
    { id: 4, name: "Operating System", isSelected: false },
    { id: 5, name: "Collaboration", isSelected: false },
  ]);

  const [integrationCollection, setintegrationCollection] =
    useState(IntegrationList);

  const filterCategory = (e) => {
    const category = e.target.innerHTML;

    if (category !== "All") {
      categoryList[0].isSelected = false;

      categoryList.forEach((element) => {
        element.name === category
          ? (element.isSelected = !element.isSelected)
          : null;
      });

      setcategoryList(categoryList);
    } else {
      categoryList[0].isSelected = true;

      categoryList.forEach((element) => {
        element.name !== "All" ? (element.isSelected = false) : null;
      });

      setcategoryList(categoryList);
    }

    let tempCat = [];

    categoryList.map((item) => {
      if (item.isSelected) tempCat.push(item.name);
    });

    filterCollection(tempCat);
  };

  const filterCollection = (selectedCategoryList) => {
    let tempInt = [];
    IntegrationList.forEach((Integration) => {
      selectedCategoryList.forEach((item) => {
        if (item === Integration.category || item === "All")
          tempInt.push(Integration);
      });
    });

    setintegrationCollection(tempInt);
  };

  return (
    <>
      <IntegrationsWrapper>
        <section className="heading">
          <h1>Built-In Integrations</h1>
          <h2>Support for your Cloud Native Infrastructure and Apps</h2>
        </section>
        <section className="category">
          {categoryList.map((item) => {
            return (
              <p
                key={item.id}
                className={item.isSelected ? "items selected" : "items"}
                onClick={filterCategory}
              >
                {item.name}
              </p>
            );
          })}
        </section>

        <section className="integrations-grid">
          <IntegrationsGrid obj={integrationCollection} />
        </section>
        <FAQ category={["Meshery Integrations"]} />
      </IntegrationsWrapper>
      <CTA />
    </>
  );
};

export default Integrations;
