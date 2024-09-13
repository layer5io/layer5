
import React from "react";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { ResponsiveDataTable, SistentThemeProviderWithoutBaseLine } from "@layer5/sistent";
import { basicColumns, basicData, basicOptions, customColumns, customData, options } from "./table-column";

export const DataTable = () => {
  const location = useLocation();
  return (
    <SistentLayout title="Table">
      <div className="content">
        <a id="Identity">
          <h2>Table</h2>
        </a>
        <p>
            Datatables is a responsive datatables component. It comes with features like filtering, resizable columns, view/hide columns, draggable columns, search, export to CSV download, printing, selectable rows, expandable rows, pagination, and sorting. On top of the ability to customize styling on most views, there are three responsive modes "vertical", "standard", and "simple" for mobile/tablet devices.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/table")}
            title="Overview"
          />
          {/* <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/modal/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/modal/guidance")
            }
            title="Guidance"
          /> */}
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/table/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/table/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            Tables display information in a way that's easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards. They can include:

            - A corresponding visualization
            - Tools to query and manipulate data
            - Controls for adjusting the visualization

          </p>
          <h3>Basic</h3>
          <p>
            A simple example of a table with three columns: Name, Type, and Description.
          </p>
          <SistentThemeProviderWithoutBaseLine>
            <ResponsiveDataTable
              columns={basicColumns}
              data={basicData}
              options={basicOptions}
            />
          </SistentThemeProviderWithoutBaseLine>

          <h3>With customized columns</h3>
          <p>
            A table with customized columns. Here data can be sorted and filtered.
          </p>
          <SistentThemeProviderWithoutBaseLine>
            <ResponsiveDataTable
              columns={customColumns}
              data={customData}
              options={options}
            />
          </SistentThemeProviderWithoutBaseLine>

        </div>
      </div>
    </SistentLayout>
  );
};

