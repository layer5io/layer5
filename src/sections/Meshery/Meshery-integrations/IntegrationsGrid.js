import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { HoneycombGrid } from "./Integration.style";
import { ResponsiveHoneycomb, Hexagon } from "react-honeycomb";

const IntegrationsGrid = ({ category, theme, count }) => {
  const data = useStaticQuery(graphql`
  query{
    allMdx(
      filter: {fields: {collection: {eq: "integrations"}}, frontmatter: {published: {eq: true} }}
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

<<<<<<< HEAD
  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);
  let [categoryList, setCategoryList] = useState([
    { id: 1, name: "All", isSelected: false },
    { id: 2, name: "Platforms", isSelected: false },
    { id: 3, name: "Service Mesh", isSelected: false },
    { id: 4, name: "Operating System", isSelected: false },
    { id: 5, name: "Collaboration", isSelected: false },
    { id: 6, name: "Automation & Configuration", isSelected: false },
    { id: 7, name: "Cloud Native Network", isSelected: false },
    { id: 8, name: "API Gateway", isSelected: false },
    { id: 9, name: "Continuous Integration & Delivery", isSelected: false },
    { id: 10, name: "Application Definition & Image Build", isSelected: false },
    { id: 11, name: "Key Management", isSelected: false },
<<<<<<< HEAD
    { id: 13, name: "Service Proxy", isSelected: false },
    { id: 14, name: "Scheduling & Orchestration", isSelected: false },
    { id: 15, name: "Security & Compliance", isSelected: false },
    { id: 16, name: "Chaos Engineering", isSelected: false },
    { id: 17, name: "Streaming & Messaging", isSelected: false },
    { id: 18, name: "Container Runtime", isSelected: false },
    { id: 19, name: "Coordination & Service Discovery", isSelected: false },
    { id: 20, name: "Monitoring", isSelected: false },
    { id: 21, name: "Cloud Native Storage", isSelected: false },
    { id: 22, name: "Framework", isSelected: false },
    { id: 23, name: "Container Registry", isSelected: false },
    { id: 25, name: "Remote Procedure Call", isSelected: false },
    { id: 26, name: "Kubernetes", isSelected: false },
    { id: 27, name: "Serverless", isSelected: false },
=======
    { id: 12, name: "Service Proxy", isSelected: false },
    { id: 13, name: "Scheduling & Orchestration", isSelected: false },
    { id: 14, name: "Security & Compliance", isSelected: false },
    { id: 15, name: "Chaos Engineering", isSelected: false },
    { id: 16, name: "Streaming & Messaging", isSelected: false },
    { id: 17, name: "Container Runtime", isSelected: false },
    { id: 18, name: "Coordination & Service Discovery", isSelected: false },
    { id: 19, name: "Monitoring", isSelected: false },
    { id: 20, name: "Cloud Native Storage", isSelected: false },
    { id: 21, name: "Framework", isSelected: false },
    { id: 22, name: "Container Registry", isSelected: false },
    { id: 23, name: "Logging", isSelected: false },
    { id: 24, name: "Remote Procedure Call", isSelected: false },
    { id: 25, name: "Tracing", isSelected: false },
    { id: 26, name: "Certified Kubernetes - Distribution", isSelected: false },
    { id: 27, name: "Installable Platform", isSelected: false },
>>>>>>> 063a16eee (more integrations)
    { id: 28, name: "Database", isSelected: false },
    { id: 29, name: "Tools", isSelected: false },
  ]);

  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);


=======
  const [IntegrationList, setIntegrationList] = useState(data.allMdx.nodes);



>>>>>>> 332670b77 (This commit limits the number of integration to be shown on the homepage.)
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
          isSelected: true, };
      }
      return {
        id: categoryName,
        name: categoryName,
        isSelected: false,
      };
    })
  );

  useEffect(() => setCategory(), []);
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
      <section className="heading">
        <h1>{data.allMdx.nodes.length}+ Built-In Integrations</h1>
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
              {item.name}
            </p>
          );
        })}
      </section>
      <ResponsiveHoneycomb
        size={90}
        items={count == "All" ? IntegrationList : IntegrationList.slice(0,count)}
        renderItem={(item) => {
          const status = item.frontmatter.status === "InProgress" ? true : false;
          const integrationIcon = item.frontmatter.integrationIcon ? item.frontmatter.integrationIcon.publicURL : "";
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