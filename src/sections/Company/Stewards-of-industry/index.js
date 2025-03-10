import React from "react";
import BannerSectionWrapper from "./stewards.style";
import Button from "../../../reusecore/Button";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import useHasMounted from "../../../utils/useHasMounted";

const StewardsOfIndustry = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "stewards/stewards.webp" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  );

  const hasMounted = useHasMounted();

  const pluginImage = hasMounted && getImage(backgroundImage123);

  return (
    <BannerSectionWrapper>
      <BgImage image={pluginImage} className="section">
        <h1 className="section-header">Creators of cloud native standards</h1>
        <h2>Open source leaders</h2>
        <Button
          $primary          className="section-button"
          title="See our Projects"
          $url="/projects"
        />
      </BgImage>
    </BannerSectionWrapper>
  );
};

export default StewardsOfIndustry;
