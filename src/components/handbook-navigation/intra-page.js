import React, { useEffect, useState } from "react";
import styled from "styled-components";

const JoinCommunityWrapper = styled.div`
  @media screen and (min-width: 300px) and (max-width: 1279px) {
    display: none;
  }
  .intra-page {
    position: sticky;
    top: 10rem;
    right: 0rem;
    margin-right: 1rem;
    padding-bottom: 5rem;
    padding-right: 2rem;
    align-items: left;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    ul {
      list-style: none;
      top: 3rem;
      li {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
    }
    @media only screen and (min-width: 1280px) and (max-width: 1350px) {
      padding-right: 0rem;
      margin-right: 0rem;
    }
    @media only screen and (max-width: 950px) {
      width: 0;
      opacity: 0;
      height: 0;
      transition: none;
      visibility: hidden;
    }
  }
`;

function IntraPage({ contents }) {
  const handleClick = (e, link) => {
    e.preventDefault();
    const id = link.startsWith("#") ? link.substring(1) : link;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <JoinCommunityWrapper>
      <div className="intra-page">
        <ul>
          {contents.map((x) => (
            <li key={x.id} className="list">
              <a
                href={x.link}
                onClick={(e) => handleClick(e, x.link)}
              >
                {x.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </JoinCommunityWrapper>
  );
}

export default IntraPage;
