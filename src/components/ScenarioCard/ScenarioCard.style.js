import styled from "styled-components";

export const ScenarioCardWrapper = styled.div`
    margin: 0px;
    .scenario-card-block {
        margin-bottom: 2rem;
        background-color: ${props => props.theme.blackToWhite};
        border: 1px solid ${props => props.theme.primaryLightColorTwo};
        padding: 1rem;
        cursor: pointer;
        margin: 1rem;
        &:hover {
            background-color: ${props => props.theme.backgroundColor};
            transition: 0.2s ease-in all;
        }
        &:hover .open-close-scenario {
            color: ${props => props.theme.secondaryColor};
        }
    }
    .scenario-cover {
        overflow: hidden;
        border: 1px solid transparent;
        height: 10rem;
    }
    .scenario-image {
        margin: auto;
        height: 100%;
        width: 100%;
        filter: ${props => props.theme.filter};
        transition: 0.2s ease-in all;
    }
    .scenario-description {
        display: flex;
        /* border: 3px red solid; */
        flex-direction: column;
        justify-content: center;
        padding: 0rem 0;
        color: ${props => props.theme.primaryLightColorTwo};
        height: 100%;
    }
    h4.title {
        line-height: 1.4rem;
        color: ${props => props.theme.whiteToBlack};
        margin-bottom: 0.35rem;
    }
    p.info {
        line-height: 1rem;
        color: ${props => props.theme.greyEEEEEEToBlack};
        margin-bottom: auto;
        font-weight: 300;
    }

	.toggle-and-full-screen-wrapper {
		display: flex;
		justify-content: space-between;
        color: ${props => props.theme.primaryLightColorTwo};

        margin-top: 1rem;

        justify-content: flex-end;
		align-self: flex-end;
	}

	.open-close-scenario {
		display: flex;
		background: transparent;
        color: ${props => props.theme.whiteToBlack};
		border: none;

		font-size: 1rem;
		cursor: pointer;
		transition: 0.2s ease-in all;
	}

	.text-contents {
		display: none;
	}

    .sub-content {
        display:flex;
        color: ${props => props.theme.whiteToBlack};
        .ak {
            color: ${props => props.theme.linkColor};
            &:hover {
                color: white;
            }
        }
        justify-content:center;
        margin-top:4rem;
        width:100%;
    }


	.active {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.5rem;
        overflow: hidden;
	}

    .full-screen {
        /* text-align:right; */
        position: relative;
        float: right;

        /* display: flex; */
        /* align-self: flex-end; */
        /* right: 1rem; */
        /* top: -1rem; */
        a {
            color: ${props => props.theme.white};
            &:hover {
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .open-animate {
        height: 640px;
        transition: height 0.2s ease-in;
    }
    .close-animate {
        height: 0px;
        transition: height 0.2s ease-in;
    }
`;
