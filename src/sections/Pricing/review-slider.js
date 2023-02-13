import React from "react";
import styled from "styled-components";
import Customers from "../../reusecore/Blockquote/Blockquote-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Maxi from "../../collections/members/maximiliano-churichi/Maximiliano-Churichi.jpg";
import Otto from "../../collections/members/otto-van-der-schaaf/otto-van-der-schaaf.jpg";
import Nic from "../../collections/members/nicholas-jackson/nic-jackson.jpg";
import William from "./reviews/william-morgan.png";
import Ken from "./reviews/ken-owens.png";
import Deepak from "./reviews/deepak-dinesh.jpg";
import Kaur from "./reviews/kaur-kallas.jpg";


const settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 0.5,
  autoplay: true,
  autoplaySpeed: 1500,

  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 0.5,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      }
    }
  ]
};

const ReviewsWrapper = styled.div`
.slider{
  padding: 2rem 0 0.5rem;
  background: ${props => props.theme.secondaryLightColor};
  h2{
    text-align: center;
    padding: 0 0 2rem;
  }
    .type-one-wrapper{
      margin: 0 1rem;
    }
}

`;


const Reviews = () => {
  return (
    <ReviewsWrapper>
      <div className="slider">
        <h2>Hear what other users have to say...</h2>
        <Slider {...settings}>
          <Customers
            type="1"
            quote="The Meshery Extension transforms Docker Desktop into a powerful load generation utility, conveniently enabling me to deploy and configure any service mesh with a click of the button and invoke and control load-based performance tests from my desktop."
            person="Maximiliano Churichi"
            title="Software Engineer at HPE"
            image={Maxi}
          />
          <Customers
            type="2"
            quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
            person="Otto Van Der Schaaf"
            title="Principal Engineer at Red Hat"
            image={Otto}
          />
          <Customers
            type="2"
            quote="Meshery is the perfect tool for ensuring that your service mesh applications are optimally configured and performing well; it also gives you a fantastic visual insight into what can be a large amount of textual configuration"
            person="Nic Jackson"
            title="Principal Developer Advocate at HashiCorp"
            image={Nic}
          />
          <Customers
            type="1"
            quote="While speed is one of Linkerd's core competitive advantages, Linkerd provides much more than just an ultrafast data plane. We are pleased to support MeshMark's establishment of a higher order set of functional considerations that incorporate value into the performance equation."
            person="William Morgan"
            title="CEO of Buoyant and one of the creators of Linkerd"
            image={William}
          />
          <Customers
            type="2"
            quote="Performance measurement data rarely provides a clear and simple picture of how well our applications are performing from a business point of view, which are so often the key efficiency indicators that we really need"
            person="Ken Owens"
            title="Vice President Cyber Cloud Security Engineering at Fiserv"
            image={Ken}
          />
          <Customers
            type="1"
            quote="With a goal to bring workload identity and attestation to all service meshes, HPE Security Engineering uses the Meshery Docker Extension to deploy their service mesh of choice and test the performance of our SPIFFE and SPIRE-based identity solution."
            person="Maximiliano Churichi"
            title="Software Engineer at HPE"
            image={Maxi}
          />
          <Customers
            type="1"
            quote="The fact that MeshMap automatically renders our Kubernetes configuration is a game-changer for our team."
            person="Kaur Kallas"
            title="Software Architect at Entigo"
            image={Kaur}
          />
          <Customers
            type="3"
            quote="The Meshery Docker Extension offers an easy button to go from Docker Compose to Kubernetes to any Service Mesh."
            person="Nic Jackson"
            title="Principal Developer Advocate at HashiCorp"
            image={Nic}
          />
          <Customers
            type="1"
            quote="It was an intuitive experience to visually place and configure various components saving the time of going through 10 different YAML files."
            person="Deepak Dinesh"
            title="MeshMap User"
            image={Deepak}
          />
          <Customers
            type="2"
            quote="Performance measurement data rarely provides a clear and simple picture of how well our applications are performing from a business point of view, which are so often the key efficiency indicators that we really need."
            person="Ken Owens"
            title="Vice President Cyber Cloud Security Engineering at Fiserv"
            // image={}
          />
          <Customers
            type="1"
            quote="Many cloud native adopters have been put off from using service mesh due to the extra resource consumption and complexity that it can involve. We welcome MeshMark as an objective measure of that overhead, to help drive efficiency and make it easier for users to compare service mesh options."
            person="Liz Rice"
            title="Chief Open Source Officer, Isovalent and Emeritus Chair of the CNCF’s TOC"
            // image={}
          />
          <Customers
            type="2"
            quote="While speed is one of Linkerd's core competitive advantages, Linkerd provides much more than just an ultrafast data plane. We are pleased to support MeshMark's establishment of a higher order set of functional considerations that incorporate value into the performance equation."
            person="William Morgan"
            title="CEO of Buoyant and one of the creators of Linkerd"
            // image={}
          />
          <Customers
            type="1"
            quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
            person="Otto van der Schaaf"
            title="Principal Engineer at Red Hat"
            // image={}
          />
          <Customers
            type="1"
            quote="The precision by which performance measurements are generated and analyzed is a pinnacle focus of Nighthawk. Mesh performance characterization should be distilled from a set of value measurements, and that is where MeshMark compliments to create the ultimate comprehensive efficiency calculation."
            person="Otto van der Schaaf"
            title="Principal Engineer at Red Hat"
            // image={}
          />
          <Customers
            type="1"
            quote="Are my resources utilized as best as possible? Why am I not getting the SLO met with 4 resources when I only needed 1 resource without the service mesh? How can I improve my 99.9% latencies or can I map my service policy to utilization? Is the network a performance hog, or storage, or cache? MeshMark will model and provide an index in answer to such questions."
            person="Mrittika Ganguli"
            title="Principal Engineer & Director Cloud Native Network Pathfinding"
            // image={""}
          />
          <Customers
            type="3"
            quote="A sophisticated, but simply communicated value-performance index, MeshMark, redefines efficiency utilization, bringing business, application, and infrastructure KPIs under a single unit of measure."
            person="Lee Calcote"
            title="Founder and CEO of Layer5, and Co-Chair of the CNCF TAG Network"
            // image={""}
          />
        </Slider>
      </div>
    </ReviewsWrapper>
  );
};

export default Reviews;
