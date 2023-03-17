import React from "react";
import { ContextWrapper } from "./context-wrapper";

export const wrapPageElement = ({ element }) => {
  return (
    <ContextWrapper>
      {element}
    </ContextWrapper>
  );
};