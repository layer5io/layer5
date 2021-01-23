import styled from "styled-components";

const LabSinglePageWrapper = styled.div`
    margin-bottom: 4rem;
	display: block;

	.backBtn {
	    z-index: 2;
		display: flex;
		justify-content: center;
		position: absolute;
		top: 7rem;
		left: 3.75rem;
		font-weight: 600;
		a{
			display: flex;
		    color: ${props=> props.theme.primaryColor};
		    &:hover{
		        color: ${props=> props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
			}
			svg {
				font-size: 1.75rem;
			}
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
	#katacoda-scenario {
		min-height: 40rem;
	}
`;

export default LabSinglePageWrapper;
