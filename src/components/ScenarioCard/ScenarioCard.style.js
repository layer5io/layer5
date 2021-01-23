import styled from "styled-components";

export const ScenarioCardWrapper = styled.div`
    .scenario-card-block {
        margin-bottom: 2rem;
        border: 1px solid rgb(0, 67, 59);
        padding: 0.5rem;
        cursor: pointer;
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
        flex-direction: column;
        justify-content: center;
        padding: 1rem 0;
        height: 100%;
    }
    h4 {
        line-height: 1.5rem;
        color: rgb(207, 207, 207);
        margin-bottom: 0.5rem;
    }
    p {
        line-height: 1rem;
        color: rgb(239, 239, 239);
        margin-bottom: auto;
    }

	.toggle-and-full-screen-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.open-close-scenario {
		display: flex;
		background: transparent;
        color: white;
		border: none;
		justify-content: center;
		align-items: center;
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
	}

    .full-screen {
        a {
            color: ${props => props.theme.white};
            &:hover {
                color: ${props => props.theme.primaryLightColorTwo};
            }
        }
    }

`;
