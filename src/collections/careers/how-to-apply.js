import React from "react";
import {Link} from "gatsby";
import Button from "../../reusecore/NewButton";
import styled from "styled-components";
import job_icon from "./jobs_black.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const PositionApplyWrapper = styled.div`
text-align: center;
    .center{
        text-align: center;
    }
    
    .logo{
        vertical-align:bottom;
        width: 37px;
        display:inline;
        margin-left: 2px;
    }
    
    .apply-now {
        border-width: 2px;
        border-color: ${props => props.theme.secondaryColor};
        border-radius: 5px;
        border-style: solid;
        padding-top: 10px;
        width: 60%;
        margin: auto;
    }
    
    .apply{
        display:flex;
        justify-content: center;
        align-items: center; 

    }
    .back-button{
        padding: 8px;
        margin: 20px;
    }
`;

const PositionApply = ()=>{
    return(
        <PositionApplyWrapper>
            <div className="center apply-now">
                <div className="apply">
                    <img src={job_icon} alt="job-icon" className="logo"/>
                    <h5>How to Apply</h5>
                </div>
                <p className="center">Submit your resume and a short cover letter to:
                    <a href="mailto:jobs@layer5.io"> jobs@layer5.io</a>
                </p>
            </div>
            <Link to="/careers">
                <Button primary className="back-button"><AiOutlineArrowLeft/> Back to Open Positions</Button>
            </Link>
        </PositionApplyWrapper>
    );
};

export default PositionApply;
