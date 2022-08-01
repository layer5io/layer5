import styled from "styled-components";

export const LabsWrapper = styled.div`
    
	.page-header {
		margin: 5rem auto;
	}
	.course-tabs {
		display: flex;
	}
	.course-tab-list {
		padding: 0rem;
		text-align: center;
		min-width: 5.05rem;
		max-width: 5.05rem;
	}
	.course-tab {
		padding: 1.7rem;
		text-align: center;
		display: flex;
		margin: auto;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		border-top-left-radius: 0px;
		writing-mode: vertical-lr;
		transform: rotate(180deg);
		transform-origin: center center;
		list-style-type: none;
		background: ${props => props.theme.secondaryColor};
		cursor: pointer;
		
		&:hover {
            background-color: ${props => props.theme.highlightLightColor};
            transition: 0.05s ease-in all;
        }
	}
	
	.title {
		color: #fff;
		font-weight: 600;
		.menu_title {
			color: #fff;
			font-weight: 600;
		}
	}
	.content.react-tabs__tab-panel--selected {
		background-color: black;
	}
	.react-tabs__tab--selected {
		background: rgb(240, 192, 55);
		-webkit-box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.25);
		-moz-box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.25);
		box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.25);
	}
	.row-wrapper {
		margin-left: 0px;
	}
	.join-community {
        margin: 5rem 0rem;
    }
    .join-community_text-and_button {
		margin: 0 4rem; 
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
`;
