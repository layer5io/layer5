import React from "react";
import { ContextWrapper } from "./context-wrapper";

export const wrapRootElement = ({ element }) => (
  <ContextWrapper>
    {element}
  </ContextWrapper>
);