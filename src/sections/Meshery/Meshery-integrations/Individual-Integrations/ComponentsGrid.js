import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";

const ComponentsGrid = ({ frontmatter }) => {
  const components = frontmatter.components.map((component) => {
    const { name, colorIcon } = component; // currently we don't have description for components
    return { name, colorIcon };
  });
  const [validComponents, setValidComponents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const promises = components.map(async (item) => {
        const isSvgPathValid = await checkImageUrlValidity(
          item.colorIcon.publicURL
        );
        if (isSvgPathValid) {
          return item;
        } else {
          item.colorIcon.publicURL = frontmatter.integrationIcon.publicURL;
          return item; // Return fallback image
        }
      });

      const validItems = await Promise.all(promises);
      // Filter out null values (items that are not valid)
      const filteredValidComponents = validItems.filter(
        (item) => item !== null
      );

      setValidComponents(filteredValidComponents);
    };

    fetchData();
  }, []);

  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter.title} Components ({components.length})
        </h1>
      </section>

      <section className="componentsSection">
        {validComponents.map((item) => (
          <div key={item.id} className="maincontainer">
            <div className="componentimg">
              <img src={item.colorIcon.publicURL} alt={item.name} />
            </div>
            <p className="items">{item.name.replaceAll("-", " ")}</p>
            {/* <div className="textcontent">
            </div> */}
          </div>
        ))}
      </section>
    </ComponentsWrapper>
  );
};

export default ComponentsGrid;
