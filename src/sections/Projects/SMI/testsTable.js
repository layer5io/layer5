import React from "react";
import data from "./data";
import Table from "../../../components/ConformanceTest-Table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TestsTable() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Test #",
        accessor: "test_no",
      },
      {
        Header: "Spec",
        accessor: "spec",
      },
      {
        Header: "Test Type",
        accessor: "test_type",
      },
      {
        Header: "Test Description",
        accessor: "desc",
      },
    ],
    []
  );

  const test_data = React.useMemo(() => data.testDetails);

  return (
    <Tabs className="conformance-table">
      <TabList>
        <Tab>Test Set v0.4.9</Tab>
      </TabList>
      <TabPanel>
        <Table
          columns={columns}
          data={test_data["0.4.9"]}
        />
      </TabPanel>
    </Tabs>
  );
}

export default TestsTable;

