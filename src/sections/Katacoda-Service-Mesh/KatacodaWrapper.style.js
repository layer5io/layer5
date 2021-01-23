import styled from "styled-components";

export const KatacodaWrapper = styled.div`
    h1 {
        text-align: center;
        width: 70rem;
        max-width: 100%;
        margin: auto;
    }
    .join-community {
        height: 25rem;
        background: #fafafa;
        margin: auto;
    }
    .join-community_text-and_button {
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            margin-top: 1rem;
        }
        p{
            margin: auto;
            margin-top: 1rem;
        }
        button{
            margin-top: 1.5rem;
        }
    }
	.course-tabs {
		display: flex;
	}
	.course-tab-list {
		padding: 0 0.5rem;
		margin: 0;
	}
	.course-tab {
		margin-right: -0.5rem;
		writing-mode: vertical-lr;
		transform: rotate(180deg);
		transform-origin: center center;
		list-style-type: none;
		background: ${props => props.theme.menuHoverColor};
		cursor: pointer;
	}
	.title {
		padding: 0.5rem;
	}
	.content.react-tabs__tab-panel--selected {
		background-color: black;
		padding: 2rem;
	}
	.react-tabs__tab--selected {
		background: rgb(240, 192, 55);
		border-radius: 0;
	}
`;
