import img_source from "../../../assets/images/callout/callout.webp";
import kanvas_icon from "../../../assets/images/kanvas/kanvas-collaborate.webp";
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
  "Kanvas": {
    "Image": kanvas_icon,
    "Image_Alt": "Kanvas",
    "Heading": "Get started with Kanvas!",
    "Content": "Explore and understand your infrastructure at a glance with our powerful Operator tool. Gain insights, track dependencies, and optimize performance effortlessly.",
    "Button_Text": "Try Kanvas now!",
    "Link": "/cloud-native-management/kanvas",
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