import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";


const JoinCommunityWrapper = styled.div`
    .join-community{
        width: 50rem;
        max-width: 100%;
        height: 25rem;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
        background-size: cover;
        background-position: center;
        margin: auto;
        margin-bottom: 5rem;
    }
    .join-community_text-and_button{
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            margin-top: 1rem;
            color: white;
        }
        p{
            margin: auto;
            margin-top: 1rem;
            max-width: 18rem;
            color: white;
        }
        button{
            margin-top: 1.5rem;
        }
    }
`;

const JoinCommunity = ({image}) => {

    return(
        <JoinCommunityWrapper image={image}>
            <div className="join-community">
                <div className="join-community_text-and_button">
                    <h1>Join the community!</h1>
                    <p>Checkout the Layer5 community and join us on Slack</p>
                    <Button secondary title="Join Our Talented Community" url="http://slack.layer5.io/"/>
                </div>
            </div>
        </JoinCommunityWrapper>
    );
};

export default JoinCommunity;
