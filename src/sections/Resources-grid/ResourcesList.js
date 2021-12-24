import React from "react";

// Components
import ResourcesGrid from "./index";
import DataWrapper from "./DataWrapper";

const ResourcesList = (props) => {
  let data = [];
  if(props.resource.length>0)
  {
  props.allResources.allMdx.nodes.forEach((resources) => {
      props.resource.map((type) =>
      {
        if(resources.frontmatter.type === type)
        {
         data.push(resources);
        }
      })
  });
}
else{
  props.allResources.allMdx.nodes.forEach((resources) => {
    data.push(resources);
  });
}


  return <ResourcesGrid data={[...new Set(data)]} {...props} />;
};

export default DataWrapper(ResourcesList);
