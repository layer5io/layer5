import React from "react";
import { BGWrapper, FakeBGImg, FakeBGImgStatic, Content } from "./BGImage.styles";


const BGImg = ({ image, src, title, className, children }) => {
  return (
    <BGWrapper>
      <Content className={className}>{children}</Content>
      {src ? (
        <FakeBGImgStatic loading="eager" src={src} title={title} alt="" />
      ) : (
        <FakeBGImg loading="eager" placeholder="none" image={image} title={title} alt=""/>
      )}
    </BGWrapper>
  );
};

export default BGImg;
