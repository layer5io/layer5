import React, { useEffect, useState } from "react";
import { smi_data } from "../../collections/landscape/smi";
import Table from "../../components/SMI-Table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { reduce } from "lodash";
import { version } from "react-dom";

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
    
  // const data = React.useMemo(() => smi_data);
  const [smiData, setSmiData] = useState({});
  const [smiTests, setSmiTests] = useState([]);

  useEffect(() => {
    fetch("https://meshery.layer5.io/smi/results/public")
      .then(response => response.json())
      // Group by SMI-spec version
      .then(results => {
        let res = results.results.reduce( (reducedResults, currVal) => {
          (reducedResults[currVal.more_details[0].smi_version.split('/')[0]]= reducedResults[currVal.more_details[0].smi_version.split('/')[0]] || []).push(currVal)
          return reducedResults
        }, {})

        return res
      })
      // Group by Mesh
      .then(result => {
        let res = result
        Object.keys(result).map( key => {
          res[key] = result[key].reduce( (redArr, currVal) => {
            (redArr[currVal["mesh_name"]] = redArr[currVal["mesh_name"]] || []).push(currVal)
              return redArr
            }, {})
        })
        return res
      })
      // Find Latest test
      .then( result => {
        Object.keys(result).map( version => {
          Object.keys(result[version]).map( mesh => {
            result[version][mesh] = result[version][mesh].reduce((redObj, currVal) => {
              return redObj.created_at > currVal.created_at ? redObj : currVal;
            })
          })
        })
        console.log(result)
        return result
      })
      //Save
      .then(res => {
        let data = {}
        Object.keys(res).map (ver => {
          console.log(res[ver])
          Object.keys(res[ver]).map(mesh => {
            (data[ver] = data[ver] || []).push(res[ver][mesh])
          })
        })
        console.log(data, "data")
        setSmiData(data)
        setSmiTests(Object.keys(res))

      })
    
  }, []);

  return (
    <Tabs style={{ overflow: "auto", whiteSpace: "nowrap"}} className="landscape-table">
      <TabList>
        {
          smiTests.map(ver => 
            <Tab>{ver}</Tab>)
        }
      </TabList>
      <TabPanel>
      {
          smiTests.map(ver => 
        <Table columns={columns} data={smiData[ver]} spec={{"traffic-access":Object.values(smiData[ver])[0].more_details[0].smi_version, "traffic-split":Object.values(smiData[ver])[0].more_details[1].smi_version, "traffic-spec":Object.values(smiData[ver])[0].more_details[2].smi_version}} />)
      }
      </TabPanel>
    </Tabs>
  );
}

export default SMI_Compatibility;

