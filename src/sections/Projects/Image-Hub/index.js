import React from "react";



import ImageHubWrapper from "./imageHub.style";
import { Container } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VintageBox from "../../../reusecore/VintageBox";


import ImageHub from "../../../assets/images/image-hub/layer5-image-hub.png";
import imagehubslider1 from "./service-mesh-architecture-consul.png";
import imagehubslider2 from "./image-hub-on-consul-with-wasm-and-meshery.png";

const ImageHubPage = () => {
  return (
    <>
      <ImageHubWrapper>
        <div className="banner-background">
          <Container>
            <div className="banner">
              <img className="logo" src={ImageHub} alt="Image-Hub Logo" />
              <div className="title-text">
                <h4>Purpose and Overview</h4>
                <h1>Image Hub</h1>
              </div>
              <p>
                Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters written in Rust. These modules can be used to implement multi-tenancy or to implement per user rate limiting in your application's endpoints. This application was first demonstrated at DockerCon 2020.
              </p>
              <p>
                Watch the demo to learn more about how WebAssembly (WASM) modules are dynamically loadable and reloadable in service mesh data planes, enabling them to be more intelligent and responsive in real-time.
                This project examines how to let application infrastructure concerns melt off your service mesh workloads and have your infrastructure implement multi-tenancy on your behalf.
              </p>
              <p>
                Learn how to use Docker Desktop and Kubernetes as your development platforms of choice in combination with Meshery, the cloud native management plane, to easily deploy a service mesh. Using Consul and Envoy's latest capabilities, see how WASM can be used to move user authentication and authorization from your application to the infrastructure.
              </p>
              <iframe className="iframe-div" width="800px" height="400px" src="https://www.youtube.com/embed/5BrbbKZOctw" loading="lazy"
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
            </div>
          </Container>
        </div>
        <Container>
          <div className="showcase">
            <Slider
              className="slider"
              arrows={true}
              infinite={false}
              speed="500"
              slidesToScroll={1}
            >
              <div>
                <a href={imagehubslider1}>
                  <img src={imagehubslider1} alt="Consul Service Mesh Architecture" />
                </a>
              </div>
              <div>
                <a href={imagehubslider2}>
                  <img src={imagehubslider2} alt="Image Hub on Consul with WASM and Meshery" />
                </a>
              </div>
            </Slider>
            <p>Consul Service Mesh Architecture w/WebAssembly</p>
          </div>
          <div className="contributors">
            <h1>Contributors</h1>
            <p>This demo application has been enabled by experimental works of Nic Jackson of HashiCorp, and Kanishkar J, Lee Calcote, and other contributors of Layer5.
              Learn more about the Layer5 and HashiCorp Partnership.</p>
            <VintageBox right={true} vintageOne={true}>
              <Button primary title="Layer5 and HashiCorp" url="/partners"></Button>
              &nbsp;
              <Button secondary title="Discuss WASM Filters" url="https://discuss.layer5.io/c/webassembly-filters/11" external={true}></Button>
            </VintageBox>

            <p><br />
              See the <a href="https://github.com/layer5io/wasm-filters">WASM Filters repository</a>.
            </p>
          </div>
        </Container>
      </ImageHubWrapper>
    </>
  );
};

export default ImageHubPage;