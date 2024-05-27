import meshmateLogo from "../../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../../assets/images/community/community-green.svg";

const Data = {
  menuItems: [
    {
      name: "Solutions",
      path: "/cloud-native-management/meshmap",
      subItems: [
        {
          name: "Developer-defined Infrastructure",
          path: "/cloud-native-management/meshmap",
          sepLine: true
        },
        {
          name: "Cloud Native Deployments by Diagram",
          path: "/solutions/cloud-native-deployments-by-diagram",
          sepLine: true
        },
        {
          name: "Kubernetes Multi-cluster Operation",
          path: "/solutions/kubernetes-multi-cluster-operation",
          sepLine: true
        },
        {
          name: "Collaborative GitOps",
          path: "/cloud-native-management/meshmap/collaborate",
          sepLine: true
        },
        {
          name: "GitOps with Cloud Native Insights",
          path: "/solutions/gitops",
          sepLine: true
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
      name: "Products",
      path: "/products",
      subItems: [
        {
          name: "Meshery",
          path: "/cloud-native-management/meshery",
          sepLine: true
        },
        {
          name: "MeshMap",
          path: "/cloud-native-management/meshmap",
        },
        // {
        //   name: "---",
        //   // path: "/cloud-native-management/meshmap",

        // },
        {
          name: "Catalog",
          path: "/cloud-native-management/catalog",
        },
        {
          name: "Docker Extension",
          path: "/docker-extension-meshery",
        },
        {
          name: "Playground",
          path: "/cloud-native-management/playground",
        },
      ],
      actionItems: [
        {
          actionName: "Pricing",
          actionLink: "/pricing",
        },
        {
          actionName: "Open source projects",
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
      name: "Integrations",
      path: "/cloud-native-management/meshery/integrations"
    },
    // {
    //   name: "Learn",
    //   path: "/learn",
    //   subItems: [
    //     {
    //       name: "Books",
    //       path: "/learn/service-mesh-books",
    //       sepLine: true
    //     },
    //     {
    //       name: "Forum",
    //       path: "https://discuss.layer5.io",
    //       sepLine: true,
    //       externalLink: true
    //     },
    //     {
    //       name: "Workshops",
    //       path: "/learn/service-mesh-workshops",
    //       sepLine: true
    //     },
    //     {
    //       name: "Learning Paths",
    //       path: "/learn/learning-paths",
    //       sepLine: true
    //     },
    //     {
    //       name: "Interactive Labs",
    //       path: "/learn/service-mesh-labs",
    //       sepLine: true
    //     },
    //   ],
    //   actionItems: [
    // {
    //   actionName: "Join the discussion",
    //   actionLink: "https://discuss.layer5.io",
    // },
    //     // {
    //     //   actionName: "Free service mesh training",
    //     //   actionLink: "/learn",
    //     // }
    //   ],
    //   // div1: {
    //   //   src: meshery,
    //   //   descr: "How I schooled my seniors"
    //   // },
    //   // div2: {
    //   //   src: img2,
    //   //   descr: "Service Mesh Istio patterns for multitenancy"
    //   // }
    // },
    {
      name: "Community",
      path: "/community",
      subItems: [
        {
          name: "Open Source Projects",
          path: "/projects",
          sepLine: true
        },
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
          name: "Newcomers",
          path: "/community/newcomers",
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
        {
          name: "Recognition Program",
          path: "https://badges.layer5.io",
          sepLine: true
        },
      ],
      actionItems: [
        // {
        //   actionName: "Newcomer's journey",
        //   actionLink: "/community/newcomers",
        // },
        {
          actionName: "Discussion forum",
          actionLink: "https://discuss.layer5.io",
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
      name: "Resources",
      path: "/resources",
      subItems: [
        {
          name: "Blog",
          path: "/blog",
          sepLine: true
        },
        {
          name: "Docs",
          path: "https://docs.layer5.io",
          sepLine: true
        },
        // {
        //   name: "News",
        //   path: "/news",
        //   sepLine: true
        // },
        {
          name: "Learn",
          path: "/learn",
          sepLine: true
        },
        {
          name: "Books",
          path: "/learn/service-mesh-books",

        },
        // {
        //   name: "Forum",
        //   path: "https://discuss.layer5.io",
        //   sepLine: true,
        //   externalLink: true
        // },
        {
          name: "Workshops",
          path: "/learn/service-mesh-workshops",
        },
        {
          name: "Learning Paths",
          path: "/learn/learning-paths",
        },
        {
          name: "Interactive Labs",
          path: "/learn/service-mesh-labs",
        },
      ],
      actionItems: [
        // {
        //   actionName: "Explore resource library",
        //   actionLink: "/resources",
        // },
        {
          actionName: "Layer5 in the news",
          actionLink: "/news",
        },
        {
          actionName: "Recent announcements",
          actionLink: "/blog/category/announcements"
        },
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
