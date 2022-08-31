import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid } from "./Integration.style";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";

const IntegrationsGrid = ({ category }) => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(filter: { fields: { collection: { eq: "integrations" } } }) {
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
        }
        fields{
          slug
        }
      }
    }
  }
   `);

  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);
  let [categoryList, setCategoryList] = useState([
    { id: 1, name: "All", isSelected: false },
    { id: 2, name: "Platforms", isSelected: false },
    { id: 3, name: "Service Mesh", isSelected: false },
    { id: 4, name: "Operating System", isSelected: false },
    { id: 5, name: "Collaboration", isSelected: false },
    { id: 6, name: "Telemetry", isSelected: false },
  ]);

  useEffect(() => setCategory(), []);

  const setCategory = () => {
    if (category !== undefined) {
      categoryList.forEach((item) => {
        if (item.name === category) {
          item.isSelected = true;
        }
      });
    } else {
      categoryList[0].isSelected = true;
    }
    setCategoryList(categoryList);
    setIntegrationCollection();
  };

  const setFilter = (event) => {
    let count = 0;
    const selectedCategory = event.target.innerHTML;
    if (selectedCategory == "All") {
      categoryList.forEach(item => {
        if (item.isSelected & item.name != "All") {
          item.isSelected = false;
        }
      }
      );
    }
    categoryList.forEach(item => {
      if (item.name == selectedCategory) {
        item.isSelected = !item.isSelected;
      }
      if (item.isSelected && item.name != "All") {
        count++;
      }
    });

    if (count === 0) {
      categoryList[0].isSelected = true;
    } else {
      categoryList[0].isSelected = false;
    }

    setCategoryList(categoryList);
    setIntegrationCollection();
  };

  const setIntegrationCollection = () => {
    if (categoryList[0].isSelected) {
      setIntegrationList(data.allMdx.nodes);
      return;
    }
    let tempIntegrationCollection = [];
    categoryList.forEach(item => {
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
        {categoryList.map((item) => {
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
          if (status) {
            return (
              <Hexagon className="container-inactive" style={{ background: "#A0AAAA" }}>
                <img
                  src={item.frontmatter.integrationIcon.publicURL}
                  alt={item.frontmatter.title}
                  style={{
                    filter: "brightness(0) invert(1)",
                  }}
                  height={60}
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
                    src={item.frontmatter.integrationIcon.publicURL}
                    alt={item.frontmatter.title}
                    height={60}
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
