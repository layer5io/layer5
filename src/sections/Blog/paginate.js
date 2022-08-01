import React,{ useState } from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { IoIosArrowRoundBack } from "@react-icons/all-files/io/IoIosArrowRoundBack";
import styled from "styled-components";

export const PaginateWrapper=styled.div`
    .btn-container{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto 2rem
    }
    .btn{
        text-align:center;
        width:2rem;
        height:2rem;
        border-radius:5px;
        cursor: pointer;
        margin: 0.5rem;
        transition: all 0.3s linear;
        :hover{
            box-shadow: 0px 1px 5px 1px rgba(0, 179, 159, 0.5);
        }
    }
    .page-btn{
        background: ${props => props.theme.white};
        border: solid 2px;
        color:#000000;
        border-color: ${props => props.theme.secondaryColor};
    }
    .active-btn {
        background: ${props => props.theme.secondaryColor};
        border-color: transparent;
        color: #ffff;
    }
    svg{
      margin-left: 0;
      font-size: 2rem;
      transition: all 0.2s linear;
  }
`;

const Paginate = ({ pageContext,isListView }) => {
  const [currentPage, setCurrentPage] = useState(
    pageContext.humanPageNumber || 1
  );
  const { previousPagePath, nextPagePath } = pageContext;
  const category = pageContext.category ? pageContext.category : null;
  const tag = pageContext.tag ? pageContext.tag : null;
  let pageNumbers = [];
  for (let i = 1; i <= pageContext.numberOfPages; i++) {
    pageNumbers.push(i);
  }
  const paginate = (num) => {
    setCurrentPage((pre) => num);
  };
  return (
    <PaginateWrapper>
      <div className="btn-container">
        {previousPagePath && <Link to={previousPagePath} className="btn" state={{ isListView }}><IoIosArrowRoundBack/></Link>}
        {pageNumbers.map((number) => (
          <Link
            to={`/blog${
                          tag ? "/tag/"+tag.toLowerCase() : category ? "/category/"+category.toLowerCase() : ""
                        }${number == 1 ? "" : "/" + number}`}
            state={{ isListView }}
            key={number}

          >

            <button onClick={() => paginate(number)}
              className={
                number === currentPage
                  ? "btn active-btn"
                  : "btn page-btn"
              }>
              {number}
            </button>

          </Link>
        ))}
        {nextPagePath && <Link to={nextPagePath} className="btn" state={{ isListView }}><IoIosArrowRoundForward/></Link>}
      </div>
    </PaginateWrapper>
  );
};

export default Paginate;