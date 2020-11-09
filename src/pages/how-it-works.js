import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Works from "../sections/How-it-works";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";
import { Container } from "../reusecore/Layout";

const Howitworks = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="How the service mesh management plane, Meshery works" />
            <Navigation />
            <Container>
                <br></br>
                <Works
                    title="Meshery, the service mesh management plane"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id. Purus faucibus ornare suspendisse sed. Odio ut sem nulla pharetra diam sit amet. Faucibus scelerisque eleifend donec pretium vulputate. Eget duis at tellus at urna. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nunc sed augue lacus viverra vitae congue eu consequat. Semper eget duis at tellus at urna condimentum. Cursus metus aliquam eleifend mi in nulla posuere. Quam adipiscing vitae proin sagittis. Eget sit amet tellus cras adipiscing enim eu turpis."
                    features={[
                        {
                            title: "Lifecycle Management",
                            description:
                  "Iaculis eu non diam phasellus vestibulum. Quis vel eros donec ac odio. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elit ut aliquam purus sit amet luctus venenatis lectus. Ornare suspendisse sed nisi lacus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Eu ultrices vitae auctor eu augue ut lectus. Massa sed elementum tempus egestas sed. Vel eros donec ac odio tempor orci dapibus. Tellus id interdum velit laoreet id. Turpis egestas sed tempus urna et pharetra pharetra massa. Gravida rutrum quisque non tellus orci ac auctor augue. Neque viverra justo nec ultrices dui sapien eget mi proin.",
                            logos: [
                                {
                                    alt: "Consul",
                                    url: require("../images/how-it-works/consul.svg"),
                                },
                                {
                                    alt: "Istio",
                                    url: require("../images/how-it-works/istio.svg"),
                                },
                                {
                                    alt: "Linkerd",
                                    url: require("../images/how-it-works/linkerd.svg"),
                                },
                                {
                                    alt: "Octarine",
                                    url: require("../images/how-it-works/octarine.svg"),
                                },
                                {
                                    alt: "Network Service Mesh",
                                    url: require("../images/how-it-works/nsm.svg"),
                                },
                                {
                                    alt: "Traefik Mesh",
                                    url: require("../images/how-it-works/maesh.svg"),
                                },
                                {
                                    alt: "Citrix Service Mesh",
                                    url: require("../images/how-it-works/citrix.svg"),
                                },
                                {
                                    alt: "NGINX Service Mesh",
                                    url: require("../images/how-it-works/nginx-sm.svg"),
                                },
                                {
                                    alt: "VMware Service Mesh",
                                    url: require("../images/how-it-works/tanzu.svg"),
                                },
                                {
                                    alt: "Open Service Mesh",
                                    url: require("../images/how-it-works/osm.svg"),
                                },
                            ],
                        },
                        {
                            title: "Performance Management",
                            description:
                  "Eget nunc lobortis mattis aliquam faucibus purus in. Purus sit amet volutpat consequat mauris nunc. Dignissim suspendisse in est ante in nibh. Dictumst vestibulum rhoncus est pellentesque. At in tellus integer feugiat scelerisque varius morbi enim. Quis enim lobortis scelerisque fermentum. Amet purus gravida quis blandit turpis. Eget est lorem ipsum dolor sit amet consectetur adipiscing. Eget mi proin sed libero enim sed faucibus turpis in. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Arcu vitae elementum curabitur vitae. In hac habitasse platea dictumst quisque sagittis purus sit amet. Viverra aliquet eget sit amet tellus. Pharetra pharetra massa massa ultricies mi quis. Faucibus purus in massa tempor nec.",
                            logos: [
                                {
                                    alt: "Consul",
                                    url: require("../images/how-it-works/consul.svg"),
                                },
                                {
                                    alt: "Istio",
                                    url: require("../images/how-it-works/istio.svg"),
                                },
                                {
                                    alt: "Linkerd",
                                    url: require("../images/how-it-works/linkerd.svg"),
                                },
                                {
                                    alt: "Octarine",
                                    url: require("../images/how-it-works/octarine.svg"),
                                },
                                {
                                    alt: "Network Service Mesh",
                                    url: require("../images/how-it-works/nsm.svg"),
                                },
                                {
                                    alt: "Traefik Mesh",
                                    url: require("../images/how-it-works/maesh.svg"),
                                },
                                {
                                    alt: "Citrix Service Mesh",
                                    url: require("../images/how-it-works/citrix.svg"),
                                },
                                {
                                    alt: "NGINX Service Mesh",
                                    url: require("../images/how-it-works/nginx-sm.svg"),
                                },
                                {
                                    alt: "VMware Service Mesh",
                                    url: require("../images/how-it-works/tanzu.svg"),
                                },
                                {
                                    alt: "Open Service Mesh",
                                    url: require("../images/how-it-works/osm.svg"),
                                },
                            ],
                        },
                        {
                            title: "Configuration Management",
                            description:
                  "Vitae justo eget magna fermentum iaculis. Tincidunt dui ut ornare lectus sit amet est. Aliquam eleifend mi in nulla. Tincidunt lobortis feugiat vivamus at. Habitant morbi tristique senectus et netus et malesuada fames ac. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Vulputate ut pharetra sit amet aliquam. Faucibus in ornare quam viverra. Eget velit aliquet sagittis id. Risus at ultrices mi tempus imperdiet. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Habitant morbi tristique senectus et netus et. Nunc eget lorem dolor sed viverra ipsum. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Convallis tellus id interdum velit laoreet id donec. At tempor commodo ullamcorper a.",
                        },
                    ]}/>
            </Container>
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default Howitworks;
