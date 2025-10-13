import React from "react";
import DesignPioneerLogo from "../../../assets/images/design-pioneer/design-pioneer.svg";
import ApplicationPioneerLogo from "../../../assets/images/application-pioneer/application-pioneer.svg";
import SharingIsCaringLogo from "../../../assets/images/sharing-is-caring/sharing-is-caring.svg";
import ShippedLogo from "../../../assets/images/shipped/shipped.svg";
import NeedForSpeedLogo from "../../../assets/images/need-for-speed/need-for-speed.svg";
import HipHackerLogo from "../../../assets/images/hip-hacker/hip-hacker.svg";
import StreamerLogo from "../../../assets/images/streamer/streamer.svg";
import GitOPsWithFriendsLogo from "../../../assets/images/gitops-with-friends/gitops-with-friends.svg";
import BringABuddyLogo from "../../../assets/images/bring-a-buddy/bring-a-buddy.svg";
import CodeCleanupCrewLogo from "../../../assets/images/code-cleanup-crew/code-cleanup-crew.svg";
import SecuritySentinelLogo from "../../../assets/images/security-sentinel/security-sentinel.png";
import LogevityLegendLogo from "../../../assets/images/longevity-legend/longevity-legend.svg";
import ReviewRockstarLogo from "../../../assets/images/review-rockstar/review-rockstar.svg";
import KanvasSnapshotLogo from "../../../assets/images/kanvas-snapshot/kanvas-snapshot.svg";
import SistentContributorLogo from "../../../assets/images/sistent/badges/sistent-contributor.svg";
import ContinuousContributorLogo from "../../../assets/images/continuous-contributor/continuous-contributor.svg";

import ImageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import kanvasLogo from "../../../assets/images/kanvas/icon-only/kanvas-icon-color.svg";
import ServiceMeshPerformance from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import AcademyLogo from "../../../assets/images/academy/academy.svg";
import CommunityLogo from "../../../assets/images/community/community-green.svg";
import MesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import MesheryOperator from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import PatternsLogo from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import LandscapeGreen from "../../../assets/images/landscape/layer5_landscape_green.svg";
import writersLogo from "../../../assets/images/writer-program/writer-program-badge.svg";
import NightHawkLogo from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import uiuxrLogo from "../../../assets/images/uiuxr/uiuxr.svg";
import MesheryCatalogLogo from "../../../assets/images/meshery/meshery-catalog.svg";
import DockerExtension from "../../../assets/images/docker-extension/docker-extension-meshery-logo.svg";
import DocsLogo from "../../../assets/images/docs/docs.svg";

export const activityBadges = [
  {
    title: "Design Pioneer",
    image: DesignPioneerLogo,
    description: "awarded to the Layer5 cloud users when they create their first design.",
  },
  {
    title: "Application Pioneer",
    image: ApplicationPioneerLogo,
    description: "awarded to the Layer5 cloud users when they create their first application.",
  },
  {
    title: "Sharing is Caring",
    image: SharingIsCaringLogo,
    description: "This badge is awarded upon first-time sharing one of your designs.",
  },
  { title: "Shipped", image: ShippedLogo, description: "This badge is awarded upon the success of your first design deployment." },
  { title: "Need for Speed", image: NeedForSpeedLogo, description: "This badge is awarded upon successful execution of your first performance test." },
  {
    title: "Hip Hacker",
    image: HipHackerLogo,
    description: "First Interactive Terminal Session - awarded the first time that you establish an interactive terminal session with a Kubernetes Pod.",
  },
  {
    title: "Streamer",
    image: StreamerLogo,
    description: "First Log Streaming Session - awarded the first time that you stream logs from a Kubernetes Pod.",
  },
  {
    title: "GitOps with Friends",
    image: GitOPsWithFriendsLogo,
    description: "First Collaborator - awarded the first time a collaborator saves changes to one of your designs.",
  },
  { title: "Bring a Buddy", image: BringABuddyLogo, description: "awarded to the users who invite someone to Layer5 cloud." },
  { title: "Code Cleanup Crew", image: CodeCleanupCrewLogo, description: "awarded to contributors who help maintain code quality and cleanliness." },
  { title: "Security Sentinel", image: SecuritySentinelLogo, description: "awarded to individuals who contribute to identifying and fixing security vulnerabilities." },
  { title: "Longevity Legend", image: LogevityLegendLogo, description: "awarded for long-term, sustained contributions to the project over the years." },
  { title: "Review Rockstar", image: ReviewRockstarLogo, description: "awarded to individuals who provide thorough and valuable code reviews." },
  {
    title: "Kanvas Snapshot",
    image: KanvasSnapshotLogo,
    description: "awarded to users upon creation of their first infrastructure screenshot directly in their pull request.",
  },
  {
    title: "Continuous Contributor",
    image: ContinuousContributorLogo,
    description:
      "awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects in recognition and appreciation of their efforts.",
  },
  {
    title: "Sistent Contributor",
    image: SistentContributorLogo,
    description:
      "awarded to the community members who make consistent and impactful contributions to the Sistent project as a recognition and appreciation of their efforts.",
  },
];

