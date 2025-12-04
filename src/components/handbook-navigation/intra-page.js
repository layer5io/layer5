import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const JoinCommunityWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 15rem;
  width: 15rem;
  z-index: 10;

  @media screen and (max-width: 1279px) {
    display: none;
  }

  .intra-page {
    position: sticky;
    top: 10rem;
    padding-bottom: 5rem;
    align-items: left;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .list {
      color: ${(props) => props.theme.text || "#000000"};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .active {
      font-weight: 500;
      color: ${(props) => props.theme.secondaryColor || "#00b39f"};
    }

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
    @media only screen and (max-width: 1279px) {
      width: 0;
      opacity: 0;
      height: 0;
      transition: none;
      visibility: hidden;
    }
  }

  .learn {
    width: 10rem;
  }
`;

function IntraPage({ contents }) {
  const [intapath, setIntapath] = useState(null);
  useEffect(() => {
    const path = window.location.pathname;
    setIntapath(path);
  }, []);

  return (
    <JoinCommunityWrapper>
      <div className="intra-page">
        <ul>
          {contents.map((x) => (
            <li key={x.id} className="list">
              <Link
                to={`${intapath}${x.link}`}
                key={x.id}
                activeClassName="active"
              >
                {x.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </JoinCommunityWrapper>
  );
}

export default IntraPage;
