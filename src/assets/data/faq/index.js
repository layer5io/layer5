
const data = {
    faqs: [
        {
            question: "Are Layer5's service mesh solutions open source?",
            category: "Layer5",
            answer: ["Yes, all of Layer5's projects are licensed under Apache v2."]
        },
        {
            question: "What value does a service mesh provide?",
            category: "Service Mesh",
            answer: ["Service meshes provide visibility, resiliency, traffic, and security control of distributed application services. Much value is promised here, particularly to the extent that much is given without the need to change your application code."],
            link: "",
            linktext: "",
        },
        // {
        //     question: "What is the difference between a service mesh management, control, and data plane?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "/blog/service-mesh-planes",
        //     linktext: "Blog: Understanding Service Mesh Planes",
        // },
        {
            question: "What if I deploy one service mesh, like Istio, then need to switch to another service mesh?",
            category: "Service Mesh",
            answer: ["Use of Meshery and the Service Mesh Interface specification help avoid switching costs between service meshes.",
                "The goal of Service Mesh Interface specifications are to provide an abstract, unified method of interacting with a service mesh.",
                "See if your service mesh adheres to SMI specifications at the link below."],
            link: "/projects/service-mesh-interface-conformance",
            linktext: "Service Mesh Interface",
        },
        {
            question: "What are service mesh standards and why do they matter?",
            category: "Service Mesh",
            answer: ["Three service mesh abstractions have arisen given the high number of service meshes available (see the Service Mesh Landscape)",
                "Servcie Mesh Performance (SMP) - A standard for capturing and characterizing service mesh performance.",
                "Service Mesh Interface (SMI) - A standard interface for using common service mesh functionality on Kubernetes.",
                "Multi-Vendor Service Mesh Interoperation (Hamlet) - A set of API standards for enabling service mesh federation."],
            link: "https://calcotestudios.com/talks/decks/slides-open-infrastructure-summit-2020-its-a-multi-mesh-world.html",
            linktext: "See Open Infrastructure Summit Presentation",
        },
        {
            question: "How does a service mesh help me? in my role?",
            category: "Service Mesh",
            answer: ["Operators don’t necessarily need to involve Developers to change how many times a service should retry before timing out or to run experiments (known as chaos engineering). They are empowered to affect service behavior independently.",
                "Customer Success (support) teams can handle the revocation of client access without involving Operators.",
                "Product Owners can use quota management to enforce price plan limitations for quantity-based consumption of particular services.",
                "Developers can redirect their internal stakeholders to a canary with beta functionality without involving Operators.",
                "Security Engineers can declaratively define authentication and authorization policies, enforced by the service mesh.",
                "Network Engineers are empowered with an extraordinarily high degree of application-level control formerly simply unavailable to them."],
            link: "",
            linktext: "",
        },
        // {
        //     question: "Why do I need a service mesh?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "",
        //     linktext: "",
        // },
        // {
        //     question: "Which service mesh is right for me?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "/service-mesh-landscape",
        //     linktext: "Service Mesh Landscape",
        // },
        {
            question: "What is a service mesh?",
            category: "Service Mesh",
            answer: ["Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology. At their core, service meshes provide:",
                "A services-first network; A developer-driven network;",
                "A network that is primarily concerned with alleviating application developers from building infrastructure concerns into their application code; A network that empowers operators with the ability to declaratively define network behavior, node identity, and traffic flow through policy;",
                "A network that enables service owners to control application logic without engaging developers to change its code.",
                "Value derived from the layer of tooling that service meshes provide is most evident in the land of microservices. The more services, the more value derived from the mesh. In subsequent chapters, I show how service meshes provide value outside of the use of microservices and containers and help modernize existing services (running on virtual or bare metal servers) as well."],
            link: "",
            linktext: "",
        },
        {
            question: "When should I adopting a service mesh?",
            category: "Service Mesh",
            answer: ["There are many service meshes from which to choose as well as a variety of deployment models. Which is right for you and your organization depends on where you are in your maturity curve (Cloud Native skill set), number of services, underlying infrastructure, and how centric technology is to your business. ",
                "So, should you deploy a service mesh? More and more the answer is “yes”. Service meshes are quickly becoming a ubiquitous layer in modern infrastructures."],
            link: "/deploy-a-service-mesh",
            linktext: "Factors When considering how strongly you need a service mesh",
        },
        {
            question: "Does Meshery manage service meshes?",
            category: "Meshery",
            answer: ["Yes, as the service management plane, Meshery, provisions and manage the lifecycle of service meshes."],
            link: "/service-mesh-management/meshery",
            linktext: "Run Meshery",
        },
        {
            question: "Why do I need to authenticate my social account to use Meshery?",
            category: "Meshery",
            answer: ["Create your account - avoid having to reconfigure Meshery each time you deploy it. When you use a social account to authenticate to Meshery, your environment configuration persists from session to session. Meshery sources from Mixer Prometheus adapter and uses Prometheus node-exporter.",
                "Rank your deployment - results of performance tests are anonymously collected using the Service Mesh Performance, so that Meshery may provide the public service of ranking the speed of your deployment against that of the rest of the world's users."],
            link: "",
            linktext: "",
        },
        {
            question: "Why use Meshery?",
            category: "Meshery",
            answer: ["Meshery is an open source, vendor neutral projects that facilitates testing across meshes.",
                "Other performance benchmark tools are not packaged into a mesh testing utility, butare only a load-generators unto their own."],
            link: "/projects/service-mesh-performance",
            linktext: "Service Mesh Performance"
        },
        {
            question: "I have already selected and am operating a service mesh. Should I use Meshery?",
            category: "Meshery",
            answer: ["As a management plane, Meshery provides value in a number of ways post-adoption of a service mesh. For example, Meshery analyzes your deployments in evaluation of service mesh best practices and patterns, highlighting where you might be deviating. Meshery's Other ways can be articulated in its set of features spanning:",
                "Lifecycle Management",
                "Configuration Management",
                "Performance Management",
                "Workload Management"],
            link: "/service-mesh-management/meshery",
            linktext: "Meshery"
        },
        {
            question: "Is Meshery open source?",
            category: "Meshery",
            answer: ["Yes, all of Layer5's projects are licensed under Apache v2, including Meshery."]
        },
        {
            question: "How do I land an internship with Layer5?",
            category: "internships",
            answer: ["To best position your candidancy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up - particularly members who are making significantly impactful contributions.",
            "Understand that internships are assigned as a recognition of work that you are already performing. They are not assigned in the hopes of you becoming a good contributor, but are awarded to support and reinforce efforts that you are already giving. Engage and make an impact on an area of a project. Show your passion for helping move the project forward, willingness to work hard, and capacity to learn.",
            "Recognize that there are many hundreds of contributors and relatively few maintainers and MeshMates. If you don't get an immediate response, don't lose heart. Be tenacious and find a piece of one of the projects to engaged within and advance."],
            link: "/community/meshmates",
            linktext: "Engage a MeshMate"
        },
        {
            question: "How often does Layer5 offer internships?",
            category: "internships",
            answer: ["Continuously. Layer5 has internships starting and stopping frequently. Some internships rigidly start and stop on particular dates, particularly those hosted in partnership with other organizations like the Linux Foundation, Google, MLH, Outreachy, and so on. Internships offered directly with Layer5 often start as a batch of candidantes show collective readiness.",
            "We work with individuals to align with timing of internships with other activities in their life. build it into something active and something to be maintained."],
            link: "https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+",
            linktext: "Grab a \"Help Wanted\" Issue"
        },
        {
            question: "What are characteristics of successful interns?",
            category: "internships",
            answer: ["Interns that thrive at Layer5 are those that espouse the Layer5 culture of paying it forward. These interns freely help other contributors, understanding that 1) they learn as they teach and assist others, 2) their projects are futhered with more contributors engage, and 3) any contributors path to maintainership is one of enabling others.",
            "Successful interns steward projects naturally as they become a resource to other contributors. These interns frequently become component and/or core maintainers.",
            "Successful interns internalize the fact that the real value of engaging and contributing to projects is the experience gained. They understand that the experience is theirs for the taking and that project maintainers and Layer5 employees want you to seize the opportunity. We consider your success our success and embrace the concept that your meaningful engagement is to all our benefits."],
            link: "/blog/tag/community",
            linktext: "Hear from other interns"
        },
        {
            question: "What are accomplishments of successful interns?",
            category: "internships",
            answer: ["Many Layer5 interns speak at large, public technology conferences like KubeCon, DockerCon, and so on. They write blog posts and share about their experience and learnings on social media. They engage with their whole self.",
            "Many interns become open source maintainers, and have ongoing responsibility to steward Layer5 and CNCF projects."]
        }
        
    ]

};
export default data;
