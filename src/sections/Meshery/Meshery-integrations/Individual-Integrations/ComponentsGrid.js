import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const getFallbackIcon = (frontmatter) =>
  frontmatter?.integrationIcon?.publicURL ||
  frontmatter?.integrationIcon_svg?.publicURL ||
  frontmatter?.darkModeIntegrationIcon?.publicURL ||
  "";

const getPreferredIcon = (component, isDarkActive, fallbackIcon) => {
  const preferred = isDarkActive ? component?.whiteIcon : component?.colorIcon;
  return (
    preferred?.publicURL ||
    component?.colorIcon?.publicURL ||
    component?.whiteIcon?.publicURL ||
    fallbackIcon ||
    ""
  );
};

const ComponentsGrid = ({ frontmatter }) => {
  const { isDark } = useStyledDarkMode();
  const darkModeActive = Boolean(isDark);
  const fallbackIcon = getFallbackIcon(frontmatter);

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
      const validItems = await Promise.all(
        candidateComponents.map(async (item) => {
          const iconUrl = item.preferredIcon || fallbackIcon;
          if (!iconUrl) return null;

          const isValid = await checkImageUrlValidity(iconUrl);
          if (!isValid) {
            if (iconUrl !== fallbackIcon && fallbackIcon) {
              const isFallbackValid = await checkImageUrlValidity(fallbackIcon);
              if (isFallbackValid) {
                return {
                  ...item,
                  preferredIcon: fallbackIcon,
                };
              }
            }
            return null;
          }

          return {
            ...item,
            preferredIcon: iconUrl,
          };
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
  }, [frontmatter, darkModeActive]);

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
