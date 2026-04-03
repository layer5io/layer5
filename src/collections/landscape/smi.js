export const smi_data = [
  {
    "id": "0dd368be-745f-4433-a356-f717aac40457",
    "date": "2020-10-14T20:14:48+05:30",
    "mesh_name": "Open Service Mesh",
    "mesh_version": "v0.6.0",
    "cases_passed": "0",
    "passing_percentage": "49.6%",
    "status": "completed",
    "more_details": [
      {
        "smi_specification": "traffic-access",
        "smi_version": "v1alpha1",
        "time": "2m11.256912594s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-split",
        "smi_version": "v1alpha1",
        "time": "3m0.185017042s",
        "assertions": "9",
        "result": "no matches for kind \"TrafficSplit\" in version \"split.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-spec",
        "smi_version": "v1alpha1",
        "time": "3m44.100076898s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 3-install",
        "capability": "HALF",
        "status": "FAILED"
      }
    ],
    "previous_versions": [

    ],
  },

  {
    "id": "2",
    "date": "2020-10-14T20:14:48+05:30",
    "mesh_name": "Traefik Mesh",
    "mesh_version": "v1.4.1",
    "cases_passed": "10",
    "passing_percentage": "49.6%",
    "status": "completed",
    "more_details": [
      {
        "smi_specification": "traffic-access",
        "smi_version": "v1alpha1",
        "time": "1m6.134448636s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-split",
        "smi_version": "v1alpha1",
        "time": "2m0.68506152s",
        "assertions": "9",
        "result": "no matches for kind \"TrafficSplit\" in version \"split.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-spec",
        "smi_version": "v1alpha1",
        "time": "2m52.083696738s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 3-install",
        "capability": "HALF",
        "status": "FAILED"
      }
    ],
    "previous_versions": [

    ],
  },
  {
    "id": "3",
    "date": "2020-10-14T20:14:48+05:30",
    "mesh_name": "Linkerd 1.x",
    "mesh_version": "v2.9.2",
    "cases_passed": "10",
    "passing_percentage": "47.8%",
    "status": "completed",
    "more_details": [
      {
        "smi_specification": "traffic-split",
        "smi_version": "v1alpha1",
        "time": "56.782066391s",
        "assertions": "9",
        "result": "no matches for kind \"TrafficSplit\" in version \"split.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-spec",
        "smi_version": "v1alpha1",
        "time": "1m47.294364872s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 3-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-access",
        "smi_version": "v1alpha1",
        "time": "2m53.380669651s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      }
    ],
    "previous_versions": [

    ],
  },
  {
    "id": "4",
    "date": "2020-10-14T20:14:48+05:30",
    "mesh_name": "Kuma",
    "mesh_version": "v0.7",
    "cases_passed": "10",
    "passing_percentage": "49.6%",
    "status": "completed",
    "more_details": [
      {
        "smi_specification": "traffic-access",
        "smi_version": "v1alpha1",
        "time": "1m6.473460993s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-split",
        "smi_version": "v1alpha1",
        "time": "2m3.267674307s",
        "assertions": "9",
        "result": "no matches for kind \"TrafficSplit\" in version \"split.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 4-install",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-spec",
        "smi_version": "v1alpha1",
        "time": "2m54.969396793s",
        "assertions": "12",
        "result": "no matches for kind \"TrafficTarget\" in version \"access.smi-spec.io/v1alpha1\"",
        "reason": "failed in step 3-install",
        "capability": "HALF",
        "status": "FAILED"
      }
    ],
    "previous_versions": [

    ],
  },
  {
    //Data not 100% acurate
    "id": "7",
    "date": "2020-10-14T20:14:48+05:30",
    "mesh_name": "Istio",
    "mesh_version": "v1.6.7",
    "cases_passed": "10",
    "passing_percentage": "50%",
    "status": "completed",
    "more_details": [
      {
        "smi_specification": "traffic-access",
        "smi_version": "v1alpha1",
        "time": "2m1.020784957s",
        "assertions": "1",
        "result": "customresourcedefinitions.apiextensions.k8s.io \"traffictargets.access.smi-spec.io\" not found",
        "reason": "failed in step 1-",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-split",
        "smi_version": "v1alpha1",
        "time": "4m2.0887822s",
        "assertions": "1",
        "result": "customresourcedefinitions.apiextensions.k8s.io \"trafficsplits.split.smi-spec.io\" not found",
        "reason": "failed in step 1-",
        "capability": "HALF",
        "status": "FAILED"
      },
      {
        "smi_specification": "traffic-spec",
        "smi_version": "v1alpha1",
        "time": "6m3.155662313s",
        "assertions": "1",
        "result": "customresourcedefinitions.apiextensions.k8s.io \"httproutegroups.specs.smi-spec.io\" not found",
        "reason": "failed in step 1-",
        "capability": "HALF",
        "status": "FAILED"
      }
    ],
    "previous_versions": [

    ],
  }

];