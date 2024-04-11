import React from "react";
import partner1 from "../../assets/images/partners/University_of_Texas_at_Austin_seal.webp";
import partner2 from "../../assets/images/partners/gsoc.svg";
import partner3 from "../../assets/images/partners/UEM_Logo.webp";
import { ReactComponent as Partner4 } from "../../assets/images/partners/citrix-colorMode.svg";
import { ReactComponent as Partner5 } from "../../assets/images/partners/cncf-stacked-colorMode.svg";
import { ReactComponent as Partner6 } from "../../assets/images/partners/hashicorp_vertical-colorMode.svg";
import { ReactComponent as Partner7 } from "../../assets/images/partners/hpe_side-colorMode.svg";
import { ReactComponent as Partner8 } from "../../assets/images/partners/microsoft-colorMode.svg";
import { ReactComponent as Partner9 } from "../../assets/images/partners/redhat-colorMode.svg";
// import { ReactComponent as Partner10 } from "../../assets/images/partners/smi-colorMode.svg";
import { ReactComponent as Partner11 } from "../../assets/images/partners/intel-colorMode.svg";
import { ReactComponent as PartnerIstio } from "../../assets/images/partners/istio-colorMode.svg";
import { ReactComponent as Partner12 } from "../../assets/images/partners/vmware-colorMode.svg";

import { ReactComponent as Partner14 } from "../../assets/images/partners/metabit-trading-logo-colorMode.svg";
import { ReactComponent as Partner15 } from "../../assets/images/partners/docker.svg";

