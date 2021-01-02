
const data = {
    faqs: [
        {
            question: "",
            category: "",
            answer: "",
            answer_2: "",
            answer_3: "",
            answer_4: "",
            answer_5: "",
            link: "",
            linktext: "",
        },
        {
            question: "",
            category: "",
            answer: "",
            answer_2: "",
            answer_3: "",
            answer_4: "",
            answer_5: "",
            link: "",
            linktext: "",
        },
        {
            question: "",
            category: "",
            answer: "",
            answer_2: "",
            answer_3: "",
            answer_4: "",
            answer_5: "",
            link: "",
            linktext: "",
        },
        {
            question: "Which service mesh is right for me?",
            category: "Service Mesh",
            answer: "",
            answer_2: "",
            answer_3: "",
            answer_4: "",
            answer_5: "",
            link: "/landscape",
            linktext: "Service Mesh Landscape",
        },
        {
            question: "What is a service mesh?",
            category: "Service Mesh",
            answer: "Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology. At their core, service meshes provide:",
            answer_2: "A services-first network; A developer-driven network;",
            answer_3: "A network that is primarily concerned with alleviating application developers from building infrastructure concerns into their application code; A network that empowers operators with the ability to declaratively define network behavior, node identity, and traffic flow through policy;",
            answer_4: "A network that enables service owners to control application logic without engaging developers to change its code.",
            answer_5: "Value derived from the layer of tooling that service meshes provide is most evident in the land of microservices. The more services, the more value derived from the mesh. In subsequent chapters, I show how service meshes provide value outside of the use of microservices and containers and help modernize existing services (running on virtual or bare metal servers) as well.",
            link: "",
            linktext: "",
        },
        {
            question: "When should I adopting a service mesh?",
            category: "Service Mesh",
            answer: "There are many service meshes from which to choose as well as a variety of deployment models. Which is right for you and your organization depends on where you are in your maturity curve (Cloud Native skill set), number of services, underlying infrastructure, and how centric technology is to your business. ",
            answer_2: "So, should you deploy a service mesh? More and more the answer is “yes”. Service meshes are quickly becoming a ubiquitous layer in modern infrastructures.",
            answer_3: "",
            answer_4: "",
            answer_5: "",
            link: "/when-should-I-use-a-service-mesh",
            linktext: "Factors When considering how strongly you need a service mesh",
        },
        {
            question: "Does Meshery manage service meshes?",
            category: "Meshery",
            answer: "Yes, as the service management plane, Meshery, provisions and manage the lifecycle of service meshes.",
            link: "",
            linktext: "",
        },
        {
            question: "Why do I need to authenticate my social account to use Meshery?",
            category: "Meshery",
            answer: "Create your account - avoid having to reconfigure Meshery each time you deploy it. When you use a social account to authenticate to Meshery, your environment configuration persists from session to session. Meshery sources from Mixer Prometheus adapter and uses Prometheus node-exporter.",
            answer_2: "Rank your deployment - results of performance tests are anonymously collected using the Service Mesh Performance, so that Meshery may provide the public service of ranking the speed of your deployment against that of the rest of the world's users.",
            link: "",
            linktext: "",
        },
        {
            question: "Why use Meshery?",
            category: "Meshery",
            answer: "Meshery is an open source, vendor neutral projects that facilitates testing across meshes.",
            answer_2: "Other performance benchmark tools are not packaged into a mesh testing utility, butare only a load-generators unto their own." ,
            link: "/projects/service-mesh-performance",
            linktext: "Service Mesh Performance"
        }
    ]
    
};
export default data;
  