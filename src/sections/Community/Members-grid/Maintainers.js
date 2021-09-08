import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const Maintainers = (props) => {
  const data = props.allMembers.allMdx.nodes.filter(
    (member) => member.frontmatter.maintainer == "yes"
  );

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(Maintainers);
