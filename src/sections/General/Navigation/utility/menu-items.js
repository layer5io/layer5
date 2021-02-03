import meshery from "../../../../assets/images/meshery/full-logo/meshery-logo-light-text.svg";
import img2 from "./layer5-and-istio.png";
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
        {
          name: "Distributed Performance",
          path: "/projects/distributed-performance-management",
          sepLine: true
        },
        {
          name: "Image Hub",
          path: "/projects/image-hub",
          sepLine: true
        },
        {
          name: "Meshery",
          path: "/meshery",
          sepLine: true
        },
        // {
        //   name: "Service Mesh Landscape",
        //   path: "/landscape",
        //   sepLine: true
        // },
        {
          name: "Service Mesh Interface",
          path: "/projects/service-mesh-interface-conformance",
          sepLine: true
        },
        {
          name: "Service Mesh Performance",
          path: "/projects/service-mesh-performance",
          sepLine: true
        }
      ],
      actionItems: [
        {
          actionName: "All projects",
          actionLink: "/projects",
        }
      ],
      div1: {
        src: meshery,
        descr: "How I schooled my seniors"
      },
      div2: {
        src: img2,
        descr: "Service Mesh Istio patterns for multilatency"
      }
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
          name: "Workshops",
          path: "/learn/service-mesh-workshops",
          sepLine: true
        },
        {
          name: "Service Mesh Labs",
          path: "/learn/service-mesh-labs",
          sepLine: true
        }
      ],
      actionItems: [
        {
          actionName: "Free service mesh training",
          actionLink: "/learn",
        }
      ],
      div1: {
        src: meshery,
        descr: "How I schooled my seniors"
      },
      div2: {
        src: img2,
        descr: "Service Mesh Istio patterns for multitenancy"
      }
    },
    {
      name: "Community",
      path: "/community",
      subItems: [
        {
          name: "Calendar",
          path: "/community/calendar",
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
          sepLine: true
        },
        // {
        //     name: "MeshMasters",
        //     path: "/community/meshmasters"
        // },
        // {
        //     name: "Newcomers",
        //     path: "/community/newcomers"
        // },
        {
          name: "Events",
          path: "/community/events",
          sepLine: true
        },
      ],
      actionItems: [
        {
          actionName: "Join the community",
          actionLink: "/community/newcomers",
        },
        {
          actionName: "Open source internship programs",
          actionLink: "/community/members",
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
          name: "Blog",
          path: "/blog",
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
