import meshmateLogo from "../../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../../assets/images/community/community-green.svg";

const Data = {
  menuItems: [
    {
      name: "Solutions",
      path: "/projects",
      subItems: [
        // {
        //   name: "Image Hub",
        //   path: "/projects/image-hub",
        //   sepLine: true
        // },
        {
          name: "Developer-defined Infrastructure",
          path: "/cloud-native-management/meshmap",
        },
        {
          name: "Cloud Native Deployments by Diagram",
          path: "/cloud-native-management/meshmap/design",
        },
        {
          name: "Kubernetes Multi-cluster Operation",
          path: "/cloud-native-management/meshmap/visualize",
        },
        {
          name: "Collaborative GitOps",
          path: "/cloud-native-management/meshmap/collaborate",
        },
      ],
      actionItems: [
        {
          actionName: "Pricing",
          actionLink: "/pricing",
        },
      ],

      // subItems: [
      //     {
      //         name: "Current Home",
      //         path: "/",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Classic",
      //         path: "/classic",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Modern",
      //         path: "/modern",
      //         sepLine: true
      //     },
      //     {
      //         name: "Temp Example: Hosting",
      //         path: "/hosting",
      //         sepLine: true
      //     }
      // ],
      // actionItems: [
      //   {
      //     actionName: "All projects",
      //     actionLink: "/projects",
      //   },
      // ],
      // actionName: "Home",
      // actionLink: "/",
      // div1: {
      //     src: img1,
      //     descr: "How I schooled my seniors"
      // },
      // div2: {
      //     src: img2,
      //     descr: "Service Mesh Istio patterns for multitenancy"
      // }
    },
    {
      name: "Projects",
      path: "/projects",
      subItems: [
        // {
        //   name: "Image Hub",
        //   path: "/projects/image-hub",
        //   sepLine: true
        // },
        {
          name: "Meshery",
          path: "/cloud-native-management/meshery",
          sepLine: true
        },
        {
          name: "Catalog",
          path: "https://meshery.io/catalog",
        },
        {
          name: "Docker Extension",
          path: "/docker-extension-meshery",
        },
        {
          name: "MeshMap",
          path: "/cloud-native-management/meshmap",
        },
        {
          name: "Playground",
          path: "https://play.meshery.io",
        },
        {
          name: "Nighthawk",
          path: "/projects/nighthawk",
          sepLine: true
        },
        {
          name: "Service Mesh",
          path: "/service-mesh-landscape",
          sepLine: true
        },
        {
          name: "Patterns",
          path: "/learn/service-mesh-books/service-mesh-patterns",
        },
        {
          name: "Interface",
          path: "/projects/service-mesh-interface-conformance",
        },
        {
          name: "Landscape",
          path: "/service-mesh-landscape",
        },
        {
          name: "Performance",
          path: "/projects/service-mesh-performance",
        },
      ],
      actionItems: [
        {
          actionName: "All projects",
          actionLink: "/projects",
        },
        // {
        //   actionName: "Pricing",
        //   actionLink: "/pricing",
        // },
      ],
      // div1: {
      //   src: meshery,
      //   descr: "How I schooled my seniors"
      // },
      // div2: {
      //   src: img2,
      //   descr: "Service Mesh Istio patterns for multilatency"
      // }
    },
    {
      name: "Learn",
      path: "/learn",
      subItems: [
        {
          name: "Books",
          path: "/learn/service-mesh-books",
          sepLine: true
        },
        {
          name: "Forum",
          path: "https://discuss.layer5.io",
          sepLine: true
        },
        {
          name: "Workshops",
          path: "/learn/service-mesh-workshops",
          sepLine: true
        },
        {
          name: "Learning Paths",
          path: "/learn/learning-paths",
          sepLine: true
        },
        {
          name: "Interactive Labs",
          path: "/learn/service-mesh-labs",
          sepLine: true
        },
      ],
      actionItems: [
        {
          actionName: "Join the discussion",
          actionLink: "https://discuss.layer5.io",
        },
        // {
        //   actionName: "Free service mesh training",
        //   actionLink: "/learn",
        // }
      ],
      // div1: {
      //   src: meshery,
      //   descr: "How I schooled my seniors"
      // },
      // div2: {
      //   src: img2,
      //   descr: "Service Mesh Istio patterns for multitenancy"
      // }
    },
    {
      name: "Community",
      path: "/community",
      subItems: [
        {
          name: "Handbook",
          path: "/community/handbook",
          sepLine: true
        },
        {
          name: "Members",
          path: "/community/members",
          sepLine: true
        },
        {
          name: "MeshMates",
          path: "/community/meshmates",
        },
        {
          name: "Events",
          path: "/community/events",
          sepLine: true
        },
        {
          name: "Calendar",
          path: "/community/calendar",
        },
      ],
      actionItems: [
        {
          actionName: "Newcomer's journey",
          actionLink: "/community/newcomers",
        },
        {
          actionName: "Open source internships",
          actionLink: "/careers/programs",
        }
      ],
      div1: {
        src: meshmateLogo,
        descr: "Meet our MeshMates",
        path: "/community/meshmates"
      },
      div2: {
        src: communityGreen,
        descr: "Join the cloud native community",
        path: "/community"
      }
    },
    {
      name: "Blog",
      path: "/blog",
      subItems: [
        {
          name: "Resources",
          path: "/resources",
          sepLine: true
        },
        {
          name: "News",
          path: "/news",
          sepLine: true
        }
      ],
      actionItems: [
        {
          actionName: "Explore resource library",
          actionLink: "/resources",
        },
        {
          actionName: "Layer5 in the news",
          actionLink: "/news",
        },
        {
          actionName: "Recent announcements",
          actionLink: "/blog/category/announcements"
        }
      ],
      // div1: {
      //     src: img1,
      //     descr: "How I schooled my seniors"
      // },
      // div2: {
      //     src: img2,
      //     descr: "Service Mesh Istio patterns for multilatency"
      // }
    }
    // {
    //     name: "About",
    //     path: "/company/about",
    //     offset: "-50"
    // },
    // {
    //     name: "Contact",
    //     path: "/#contact",
    //     offset: "-50"
    // }
  ]
};
export default Data;
