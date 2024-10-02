import React from "react";
import { ReactComponent as MlhLogo } from "./mlh-2020/mlh.svg";
import { ReactComponent as ScaLogo } from "./sca-contributhon/sca.svg";
import { ReactComponent as LfxLogo } from "./lfx-2023/lfx-white.svg";

export const MlhLogoComponent = (props) => {
  return <MlhLogo {...props} />;
};

export const ScaLogoComponent = (props) => {
  return <ScaLogo {...props}/>;
};

export const LfxLogoComponent = (props) => {
  return <LfxLogo {...props}/>;
};