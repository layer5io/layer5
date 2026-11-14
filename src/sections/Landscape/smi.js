import React from "react";
import Table from "../../components/SMI-Table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { smi_data } from "../../collections/landscape/smi";

const specOrder = ["traffic-access", "traffic-split", "traffic-spec"];

function SMI_Compatibility() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Service Mesh",
        accessor: "mesh_name",
      },
      {
        Header: "Mesh Version",
        accessor: "mesh_version",
      },
      {
        Header: "Traffic Access",
        accessor: "traffic-access",
      },
      {
        Header: "Traffic Split",
        accessor: "traffic-split",
      },
      {
        Header: "Traffic Spec",
        accessor: "traffic-spec",
      },
      {
        Header: "% Passed",
        accessor: "passing_percentage",
      },
    ],
    []
  );

  const smiData = React.useMemo(() => smi_data.reduce((grouped, result) => {
    const ver = result.more_details[0].smi_version.split("/")[0];
    (grouped[ver] = grouped[ver] || []).push({
      ...result,
      more_details: [...result.more_details].sort((a, b) => specOrder.indexOf(a.smi_specification) - specOrder.indexOf(b.smi_specification)),
    });
    return grouped;
  }, {}), []);

  return (
    <Tabs style={{ overflow: "auto", whiteSpace: "nowrap" }} className="landscape-table">
      <TabList>
        {
          Object.keys(smiData).map((ver) => {
            return <Tab  key={ver}>{ver}</Tab>;
          }
          )
        }
      </TabList>
      {
        Object.keys(smiData).map(ver =>
          <TabPanel key={ver}>
            <Table columns={columns} data={smiData[ver]} spec={{
              "traffic-access": Object.values(smiData[ver])[0].more_details[0].smi_version,
              "traffic-split": Object.values(smiData[ver])[0].more_details[1].smi_version,
              "traffic-spec": Object.values(smiData[ver])[0].more_details[2].smi_version }}
            />
          </TabPanel>
        )}
    </Tabs>
  );
}

export default SMI_Compatibility;

