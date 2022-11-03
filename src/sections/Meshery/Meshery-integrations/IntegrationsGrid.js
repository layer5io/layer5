import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid } from "./Integration.style";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";
import Button from "../../../reusecore/Button";

const IntegrationsGrid = ({ category, theme, count }) => {
  const data = useStaticQuery(graphql`
  query{
    allMdx(
      filter: {
        fields: {collection: {eq: "integrations"}}, 
        frontmatter: {published: {eq: true} }}
    ) {
      nodes {
        frontmatter {
          title
          status
          category
          integrationIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
          darkModeIntegrationIcon {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
        }
        fields {
          slug
        }
      }
    }
  }  
  `);

  const [activeIntegrationList, setIntegrationList] = useState(data.allMdx.nodes);

  // fetch all the category names from activeIntegrationList and remove the duplicate category names
  const categoryNames = activeIntegrationList.reduce((initCategory, integration) => {
    if (!initCategory.includes(integration.frontmatter.category)) {
      initCategory.push(integration.frontmatter.category);
    }
    return initCategory;
  }, []);

  const categoryCount = (categoryName) => {
    return activeIntegrationList.reduce((count, integration) => {
      if (integration.frontmatter.category === categoryName){
        count += 1;
      }
      return count;
    }, 0);
  };

  let [categoryNameList ,setcategoryNameList] = useState(
    [
      {
        id: -1,
        name: "All",
        isSelected: true,
        count: activeIntegrationList.length
      },
      ...categoryNames.map((categoryName) => {
        return {
          id: categoryName,
          name: categoryName,
          isSelected: false,
          count: categoryCount(categoryName),
        };
      })]
  );

  useEffect(() => setCategory(), []);

  const setCategory = () => {
    let tempCategoryList = [...categoryNameList];
    if (category !== undefined) {
      tempCategoryList.forEach((item) => {
        if (item.name === category) {
          item.isSelected = true;
        }
      });
    } else {
      tempCategoryList[0].isSelected = true;
    }
    setcategoryNameList([...tempCategoryList]);
    setIntegrationCollection();
  };

  const setFilter = (event) => {
    let count = 0;
    let tempCategoryList = [...categoryNameList];
    let selectedCategory = event.target.innerHTML.includes("&amp;") ? event.target.innerHTML.replace("&amp;", "&") : event.target.innerHTML;
    selectedCategory = selectedCategory.split("(")[0].trim();

    if (selectedCategory == "All") {
      tempCategoryList.forEach(item => {
        if (item.isSelected & item.name != "All") {
          item.isSelected = false;
        }
      });
    }
    tempCategoryList.forEach(item => {
      if (item.name == selectedCategory) {
        item.isSelected = !item.isSelected;
      }
      if (item.isSelected && item.name != "All") {
        count++;
      }
    });

    if (count === 0) {
      tempCategoryList[0].isSelected = true;
    } else {
      tempCategoryList[0].isSelected = false;
    }

    setcategoryNameList([...tempCategoryList]);
    setIntegrationCollection();
  };

  const setIntegrationCollection = () => {
    if (categoryNameList[0].isSelected) {
      setIntegrationList([...data.allMdx.nodes]);
      return;
    }
    let tempIntegrationCollection = [];
    categoryNameList.forEach(item => {
      if (item.isSelected) {
        data.allMdx.nodes.forEach(integration => {
          if (integration.frontmatter.category == item.name) {
            tempIntegrationCollection = [...tempIntegrationCollection, integration];
          }
        });
      }
    });
    setIntegrationList([...tempIntegrationCollection]);
  };

  return (
    <HoneycombGrid>
      <section className="heading">
        <h1>{Math.ceil(data.allMdx.nodes.length / 10) * 10}+ Built-In Integrations</h1>
        <h2>Support for your Cloud Native Infrastructure and Apps</h2>
      </section>
      <section className="category">
        {categoryNameList.map((item) => {
          return (
            <p
              key={item.id}
              className={item.isSelected ? "items selected" : "items"}
              onClick={setFilter}
            >
              {`${item.name} (${item.count})`}
            </p>
          );
        })}
      </section>
      <ResponsiveHoneycomb
        size={90}
        items={count == "All" ? activeIntegrationList : activeIntegrationList.slice(0,count)}
        renderItem={(item) => {
          const status = item.frontmatter.status === "InProgress" ? true : false;
          const integrationIcon = item.frontmatter.integrationIcon.publicURL;
          const darkModeIntegrationIcon = item.frontmatter.darkModeIntegrationIcon;
          if (status) {
            return (
              <Hexagon className="container-inactive" style={{ background: "#A0AAAA" }}>
                <img
                  src={integrationIcon}
                  alt={item.frontmatter.title}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                  height={70}
                  width={70}
                />
              </Hexagon>
            );
          } else {
            return (
              <Hexagon className="container-active">
                <span className="integration-container">
                  <img
                    className="integration-icon"
                    src={(theme === "dark" && darkModeIntegrationIcon !== null) ? darkModeIntegrationIcon.publicURL : integrationIcon}
                    alt={item.frontmatter.title}
                    height={70}
                    width={70}
                    style={{ filter: (theme === "dark" && darkModeIntegrationIcon == null) ? "brightness(0) invert(1)" : "none" }}
                  />
                  <div className="integration-content">
                    <div className="title">{item.frontmatter.title}</div>
                    <Button
                      secondary
                      title="Learn More"
                      url={`/cloud-native-management/meshery${item.fields.slug}`}
                      className="learnMoreBtn"
                    />
                  </div>
                </span>
              </Hexagon>
            );
          }

        }}
      />
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;
