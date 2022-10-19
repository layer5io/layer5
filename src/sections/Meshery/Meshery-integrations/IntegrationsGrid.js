import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid } from "./Integration.style";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";

const IntegrationsGrid = ({ category, theme }) => {
  const data = useStaticQuery(graphql`
  query{
    allMdx(
      filter: {fields: {collection: {eq: "integrations"}}, frontmatter: {published: {eq: true} , category: {ne: null}}}
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


  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);

  console.log(IntegrationList);

  // fetch all the category names from IntegrationList and remove the duplicate category names
  const categoryNames = [
    ...new Set(
      IntegrationList.map((integration) => integration.frontmatter.category)
    ),
  ];

  let [categoryNameList ,setcategoryNameList] = useState(
    categoryNames.map((categoryName) => {
      if (categoryName === categoryNames[0]) {
        return { id: -1,
          name: "All",
          isSelected: false, };
      }
      return {
        id: categoryName,
        name: categoryName,
        isSelected: false,
      };
    })
  );

  console.log(categoryNameList);

  const setCategory = () => {

    if (category !== undefined) {
      categoryNameList.forEach((item) => {
        if (item.name === category) {
          item.isSelected = true;
        }
      });
    } else {
      categoryNameList[0].isSelected = true;
    }
    setcategoryNameList(categoryNameList);
    setIntegrationCollection();
  };

  const setFilter = (event) => {
    let count = 0;
    const selectedCategory = event.target.innerHTML.includes("&amp;") ? event.target.innerHTML.replace("&amp;", "&") : event.target.innerHTML;

    if (selectedCategory == "All") {
      categoryNameList.forEach(item => {
        if (item.isSelected & item.name != "All") {
          item.isSelected = false;
        }
      }
      );
    }
    categoryNameList.forEach(item => {
      if (item.name == selectedCategory) {
        item.isSelected = !item.isSelected;
      }
      if (item.isSelected && item.name != "All") {
        count++;
      }
    });

    if (count === 0) {
      categoryNameList[0].isSelected = true;
    } else {
      categoryNameList[0].isSelected = false;
    }

    setcategoryNameList(categoryNameList);
    setIntegrationCollection();
  };

  const setIntegrationCollection = () => {
    if (categoryNameList[0].isSelected) {
      setIntegrationList(data.allMdx.nodes);
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
    setIntegrationList(tempIntegrationCollection);
  };

  return (
    <HoneycombGrid>
      <section className="category">
        {categoryNameList.map((item) => {
          return (
            <p
              key={item.id}
              className={item.isSelected ? "items selected" : "items"}
              onClick={setFilter}
            >
              {item.name}
            </p>
          );
        })}
      </section>
      <ResponsiveHoneycomb
        size={90}
        items={IntegrationList}
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
              <Link
                to={`/cloud-native-management/meshery${item.fields.slug}`}
              >
                <Hexagon className="container-active">
                  <img
                    src={(theme === "dark" && darkModeIntegrationIcon !== null) ? darkModeIntegrationIcon.publicURL : integrationIcon}
                    alt={item.frontmatter.title}
                    height={70}
                    width={70}
                    style={{ filter: (theme === "dark" && darkModeIntegrationIcon == null) ? "brightness(0) invert(1)" : "none" }}
                  />
                </Hexagon>
              </Link>
            );
          }

        }}
      />
    </HoneycombGrid>
  );
};

export default IntegrationsGrid;