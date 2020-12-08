import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

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
            margin-left: 0px;
            font-size: 32px;
            transition: all 0.3s linear;
        } 
        &:hover{
                color: ${props => props.theme.secondaryColor};
                svg{
                margin-left: 3px;
                transform: scale(1.2);
            }
        }
    }
`;

const Pager = ({ pageContext, isListView }) => {
    console.log(pageContext);
    const { previousPagePath, nextPagePath } = pageContext;
    return (
        <PagerWrapper>
            <div>
                {previousPagePath && (
                    <Link to={previousPagePath} state={{ isListView }}>
                        <h4><IoIosArrowRoundBack />Newer Posts</h4>
                    </Link>
                )}
            </div>
            <div className="old-post">
                {nextPagePath && (
                    <Link to={nextPagePath} state={{ isListView }}>
                        <h4>Older Posts<IoIosArrowRoundForward/></h4>
                    </Link>
                )}
            </div>
        </PagerWrapper>
    );
};

export default Pager;
