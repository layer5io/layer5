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
            offset: "-50"
        },
        {
            name: "Learn",
            path: "/learn",
            offset: "-50"
        },
        {
            name: "Community",
            path: "/community",
            offset: "-50"
        },
        {
            name: "Careers",
            path: "/careers",
            offset: "-50"
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
