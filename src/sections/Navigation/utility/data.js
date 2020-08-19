import img1 from "./img1.svg";
import img2 from "./layer5-and-istio.png";

const Data = {
    menuItems: [
        {
            name: "Home",
            path: "/",
            subItems: [
                {
                    name: "Home Default",
                    path: "/"
                },
                {
                    name: "Home Classic",
                    path: "/classic"
                },
                {
                    name: "Home Modern",
                    path: "/modern"
                },
                {
                    name: "Home Hosting",
                    path: "/hosting"
                }
            ],
            div1: {
                src: img1,
                des: "How I schooled my seniors"
            },
            div2: {
                src: img2,
                des: "Service Mesh Istio patterns for multilatency"
            }
        },
        {
            name: "Projects",
            path: "/#projects",
            subItems: [
                {
                    name: "Meshery",
                    path: "/projects/meshery"
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
                }
            ],
            div1: {
                src: img1,
                des: "How I schooled my seniors"
            },
            div2: {
                src: img2,
                des: "Service Mesh Istio patterns for multilatency"
            }
        },
        {
            name: "Learn",
            path: "/learn",
            subItems: [
                {
                    name: "Books",
                    path: "/books"
                },
                {
                    name: "Workshops",
                    path: "/workshops"
                }
            ],
            div1: {
                src: img1,
                des: "How I schooled my seniors"
            },
            div2: {
                src: img2,
                des: "Service Mesh Istio patterns for multilatency"
            }
        },
        {
            name: "Community",
            path: "/community",
            subItems: [
                {
                    name: "Meshmates",
                    path: "/community/meshmates"
                },
                {
                    name: "MeshMasters",
                    path: "/community/meshmasters"
                },
                {
                    name: "Events",
                    path: "/events"
                },
            ],
            div1: {
                src: img1,
                des: "How I schooled my seniors"
            },
            div2: {
                src: img2,
                des: "Service Mesh Istio patterns for multilatency"
            }
        },
        {
            name: "About",
            path: "/about",
            offset: "-50"
        },
        {
            name: "Blog",
            path: "/blog-grid",
            subItems: [
                {
                    name: "Blog Grid",
                    path: "/blog-grid"
                },
                {
                    name: "News",
                    path: "/news"
                }
            ],
            div1: {
                src: img1,
                des: "How I schooled my seniors"
            },
            div2: {
                src: img2,
                des: "Service Mesh Istio patterns for multilatency"
            }
        },
        // {
        //     name: "Contact",
        //     path: "/#contact",
        //     offset: "-50"
        // }
    ]
};
export default Data;
