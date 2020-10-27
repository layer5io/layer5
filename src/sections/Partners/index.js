import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Button from "../../reusecore/Button";

import partner1 from "../../images/partners/University_of_Texas_at_Austin_seal.png";
import partner2 from "../../images/partners/gsoc.svg";
import partner3 from "../../images/partners/UEM_Logo.jpg";
import partner4 from "../../images/partners/citrix.svg";
import partner5 from "../../images/partners/cncf-stacked-color.svg";
import partner6 from "../../images/partners/hashicorp_vertical_black.svg";
import partner7 from "../../images/partners/hpe_side_black.svg";
import partner8 from "../../images/partners/microsft.svg";
import partner9 from "../../images/partners/redhat.svg";
import partner10 from "../../images/partners/smi1.png";
import partner11 from "../../images/partners/forklift.svg";

import { MdAccountBox, MdMail } from "react-icons/md";

import PartnerWrapper from "./partner.style";

const Partner = () => {
    return (
        <PartnerWrapper>
            <PageHeader title="Laye5 Partner Program"
                path="Partners"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} lg={12}>
                        <br />
                        <div leftAlign={true} className="container">
                            <div className="card-content">
                                <Button><a href="mailto:partners@layer5.io"><h3>BECOME A PARTNER</h3></a></Button>
                            </div>
                            <p>Layer5 is dedicated to partnering with leading educational institutions, technology vendors, solution providers and industry experts to drive the adoption of cloud native technologies focused on the evolution of how developers write modern applications, how operators run infrastructure and how product owners manage service offerings.</p>
                            <p>Layer5, the service mesh community, established the Layer5 Partner Program to develop an ecosystem to advance higher learning of cloud native networking and to enable service providers to accelerate customers’ digital transformations, helping them move into the new era of DevOps and cloud native applications.</p>
                        </div>
                    </Col>
                </Row>
                <h1 className="heading">Academic Partners</h1>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner1} alt="The University of Texas at Austin" width="52px" height="52px" />
                            <p className="para"><a href="http://www.ece.utexas.edu/speakers/lee-calcote">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>The University of Texas at Austin</h1>
                            <div>
                                In partnership with faculty of the Cockrell School of Engineering at The University of Texas at Austin, graduate students engage in research on the affects of hardware architectures and the performance of software-based networking.
                            Ph.D. candidates leverage Meshery in research and analysis of affect and overhead service mesh architectures have on when running distributed systems. Learn more about <a href="http://www.ece.utexas.edu/speakers/lee-calcote">our collaborative research</a>.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>Google Summer of Code</h1>
                            <div>
                                Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school. Learn more about<a href="https://layer5.io/gsoc/2020">our mentoring</a>.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner2} alt="Google Summer of Code" width="52px" height="52px" />
                            <p className="para"><a href="https://layer5.io/gsoc/2020">More about our partner</a>.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner3} alt="University of Engineering and Management Jaipur" width="52px" height="52px" />
                            <p className="para"><a href="https://uem.edu.in/blog/what-is-open-source/">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>University of Engineering & Management Jaipur</h1>
                            <div>
                                We have officially partnered with the University of Engineering & Management (UEM), Jaipur. We thank the faculty of UEM Jaipur for partnering with us. As part of the partnership program we have a wide variety of interns from the univeristy participating in our open source projects. The interns have the opportunity to work on a variety of cloud native technologies.
                            Based on the area of their individual interest they can choose the technologies they want to learn or sharpen their skills. To see the participating interns please checkout<a href="https://meshery.io/community/">our community members</a> page. .
                            </div>
                        </div>
                    </Col>
                </Row>
                <h1 className="heading">Technology Partners</h1>
                <Row>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>Citrix</h1>
                            <div>
                                Citrix ADC is an application delivery and load balancing solution that provides a high-quality user experience for your web, traditional, and cloud-native applications regardless of where they are hosted. It comes in a wide variety of form factors and deployment options without locking you into a single cloud. Pooled capacity licensing enables the movement of capacity among cloud deployments.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner4} alt="Citrix" width="52px" height="52px" />
                            <p className="para"><a href="https://www.citrix.com/products/citrix-adc/">More about our partner</a>.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner5} alt="Cloud Native Computing Foundation (CNCF)" width="52px" height="52px" />
                            <p className="para"><a href="https://landscape.cncf.io/category=cncf-members&format=logo-mode&grouping=category&selected=layer5-member&embed=yes">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div leftAlign={true} className="container">
                            <h1>Cloud Native Computing Foundation (CNCF)</h1>
                            <div>
                                The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. CNCF brings together the world’s top developers, end users, and vendors and runs the largest open source developer conferences. CNCF is part of the nonprofit Linux Foundation.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner6} alt="HashiCorp" width="100%" height="52px" />
                            <p className="para"><a href="https://www.hashicorp.com/integrations/layer5-io/consul">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div leftAlign={true} className="container">
                            <h1>HashiCorp</h1>
                            <div>
                                HashiCorp is the leader in cloud infrastructure automation software. Our software stack enables the provisioning, securing, connecting, and running of apps and the infrastructure to support them. HashiCorp unlocks the cloud operating model for every business and enable their digital transformation strategies to succeed.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>HPE</h1>
                            <div>
                                HPE GreenLake is an IT-as-a-service offering that brings the cloud experience to your on-premises infrastructure and unifies your edges, clouds, and data centers.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner7} alt="HPE" width="105%" height="52px" />
                            <p className="para"><a href="https://www.hpe.com/">More about our partner</a>.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAACcCAMAAADS8jl7AAAAdVBMVEX///9NbKxCZKhQb67x9Pk/YqdLaqtHaKq4wdpFZqlXdLA+YafAyeD3+fxDZamAk8DW2+nM1OXHz+Pf5O+Vpcvr7vXl6fKGmMKsuNVngbfW3et8kcCerc9bd7KNn8emtNNziryzvtluhroyWqQrVqJhfLSaqc2kGUmLAAAMgUlEQVR4nO2dCbuqKhSGLyogkZbNZYPVaf//n3h1B46AQLXdnsN3h+c5nUp8XUyLD/rvPycnJycnJ6eRKgqGLsH4td4NXYLxK4iHLsH4FdzDoYswegX0NHQRRq+AwunQZRi7AohcIL6ogAK6GLoQI1fOEO+HLsTIlTMENBm6FONWAAFAt6FLMW4VcQjofOhijFpFHAKUDV2MUes7Dl0gvqQnQ5wOXY4x68kQ0OXQBRmxGEM8G7ogI9Z3n5ILukC0FotDQLZDl2S84gwB3QxdlNGqZEjOQxdltCoZIm89dFnGqpIhIKuhyzJW8X45D0TilkntVMUhIF9DF2akqjF0gWipGkMQX4YuzThVtYeFoqGLM0rV4xB4LhBt1IhDhIcuzijViEPgOQeThZoM0cS1iOZqMgTwOnSBRqgWQwCGLtAI1Rzb5IHorHTGaschegxdovGpU5eps9KZqsMQTYYu0ujUYeisdMbqMnRWOlO1+2XgrHTG6sahC0RTCRg6B5OhRAydlc5MgvYwD8TD0MUalURxCHA2dLFGJSFDZ6XTE6uuYobO06mjhOVnxAyB5wKxXxlLLUgYOitdv9Z/OENRv1y0iM7B1KcVVcehs9L1KkCwhyEiLhDVunh9DJ2Vrk8+6GWIoHMwqTSF/QydlU6tB9JgiLALRLmSnBvsGdvkio/DFvNXK8VAIw7zQHTGEZk2BTYNhs5KJ9eZaDK08HRu5jJ9fAtRtGWafX49KMAIaLWHNla6852Kdf94Lx8h/NQPuAwuHtBlCHzTL19hyTeRFzuoiEnxDp9d6gcOPfIbF1IzNLbSfYphQvxvKYy6P8gwhE2GyvYQmQbixxg+i4mo/C0/yPCBDBgaW+k+xpBvs5a/5ecYloXRY2h6GNiZek+VX8D+TF/rU34VwxS3GCrbQ2MHUxI+NUUMoT9lr7y27q/DEGD0rU8zXPKw02VoeyodYBDf5MTTYXiaPOV/mOGWGDIE0M5Kh36cYTn8+fAMNfBQm6G6PbR2MA3A8Id0jMvw0mVoaaX7axlGtSqqzRBbudz/WoZh1fjpM7Sz0v21DCeoBKPdp1ha6f5Whkkt5gwYWlnpfjlD6847q8LQiKGNlY4x7N+pEc2v5+zkY+Q/0tVusRbf3PxdDKPDJT0REscEP2bXpSnKZb3pM2FoY6XTZJjMAPVI/ubiX4xjSE/badMdkM5y8cePZi2lVdEWKXtNcbmzT+NiOpN/E0KY0MnKrI6V42tjhhan0ukwDC4AdnIUCMN4f60tKcIir1rWINxSbeQV0u9XiHTbZvKApH01QjODAGn2wEYMLU6l02gPQ+xJLoc9ci6DMUaSdz1LVmPIvk6SrwtSKvwmTPVTSsfGMzBjaG6l62UY3FRXRrRcD3sTwwOQpeWA99BcSS9TQzYMwd3UwdTHcD2R3tK34nIp5z0ME3EQPoUneitm1yYsgzF2IWMrXQ/D6FQhRARCz8v/I6i6zzczTKpmA2EPxpjE+f8qiEALot+6tlkcotgwEHv6lLRsWGKYXRaH5fIwD48ZoPz1iuGdQlj1BbClP1oMa0MSL06v8+V6vUx2GST8+WBfozov2vvlzRgaW+nUDBf8nmJ/Vy98dDj6z666YpgUujCIJGmr+ricYVBO0Aiod/nrrxIi0Tir/tZqfkwZAmrmYFLX5RP7WyhoIpKU4jrD54saY2w5wxkPY3puDarX+zKh2mvqOLRRGTM0tNIp43DOD6EVjyo2Z4jfybCc40LBPWQMYn9rNWv3gsYMETIKRCXDM5bcLdcmvb+R4YNdTtwx7vnf9ozf1p3e15ghIEYOJiVDVpVV66XT5qLsKwz5Z7F4aSgokagDcdWe41gwRNBkgq5qDwO2YGWwVPMKQz7Xlu1bmrLvVrdWAejInKGZg0nFcMOe6M8w5HVQPunnvbbS1LHrTkwtGBpZ6VR1mTP09N08LzC8sDUkeRb0yj6oXDkS4LBhaHDPPQyff2mQDnqBIR/VIekHA43KPBVwsopDeTE60mkPDTa02TNcs7yZChBrMVVnTO0F03srhgZWOuUYm/mmAH7otg72DMsMuKLx5Skt+ZacuSitYBeH+qsjSoblMAFjzW7FnuGONYeqITT/dvkKZirKMlkxNLBUKRkeqqdK96FOhbZneGbPS3U65oZx9mROwfVdRcOMoX4gqnMOWS3z5cWnr+mmp1LbM2RtndLyEuGeQb/YVmnHUP9UOnXOYQnrSUFEIPXTy1yjtpkzZG2v+nQF1slhyXQvQPXivspQ20rXkz+8do8ZiyEBt4tkEGfPkOVN1UlkNvmU/VijYHz9AkPtuUXfWsBRmJvHMfVXoimZPUNWTbEy/7lnDCUVXsbCkqGula53bTT0OnP4p4iXdRPz9gxZd6GeDLNxuKSWicbXrzDUtdL1r42uV1RCEdPOzNyeoafDMFM+8YewNXyBoWYg6qzRr48IxsLmmrYb9w/XZR6HwolKIlu2s2ZYX0lTSNMrcrikiJLuyAG2ptIf7lP2qgGQcHz9GkM9B5O2Z+m/6HCdgbiwwdSvQt+Vgz3p5DcYaKFLcCNdPbZnqGel02f4LOh8t53Q2lJyaxf/C2PsZxRh5bodH2OLKvxZ0mq/xFArEA0ZFoqWl0k19m5mfO0ZbnmXq5gJrRmmWJBlDoikRwHozhn+gYLmSC2dQLT0cB4yPpxttu/2DFlORvlDTwdFbuciDkPs0WzBH8tmetxTagRSx8Fk7YM9860LjQXtMrOi+KSYITcnqMZkZSK7OzCtbQOohGLvFrafyXK6uvn6IDU8nRZ1mWnP1+/rN80Z3hUfFDPc8AGiYlmSrxz73freHV8jQic7iT0n2ky/iojE/SA1AtHej81RNPJsZRwqWjXJWgBbcVLM9COechDkJU7N1rAA+NUXQXoR2f8Dr/ZxyMcSjWQez0arHCsShtz+Ky8zr+6C9aKkHoYIQ+8810u9B8u+iMS9Vjr7OIw4w3occuOWqhWRMOSE5K4rvlbidSnXEp0Yopnp3sU8Ivc+9LCwa+/xBKjjMFA+Ss6w0UnyRWJVIl22Rs/t8FhSZg5ZkPkqPXeY0Gxqd+5UsAxXeUQ23JU9D5UXXMEw9FWDozLkGlHBF9oVLbGM4RdP3UimKjylINiq/WwH8m54v3vx4K7l9Lz3aTMi+06lU9XlKaUreSiWA7LGqzxLqnBOyRgGvOBUuFyyYh8T7EsMiokTppPje07H/Y5IWEVkn5VOFYf5eIFMZJWS+1paTS5f0Yjl15X6vr64PU6ULtmVxrpuGB4Jgb7hDpZe5RH5ANDLe+2+U+mUcQiL+zmFoliMeAPf2s5R+njlhyPIPZw+bxK7y0HH8nfQs25ZvHj7mTObWETe1bs6gDoOv6MCdR5xdPW5G7DVeJXLQgjWJrXr661aEpYzLDOAiG4bHcuh2uAhOLs1ET7ltylahsLW/cr2e23LhnPL9oTV2iI+9s/HW/55uqxmnWe/vKW4HebncpThTVZhMk+m1+2JeFTL036pfu2cbBN2wfU0q1Icv+jXi1aQ7QErGbI/w1rY1udPOQU62d+y2wPTyv2PurdUt6ESr9gSQIq+QnNvxaz6ufN8oPxIt9sM0NoCLf1FR+xpnRHUmYMinP9T6/WRqAe9CLN0unt8to0JB8KtjO8vQqjHMLwrt+3k4zFhxZqJVnm195qt5BulhI9sOGkxDI4Eyiki+JDMbFPBp/T3PF6puGyIAFXnuw4+o7Vkp7bI+C1gmHdJeXMunEWifEQrn87t4rj9gW6fIj3nbZ3Sbk4aEa+9Z6WpMEb+m5VXtPgkc3QUNcYTq3Pe1/qaFlvmEEC1+4FeqhyQrb+KVcDvHePFlnGPQr8aRob37ytB+fl+y3PeE9Ua3nwWjL76Zv7rTLVd0ljIo/5sqrpoJJfg3Yfddu9jdlInnGTHpH9ANj+m+0kebJP9bBU2E1Ea5yxF+bQ1HwAUqCEFt5XWiGba2TpuKwxpHoBvH3VGQbBZHg6HjTqb0/7MCydSBcvFNAyni412GiGY6e2uVQrFdLK1zP38FVqQl0Ixb6Xu+4vxCRx/maKt+SIyE47habv4x/k9lWCLUCzsqbfdvx6AlaKzYQedAzydXQA2lfjaoVgEYLZzv2wm0EoxwaoB9LzTygWgTIeT7FAezg9DmMrW8J2eOnrSJWOEvfi00pgo/PNaPoQVGhFK0qsLQE1d2qGYByA5fbkANNHmBuupEopnoQtAY+2YIwlDcjpqenCcWipSYoSCrQvAVxSeju9PYzk5OTk5OTk5vV3/AwVKq/80p5xJAAAAAElFTkSuQmCC" alt="Istio" width="105%" height="52px" />
                            <p className="para"><a href="https://istio.io/about/community/partners/">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div leftAlign={true} className="container">
                            <h1>Istio</h1>
                            <div>
                                Istio is an open source independent service mesh that provides the fundamentals you need to successfully run a distributed microservice architecture. Istio reduces complexity of managing microservice deployments by providing a uniform way to secure, connect, and monitor microservices.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>Microsoft</h1>
                            <div>
                                Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It’s the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner8} alt="Microsoft" width="100%" height="52px" />
                            <p className="para"><a href="https://www.microsoft.com/">More about our partner</a>.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner9} alt="Red Hat" width="100%" height="52px" />
                            <p className="para"><a href="https://www.redhat.com/">More about our partner</a>.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} lg={10}>
                        <div leftAlign={true} className="container">
                            <h1>Red Hat</h1>
                            <div>
                                The world’s leading provider of enterprise open source solutions, using a community-powered approach to deliver high-performing Linux, cloud, container, and Kubernetes technologies.
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={10} lg={10}>
                        <div rightAlign={true} className="container">
                            <h1>Service Mesh Interface</h1>
                            <div>
                                The Service Mesh Interface (SMI) is a specification for service meshes that run on Kubernetes. It defines a common standard that can be implemented by a variety of providers. This allows for both standardization for end-users and innovation by providers of Service Mesh Technology. It enables flexibility and interoperability.
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={2} lg={2}>
                        <div className="img1">
                            <img src={partner10} alt="Service Mesh Interface" width="100%" height="52px" />
                            <p className="para"><a href="https://smi-spec.io/">More about our partner</a>.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} lg={12}>
                        <div className="container">
                            <form>
                                <h1 className="heading">Stay meshy and subscribe</h1>
                                <div className="subscribe-from">
                                    <div className="forklift-section">
                                        <img src={partner11} className="img2" />
                                    </div>
                                    <div>
                                        <i className="icon1"><MdAccountBox /></i>
                                        <input type="text" placeholder="First Name" className="input-text" value="" name="FNAME" />
                                        <input type="text" placeholder="Last Name" className="input-text" value="" name="LNAME" />
                                    </div>
                                    <div>
                                        <i className="icon1"><MdMail /></i>
                                        <input type="email" placeholder="Email Address" className="input-email" value="" name="EMAIL" />
                                    </div>
                                    <div className="btn-section">
                                        <h3><Button type="submit" className="btn">SUBSCRIBE</Button></h3>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </PartnerWrapper >
    );
};


export default Partner;