import img_source from "../../../assets/images/callout/callout.png";
import meshmap_icon from "../../../assets/images/meshmap/icon-only/meshmap-icon.png";

export const Categories = {
  "Community": {
    "Image": img_source,
    "Image_Alt": "Image alt text",
    "Content": "This callout is specific for community categorised blogs",
    "Button_Text": "Join Us",
    "Link": "https://slack.layer5.io",
    "Link_external": true
  },
  "MeshMap": {
    "Image": meshmap_icon,
    "Image_Alt": "MeshMap",
    "Heading": "MeshMap is here!",
    "Content": "MeshMap is the world's only visual designer for Kubernetes and service mesh deployments. Have your cloud native deployments automatically diagrammed. Deployments configured and modeled in Designer mode, can be deployed into your environment and managed using Visualizer. Discover a catalog of best practice cloud native patterns. ",
    "Button_Text": "Try MeshMap now!",
    "Link": "/cloud-native-management/meshmap",
    "Link_external": false
  }
};