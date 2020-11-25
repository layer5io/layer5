import img1 from "./img1.svg";
import img2 from "./layer5-and-istio.png";
import meshmateLogo from "../../../assets/images/community/meshmate-stack.svg";
import communityGreen from "../../../assets/images/community/community-green.svg";

const Data = {
    menuItems: [
        {
            name: "Home",
            path: "/",
            subItems: [
                {
                    name: "Current Home",
                    path: "/"
                },
                {
                    name: "Temp Example: Classic",
                    path: "/classic"
                },
                {
                    name: "Temp Example: Modern",
                    path: "/modern"
                },
                {
                    name: "Temp Example: Hosting",
                    path: "/hosting"
                }
            ],
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
            name: "Projects",
            path: "/projects",
            subItems: [
                {
                    name: "Meshery",
                    path: "/meshery"
                },
                {
                    name: "Landscape",
                    path: "/landscape"
                },
                {
                    name: "Service Mesh Performance",
                    path: "/projects/service-mesh-performance"
                },
                {
                    name: "Service Mesh Interface",
                    path: "/projects/service-mesh-interface"
                },
                {
                    name: "Image Hub",
                    path: "/projects/image-hub"
                },
                {
                    name: "Distributed Performance",
                    path: "/projects/distributed-performance-management-of-service-meshes"
                }
            ],
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
                    path: "/learn/books"
                },
                {
                    name: "Workshops",
                    path: "/learn/workshops"
                }
            ],
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
                    path: "/community"
                },
                {
                    name: "Members",
                    path: "/community/members"
                },
                {
                    name: "Meshmates",
                    path: "/community/meshmates"
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
                    path: "/community/events"
                },

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
                    path: "/blog"
                },
                {
                    name: "News",
                    path: "/news"
                }
            ],
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
            name: "About",
            path: "/about",
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
