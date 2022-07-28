
import partner1 from "../../assets/images/partners/University_of_Texas_at_Austin_seal.png";
import partner2 from "../../assets/images/partners/gsoc.svg";
import partner3 from "../../assets/images/partners/UEM_Logo.jpg";
import partner4 from "../../assets/images/partners/citrix.svg";
import partner5 from "../../assets/images/partners/cncf-stacked-color.svg";
import darkpartner5 from "../../assets/images/partners/cncf-stacked-white-color.svg";
import partner6 from "../../assets/images/partners/hashicorp_vertical_black.svg";
import lightPartner6 from "../../assets/images/partners/hashicorp_vertical_light.svg";
import partner7 from "../../assets/images/partners/hpe_side_black.svg";
import lightPartner7 from "../../assets/images/partners/hpe_side_white.svg";
import partner8 from "../../assets/images/partners/microsft.svg";
import lightPartner8 from "../../assets/images/partners/microsoft-light.svg";
import partner9 from "../../assets/images/partners/redhat.svg";
import lightPartner9 from "../../assets/images/partners/redhat_white.svg";
import partner10 from "../../assets/images/partners/smi1.png";
import partner11 from "../../assets/images/partners/intel.svg";
import lightPartner11 from "../../assets/images/partners/intel_white.svg";
import partnerIstio from "../../assets/images/partners/istio-light.svg";
import lightPartnerIstio from "../../assets/images/partners/istio-dark.svg";


import partner12 from "../../assets/images/partners/vmware.svg";
import { Link } from "gatsby";

export const partners = [
  {
    name: "The University of Texas at Austin",
    desc: " In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about our collaborative research",
    //link: "http://www.ece.utexas.edu/speakers/lee-calcote",
    type: "academic",
    imageLink: partner1,
    darkimageLink: partner1,
    partnerId: "utaustin",
    //imageRoute: "http://www.ece.utexas.edu/speakers/lee-calcote",
    moreInfo: "In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about our collaborative research"

  }, {
    name: "Google Summer of Code",
    desc: "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about our mentoring",
    //link: "/programs",
    type: "academic",
    imageLink: partner2,
    darkimageLink: partner2,
    imageRoute: "https://layer5.io/programs/gsoc",
    moreInfo: "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about our mentoring",
  }, {
    name: "University of Engineering & Management Jaipur",
    desc: "We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the university participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. Learn more about Layer5's internships",
    //link: "/careers/internships",
    type: "academic",
    imageLink: partner1,
    darkimageLink: partner3,
    partnerId: "uem",
    //imageRoute: "https://uem.edu.in/blog/what-is-open-source/",
    moreInfo: "We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the university participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. Learn more about Layer5's internships",
  }, {
    name: "Citrix",
    desc: "Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.",
    //link: null,
    type: "technology",
    imageLink: partner4,
    darkimageLink: partner4,
    partnerId: "Citrix",
    //imageRoute: "https://www.citrix.com/products/citrix-adc/",
    moreInfo: "Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.",
  }, {
    name: "Cloud Native Computing Foundation (CNCF)",
    desc: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.",
    //link: null,
    type: "technology",
    imageLink: partner5,
    darkimageLink: darkpartner5,
    imageRoute: "https://landscape.cncf.io/card-mode?category=cncf-members&grouping=category&selected=layer5-member&embed=yes&style=logo",
    moreInfo: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.",
  }, {
    name: "HashiCorp",
    desc: "HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.",
    //link: null,
    type: "technology",
    imageLink: partner6,
    darkimageLink: lightPartner6,
    partnerId: "HashiCorp",
    imageRoute: "https://www.hashicorp.com/partners/tech/layer5",
    moreInfo: "HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.",
  }, {
    name: "HPE",
    desc: "HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.",
    //link: null,
    type: "technology",
    imageLink: partner7,
    darkimageLink: lightPartner7,
    partnerId: "hpe",
    //imageRoute: "https://www.hpe.com/",
    moreInfo: "HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.",
  }, {
    name: "Istio",
    desc: "Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.",
    //link: null,
    type: "technology",
    imageLink: partnerIstio,
    darkimageLink: lightPartnerIstio,

    imageRoute: "https://istio.io/about/community/partners/",
    moreInfo: "Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.",
  }, {
    name: "Microsoft",
    desc: "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
    //link: null,
    type: "technology",
    imageLink: partner8,
    darkimageLink: lightPartner8,
    //imageRoute: "https://www.microsoft.com/",
    moreInfo: "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
  }, {
    name: "Red Hat",
    desc: "The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.",
    //link: null,
    type: "technology",
    imageLink: partner9,
    darkimageLink: lightPartner9,
    partnerId: "redhat",
    //imageRoute: "https://www.redhat.com/",
    moreInfo: "The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.",
  }, {
    name: "Service Mesh Interface",
    desc: "The Service Mesh Interface (SMI) is a specification for service meshes that run on Kubernetes. It defines a common standard that can be implemented by a variety of providers. This allows for both standardization for end-users and innovation by providers of Service Mesh Technology. It enables flexibility and interoperability.",
    //link: null,
    type: "technology",
    imageLink: partner10,
    darkimageLink: partner10,
    imageRoute: "https://smi-spec.io/blog/validating-smi-conformance-with-meshery/",
    moreInfo: "The Service Mesh Interface (SMI) is a specification for service meshes that run on Kubernetes. It defines a common standard that can be implemented by a variety of providers. This allows for both standardization for end-users and innovation by providers of Service Mesh Technology. It enables flexibility and interoperability.",
  }, {
    name: "Intel",
    desc: "Intel and Layer5 have partnered to deliver Service Mesh Performance as a new standard of measure for service mesh performance characterization. Collective works have been published by the IEEE and demonstrated at KubeCon.",
    //link: null,
    type: "technology",
    imageLink: partner11,
    darkimageLink: lightPartner11,
    partnerId: "intel",
    //imageRoute: "https://www.intel.in/content/www/in/en/homepage.html",
    moreInfo: "Intel and Layer5 have partnered to deliver Service Mesh Performance as a new standard of measure for service mesh performance characterization. Collective works have been published by the IEEE and demonstrated at KubeCon.",
  }, {
    name: "VMware",
    desc: "Layer5 enhances the Tanzu Service Mesh experience with Meshery as an application and infrastructure management platform that accelerates the adoption of open-source and cloud-native technologies by eliminating complexity with its intuitive, efficient, and flexible solution. Using Layer5's solutions along with Tanzu, engineers can self-service while enterprise IT teams offer Kubernetes as a Service to their application service teams.",
    //link: null,
    type: "technology",
    imageLink: partner12,
    darkimageLink: partner12,
    partnerId: "VMware",
    //imageRoute: "https://www.vmware.com/",
    moreInfo:
      "Layer5 enhances the Tanzu Service Mesh experience with Meshery as an application and infrastructure management platform that accelerates the adoption of open-source and cloud-native technologies by eliminating complexity with its intuitive, efficient, and flexible solution. Using Layer5's solutions along with Tanzu, engineers can self-service while enterprise IT teams offer Kubernetes as a Service to their application service teams.",
  }


];