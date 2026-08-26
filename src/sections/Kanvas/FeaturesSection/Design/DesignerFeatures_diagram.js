import React from "react";
import DiagramStyles from "../../diagram/diagram.style";
import RoleBind2 from "./images/role-binding-2-colorMode.svg";
import RoleBind3 from "./images/role-binding-3-colorMode.svg";
import RoleBind4 from "./images/role-binding-4-colorMode.svg";
import { useInView } from "react-intersection-observer";
import { MesherySchemasCard } from "../../../../components/MesherySchemasCard";

const DesignerFeaturesDiagram = ({ activeExampleIndex }) => {
  const [ref, inView] = useInView({ threshold: 0.6 });

  return (
    <DiagramStyles>
      <div className="root" ref={ref} style={{ minHeight: "25rem" }}>
        <div
          id="design-image1"
          className={inView && activeExampleIndex === 0 ? "show" : "render"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
          }}
        >
          <MesherySchemasCard
            tags={["AWS", "Azure", "GCP"]}
            title="Cloud Native Management"
            description="Design, optimize and maintain your infrastructure with powerful schema tools."
            actionText="Manage"
            statusText="Live"
            onActionClick={() =>
              console.log("Schema management console active!")
            }
          />
        </div>

        <img
          id="design-image2"
          src={RoleBind2}
          className={activeExampleIndex === 1 ? "show" : "render"}
          alt="design-image2"
        />
        <img
          id="design-image3"
          src={RoleBind3}
          className={activeExampleIndex === 2 ? "show" : "render"}
          alt="design-image3"
        />
        <img
          id="design-image4"
          src={RoleBind4}
          className={activeExampleIndex >= 3 ? "show" : "render"}
          alt="design-image4"
        />
      </div>
    </DiagramStyles>
  );
};

export default DesignerFeaturesDiagram;
