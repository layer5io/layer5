import React, { useState, useEffect } from "react";
import { Row } from "../reusecore/Layout";
import { TiThList } from "@react-icons/all-files/ti/TiThList";
import { BsGrid3X3GapFill } from "@react-icons/all-files/bs/BsGrid3X3GapFill";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const ToolTipWrapper = styled.div`
    @media screen and (max-width: 576px) {
        display: none;
    }
    float:left;
    margin: auto 1rem;

    .border {
        line-height: 18px;
    }

    a {
        padding: 5px;
        color: ${props => props.theme.keppletColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        background-color: ${props => props.theme.grey212121ToWhite};
        border: 1.5px solid ${props => props.theme.keppletColor};
        &:hover{
            background-color: ${props => props.theme.primaryColor};
            color: ${props => props.theme.primaryLightColorTwo};
            cursor: pointer;
            border: 1.5px solid ${props => props.theme.primaryColor};
        }             
    }
    .active {
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.primaryLightColorTwo};
        border: 1.5px solid ${props => props.theme.primaryColor};
    }
`;

const BlogViewToolTip = ({ isListView, setListView, setGridView }) => {

  const NoSsr = ({ children }) => {
    const [isMounted, setMount] = useState(false);

    useEffect(() => {
      setMount(true);
    }, []);

    return <>{isMounted ? children : null}</>;
  };

  return (
    <ToolTipWrapper>
      <Row className="border">
        <a
          data-tip="Grid View"
          data-for="grid-view"
          onClick={setGridView}
          className={`${!isListView && "active"}`}
        >
          <BsGrid3X3GapFill size={22} />
        </a>
        <NoSsr>
          <ReactTooltip
            id="grid-view"
            border
            className="grid-view"
            backgroundColor="black"
            place="top"
            effect="solid"
          />
        </NoSsr>
        <a
          data-tip="List View"
          data-for="list-view"
          onClick={setListView}
          className={`${isListView && "active"}`}
        >
          <TiThList size={22} />
        </a>
        <NoSsr>
          <ReactTooltip
            id="list-view"
            className="list-view"
            backgroundColor="black"
            place="top"
            type="dark"
            effect="solid"
          />
        </NoSsr>
      </Row>
    </ToolTipWrapper>

  );
};

export default BlogViewToolTip;
