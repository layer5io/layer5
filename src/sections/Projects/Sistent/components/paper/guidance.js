import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const PaperGuidance = () => {
  const location = useLocation();

  return (
    <SistentLayout title="Paper">
      <div className="content">
        <a id="Identity">
          <h2>Paper</h2>
        </a>
        <p>
          The Paper component provides an elevated surface for displaying
          content. It mimics the behavior of real-world surfaces with shadow
          effects, supporting Material Design's elevation system.
        </p>

        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/paper"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/paper")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/paper/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/paper/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/paper/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/paper/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <a id="Usage Guidelines">
            <h2>Usage Guidelines</h2>
          </a>
          <p>
            When using the Paper component, follow these guidelines to ensure
            consistency and usability across your designs.
          </p>

          <a id="Elevation Guidelines">
            <h3>Elevation Guidelines</h3>
          </a>
          <ul>
            <li> Use lower elevations (0-3) for subtle surfaces such as cards and
            small sections.</li>
            <li>Higher elevations (8-24) are best for modals or
            key areas that need emphasis.</li>
            <li>Be mindful of the dark mode
            behavior, where higher elevations result in a lighter background.</li>
          </ul>

          <a id="Variant Guidelines">
            <h3>Variant Guidelines</h3>
          </a>
          <ul>
            <li>
              Use the <code>outlined</code> variant for areas where shadows
              might feel visually overwhelming.
            </li>
            <li>
              Stick to the default elevation variant for core components
              requiring shadow depth.
            </li>
          </ul>
          <a id="Corners Guidelines">
            <h3>Corners Guidelines</h3>
          </a>
          <ul>
            <li>
              Rounded corners are more user-friendly and should be preferred
              unless a strict design requires square corners.
            </li>
            <li>
              Use square corners sparingly, mostly for components meant to
              indicate precision or alignment with grid systems.
            </li>
          </ul>

          <a id="Accessibility">
            <h2>Accessibility</h2>
          </a>
          <ul>
            <li>
              Make sure elevated surfaces have sufficient contrast with the
              background.
            </li>
            <li>
              Use clear and concise labels or headings for content within Paper
              components to enhance accessibility.
            </li>
          </ul>
        </div>
      </div>
    </SistentLayout>
  );
};

export default PaperGuidance;
