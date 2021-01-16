import React from "react";
import Button from "../../reusecore/Button";
import BooksSection from "./LearnPage-Sections/books";
import WorkshopsSection from "./LearnPage-Sections/workshops";
import LearnSection from "./LearnPage-Sections/learn";
import JoinCommunity from "../Community/Join-community";
import Book_Giveaway from "../../assets/images/learn/istio-book-giveaway.jpg";
import { LearnPageWrapper } from "./learnpage.style";

const LearnPage = () => {
    return (
        <LearnPageWrapper>
            <div className="page-header-section">
                <h1>Learn Service Mesh</h1>
            </div>
            <BooksSection />
            <WorkshopsSection />
            <LearnSection />
            <JoinCommunity image={Book_Giveaway} header={"Don't Learn Alone"} text={"Check Out the Layer5 community, join us on Slack and learn with the community"} btn_primary={true}/>
        </LearnPageWrapper>
    );
};

export default LearnPage;