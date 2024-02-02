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
          {components.length} components of {frontmatter.title}
        </h1>
        <h2>Support for your Cloud Native Infrastructure and Apps</h2>
      </section>

      <section className="componentsSection">
        {components.map((item) => (
          <div key={item.id} className="childContainer">
            <div className="maincontainer">
              <div className="componentimg">
                <img src={item.colorIcon.publicURL} alt={item.name} />
              </div>
              <div className="textcontent">
                <p className="items">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </ComponentsWrapper>
  );
};

export default ComponentsGrid;
