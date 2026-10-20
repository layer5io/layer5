import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";

const ComponentsGrid = ({ frontmatter }) => {
  const [validComponents, setValidComponents] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadComponents = async () => {
      const colorFallback =
        frontmatter?.integrationIcon?.publicURL ||
        frontmatter?.integrationIcon_svg?.publicURL ||
        "";
      const darkFallback =
        frontmatter?.darkModeIntegrationIcon?.publicURL || colorFallback;

      let isColorFallbackValid = null;
      const checkColorFallback = async () => {
        if (!colorFallback) return false;
        if (isColorFallbackValid === null) {
          isColorFallbackValid = await checkImageUrlValidity(colorFallback);
        }
        return isColorFallbackValid;
      };

      let isDarkFallbackValid = null;
      const checkDarkFallback = async () => {
        if (!darkFallback) return false;
        if (isDarkFallbackValid === null) {
          isDarkFallbackValid = await checkImageUrlValidity(darkFallback);
        }
        return isDarkFallbackValid;
      };

      const components = frontmatter?.components || [];

      const promises = components.map(async (component) => {
        let whiteIconUrl = null;
        if (
          component.whiteIcon?.publicURL &&
          (await checkImageUrlValidity(component.whiteIcon.publicURL))
        ) {
          whiteIconUrl = component.whiteIcon.publicURL;
        } else if (darkFallback && (await checkDarkFallback())) {
          whiteIconUrl = darkFallback;
        }

        let colorIconUrl = null;
        if (
          component.colorIcon?.publicURL &&
          (await checkImageUrlValidity(component.colorIcon.publicURL))
        ) {
          colorIconUrl = component.colorIcon.publicURL;
        } else if (colorFallback && (await checkColorFallback())) {
          colorIconUrl = colorFallback;
        }

        if (!whiteIconUrl && colorIconUrl) {
          whiteIconUrl = colorIconUrl;
        }
        if (!colorIconUrl && whiteIconUrl) {
          colorIconUrl = whiteIconUrl;
        }

        if (whiteIconUrl || colorIconUrl) {
          return {
            name: component.name,
            whiteIcon: whiteIconUrl,
            colorIcon: colorIconUrl,
          };
        }

        return null;
      });

      const results = await Promise.all(promises);
      if (isMounted) {
        setValidComponents(results.filter(Boolean));
      }
    };

    loadComponents();

    return () => {
      isMounted = false;
    };
  }, [frontmatter]);

  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter?.title} Components ({validComponents.length})
        </h1>
      </section>

      <section className="componentsSection">
        {validComponents.map((item, index) => (
          <div key={`${item.name}-${index}`} className="maincontainer">
            <div className="componentimg">
              {item.whiteIcon === item.colorIcon ? (
                <img src={item.colorIcon} alt={item.name || ""} />
              ) : (
                <>
                  <img
                    src={item.whiteIcon}
                    alt={item.name || ""}
                    className="component-icon component-icon--dark"
                  />
                  <img
                    src={item.colorIcon}
                    alt={item.name || ""}
                    className="component-icon component-icon--light"
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