export const partners = [
  {
    name: "The University of Texas at Austin",
    desc: " In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about our collaborative research",
    //link: "http://www.ece.utexas.edu/speakers/lee-calcote",
    type: "academic",
    imageLink: partner1,
    partnerId: "utaustin",
    //imageRoute: "http://www.ece.utexas.edu/speakers/lee-calcote",
    moreInfo: "In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about our collaborative research"

  }, {
    name: "Google Summer of Code",
    desc: "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about our mentoring",
    //link: "/programs",
    type: "academic",
    imageLink: partner2,
    imageRoute: "https://layer5.io/programs/gsoc",
    moreInfo: "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about our mentoring",
  }, {
    name: "University of Engineering & Management Jaipur",
    desc: "We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the university participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. Learn more about Layer5's internships",
    //link: "/careers/internships",
    type: "academic",
    imageLink: partner3,
    partnerId: "uem",
    //imageRoute: "https://uem.edu.in/blog/what-is-open-source/",
    moreInfo: "We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the university participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. Learn more about Layer5's internships",
  }, {
    name: "Citrix",
    desc: "Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.",
    //link: null,
    type: "technology",
    imageLink: <Partner4 alt="Citrix" />,
    partnerId: "Citrix",
    //imageRoute: "https://www.citrix.com/products/citrix-adc/",
    moreInfo: "Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.",
  }, {
    name: "Cloud Native Computing Foundation (CNCF)",
    desc: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.",
    //link: null,
    type: "technology",
    imageLink: <Partner5 alt="CNCF" />,
    imageRoute: "https://landscape.cncf.io/card-mode?category=cncf-members&grouping=category&selected=layer5-member&embed=yes&style=logo",
    moreInfo: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.",
  }, {
    name: "HashiCorp",
    desc: "HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.",
    //link: null,
    type: "technology",
    imageLink: <Partner6 alt="HashiCorp" />,
    partnerId: "HashiCorp",
    imageRoute: "https://www.hashicorp.com/partners/tech/layer5",
    moreInfo: "HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.",
  }, {
    name: "HPE",
    desc: "HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.",
    //link: null,
    type: "technology",
    imageLink: <Partner7 alt="HPE" />,
    partnerId: "hpe",
    //imageRoute: "https://www.hpe.com/",
    moreInfo: "HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.",
  }, {
    name: "Istio",
    desc: "Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.",
    //link: null,
    type: "technology",
    imageLink: <PartnerIstio alt="Istio" />,
    imageRoute: "https://istio.io/about/community/partners/",
    moreInfo: "Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.",
  }, {
    name: "Microsoft",
    desc: "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
    //link: null,
    type: "technology",
    imageLink: <Partner8 alt="Microsoft" />,
    //imageRoute: "https://www.microsoft.com/",
    moreInfo: "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
  }, {
    name: "Red Hat",
    desc: "The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.",
    //link: null,
    type: "technology",
    imageLink: <Partner9 alt="Red Hat" />,
    partnerId: "redhat",
    //imageRoute: "https://www.redhat.com/",
    moreInfo: "The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.",
  }, {
    name: "Intel",
    desc: "Intel and Layer5 have partnered to deliver Service Mesh Performance as a new standard of measure for service mesh performance characterization. Collective works have been published by the IEEE and demonstrated at KubeCon.",
    //link: null,
    type: "technology",
    imageLink: <Partner11 alt="Intel" />,
    partnerId: "intel",
    //imageRoute: "https://www.intel.in/content/www/in/en/homepage.html",
    moreInfo: "Intel and Layer5 have partnered to deliver Service Mesh Performance as a new standard of measure for service mesh performance characterization. Collective works have been published by the IEEE and demonstrated at KubeCon.",
  }, {
    name: "VMware",
    desc: "Layer5 enhances the Tanzu Service Mesh experience with Meshery as an application and infrastructure management platform that accelerates the adoption of open-source and cloud-native technologies by eliminating complexity with its intuitive, efficient, and flexible solution. Using Layer5's solutions along with Tanzu, engineers can self-service while enterprise IT teams offer Kubernetes as a Service to their application service teams.",
    //link: null,
    type: "technology",
    imageLink: < Partner12 alt="VMWare" />,
    partnerId: "VMware",
    //imageRoute: "https://www.vmware.com/",
    moreInfo:
      "Layer5 enhances the Tanzu Service Mesh experience with Meshery as an application and infrastructure management platform that accelerates the adoption of open-source and cloud-native technologies by eliminating complexity with its intuitive, efficient, and flexible solution. Using Layer5's solutions along with Tanzu, engineers can self-service while enterprise IT teams offer Kubernetes as a Service to their application service teams.",
  }, {
    name: "Metabit Trading",
    desc: "Metabit Trading is a technology-driven quantitative investment firm harnessing the power of artificial intelligence and machine learning.",
    //link: null,
    type: "technology",
    imageLink: <Partner14 alt="Metabit Trading" />,
    partnerId: "metabittrading",
    //imageRoute: "https://www.metabit-trading.com/home",
    moreInfo:
      "Metabit Trading is a technology-driven quantitative investment firm harnessing the power of artificial intelligence and machine learning.",
  }, {
    name: "Docker",
    imageLink: <Partner15 alt="Docker" />,
    type: "technology",
    partnerId: "docker",
    desc: "Layer5 and Docker have partnered together to bring Kubernetes and cloud native management capabilities to the Docker platform through Meshery. As part of the partnership, Layer5 has joined the Docker Extension Program, enabling users to easily deploy and manage cloud native infrastructure within their Docker environments. With this collaboration, developers can leverage the power of both Docker and Layer5's expertise in service mesh technologies to enhance their containerized applications' performance, security, and observability. By integrating Meshery with Docker, users gain seamless access to advanced features for managing complex microservices architectures effectively.",
    moreInfo: "Layer5 and Docker have partnered together to bring Kubernetes and cloud native management capabilities to the Docker platform through Meshery. As part of the partnership, Layer5 has joined the Docker Extension Program, enabling users to easily deploy and manage cloud native infrastructure within their Docker environments. With this collaboration, developers can leverage the power of both Docker and Layer5's expertise in cloud native technologies to enhance their containerized applications' performance, security, and observability. By integrating Meshery with Docker, users gain seamless access to advanced features for managing complex microservices architectures effectively."
  }
];
