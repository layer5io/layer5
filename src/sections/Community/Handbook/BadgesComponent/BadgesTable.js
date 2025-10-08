/* eslint-disable linebreak-style */
import React from "react";
import { DescriptionCell, Image, StyledTable, TableCell, TableHeader } from "./BadgesStyledComponents";
import ApplicationPioneerLogo from "../../../../assets/images/application-pioneer/application-pioneer.svg";
import SistentContributorLogo from "../../../../assets/images/sistent/badges/sistent-contributor.svg";
import ImageHubLogo from "../../../../assets/images/image-hub/layer5-image-hub.svg";
import AcademyLogo from "../../../../assets/images/academy/academy.svg";
import MesheryOperator from "../../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import writersLogo from "../../../../assets/images/writer-program/writer-program-badge.svg";
import ServiceMeshPerformance from "../../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";


const badges = [
  {
    id: 1,
    description: "awarded to the Layer5 cloud users when they create their first design",
    imageUrl: "/images/badges/first-design.png",
    label: "designpioneer",
    name: "Design Pioneer"
  },
  {
    id: 2,
    description: " awarded to the Layer5 cloud users when they create their first application.",
    imageUrl: ApplicationPioneerLogo,
    label: "applicationpioneer",
    name: "Application Pioneer"
  },
  {
    id: 3,
    description: "This badge is awarded upon first-time sharing one of your designs.",
    imageUrl: "/images/badges/first-share.png",
    label: "sharingiscaring",
    name: "Sharing is Caring"
  },
  {
    id: 4,
    description: " This badge is awarded upon the success of your first design deployment.",
    imageUrl: "/images/badges/first-deployment.png",
    label: "shipped",
    name: "Shipped"
  },
  {
    id: 5,
    description: "This badge is awarded upon successful execution of your first performance test.",
    imageUrl: "/images/badges/need-for-speed.png",
    label: "needforspeed",
    name: "Need for Speed"
  },
  {
    id: 6,
    description: "First Interactive Terminal Session - awarded the first time that you establish an interactive terminal session with a Kubernetes Pod.",
    imageUrl: "/images/badges/hip-hacker.png",
    label: "hiphacker",
    name: "Hip Hacker"
  },
  {
    id: 7,
    description: " First Log Streaming Session - awarded the first time that you stream logs from a Kubernetes Pod.",
    imageUrl: "/images/badges/streamer.png",
    label: "streamer",
    name: "Streamer"
  },
  {
    id: 8,
    description: "First Collaborator - awarded the first time a collaborator saves changes to one of your designs.",
    imageUrl: "/images/badges/git-ops-with-friends.png",
    label: "gitopswithfriends",
    name: "GitOps with Friends"
  },
  {
    id: 9,
    description: "awarded to the users who invite someone to Layer5 cloud.",
    imageUrl: "/images/badges/bring-a-buddy.png",
    label: "bringabuddy",
    name: "Bring a Buddy"
  },
  {
    id: 10,
    description: "awarded to contributors who help maintain code quality and cleanliness.",
    imageUrl: "/images/badges/code-cleanup-crew.png",
    label: "codecleanupcrew",
    name: "Code Cleanup Crew"
  },
  {
    id: 11,
    description: "awarded to individuals who contribute to identifying and fixing security vulnerabilities.",
    imageUrl: "/images/badges/security-sentinel.png",
    label: "securitysentinel",
    name: "Security Sentinel"
  },
  {
    id: 12,
    description: "awarded for long-term, sustained contributions to the project over the years.",
    imageUrl: "/images/badges/longevity-legend.png",
    label: "longevityledgend",
    name: "Longevity Ledgend"
  },
  {
    id: 13,
    description: "awarded to individuals who provide thorough and valuable code reviews.",
    imageUrl: "/images/badges/review-rockstar.png",
    label: "reviewrockstar",
    name: "Review Rockstar"
  },
  {
    id: 14,
    description: "awarded to users upon creation of their first infrastructure screenshot directly in their pull request.",
    imageUrl: "/images/badges/meshmap-snapshot.png",
    label: "meshmapsnapshot",
    name: "Mesh Map Snapshot"
  },
  {
    id: 15,
    description: "awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/continuous-contributor.png",
    label: "continouscontributor",
    name: "Continous Contributor"
  },
  {
    id: 16,
    description: " awarded to the community members who make consistent and impactful contributions to the Sistent project as a recognition and appreciation of their efforts.",
    imageUrl: SistentContributorLogo,
    label: "sistentcontributor",
    name: "Sistent Contributor"
  },
  {
    id: 17,
    description: "awarded to the community members who make consistent and impactful contributions to the Image Hub project in recognition and appreciation of their efforts.",
    imageUrl: ImageHubLogo,
    label: "imagehub",
    name: "Image Hub"
  },
  {
    id: 18,
    description: "awarded to the community members who make consistent and impactful contributions to the Kanvas project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: "/images/badges/kanvas.png",
    label: "kanvas",
    name: "Kanvas"
  },
  {
    id: 19,
    description: "awarded to the community members who make consistent and impactful contributions to the Cloud Native Performance project. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: ServiceMeshPerformance,
    label: "cloudnativeperformance",
    name: "Cloud Native Performance"
  },
  {
    id: 20,
    description: "awarded to the community members who make consistent and impactful contributions to the Layer5 Academy project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: AcademyLogo,
    label: "academy",
    name: "Academy"
  },
  {
    id: 21,
    description: " awarded to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role.",
    imageUrl: "/images/badges/community.png",
    label: "community",
    name: "Community"
  },
  {
    id: 22,
    description: "awarded to the community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: "/images/badges/meshery.png",
    label: "meshery",
    name: "Meshery"
  },
  {
    id: 23,
    description: "awarded to the community members who make consistent and impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts.",
    imageUrl: MesheryOperator,
    label: "mesheryoperator",
    name: "Meshery Operator"
  },
  {
    id: 24,
    description: "awarded to the community members who make consistent and impactful contributions to the Cloud Native Patterns project in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/patterns.png",
    label: "patterns",
    name: "Patterns"
  },
  {
    id: 25,
    description: "awarded to the community members who make consistent and impactful contributions to the layer5.io website.",
    imageUrl: "/images/badges/landscape.png",
    label: "landscape",
    name: "Landscape"
  },
  {
    id: 26,
    description: "awarded to the community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts.",
    imageUrl: writersLogo,
    label: "writersprogram",
    name: "Writer's Program"
  },
  {
    id: 27,
    description: "awarded to the community members who make consistent and impactful contributions to the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: "/images/badges/nighthawk.png",
    label: "nighthawk",
    name: "Nighthawk"
  },
  {
    id: 28,
    description: "awarded to the community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/ui-ux.png",
    label: "uiux",
    name: "UI/UX"
  },
  {
    id: 29,
    description: "awarded to the community members who make consistent and impactful contributions to the Meshery Catalog of Meshery project in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/meshery-catalog.png",
    label: "mesherycatalog",
    name: "Meshery Catalog"
  },
  {
    id: 30,
    description: "awarded to the community members who make consistent and impactful contributions to the Docker Extension of meshery project in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/docker-extension.png",
    label: "dockerextension",
    name: "Docker Extension"
  },
  {
    id: 31,
    description: "awarded to the community members who make consistent and impactful contributions to the Meshery docs in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/meshery-docs.png",
    label: "docs",
    name: "Docs"
  },
  {
    id: 32,
    description: "This badge is awarded to the contributors who contribute to any Layer5 project during Hacktoberfest 2025.",
    imageUrl: "/images/badges/hacktoberfest-contributor.png",
    label: "hacktoberfest25",
    name: "Hacktoberfext'25 Contributor"
  },
  {
    id: 33,
    description: "This badge is awarded to community members who actively support and guide others, embodying the spirit of collaboration and knowledge sharing in the Layer5 community.",
    imageUrl: "/images/badges/meshmate.png",
    label: "meshmate",
    name: "MeshMate"
  },
  {
    id: 34,
    description: "This badge is awarded to the contributors who contribute to any Layer5 project during Hacktoberfest 2024.",
    imageUrl: "/images/badges/hacktoberfest24.png",
    label: "hacktoberfest24",
    name: "hacktoberfest'24 Contributor"
  },
  {
    id: 35,
    description: "This is a special edition badge and it is awarded to Docker Captains.",
    imageUrl: "/images/badges/docker-captain.png",
    label: "dockercaptain",
    name: "Docker Captain"
  },
  {
    id: 36,
    description: "This is a special edition badge and it is awarded to CNCF Ambassadors.",
    imageUrl: "/images/badges/cncf-ambassador.png",
    label: "cncfambassador",
    name: "CNCF Ambassador"
  },
  {
    id: 37,
    description: "This badge is awarded to users upon establishment of a connection with Meshery GitHub App.",
    imageUrl: "/images/badges/gitops-connected.png",
    label: "gitopsconnected",
    name: "GitOps Connected"
  },
  {
    id: 38,
    description: "This badge is awarded to the contributors who contribute to any Layer5 project during Hacktoberfest 2023.",
    imageUrl: "/images/badges/hacktoberfest24.png",
    label: "hacktoberfest23",
    name: "Hacktoberfest'23 Contributor"
  },
  {
    id: 39,
    description: "This badge is awarded to the community members who make consistent and impactful contributions to the Service Mesh Performance project. Community members who earn this badge occasionally become a project maintainer.",
    imageUrl: "/images/badges/smp.png",
    label: "servicemeshperformance",
    name: "Service Mesh Performance",
  },
  {
    id: 40,
    description: "This badge is awarded to the community members who make consistent and impactful contributions to MeshSync in recognition and appreciation of their efforts.",
    imageUrl: "/images/badges/meshsync.png",
    label: "meshsync",
  }

];



function BadgesTable() {

  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Badge/Icon</TableHeader>
          <TableHeader>Badge Name</TableHeader>
          <TableHeader>Badge Key</TableHeader>
          <TableHeader>Description</TableHeader>
        </tr>
      </thead>
      <>
        {
          badges.map(badge => (
            (
              <tr key={badge.id}>
                <TableCell>
                  <Image src={badge.imageUrl} alt={badge.label} loading="lazy"/>
                </TableCell>
                <TableCell>{badge.name}</TableCell>
                <TableCell>
                  <span style={{ fontSize: "14px", paddingBottom: "3px", paddingTop: "3px", paddingLeft: "8px", paddingRight: "8px", backgroundColor: "rgba(0, 0, 0, 0.09)", borderRadius: "4px" }}>{badge.label}</span>
                </TableCell>
                <DescriptionCell title={badge.description}>
                  <span style={{ maxWidth: "500px" }}>{badge.description}</span>
                </DescriptionCell>
              </tr>
            )
          ))
        }
      </>
    </StyledTable>
  );

}
export default BadgesTable;
