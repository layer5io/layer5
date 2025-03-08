import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";

export const PagerWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    
    .old-post{
        justify-self: flex-end;
    }
    h4{
        display: flex;
        align-items: center;
        svg{
            margin-left: 0;
            font-size: 2rem;
            transition: all 0.2s linear;
        } 
        &:hover{
            color: ${props => props.theme.secondaryColor};
            svg{
            margin-left: 3px;
            transform: scale(1.2);
        }
    }
`;

const Pager = ({ pageContext, text, isListView }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <PagerWrapper>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} state={{ isListView }}>
            <h4><IoIosArrowRoundBack />Newer {text}</h4>
          </Link>
        )}
      </div>
      <div className="old-post">
        {nextPagePath && (
          <Link to={nextPagePath} state={{ isListView }}>
            <h4>Older {text}<IoIosArrowRoundForward/></h4>
          </Link>
        )}
      </div>
    </PagerWrapper>
  );
};

export default Pager;
