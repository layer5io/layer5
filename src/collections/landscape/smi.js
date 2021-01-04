export const smi_data=[
    {
        "id": "0dd368be-745f-4433-a356-f717aac40457",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Open Service Mesh",
        "mesh_version": "v0.3",
        "cases_passed": "0",
        "passing_percentage": "100%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Half",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }
        ],
        "previous_versions": [
            {
                "id": "2",
                "date": "2020-10-14T20:14:48+05:30",
                "mesh_name": "Open Service Mesh",
                "mesh_version": "v0.2",
                "cases_passed": "10",
                "passing_percentage": "100%",
                "status": "completed",
                "more_details": [
                    {
                        "smi_specification": "traffic-access",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Full",
                        "status": "Passing"
                    }, {
                        "smi_specification": "traffic-split",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Full",
                        "status": "Passing"
                    }, {
                        "smi_specification": "traffic-spec",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Full",
                        "status": "Passing"
                    }
                ]
            }           
        ],
        "traffic-access": "Full",   // Only for visual representation
        "traffic-split": "Full",    // Only for visual representation
        "traffic-spec": "Full",		// Only for visual representation
    },

    {
        "id": "2",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Istio",
        "mesh_version": "v1.7",
        "cases_passed": "10",
        "passing_percentage": "100%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }
        ],
        "previous_versions": [
            {
                "id": "2",
                "date": "2020-10-14T20:14:48+05:30",
                "mesh_name": "Open Service Mesh",
                "mesh_version": "v1.6",
                "cases_passed": "10",
                "passing_percentage": "100%",
                "status": "completed",
                "more_details": [
                    {
                        "smi_specification": "traffic-access",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Half",
                        "status": "Passing"
                    }, {
                        "smi_specification": "traffic-split",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Full",
                        "status": "Passing"
                    }, {
                        "smi_specification": "traffic-spec",
                        "time": "2m5s",
                        "assertions": "10",
                        "result": "Passed",
                        "reason": "Passing",
                        "capability": "Full",
                        "status": "Passing"
                    }
                ]
            }           
        ],
        "traffic-access": "Full",   // Only for visual representation
        "traffic-split": "Full",    // Only for visual representation
        "traffic-spec": "Full",		// Only for visual representation
    },
    {
        "id": "3",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Linkerd 1.x",
        "mesh_version": "v2.9",
        "cases_passed": "10",
        "passing_percentage": "66%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Failed",
                "reason": "No envoy proxy",
                "capability": "None",
                "status": "Failing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }
        ],
        "previous_versions": [
                       
        ],
        "traffic-access": "None",   // Only for visual representation
        "traffic-split": "Full",    // Only for visual representation
        "traffic-spec": "Full",		// Only for visual representation
    },
    {
        "id": "5",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Traefik Mesh",
        "mesh_version": "v1.4",
        "cases_passed": "10",
        "passing_percentage": "66%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Failed",
                "reason": "No envoy proxy",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "Full",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Failing"
            }
        ],
        "previous_versions": [
                       
        ],
        "traffic-access": "Full",   // Only for visual representation
        "traffic-split": "Full",    // Only for visual representation
        "traffic-spec": "None",		// Only for visual representation
    },
    {
        "id": "4",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Kuma",
        "mesh_version": "v0.7",
        "cases_passed": "10",
        "passing_percentage": "0%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Failed",
                "reason": "No envoy proxy",
                "capability": "None",
                "status": "Failing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Failing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Failing"
            }
        ],
        "previous_versions": [
                       
        ],
        "traffic-access": "None",   // Only for visual representation
        "traffic-split": "None",    // Only for visual representation
        "traffic-spec": "None",		// Only for visual representation
    },
    {
        "id": "6",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "Consul",
        "mesh_version": "v1.8",
        "cases_passed": "10",
        "passing_percentage": "0%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Failed",
                "reason": "No envoy proxy",
                "capability": "None",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Passing"
            }
        ],
        "previous_versions": [
                       
        ],
        "traffic-access": "None",   // Only for visual representation
        "traffic-split": "None",    // Only for visual representation
        "traffic-spec": "None",		// Only for visual representation
    },
    {
        "id": "7",
        "date": "2020-10-14T20:14:48+05:30",
        "mesh_name": "App Mesh",
        "mesh_version": "n/a",
        "cases_passed": "10",
        "passing_percentage": "0%",
        "status": "completed",
        "more_details": [
            {
                "smi_specification": "traffic-access",
                "time": "2m5s",
                "assertions": "10",
                "result": "Failed",
                "reason": "No envoy proxy",
                "capability": "None",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-split",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Passing"
            }, {
                "smi_specification": "traffic-spec",
                "time": "2m5s",
                "assertions": "10",
                "result": "Passed",
                "reason": "Passing",
                "capability": "None",
                "status": "Passing"
            }
        ],
        "previous_versions": [
                       
        ],
        "traffic-access": "None",   // Only for visual representation
        "traffic-split": "None",    // Only for visual representation
        "traffic-spec": "None",		// Only for visual representation
    }

];