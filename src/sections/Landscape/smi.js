import React from "react";
import { smi_data } from "../../collections/landscape/smi";
import Table from "../../components/SMI-Table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
    
  const data = React.useMemo(() => smi_data);

  return (
    <Tabs style={{ overflow: "auto", whiteSpace: "nowrap"}} className="landscape-table">
      <TabList>
        <Tab>Test Set v0.4.9</Tab>
      </TabList>
      <TabPanel>
        <Table columns={columns} data={data} spec={{"traffic-access":"v1alpha1", "traffic-split":"v1alpha1", "traffic-spec":"v1alpha1"}} />
      </TabPanel>
    </Tabs>
  );
}

export default SMI_Compatibility;

