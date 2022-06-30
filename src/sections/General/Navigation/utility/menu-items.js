import meshmateLogo from "../../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../../assets/images/community/community-green.svg";

const Data = {
  menuItems: [
    {
      name: "Landscape",
      path: "/service-mesh-landscape",
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
          path: "/service-mesh-management/meshery",
          sepLine: true
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
          name: "Nighthawk",
          path: "/projects/nighthawk",
          sepLine: true
        },
        // {
        //   name: "Service Mesh Landscape",
        //   path: "/landscape",
        //   sepLine: true
        // },
        {
          name: "Service Mesh Patterns",
          path: "/learn/service-mesh-books/service-mesh-patterns",
          sepLine: true
        },
        {
          name: "Service Mesh Interface",
          path: "/projects/service-mesh-interface-conformance",
          sepLine: true
        },
        {
          name: "Service Mesh Performance",
          path: "/projects/service-mesh-performance",
          sepLine: true
        },
      ],
      actionItems: [
        {
          actionName: "All projects",
          actionLink: "/projects",
        }
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
        {
          actionName: "Free service mesh training",
          actionLink: "/learn",
        }
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
        descr: "Join the service mesh community",
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
