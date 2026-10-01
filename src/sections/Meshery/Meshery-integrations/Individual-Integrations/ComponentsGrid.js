import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { checkImageUrlValidity } from "../../../../utils/imageValidate";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";

const getPreferredIcon = (component, isDarkActive) => {
  const preferred = isDarkActive ? component.whiteIcon : component.colorIcon;
  return (
    preferred?.publicURL ||
    component.colorIcon?.publicURL ||
    component.whiteIcon?.publicURL ||
    ""
  );
};

const ComponentsGrid = ({ frontmatter }) => {
  const { isDark } = useStyledDarkMode();

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const darkModeActive =
    typeof isDark === "boolean" ? isDark : Boolean(prefersDark);

  const components = (frontmatter?.components || []).map((component) => ({
    ...component,
    preferredIcon: getPreferredIcon(component, darkModeActive),
  }));

  const [validComponents, setValidComponents] = useState([]);

  useEffect(() => {
    let mounted = true;

    const loadIcons = async () => {
      const validItems = await Promise.all(
        components.map(async (item) => {
          const iconUrl = item.preferredIcon || item.colorIcon?.publicURL;
          if (!iconUrl) return null;

          const isValid = await checkImageUrlValidity(iconUrl);
          if (!isValid) {
            const fallbackIcon =
              (iconUrl !== item.colorIcon?.publicURL &&
                item.colorIcon?.publicURL) ||
              frontmatter?.integrationIcon?.publicURL ||
              "";

            return {
              ...item,
              preferredIcon: fallbackIcon,
            };
          }

          return item;
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
          {frontmatter?.title} Components ({components.length})
        </h1>
      </section>

      <section className="componentsSection">
        {validComponents.map((item) => (
          <div key={item.name} className="maincontainer">
            <div className="componentimg">
              <img src={item.preferredIcon} alt={item.name} />
            </div>
            <p className="items">{item.name?.replaceAll("-", " ") || ""}</p>
          </div>
        ))}
      </section>
    </ComponentsWrapper>
  );
};

export default ComponentsGrid;
