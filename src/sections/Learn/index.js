import React from "react";
import BooksSection from "./LearnPage-Sections/books";
import WorkshopsSection from "./LearnPage-Sections/workshops";
import LearnSection from "./LearnPage-Sections/learn";
import JoinCommunity from "../Community/Join-community";
import LearningPaths from "./LearnPage-Sections/learning-path";
import Book_Giveaway from "../../assets/images/learn/istio-book-giveaway.jpg";
import { LearnPageWrapper } from "./learnpage.style";

const LearnPage = () => {
  return (
    <LearnPageWrapper>
      <div className="page-header-section">
        <h1>Learn Cloud Native</h1>

        <h3>Free training and how-tos on cloud native architectures, deployment models with Kubernetes, Istio, Linkerd, Consul, Open Service Mesh, Kuma, NGINX Service Mesh, AWS App Mesh, and VMware Tanzu Service Mesh</h3>

      </div>
      <BooksSection />
      <WorkshopsSection />
      <LearnSection />
      <LearningPaths />
      <JoinCommunity image={Book_Giveaway} header={"Don't Learn Alone"} text={"Check out the Layer5 community, join us on Slack and learn with the community"} btn_primary={true} />
    </LearnPageWrapper>
  );
};

export default LearnPage;