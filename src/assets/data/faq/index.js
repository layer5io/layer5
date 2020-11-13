
const data = {
    faqs: [
        {
            title: "Does Meshery manage service meshes?",
            content: "Yes, as the service management plane, Meshery, provisions and manage the lifecycle of service meshes."
        },
        {
            title: "Why do I need to authenticate my social account to use Meshery?",
            content: "Create your account - avoid having to reconfigure Meshery each time you deploy it. When you use a social account to authenticate to Meshery, your environment configuration persists from session to session. Meshery sources from Mixer Prometheus adapter and uses Prometheus node-exporter.",
            content_2: "Rank your deployment - results of performance tests are anonymously collected using the Service Mesh Performance, so that Meshery may provide the public service of ranking the speed of your deployment against that of the rest of the world's users."
        },
        {
            title: "Why use Meshery?",
            content: "Meshery is an open source, vendor neutral projects that facilitates testing across meshes.",
            content_2: "Other performance benchmark tools are not packaged into a mesh testing utility, butare only a load-generators unto their own." 
        }
    ]
    
};
export default data;
  