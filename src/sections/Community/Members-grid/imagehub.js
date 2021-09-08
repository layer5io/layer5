import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const ImageHub = (props) => {
  const data = props.allMembers.allMdx.nodes.filter((member) =>
    member.frontmatter.badges?.includes("image-hub")
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(ImageHub);
