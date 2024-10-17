import React, { useEffect, useState } from "react";
import { ComponentsWrapper } from "./Component.style";
import { CatalogCard, SistentThemeProviderWithoutBaseLine } from "@layer5/sistent";
import axios from "axios";
import { useStyledDarkMode } from "../../../../theme/app/useStyledDarkMode";
import Button from "../../../../reusecore/Button";

const CatalogGrid = ({ frontmatter }) => {
  const [designs, setDesign] = useState();
  const technology = frontmatter.docURL.split("/");
  const [designSize, setDesignSize] = useState(5);

  const { isDark } = useStyledDarkMode();

  useEffect(() => {
    const CLOUD_FETCH_DESIGN = `https://meshery.layer5.io/api/catalog/content/pattern?technology=${
      technology[technology.length - 1]
    }&page=0&pagesize=${designSize}&search=&order=&metrics=true`;
    const fetchData = async () => {
      try {
        // const token = getCookieValue("provider_token");
        const response = await axios.get(CLOUD_FETCH_DESIGN);
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        const data = response.data;
        setDesign(data);
      } catch (error) {
        console.log("There was a problem with your fetch operation:", error);
      }
    };

    fetchData();
  }, [designSize]);

  return designs && designs.total_count > 0 ? (
    <ComponentsWrapper
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <section className="heading">
        <h1>
          {frontmatter.title} Designs ({designs.total_count})
        </h1>
      </section>
      <section className="componentsSection">
        <SistentThemeProviderWithoutBaseLine initialMode={isDark ? "dark" : "light"}>
          {designs?.patterns?.map((item, index) => {
            return (
              <CatalogCard
                key={index}
                cardLink={`https://meshery.layer5.io/catalog/content/catalog/${item?.id}`}
                cardHeight="20rem"
                cardWidth="16rem"
                pattern={item}
                type="Catalog"
                patternType={item?.catalog_data?.type}
              />
            );
          })}
        </SistentThemeProviderWithoutBaseLine>
      </section>
      {designSize <= designs?.total_count && (
        <Button
          $primary
          className="loadmore"
          title="Load More"
          onClick={() => {
            setDesignSize((prev) => prev + 5);
          }}
        />
      )}
    </ComponentsWrapper>
  ) : (
    <></>
  );
};

export default CatalogGrid;
