import React from "react";
import { useState } from "react";
import IntegrationsGrid from "./IntegrationsGrid";
import IntegrationList from "../../../assets/data/integrations/IntegrationList";
import Integrations from "./Integration.style";

function index() {
  const [categoryList, setcategoryList] = useState([
    { name: "All", isSelected: true },
    { name: "Platforms", isSelected: false },
    { name: "Service Mesh", isSelected: false },
    { name: "Operating System", isSelected: false },
    { name: "Collaboration", isSelected: false },
  ]);

  const [integrationCollection, setintegrationCollection] =
    useState(IntegrationList);

  const filterCategory = (e) => {
    const category = e.target.innerHTML;

    if (category !== "All") {
      categoryList[0].isSelected = false;
      categoryList.map((item) =>
        item.name === category ? (item.isSelected = !item.isSelected) : null
      );
      setcategoryList(categoryList);
    } else {
      categoryList[0].isSelected = true;

      categoryList.map((item) =>
        item.name !== "All" ? (item.isSelected = false) : null
      );
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

    IntegrationList.map((Integration) => {
      selectedCategoryList.map((item) => {
        if (item === Integration.category) {
          tempInt.push(Integration);
        } else if (item === "All") {
          tempInt.push(Integration);
        }
      });
    });

    setintegrationCollection(tempInt);
  };

  return (
    <Integrations>
      <span className="heading">
        <h1>Built-In Integrations</h1>
        <h4>Support for your Cloud Native Infrastructure and Apps</h4>
      </span>

      <span className="category">
        {categoryList.map((item) => {
          return (
            <p
              className={item.isSelected ? "items selected" : "items"}
              onClick={filterCategory}
            >
              {item.name}
            </p>
          );
        })}
      </span>

      <span>
        <IntegrationsGrid obj={integrationCollection} />
      </span>
    </Integrations>
  );
}

export default index;
