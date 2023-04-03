import SCA from "../../../collections/programs/sca-contributhon/sca.svg";
import SCALightlogo from "../../../collections/programs/sca-contributhon/sca-dark.svg"
import MLH from "../../../collections/programs/mlh-2020/mlh.svg";
import MLHLightlogo from '../../../collections/programs/mlh-2020/mlh-dark.svg';
import LFX from "../../../collections/programs/lfx-2022/Linux_Foundation_logo.png";
import LFXLightlogo from '../../../collections/programs/lfx-2022/lfx-white.svg';
import Hacktoberfest from "../../../assets/images/programs/hacktoberfest.png";
import GSOC from "../../../collections/programs/gsoc-2020/gsoc.svg";
import GSOD from "../../../collections/programs/gsod/gsod.png";
import Layer from "../../../assets/images/layer5/layer5-only/svg/layer5-white-bg.svg";
import LayerLightlogo from "../../../assets/images/layer5/layer5-only/svg/layer5-light-no-trim.svg";
import Bridge from "../../../collections/programs/communitybridge/communitybridge-blue.png";
import BridgeLightlogo from "../../../collections/programs/communitybridge/communitybridge.png";

export const programs_data = [
  {
    id: 1,
    name: "Google Season of Docs",
    description:
      "Google Season of Docs provides support for open source projects to improve their documentation and allows professional technical writers to gain experience in open source. This is to raise awareness of open source, docs, and technical writing. Google season of docs started in 2019.  Each year, layer5 submits a new project idea for technical writers to contribute to for a particular period. Also, stipends are awarded to the contributors.",
    buttonLink: "/programs/gsod",
    imageLink: GSOD,
    imagePosition: "second",
  },
  {
    id: 2,
    name: "Google Summer of Code",
    description:
      "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open-source organization on a 10-week programming project during their break from school.Every Summer, Layer5 submits a new project idea for student developers to contribute to for a particular period. Also, stipends are awarded at the end of the program to the --contributors.The critical component of these projects is our Community. This community, which you will join as a participant in Google Summer of Code, improves the world of diverse cloud-native systems. Your contributions will affect people you've never met. The Layer5 community includes software engineers, researchers, students, artists, system administrators, operators, and web designers, all of whom will be happy to help you get started.We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement while building our community’s size, diversity, and strength.",
    buttonLink: "/programs/gsoc",
    imageLink: GSOC,
    imagePosition: "first",
  },
  {
    id: 3,
    name: "Hacktoberfest",
    description:
      "Hacktoberfest is open to everyone in the global community. Whether you’re a developer, student learning to code, event host, or a company of any size, you can help drive the growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge. Every year in October, Hacktoberfest is held. So far, Layer5 has been a participant organization with different projects and issues such as first-timers-only, help-wanted, and good-first-issues for open-source contributors. This is to help towards completing the Hacktoberfest challenge.",
    buttonLink: "/programs/hacktoberfest",
    imageLink: Hacktoberfest,
    imagePosition: "second",
  },
  {
    id: 4,
    name: "Linux Foundation",
    description:
      "The Linux Foundation (Mentorship Programs) are designed to help developers with the necessary skills–many of whom are first-time open source contributors–experiment, learn, and contribute effectively to open source communities. Layer5, as an organization, has been participating in the Linux Foundation mentorship program since 2019. ",
    buttonLink: "/programs/lfx",
    imageLink: LFX,
    imageLinkDark: LFXLightlogo,
    imagePosition: "first",
  },
  {
    id: 5,
    name: "MLH Fellowship Program",
    description:
      "The MLH Fellowship is a 12-week internship alternative for students interested in becoming software engineers. Instead of an internship at a single company, you'll contribute to the type of Open Source projects that every company depends on. The programs pair fun, educational curriculum with practical experience that you can put on your resume right away. It's collaborative, remote, and happens under the guidance of expert mentors.Layer5, as an organization, participates in the program by submitting a project idea for contributors to work on and also provides mentorship during the time phase given.",
    buttonLink: "/programs/mlh",
    imageLink: MLH,
    imageLinkDark: MLHLightlogo,
    imagePosition: "second",
  },
  {
    id: 6,
    name: "CommunityBridge",
    description:
      "The Linux Foundation's CommunityBridge is building a healthy ecosystem around the open source software by funding projects, securing code, and connecting with talented developers. Layer5 has been participating in the  CommunityBridge's mentorship program since 2019.",
    buttonLink: "/programs/communitybridge",
    imageLink: Bridge,
    imageLinkDark: BridgeLightlogo,
    imagePosition: "first",
  },
  {
    id: 7,
    name: "Layer5",
    description:
      "At Layer5, we take our internships seriously. Interns are expected to work hard, learn much, and be recognized for doing so. Past interns have presented their projects at KubeCon, DockerCon, and similar technical conferences. Our community of contributors is the key ingredient to the success of every one of our projects. Interns engage as part of the community. Whether interning directly with Layer5 or through one of Layer5's partner programs, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small.",
    buttonLink: "/careers/internships/",
    imageLink: Layer,
    imageLinkDark: LayerLightlogo,
    imagePosition: "second",
  },
  {
    id: 8,
    name: "She Code Africa Contributhon",
    description:
      "She Code Africa is a non-profit organization focused on celebrating and empowering young girls and women in tech across Africa.The She Code Africa Contributhon Program is a virtual open-source boot camp for 4 weeks where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship and on completion of the program, a stipend of $500 is awarded. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsors and mentor open source organizations to work on projects used by millions of people all over the world.Layer5 is participating in Contributhon as a Mentoring Organization. This program engages more with the open-source ecosystem in Africa and diversifies contributions. Most especially, we love making an impact. Various project ideas are submitted for the selected ladies to contribute during the one-month time phase.",
    buttonLink: "/programs/sca-contributhon",
    imageLink: SCA,
    imageLinkDark: SCALightlogo,
    imagePosition: "first",
  },
];
