import React, { useEffect, useState } from "react";
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

  const [smiData, setSmiData] = useState(0);

  useEffect(() => {
    fetch("https://meshery.layer5.io/api/smi/results/public")
      .then(response => response.json())
      // Group by SMI-spec version
      .then(results => {
        let res = results.results.reduce( (reducedResults, currVal) => {
          (reducedResults[currVal.more_details[0].smi_version.split("/")[0]] = reducedResults[currVal.more_details[0].smi_version.split("/")[0]] || []).push(currVal);
          return reducedResults;
        }, {});

        return res;
      })
      // Group by Mesh
      .then(result => {
        let res = result;
        Object.keys(result).map( key => {
          res[key] = result[key].reduce( (redArr, currVal) => {
            (redArr[currVal["mesh_name"]] = redArr[currVal["mesh_name"]] || []).push(currVal);
            return redArr;
          }, {});
        });
        return res;
      })
      // Find Latest test
      .then( result => {
        Object.keys(result).map( version => {
          Object.keys(result[version]).map( mesh => {
            result[version][mesh] = result[version][mesh].reduce((redObj, currVal) => {
              return redObj.created_at > currVal.created_at ? redObj : currVal;
            });
          });
        });
        return result;
      })
      //Save
      .then(res => {
        let data = {};
        Object.keys(res).map (ver => {
          Object.keys(res[ver]).map(mesh => {
            (data[ver] = data[ver] || []).push(res[ver][mesh]);
          });
        });

        setSmiData(data);
      });

  }, []);

  if (smiData == 0) {
    return (<div></div>);
  }

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
            <Table columns={columns} data={smiData[ver]} spec={{ "traffic-access": Object.values(smiData[ver])[0].more_details[0].smi_version, "traffic-split": Object.values(smiData[ver])[0].more_details[1].smi_version, "traffic-spec": Object.values(smiData[ver])[0].more_details[2].smi_version }} />
          </TabPanel>
        )}
    </Tabs>
  );
}

export default SMI_Compatibility;

