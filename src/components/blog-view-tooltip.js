import React from "react"
import { Row } from "../reusecore/Layout"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import ReactTooltip from "react-tooltip"
import styled from "styled-components"

export const ToolTipWrapper = styled.div`
      @media screen and (max-width: 576px) {
            display: none;
      }
      float:right;
      margin-right: 10px;
      margin-left: 10px;
      .hr {
        margin-left: 2px;
        margin-right: 2px;
        border: 1px solid gray;
        height: 28px;
      }
      .border {
        border: 2px solid gray;
        padding: 2px;
      }
      a {
        padding: 2px;
        color: #3C494F;    
        &:hover{
            color: #00B39F;
            //  ${props =>
              props.theme.secondaryColor
                ? props.theme.secondaryColor
                : "#00B39F"};
            cursor: pointer;
        }             
      }
      .active {
        color: #00B39F;
        //  ${props =>
          props.theme.secondaryColor ? props.theme.secondaryColor : "#00B39F"};
      }
`

const BlogViewToolTip = ({ isListView, setListView, setGridView }) => {
  return (
    <ToolTipWrapper>
      <Row className="border">
        <a
          data-tip="Grid View"
          data-for="grid-view"
          onClick={setGridView}
          className={`${isListView ? "" : "active"}`}
        >
          <BsFillGrid3X3GapFill size={18} />
        </a>
        <ReactTooltip
          id="grid-view"
          border
          className="grid-view"
          backgroundColor="black"
          place="top"
          effect="solid"
        />
        <div className="hr" />
        <a
          data-tip="List View"
          data-for="list-view"
          onClick={setListView}
          className={`${isListView ? "active" : ""}`}
        >
          <AiOutlineUnorderedList size={18} />
        </a>
        <ReactTooltip
          id="list-view"
          className="list-view"
          backgroundColor="black"
          place="top"
          type="dark"
          effect="solid"
        />
      </Row>
    </ToolTipWrapper>
  )
}

export default BlogViewToolTip
