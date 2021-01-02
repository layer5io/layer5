import img1 from "./img1.svg";
import img2 from "./layer5-and-istio.png";
import meshmateLogo from "../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../assets/images/community/community-green.svg";

const Data = {
    menuItems: [
        {
            // name: "Home",
            // path: "/",
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
                    name: "Meshery",
                    path: "/meshery",
                    sepLine: true
                },
                {
                    name: "Service Mesh Landscape",
                    path: "/landscape",
                    sepLine: true
                },
                {
                    name: "Service Mesh Performance",
                    path: "/projects/service-mesh-performance",
                    sepLine: true
                },
                {
                    name: "Service Mesh Interface",
                    path: "/projects/service-mesh-interface-conformance",
                    sepLine: true
                },
                {
                    name: "Image Hub",
                    path: "/projects/image-hub",
                    sepLine: true
                },
                {
                    name: "Distributed Performance",
                    path: "/projects/distributed-performance-management-of-service-meshes",
                    sepLine: true
                }
            ],
            actionName: "Projects",
            actionLink: "/projects",
            div1: {
                src: img1,
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
                    path: "/learn/books",
                    sepLine: true
                },
                {
                    name: "Workshops",
                    path: "/learn/workshops",
                    sepLine: true
                }
            ],
            actionName: "Learn",
            actionLink: "/learn",
            div1: {
                src: img1,
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
                    name: "Join!",
                    path: "/community",
                    sepLine: true
                },
                {
                    name: "Members",
                    path: "/community/members",
                    sepLine: true
                },
                {
                    name: "Meshmates",
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
                {
                    name: "Calendar",
                    path: "/community/calendar",
                    sepLine: true
                },

            ],
            actionName: "Meet the community",
            actionLink: "/community",
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
            actionName: "Blogs",
            actionLink: "/blog",
            // div1: {
            //     src: img1,
            //     descr: "How I schooled my seniors"
            // },
            // div2: {
            //     src: img2,
            //     descr: "Service Mesh Istio patterns for multilatency"
            // }
        },
        {
            name: "About",
            path: "/company/about",
            offset: "-50"
        },
        // {
        //     name: "Contact",
        //     path: "/#contact",
        //     offset: "-50"
        // }
    ]
};
export default Data;
