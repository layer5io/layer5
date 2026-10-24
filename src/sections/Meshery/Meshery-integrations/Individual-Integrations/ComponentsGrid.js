import React from "react";
import { ComponentsWrapper } from "./Component.style";

const ComponentsGrid = ({ frontmatter }) => {
  const colorFallback =
    frontmatter?.integrationIcon?.publicURL ||
    frontmatter?.integrationIcon_svg?.publicURL ||
    "";
  const darkFallback =
    frontmatter?.darkModeIntegrationIcon?.publicURL || colorFallback;

  const components = (frontmatter?.components || []).map((component) => {
    const colorIcon = component.colorIcon?.publicURL || colorFallback;
    const whiteIcon =
      component.whiteIcon?.publicURL || colorIcon || darkFallback;

    return {
      name: component.name,
      colorIcon,
      whiteIcon,
    };
  });

  const handleImageError = (fallback) => (e) => {
    if (fallback && e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter?.title} Components ({components.length})
        </h1>
      </section>

      <section className="componentsSection">
        {components.map((item, index) => (
          <div key={`${item.name}-${index}`} className="maincontainer">
            <div className="componentimg">
              {item.whiteIcon === item.colorIcon ? (
                <img
                  src={item.colorIcon}
                  alt={item.name || ""}
                  onError={handleImageError(colorFallback)}
                />
              ) : (
                <>
                  <img
                    src={item.whiteIcon}
                    alt={item.name || ""}
                    className="component-icon component-icon--dark"
                    onError={handleImageError(darkFallback)}
                  />
                  <img
                    src={item.colorIcon}
                    alt={item.name || ""}
                    className="component-icon component-icon--light"
                    onError={handleImageError(colorFallback)}
                  />
                </>
              )}
            </div>
            <p className="items">{item.name?.replaceAll("-", " ") || ""}</p>
          </div>
        ))}
      </section>
    </ComponentsWrapper>
  );
};

export default ComponentsGrid;