export const projectBadges = [
  {
    title: "Image Hub",
    image: ImageHubLogo,
    description:
      "awarded to the community members who make consistent and impactful contributions to the Image Hub project in recognition and appreciation of their efforts.",
  },
  {
    title: "Kanvas",
    image: kanvasLogo,
    description: (
      <>
        awarded to the community members who make consistent and impactful contributions to the{" "}
        <a href="/cloud-native-management/kanvas">Kanvas</a> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
      </>
    ),
  },
  {
    title: "Cloud Native Performance",
    image: ServiceMeshPerformance,
    description:
      "awarded to the community members who make consistent and impactful contributions to the Cloud Native Performance project. Community members who earn this badge occasionally become a project maintainer.",
  },
  {
    title: "Academy",
    image: AcademyLogo,
    description: (
      <>
        awarded to the community members who make consistent and impactful contributions to the{" "}
        <a href="https://cloud.layer5.io/academy/overview">Layer5 Academy</a> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.
      </>
    ),
  },
  {
    title: "Community",
    image: CommunityLogo,
    description:
      "awarded to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role.",
  },
  {
    title: "Meshery",
    image: MesheryLogo,
    description:
      "awarded to the community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer.",
  },
  {
    title: "Meshery Operator",
    image: MesheryOperator,
    description:
      "awarded to the community members who make consistent and impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts.",
  },
  {
    title: "Patterns",
    image: PatternsLogo,
    description: (
      <>
        awarded to the community members who make consistent and impactful contributions to the{" "}
        <a href="/learn/service-mesh-books/service-mesh-patterns">Cloud Native Patterns</a> project in recognition and appreciation of their efforts.
      </>
    ),
  },
  {
    title: "Landscape",
    image: LandscapeGreen,
    description: "awarded to the community members who make consistent and impactful contributions to the layer5.io website.",
  },
  {
    title: "Writer's Program",
    image: writersLogo,
    description:
      "awarded to the community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts.",
  },
  {
    title: "Nighthawk",
    image: NightHawkLogo,
    description:
      "awarded to the community members who make consistent and impactful contributions to the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.",
  },
  {
    title: "UI/UX",
    image: uiuxrLogo,
    description:
      "awarded to the community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts.",
  },
  {
    title: "Meshery Catalog",
    image: MesheryCatalogLogo,
    description: (
      <>
        awarded to the community members who make consistent and impactful contributions to the{" "}
        <a href="https://meshery.io/catalog">Meshery Catalog</a> of Meshery project in recognition and appreciation of their efforts.
      </>
    ),
  },
  {
    title: "Docker Extension",
    image: DockerExtension,
    description:
      "awarded to the community members who make consistent and impactful contributions to the Docker Extension of meshery project in recognition and appreciation of their efforts.",
  },
  {
    title: "Docs",
    image: DocsLogo,
    description: (
      <>
        awarded to the community members who make consistent and impactful contributions to the{" "}
        <a href="https://docs.meshery.io/">Meshery docs</a> in recognition and appreciation of their efforts.
      </>
    ),
  },
];
