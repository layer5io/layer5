import React from "react";
import MembersGrid from "./index";
import DataWrapper from "./DataWrapper";

const AllMembers = (props) => {
  const data = props.allMembers;

  return <MembersGrid data={data} {...props} />;
};

export default DataWrapper(AllMembers);
