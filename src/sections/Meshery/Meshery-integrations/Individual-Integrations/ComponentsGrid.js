import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const getFallbackIcon = (frontmatter, isDarkActive) => {
  if (isDarkActive) {
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

const getPreferredIcon = (component, isDarkActive, fallbackIcon) => {
  const primary = isDarkActive
    ? component?.whiteIcon?.publicURL
    : component?.colorIcon?.publicURL;
  const alternate = isDarkActive
    ? component?.colorIcon?.publicURL
    : component?.whiteIcon?.publicURL;

  return primary || alternate || fallbackIcon || "";
};

const ComponentsGrid = ({ frontmatter }) => {
  const { isDark } = useStyledDarkMode();
  const darkModeActive = Boolean(isDark);
  const fallbackIcon = getFallbackIcon(frontmatter, darkModeActive);

  const candidateComponents = (frontmatter?.components || []).map(
    (component) => ({
      ...component,
      preferredIcon: getPreferredIcon(component, darkModeActive, fallbackIcon),
    }),
  );

  const [validComponents, setValidComponents] = useState(candidateComponents);

  useEffect(() => {
    let mounted = true;

    const loadIcons = async () => {
      let isFallbackValid = null;
      const checkFallback = async () => {
        if (!fallbackIcon) return false;
        if (isFallbackValid === null) {
          isFallbackValid = await checkImageUrlValidity(fallbackIcon);
        }
        return isFallbackValid;
      };

      const validItems = await Promise.all(
        candidateComponents.map(async (item) => {
          const primaryIcon = darkModeActive
            ? item.whiteIcon?.publicURL
            : item.colorIcon?.publicURL;
          const alternateIcon = darkModeActive
            ? item.colorIcon?.publicURL
            : item.whiteIcon?.publicURL;

          if (primaryIcon && (await checkImageUrlValidity(primaryIcon))) {
            return {
              ...item,
              preferredIcon: primaryIcon,
            };
          }

          if (
            alternateIcon &&
            alternateIcon !== primaryIcon &&
            (await checkImageUrlValidity(alternateIcon))
          ) {
            return {
              ...item,
              preferredIcon: alternateIcon,
            };
          }

          if (
            fallbackIcon &&
            fallbackIcon !== primaryIcon &&
            fallbackIcon !== alternateIcon &&
            (await checkFallback())
          ) {
            return {
              ...item,
              preferredIcon: fallbackIcon,
            };
          }

          return null;
        }),
      );

      if (mounted) {
        setValidComponents(validItems.filter(Boolean));
      }
    };

    loadIcons();
    return () => {
      mounted = false;
    };
  }, [frontmatter, darkModeActive, fallbackIcon]);

  return (
    <ComponentsWrapper>
      <section className="heading">
        <h1>
          {frontmatter?.title} Components ({candidateComponents.length})
        </h1>
      </section>

      <section className="componentsSection">
        {validComponents.map((item, index) => (
          <div key={`${item.name}-${index}`} className="maincontainer">
            <div className="componentimg">
              {item.preferredIcon && (
                <img src={item.preferredIcon} alt={item.name || ""} />
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
