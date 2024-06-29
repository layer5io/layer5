import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";

export const checkImageUrlValidity = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      // Check if the image loaded successfully
      resolve(true);
    };

    img.onerror = () => {
      // Handle the case where the image could not be loaded
      resolve(false);
    };
  });
};

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
        }
        return null; // Return null for items that are not valid
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
  console.log("here", validComponents);
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
