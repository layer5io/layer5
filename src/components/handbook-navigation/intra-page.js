import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const JoinCommunityWrapper = styled.div`
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

    .list {
      color: #000000;
    }
    .active {
      font-weight: 5000;
      color: #000000;
    }

    ul {
      list-style: none;
      top: 3rem;

      li {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
    }
    @media only screen and (max-width: 950px) {
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
