import img_source from "../../../assets/images/callout/callout.webp";
import meshmap_icon from "../../../assets/images/meshmap/meshmap-collaborate.webp";
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
    "Heading": "Get started with MeshMap!",
    "Content": "Explore and understand your infrastructure at a glance with our powerful visualizer tool. Gain insights, track dependencies, and optimize performance effortlessly.",
    "Button_Text": "Try MeshMap now!",
    "Link": "/cloud-native-management/meshmap",
    "Link_external": false
  },
  "Docker": {
    "Image": docker,
    "Image_Alt": "Meshery Docker",
    "Heading": "Meshery Docker Extension",
    "Content": "Design cloud native apps using the Meshery Docker Extension. Import existing Docker Compose, Helm Chart, or Kubernetes Manifests, or grab a best practices pattern from Meshery Catalog The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to multi-cluster Kubernetes design and management off ALL cloud native infrastructure.",
    "Button_Text": "Get Meshery Docker Extension",
    "Link": "/docker-extension-meshery",
    "Link_external": false
  }
};