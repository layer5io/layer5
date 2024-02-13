import React from "react";
import { ComponentsWrapper } from "./Component.style";


const ComponentsGrid = ({ frontmatter }) => {


  const components = frontmatter.components.map((component) => {
    const { name, colorIcon } = component; // currently we don't have description for components
    return { name, colorIcon };
  });


  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter.title} Components ({components.length})
        </h1>
      </section>

      <section className="componentsSection">
        {components.map((item) => (
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
