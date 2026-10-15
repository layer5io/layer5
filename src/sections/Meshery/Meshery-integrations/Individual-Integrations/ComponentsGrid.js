import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const getFallbackIcon = (frontmatter, isDark) => {
  if (isDark) {
    return (
      frontmatter?.darkModeIntegrationIcon?.publicURL ||
      frontmatter?.integrationIcon?.publicURL ||
      frontmatter?.integrationIcon_svg?.publicURL ||
      ""
    );
  }
  return (
    frontmatter?.integrationIcon?.publicURL ||
    frontmatter?.integrationIcon_svg?.publicURL ||
    frontmatter?.darkModeIntegrationIcon?.publicURL ||
    ""
  );
};

const ComponentsGrid = ({ frontmatter }) => {
  const { isDark } = useStyledDarkMode();
  const [validComponents, setValidComponents] = useState([]);

  const fallbackIcon = getFallbackIcon(frontmatter, isDark);

  useEffect(() => {
    let isMounted = true;

    const loadComponents = async () => {
      let isFallbackValid = null;
      const checkFallback = async () => {
        if (!fallbackIcon) return false;
        if (isFallbackValid === null) {
          isFallbackValid = await checkImageUrlValidity(fallbackIcon);
        }
        return isFallbackValid;
      };

      const components = frontmatter?.components || [];

      const promises = components.map(async (component) => {
        const primaryIcon = isDark
          ? component.whiteIcon?.publicURL
          : component.colorIcon?.publicURL;
        const alternateIcon = isDark
          ? component.colorIcon?.publicURL
          : component.whiteIcon?.publicURL;

        if (primaryIcon && (await checkImageUrlValidity(primaryIcon))) {
          return {
            name: component.name,
            icon: primaryIcon,
          };
        }

        if (fallbackIcon && (await checkFallback())) {
          return {
            name: component.name,
            icon: fallbackIcon,
          };
        }

        if (alternateIcon && (await checkImageUrlValidity(alternateIcon))) {
          return {
            name: component.name,
            icon: alternateIcon,
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
  }, [frontmatter, isDark, fallbackIcon]);

  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter?.title} Components (
          {frontmatter?.components?.length || 0})
        </h1>
      </section>

      <section className="componentsSection">
        {validComponents.map((item, index) => (
          <div key={`${item.name}-${index}`} className="maincontainer">
            <div className="componentimg">
              <img src={item.icon} alt={item.name || ""} />
            </div>
            <p className="items">{item.name?.replaceAll("-", " ") || ""}</p>
          </div>
        ))}
      </section>
    </ComponentsWrapper>
  );
};

export default ComponentsGrid;
