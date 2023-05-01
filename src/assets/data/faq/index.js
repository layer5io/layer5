
const data = {
  faqs: [

    //
    // LAYER5
    //

    {
      question: "Are Layer5's solutions open source?",
      category: "Layer5",
      answer: [
        "Yes, all of Layer5's projects are licensed under Apache v2.",
        "Layer5 also offers extensions to the Meshery project in which Enterprise-centric functionality is commercially offered and supported.",
      ],
    },
    {
      question: "As a member of one of Layer5's GitHub organizations, What is expected of me?",
      category: "Layer5",
      answer: [
        "As a member of one of Layer5's GitHub organizations, your user account is entitled with triage level permissions across all repositories in the org. You are expected to engage where the topic strikes your interest, triaging (assigning, clarifying, labeling, qualifying) any issue you feel comfortable doing so. You are encouraged to review any open pull request and offer feedback to or ask questions to the author.",
        "Layer5 has a number of GitHub organziations in which it's projects are advanced. See the repository overview below."
      ],
      link: "https://docs.google.com/document/d/1brtiJhdzal_O6NBZU_JQXiBff2InNtmgL_G1JgAiZtk/edit",
      linktext: "Layer5 Repository Overview",
    },
    {
      question: "As a community member, what can I expect from Layer5? What does Layer5 expect of me?",
      category: "Layer5",
      answer: ["The Layer5 community expects you to get as much or more out of your time than you give to the projects. We expect earnest effort from its contributors. What “earnest effort” means is different for each community member as all have different circumstances. Suffice to say, the more you put into your efforts, the greater your reward will be. Most community contributors stay with the project for many months, if not indefinitely. Length of involvement is entirely up to the individual community member. You can expect to be challenged, to be assisted, to learn, to be recognized for your effort and to have your contributions appreciated.",
        "As a member of the Layer5 community, you are expected to be a good representative of Layer5's cultures and values of helping fellow members and paying it forward as we all learn together. You are expected to offer your ideas and skills to help advance our community and its projects. You are expected to share your experiences with others, to be curious, to be helpful, to ask questions, to challenge others and to be challenged yourself, to spread the word about what we collectively do here, to invite new members, to learn, to share, to make friends, to build a network, to write blog posts, to tweet, to become maintainers, to become MeshMates, to earn an internship, to get hired by Layer5 - - any and all of these things.",
      ],
      link: "https://layer5.io/community/meshmates",
      linktext: "Reach out to a MeshMate to find out more",
    },
    {
      question: "I see works of other contributors being highlighted. Will my contributions be highlighted, too?",
      category: "Layer5",
      answer: ["We might not get to everyone, but we try to elevate the works of all of our contributors. All of our community members are proud of their work and so are we! We want their work and names to be recognized across our collective technology industry. Make sure that you follow and engage with the Twitter, YouTube, and LinkedIn accounts."
      ],
      link: "https://twitter.com/layer5",
      linktext: "Layer5 on Twitter",
    },
    {
      question: "I am not a coder. Can I contribute, too?",
      category: "Layer5",
      answer: ["Yes! Some community members join to contribute to open source projects, others jump in to put those projects to use, some are here to help cultivate and steward our community, while others are here just to hangout and absorb. All members are most welcome. Make sure that you introduce yourself in the Layer5 Slack and let other community members get acquainted with you and vice-versa."
      ],
      link: "https://slack.layer5.io",
      linktext: "Layer5 Slack",
    },

    //
    // SERVICE MESH
    //

    {
      question: "What value does a service mesh provide?",
      category: "Service Mesh",
      answer: [
        "Service meshes provide visibility, resiliency, traffic, and security control of distributed application services. Much value is promised here, particularly to the extent that much is given without the need to change your application code.",
      ],
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
      question:
        "What if I deploy one service mesh, like Istio, then need to switch to another service mesh?",
      category: "Service Mesh",
      answer: [
        "Use of Meshery and the Service Mesh Interface specification help avoid switching costs between service meshes.",
        "The goal of Service Mesh Interface specifications are to provide an abstract, unified method of interacting with a service mesh.",
        "See if your service mesh adheres to SMI specifications at the link below.",
      ],
      link: "/projects/service-mesh-interface-conformance",
      linktext: "Service Mesh Interface",
    },
    {
      question: "What are service mesh standards and why do they matter?",
      category: "Service Mesh",
      answer: [
        "Three service mesh abstractions have arisen given the high number of service meshes available (see the Service Mesh Landscape)",
        "Servcie Mesh Performance (SMP) - A standard for capturing and characterizing service mesh performance.",
        "Service Mesh Interface (SMI) - A standard interface for using common service mesh functionality on Kubernetes.",
        "Multi-Vendor Service Mesh Interoperation (Hamlet) - A set of API standards for enabling service mesh federation.",
      ],
      link: "https://calcotestudios.com/talks/decks/slides-open-infrastructure-summit-2020-its-a-multi-mesh-world.html",
      linktext: "See Open Infrastructure Summit Presentation",
    },
    {
      question: "How does a service mesh help me? in my role?",
      category: "Service Mesh",
      answer: [
        "Operators don’t necessarily need to involve Developers to change how many times a service should retry before timing out or to run experiments (known as chaos engineering). They are empowered to affect service behavior independently.",
        "Customer Success (support) teams can handle the revocation of client access without involving Operators.",
        "Product Owners can use quota management to enforce price plan limitations for quantity-based consumption of particular services.",
        "Developers can redirect their internal stakeholders to a canary with beta functionality without involving Operators.",
        "Security Engineers can declaratively define authentication and authorization policies, enforced by the service mesh.",
        "Network Engineers are empowered with an extraordinarily high degree of application-level control formerly simply unavailable to them.",
      ],
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
      answer: [
        "Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology. At their core, service meshes provide:",
        "A services-first network; A developer-driven network;",
        "A network that is primarily concerned with alleviating application developers from building infrastructure concerns into their application code; A network that empowers operators with the ability to declaratively define network behavior, node identity, and traffic flow through policy;",
        "A network that enables service owners to control application logic without engaging developers to change its code.",
        "Value derived from the layer of tooling that service meshes provide is most evident in the land of microservices. The more services, the more value derived from the mesh. In subsequent chapters, I show how service meshes provide value outside of the use of microservices and containers and help modernize existing services (running on virtual or bare metal servers) as well.",
      ],
      link: "",
      linktext: "",
    },
    {
      question: "When should I adopt a service mesh?",
      category: "Service Mesh",
      answer: [
        "There are many service meshes to choose from as well as a variety of deployment models. Which is right for you and your organization depends on where you are in your maturity curve (Cloud Native skill set), number of services, underlying infrastructure, and how centric technology is to your business. ",
        "So, should you deploy a service mesh? More and more the answer is “yes”. Service meshes are quickly becoming a ubiquitous layer in modern infrastructures.",
      ],
      link: "/deploy-service-mesh",
      linktext: "Factors When considering how strongly you need a service mesh",
    },

    //
    // MESHERY
    //

    {
      question: "Is Meshery a service mesh?",
      category: "Meshery",
      answer: [
        "No, as the cloud native management plane, Meshery provisions and manages the lifecycle of service meshes and all other kinds of cloud native infrastructure.",
      ],
      link: "/cloud-native-management/meshery",
      linktext: "Run Meshery",
    },
    {
      question:
        "Why do I need to authenticate my social account to use Meshery?",
      category: "Meshery",
      answer: [
        "Create your account - avoid having to reconfigure Meshery each time you deploy it. When you use a social account to authenticate to Meshery, your environment configuration persists from session to session. Meshery sources from Mixer Prometheus adapter and uses Prometheus node-exporter.",
        "Rank your deployment - results of performance tests are anonymously collected using the Service Mesh Performance, so that Meshery may provide the public service of ranking the speed of your deployment against that of the rest of the world's users.",
      ],
      link: "",
      linktext: "",
    },
    {
      question: "Why use Meshery?",
      category: "Meshery",
      answer: [
        "Meshery is an open source, vendor neutral project that facilitates testing across meshes.",
        "Other performance benchmark tools are not packaged into a mesh testing utility, but are only load-generators unto their own.",
      ],
      link: "/projects/service-mesh-performance",
      linktext: "Service Mesh Performance",
    },
    {
      question:
        "I have already selected and am operating a service mesh. Should I use Meshery?",
      category: "Meshery",
      answer: [
        "As a management plane, Meshery provides value in a number of ways post-adoption of a service mesh. For example, Meshery analyzes your deployments in evaluation of service mesh best practices and patterns, highlighting where you might be deviating. Meshery's Other ways can be articulated in its set of features spanning:",
        "Lifecycle Management",
        "Configuration Management",
        "Performance Management",
        "Workload Management",
      ],
      link: "/cloud-native-management/meshery",
      linktext: "Meshery",
    },
    {
      question: "Is Meshery open source?",
      category: "Meshery",
      answer: [
        "Yes, Meshery is a Cloud Native Computing Foundation (CNCF) project and is licensed under Apache v2.",
        "As the cloud native management plane, Meshery is an extensible platform, offering multiple extension points within which users and partners can customize and extend Meshery's functionality.",
      ],
    },
    {
      question: "Can I deploy Meshery / MeshMap on-premises?",
      category: "Meshery",
      answer: [
        "Yes, Meshery, MeshMap, and Meshery Cloud can be deployed on-premises in minutes using Helm charts.",
        "With a small number of manual steps, air-gapped deployments to run Meshery without internet access is also supported.",
      ],
    },
    {
      question: "Where is Meshery Cloud hosted; where is my data stored?",
      category: "Meshery",
      answer: [
        "Meshery Cloud is hosted on AWS and Equinix data centers in US-based regions. If you need to know more about the data storage and compliance, please reach out to us at hello@layer5.io",
      ],
    },
    {
      question: "Is it possible to migrate from managed Meshery Cloud to self-hosted Meshery Cloud on-premises?",
      category: "Meshery",
      answer: [
        "Yes, Meshery, MeshMap, and Meshery Cloud can be deployed on-premises in minutes using Helm charts.",
        "A one-time export of your data can be requested as you transition from managed Meshery Cloud to self-hosted Meshery Cloud.",
        "With a small number of manual steps, air-gapped deployments to run Meshery without internet access is also supported.",

      ],
    },
    {
      question: "What is the difference between MeshMap<sup>BETA</sup>&nbsp;and the Cloud Native Playground?",
      category: "Meshery",
      answer: [
        "The Cloud Native Playground (aka Meshery Playground) is a managed instance of Meshery that offers a sandbox environment in which half of MeshMap<sup>BETA</sup>&nbsp;functionality is enabled (Designer mode) and the other half of MeshMap<sup>BETA</sup> functionality is disabled (Visualizer mode).",
        "The sandbox environment is not connected to an active Kuberentes cluster, and as such, specific actions within MeshMap Designer are also disabled. Meshery and MeshMap are feature-rich, sophisticated management applications for cloud native infrastructure. To access their full set of capabilities, simply deploy your own copy of Meshery into the environment of your choosing.",
      ],
    },    
    {
      question: "Are designs that I create in the Meshery Playground saved or will I look any work that I do in the playground?",
      category: "Meshery",
      answer: [
        "All of the designs that you have created in the Meshery Playground are saved to your user account and will be available to you each time that you return to the Playground. The designs will also be available in your other Meshery deployments.",
      ],
    },    
    
    //
    // CAREERS / INTERNSHIPS
    //

    {
      question: "How do I land an internship with Layer5?",
      category: "internships",
      answer: [
        "To best position your candidacy for an internship with Layer5, engage in the community and its projects. Start contributing and keep contributing. Community members who consistently contribute are the first individuals to be awarded internships when new internship opportunities open up - particularly members who are making significantly impactful contributions.",
        "Understand that internships are assigned as a recognition of work that you are already performing. They are not assigned in the hopes of you becoming a good contributor, but are awarded to support and reinforce efforts that you are already giving. Engage and make an impact on an area of a project. Show your passion for helping move the project forward, willingness to work hard, and capacity to learn.",
        "Recognize that there are many hundreds of contributors and relatively few maintainers and MeshMates. If you don't get an immediate response, don't lose heart. Be tenacious and find a piece of one of the projects to be engaged with and advance.",
      ],
      link: "/community/meshmates",
      linktext: "Engage a MeshMate",
    },
    {
      question: "How often does Layer5 offer internships?",
      category: "internships",
      answer: [
        "Continuously. Layer5 has internships starting and stopping frequently. Some internships rigidly start and stop on particular dates, while other internships offered start as a batch of candidates show collective readiness. We work with individuals to align the timings of the internship with other activities in their life.",
      ],
      link: "https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+",
      linktext: 'Grab a "Help Wanted" Issue',
    },
    {
      question: "What are characteristics of successful interns?",
      category: "internships",
      answer: [
        "Interns that thrive at Layer5 are those that espouse the Layer5 culture of paying it forward. These interns freely help other contributors, understanding that 1) they learn as they teach and assist others, 2) their projects are furthered with more contributors engage, and 3) any contributors path to maintainership is one of enabling others.",
        "Successful interns steward projects naturally as they become a resource to other contributors. These interns frequently become component and/or core maintainers.",
        "Successful interns internalize the fact that the real value of engaging and contributing to projects is the experience gained. They understand that the experience is theirs for the taking and that project maintainers and Layer5 employees want you to seize the opportunity. We consider your success our success and embrace the concept that your meaningful engagement is to all our benefits.",
      ],
      link: "/blog/tag/community",
      linktext: "Hear from other interns",
    },
    {
      question: "What are accomplishments of successful interns?",
      category: "internships",
      answer: [
        "Many Layer5 interns speak at large, public technology conferences like KubeCon, DockerCon, and so on. They write blog posts and share about their experience and learnings on social media. They engage with their whole self.",
        "Many interns become open source maintainers, and have ongoing responsibility to steward Layer5 and CNCF projects.",
      ],
    },

    //
    // PRICING
    //

    {
      question: "How can I upgrade, downgrade, or cancel my plan?",
      category: "Pricing",
      answer: [
        "Upgrade as needed. Downgrade or cancel at anytime. To make changes to your plan, please get in touch with sales.",
      ],
    },
    {
      question: "Do I need to enter my credit card details to sign up to a free plan?",
      category: "Pricing",
      answer: [
        "No. The Free plan does not require a credit card. It is free and will forever be free. A credit card is required only if you want to upgrade to a more fully-featured plan.",
      ],
    },
    {
      question: "What is the refund policy?",
      category: "Pricing",
      answer: [
        "Users can cancel or downgrade at anytime.",
        "Your next billing statement will be prorated based on your date of cancelation or downgrade.",
      ],
    },
    {
      question: "Can I start with Free and upgrade later?",
      category: "Pricing",
      answer: [
        "Yes! You are more than welcome to try the Free version.",
        "If you and your team want to collaborate or need more advanced capabilities, then try the Enterprise Edition. To upgrade to Enterprise, please get in touch with us.",
      ],
    },
    {
      question: "What happens if I accidentally don't renew or forget to renew my subscription?",
      category: "Pricing",
      answer: [
        "Continuity of your infrastructure and applicaiton management is important to us as it is to you. Meshery will continue to operate under the Free tier features and usage limits. Your historical data will continue to be available to you. You can renew your subscription to have higher-level plan features reenabled at any time.",
      ],
    },
    {
      question: "Are there other pricing options?",
      category: "Pricing",
      answer: [
        "Annual and monthly plans are available. We can customize billing plans to meet your needs. For a detailed explanation of billing, please see our Billing FAQ.",
      ],
    },
    {
      question: "Do you have special pricing for open source / non-profit projects?",
      category: "Pricing",
      answer: [
        "Yes, we offer significant discounts for open source projects. Contact us at hello@layer5.io with the details of your open source project to apply for discount.",
      ],
    },

    //
    // BILLING
    //

    {
      question: "What payment methods do you support?",
      category: "Billing",
      answer: [
        "You can pay for Layer5 Team and Enterprise with a credit card or debit card. If you pay by credit card, billing receipts are available to Administrators for previous months under Billing History. For copies of your invoice, email Layer5 billing.",
        "Layer5 also offers invoicing (ACH or wire). If you pay by ACH or wire, invoices are emailed to the billing email addresses near the 10th business day of each month. If you need an additional copy, email Layer5 billing. Details on where to remit payment can be found on the invoice. To change your payment method, contact your Customer Success Manager."
      ],
      linktext: "Contact Layer5 Billing",
      link: "mailto:support@layer5.io"
    },
    {
      question: "When does the billing cycle start and stop?",
      category: "Billing",
      answer: [
        "The billing cycle begins the first of the month regardless of when you sign up. Your first month is prorated based on your actual sign-up date. Layer5 meters the count of elements under management on a daily basis. The billable count of elements under management is calculated at the end of the month using the maximum count (high water mark) of the lower 99 percent of usage for those days. Layer5 excludes the top 1% to reduce the impact of spikes in usage on your bill. The billable count of elements under management is based on the average number of elements for the month. See your Usage in Meshery Cloud. Billing pages are only accessible to users with the Meshery Admin Role.",
      ],
    },
    {
      question: "How do I view and manage my subscription?",
      category: "Billing",
      answer: [
        "You can view your account's subscription, your other paid features and products, and your next billing date in your account's billing settings",
      ],
    },
    {
      question: "What happens if payment fails?",
      category: "Billing",
      answer: [
        "After an initial failed payment, we apply a 14 day grace period on your account and attempt to process a payment each week. After three failed payments, paid features are locked.",
      ],
    },
    {
      question: "How can I unlock my account after several failed transactions?",
      category: "Billing",
      answer: [
        "You can unlock the paid features on your account and trigger a new payment attempt by updating the payment method on your account. To learn more about how to manage your payments, visit the Billing section of your Meshery Cloud account.",
      ],
    },

    //
    // INTEGRATIONS
    //

    {
      question: "How do Meshery Extension Points work?",
      category: "Meshery Integrations",
      link: "https://docs.meshery.io/extensibility",
      linktext: "Meshery Extensibility",
      answer: [
        "Meshery is an extensible platform. Customize Meshery using any of its purpose-built extension points.",
        "Take advantage of these extension points for working with different service meshes via adapters, different load generators and different providers. Use Meshery’s REST API or its GraphQL API both of which allow you to connect to any Kubernetes-native app."
      ],
    },
    {
      question: "How can I request a new integration?",
      category: "Meshery Integrations",
      link: "https://layer5.io/company/contact",
      linktext: "Contact Us",
      answer: [
        "Become a Layer5 partner or simply submit an integration proposal.",
      ],
    },
    {
      question: "How does Meshery infused GitOps practices into cloud native managemement?",
      category: "Meshery Integrations",
      link: "https://layer5.io/cloud-native-management/meshery",
      linktext: "Run Meshery",
      answer: [
        "Multiple Meshery GitHub Actions help you integrate your Kubernetes operations and configuration management into a versioned, pipelined, declarative workflow. These GitHub Actions apply conformance to cloud native standards and performance management gates into your pipelines.",
        "Meshery connects your GitHub repositories and imports your Kubernetes manifests, your Helm Charts, and your Docker Compose applications for visualization and configuration management using Meshery's advanced feature set."
      ],
    },
    {
      question: "Is MeshMap cloud or a self-hosted solution?",
      category: "Meshery Integrations",
      link: "https://layer5.io/cloud-native-management/meshmap",
      linktext: "Learn More",
      answer: [
        "MeshMap is cloud-native visualizer and designer tool that could be deployed where you need it",
        "It can be self-hosted to keep your designs and applications internal to your company",
        "You can also choose the SaaS solution, where you can share your desings with team and collaborate upon it",
        "Any choice you follow, you will always the Layer5 support in need"
      ]
    },
    {
      question: "Can I deploy the Meshery and its integrations on-premises?",
      category: "Meshery Integrations",
      link: "https://docs.meshery.io/installation/quick-start",
      linktext: "Quick Start Guide",
      answer: [
        "Yes, Meshery can be deployed on-premises with a single command to download, install, and run your own instance of Meshery in your environment."
      ]
    },
    {
      question: "How can I try out MeshMap?",
      category: "Meshery Integrations",
      link: "https://play.meshery.io",
      linktext: "MeshMap Playground",
      answer: [
       "MeshMap along with Meshery is available as beta as a CNCF playground",
       "Signup for MeshMap and try out today!"
      ]
    },
    {
      question: "What is early access program?",
      category: "Meshery Integrations",
      link: "https://play.meshery.io",
      linktext: "MeshMap Playground",
      answer: [
       "MeshMap is in beta mode and you can ask for early access to try it out",
       "Your request for early access will be processeed as quicky as possible but due to the large influx of program participation requests, it may take some time before system access is granted. In the meantime to help you familiarize with Meshery, the maintainers team will send you additional information about the early access program."
      ]
    },

    //
    // OTHER
    //

  ],
};
export default data;

