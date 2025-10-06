/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

function BadgesTable() {
  const [badges, setBadges] = useState();

  useEffect(() => {
    async function getBadges() {
      const response = await axios.get("/data.json");

      if (response.data) {
        const data = response.data;
        const fetchedBadges = Object.values(data.badges);
        console.log("FETCHED BADGES", fetchedBadges);
        setBadges(fetchedBadges);
      }

    }

    getBadges();
  }, []);

  const columns = [
    {
      name: "image_url",
      label: "Badge/icon",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px",
            }}>
            {typeof value === "string" ? (
              value.startsWith("http") ? (
                <img src={value} alt="badge" style={{ width: "50px", height: "50px" }} />
              ) : (
                <span style={{ fontSize: "32px" }}>{value}</span>
              )
            ) : (
              value
            )}
          </div>
        )
      }
    },
    {
      name: "name",
      label: "Badge Name",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "org_id",
      label: "Badge Key",
      option: {
        filter: true,
        sort: true
      }
    },
    {
      name: "description",
      label: "Description",
      option: {
        filer: false,
        sort: false,
        customBodyRender: (value) => (
          <div style={{ maxSidth: "500px" }}>{value}</div>
        )
      }
    }
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
    download: false,
    print: false,
    viewColumns: false,
    elevation: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 50],
  };

  return (
    <div style={{ padding: "20px" }}>
      <MUIDataTable
        title="Badges"
        data={badges}
        columns={columns}
        options={options}
      />
    </div>
  );

}
export default BadgesTable;
