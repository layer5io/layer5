import React, { useEffect, useState } from "react";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import { HiOutlineChevronRight } from "@react-icons/all-files/hi/HiOutlineChevronRight";
import { content } from "./content";
import Button from "../../reusecore/Button";
import PaginationWrapper from "./pagination.style";
import { colors } from "@mui/material";

const SistentPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const index = content.findIndex((x) => x.link === path);
    setCurrentPage(index);
  }, []);

  return (
    <PaginationWrapper>
      {currentPage > 0 ? (
        <Button className='prev-btn' secondary url={content[currentPage - 1]?.link}>
          <div className="btn-content">
          <div className="previous-text">Previous</div>
         <div className="where-to-go-prev"><HiOutlineChevronLeft className="left-icon" style={{color: "white"}}/>{content[currentPage - 1]?.text}</div></div>
        </Button>
      ) : null}

      {currentPage < content.length - 1 ? (
        <Button className='next-btn' primary url={content[currentPage + 1]?.link}>
          <div className="btn-content">
          <div className="next-text">Next</div>
         <div className="where-to-go">{content[currentPage + 1]?.text}<HiOutlineChevronRight className="right-icon" style={{color: "black"}}/></div></div>
        </Button>
      ) : null}
    </PaginationWrapper>
  );
};

export default SistentPagination;
