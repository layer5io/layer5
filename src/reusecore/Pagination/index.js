import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import PaginationWrapper from "./pagination.style";

const Pagination = ({pageContext}) => {
    const { previousPagePath, nextPagePath } = pageContext;
    return (
        <PaginationWrapper>
            {previousPagePath && 
                <Link to={previousPagePath}>
                    <button>
                        <IoIosArrowRoundBack />Previous
                    </button>
                </Link>
            }
            {nextPagePath &&
                <Link to={nextPagePath}>
                    <button>
                        <IoIosArrowRoundForward />Next
                    </button>
                </Link>
            }
        </PaginationWrapper>
    );
};

export default Pagination;
