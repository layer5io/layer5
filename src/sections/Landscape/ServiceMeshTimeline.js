import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { non_functional } from "../../collections/landscape/non-functional";
import { MdExpandMore } from "@react-icons/all-files/md/MdExpandMore";
import ServiceMeshIcon from "../../assets/images/service-mesh-icons/service-mesh.svg";

const meshes = [];
const initialMeshes = [];
const remainingMeshes = [];

non_functional.reverse().map(mesh => (
  mesh.timeline_order ?
    meshes.push(mesh)
    : ""
));

for (let i = 0; i < meshes.length; i++){
  if (i < 5)
    initialMeshes.push(meshes[i]);
  else
    remainingMeshes.push(meshes[i]);
}

const ServiceMeshTimeline = ( { theme } ) => {
  const [elements, setElements] = useState(initialMeshes);
  const [loadedAll, showIcon] = useState(false);

  const loadMore = () => {
    setElements([...elements, ...remainingMeshes]);
    showIcon(true);
  };

  const getElements = () =>
    elements.map(mesh => (
      <VerticalTimelineElement
        key={mesh.timeline_order}
        contentStyle={{ color: "#3C494F" }}
        position={mesh.timeline_order % 2 ? "left" : "right"}
        contentArrowStyle={{ display: "none" }}
        iconClassName="meshBubble"
        iconStyle={{ width: "35px", height: "35px" }}
      >
        {mesh.icon ?
          <div className={`meshtitle-img-${mesh.timeline_order % 2}`}>
            <img src={theme === "dark" ? mesh?.darkIcon || mesh.icon : mesh.icon } alt={mesh.name} />
          </div>
          :   <div className={`meshtitle-img-${mesh.timeline_order % 2}`}>
            <img src={ServiceMeshIcon} alt={mesh.name} class={mesh.name} />
          </div>
        }
        <h3 className={`vertical-timeline-element-title title-${mesh.timeline_order % 2}`}>{mesh.name}</h3>
        <h4 className={`vertical-timeline-element-subtitle subtitle-${mesh.timeline_order % 2}`}>{mesh.announce_date}</h4>
        <p className={`dashLine-${mesh.timeline_order % 2}`}></p>
      </VerticalTimelineElement>
    ));

  return (
    <VerticalTimeline
      className="timeline"
    >
      { loadedAll && getElements()}
      { !(loadedAll) && getElements()}
      <VerticalTimelineElement
        className={loadedAll ? "hideIcon" : ""}
        iconOnClick={loadMore}
        iconClassName="moreIcon"
        iconStyle={{ width: "60px", height: "60px" }}
        icon={!(loadedAll) ?
          <MdExpandMore className="showMoreIcon"/>
          : <></>
        }
      />
    </VerticalTimeline>
  );
};

export default ServiceMeshTimeline;
