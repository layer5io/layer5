import React from "react";
import { non_functional } from "../../collections/landscape/non-functional";
import Table from "../../components/Landscape-Table";

function NonFunctional() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Open source",
        accessor: "opensource",
      },
      {
        Header: "Governance",
        accessor: "governance",
      },
      {
        Header: "Primary Language",
        accessor: "primary_lang",
      },
      {
        Header: "Project Announce",
        accessor: "announce_date",
      },
      {
        Header: "GA/1.0",
        accessor: "ga_1_date",
      },
      {
        Header: "Commercial Offerings",
        accessor: "commercial",
      },
    ],
    []
  );

  const data = React.useMemo(() => non_functional);

  return (
    <Table columns={columns} data={data} placeHolder="Find your mesh..." />
  );
}

export default NonFunctional;
