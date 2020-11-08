import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export const PagerWrapper = styled.div`
    .pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      padding-left: 0;
      cursor: pointer;
      a {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid ${props => props.theme.secondaryColor};
          color: ${props => props.theme.secondaryColor};
      }
      .next, .previous {
         a{
            display: flex;
            align-items: center;
            svg{
               margin-left: 0px;
               font-size: 20px;
           } 
        }
      }
    }
    
    .pagination__link {
      font-weight: bold;
    }
    
    .pagination__link--active a {
      color: #fff;
      background: ${props => props.theme.secondaryColor};
    }
    
    .pagination__link--disabled a {
      color: rgb(198, 197, 202);
      border: 1px solid rgb(198, 197, 202);
    }
`;

const Pager = ({ pageContext, isListView }) => {
    const { numberOfPages, pathPrefix} = pageContext;

    const handlePageClick = ({ selected: selectedPage }) =>{
        const path =  `${pathPrefix}${selectedPage ? `/${selectedPage + 1}` : ""}`;
        navigate(
            path,
            {
                state : { isListView }
            }
        );
    };

    return (
        <PagerWrapper>
            <ReactPaginate
                previousLabel={<><IoIosArrowRoundBack/> Previous</>}
                nextLabel={<>Next <IoIosArrowRoundForward/></>}
                pageCount={numberOfPages}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                previousLinkClassName="pagination__link"
                nextLinkClassName="pagination__link"
                disabledClassName="pagination__link--disabled"
                activeClassName="pagination__link--active"
            />
        </PagerWrapper>
    );
};

export default Pager;
