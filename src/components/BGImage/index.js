import React from "react";
import { BGWrapper, FakeBGImg, Content } from "./BGImage.styles";


const BGImg = ({ image, title, className, children }) => {
  return (
    <BGWrapper>
      <FakeBGImg image={image} title={title} />
      <Content className={className}>{children}</Content>
    </BGWrapper>
  );
};

export default BGImg;