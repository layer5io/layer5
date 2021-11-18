import styled from "styled-components";

export const ScenarioCardWrapper = styled.div`
    margin: 0px;
    .scenario-card-block {
        margin-bottom: 2rem;
        border: 1px solid ${props => props.theme.primaryLightColorTwo};
        padding: 1rem;
        cursor: pointer;
        margin: 1rem;
        &:hover {
            background-color: #222;
            transition: 0.2s ease-in all;
        }
        &:hover .open-close-scenario {
            color: ${props => props.theme.primaryLightColorTwo};
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
        color: rgb(255, 255, 255);
        margin-bottom: 0.35rem;
    }
    p.info {
        line-height: 1rem;
        color: lightgray;
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
        color: white;
		border: none;
		
		font-size: 1rem;
		cursor: pointer;
		transition: 0.2s ease-in all;
	}

	.text-contents {
		display: none;
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
                color: ${props => props.theme.primaryLightColorTwo};
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
