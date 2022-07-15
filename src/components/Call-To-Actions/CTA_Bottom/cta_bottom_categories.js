import img_source from "../../../assets/images/callout/callout.png";
import meshmap_icon from "../../../assets/images/meshmap/icon-only/meshmap-icon.png";
import docker from "../../../assets/images/docker-extension/docker-extension-meshery-logo.svg";

export const Categories = {
  "Community": {
    "Image": img_source,
    "Image_Alt": "Image alt text",
    "Heading": "Layer5 Community",
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
  },
  "Docker": {
    "Image": docker,
    "Image_Alt": "Meshery Docker",
    "Heading": "Meshery Docker Extension",
    "Content": "Develop service mesh-ready apps using Docker Desktop and Meshery. The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes.",
    "Button_Text": "Get yours now!",
    "Link": "/docker-extension-meshery",
    "Link_external": false
  }
};