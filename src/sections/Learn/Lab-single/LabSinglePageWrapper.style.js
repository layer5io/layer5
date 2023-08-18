import styled from "styled-components";

const LabSinglePageWrapper = styled.div`
    margin-bottom: 4rem;
	display: block;

	.backBtn {
		display: flex;
		justify-content: flex-start;
		margin-top: 5rem;
		margin-left: 5rem;
		font-weight: 600;
		a {
			display: flex;
		    color: ${props => props.theme.primaryColor};
		    &:hover{
		        color: ${props => props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
			}
			svg {
				font-size: 1.75rem;
			}
		}
		
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
	@media screen and (max-width: 992px) {
		.backBtn {
			display: none;
		}
	}

	@media only screen and (max-width: 25rem) {
		.backBtn {
			left: 0rem;
		}
	}
	.cardContent {
		margin: 0 5rem;
	}
	#katacoda-scenario {
		min-height: 25rem;
	}
`;

export default LabSinglePageWrapper;
