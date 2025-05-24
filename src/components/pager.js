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

const Pager = ({ previousUrl, nextUrl, currentPage, totalPages }) => {
  return (
    <PagerWrapper>
      <div>
        {currentPage > 1 && (
          <Link to={previousUrl} className="prev">
            <h4><IoIosArrowRoundBack />Newer Posts</h4>
          </Link>
        )}
      </div>
      <div className="old-post">
        {currentPage < totalPages && (
          <Link to={nextUrl} className="next">
            <h4>Older Posts<IoIosArrowRoundForward/></h4>
          </Link>
        )}
      </div>
    </PagerWrapper>
  );
};

export default Pager;
