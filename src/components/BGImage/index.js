import React from "react";
import { BGWrapper, FakeBGImg, Content } from "./BGImage.styles";


const BGImg = ({ image, title, className, children }) => {
  return (
    <BGWrapper>
      <Content className={className}>{children}</Content>
      <FakeBGImg loading="eager" placeholder="none" image={image} title={title} />
    </BGWrapper>
  );
};

export default BGImg;
