### What is the use of this CTA:
The **ConformanceTestTable** component is a used to display a table with sorting options

### How to use the CTA:
To use this CTA simply specify colums and data
```
const columns = [
    {
      Header: "Test Number",
      accessor: "test_no",
    },
    {
      Header: "Specification",
      accessor: "spec",
    },
    {
      Header: "Test Type",
      accessor: "test_type",
    },
    {
      Header: "Description",
      accessor: "desc",
    },
  ];

  const data = [
    {
      test_no: 1,
      spec: "Some Specification",
      test_type: "Type A",
      desc: "Description A",
    },
    {
      test_no: 2,
      spec: "Another Specification",
      test_type: "Type B",
      desc: "Description B",
    },
  ];
```
and call the component
```
<ConformanceTestTable columns={columns} data={data}/>
```

![image](https://github.com/layer5io/layer5/assets/74408634/21d94675-3052-4338-bc3f-731a20195e97)