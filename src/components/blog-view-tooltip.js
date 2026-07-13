import React from "react";
import { Row } from "../reusecore/Layout";
import { TiThList } from "@react-icons/all-files/ti/TiThList";
import { BsGrid3X3GapFill } from "@react-icons/all-files/bs/BsGrid3X3GapFill";
import { CustomTooltip } from "@sistent/sistent";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
  float: left;
  margin: auto 1rem;
  .border {
    line-height: 18px;
  }
  a {
    padding: 5px;
    color: ${(props) => props.theme.keppletColor};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    background-color: ${(props) => props.theme.grey212121ToWhite};
    border: 1.5px solid ${(props) => props.theme.keppletColor};
    &:hover {
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.primaryLightColorTwo};
      cursor: pointer;
      border: 1.5px solid ${(props) => props.theme.primaryColor};
    }
  }
  .active {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryLightColorTwo};
    border: 1.5px solid ${(props) => props.theme.primaryColor};
  }
`;

const BlogViewToolTip = ({ isListView, setListView, setGridView }) => {
  return (
    <ToolTipWrapper>
      <Row className="border">
        <CustomTooltip title="Grid View" placement="top">
          <a onClick={setGridView} className={`${!isListView && "active"}`}>
            <BsGrid3X3GapFill size={22} />
          </a>
        </CustomTooltip>
        <CustomTooltip title="List View" placement="top">
          <a onClick={setListView} className={`${isListView && "active"}`}>
            <TiThList size={22} />
          </a>
        </CustomTooltip>
      </Row>
    </ToolTipWrapper>
  );
};

export default BlogViewToolTip;
